/**
 * NOAH Corporate WordPress theme runtime.
 *
 * Next.js ランタイムの代替として、静的エクスポート済み HTML に対して
 * ヘッダー(ハンバーガー/メガメニュー)・Reveal アニメーション・CountUp・
 * mailto フォーム送信を素の JavaScript で提供する。
 *
 * CLS のプレースホルダは scripts/build-wp-theme.mjs が CSS Modules の
 * ハッシュ付きクラス名マップに置換する。
 */
(function () {
  "use strict";

  var CLS = __NOAH_CLASSMAP__;
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---------------------------------------------------------------- *
   * Header: ハンバーガーメニュー
   * ---------------------------------------------------------------- */
  var header = document.querySelector("." + CLS.Header_header);
  var toggle = header ? header.querySelector("." + CLS.Header_toggle) : null;

  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle(CLS.Header_navOpen);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });
  }

  /* ---------------------------------------------------------------- *
   * Header: メガメニュー
   * ---------------------------------------------------------------- */
  var CLOSE_DELAY_MS = 180;
  var mega = header ? header.querySelector("." + CLS.Header_mega) : null;
  var panels = mega ? Array.prototype.slice.call(mega.querySelectorAll("[data-noah-mega]")) : [];
  var wraps = header
    ? Array.prototype.slice.call(header.querySelectorAll("." + CLS.Header_navItemWrap))
    : [];
  var closeTimer = null;

  function cancelClose() {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  }

  function scheduleClose() {
    cancelClose();
    closeTimer = setTimeout(function () {
      setActiveMega(null);
    }, CLOSE_DELAY_MS);
  }

  function linkPanelKey(link) {
    var path = new URL(link.getAttribute("href"), window.location.href).pathname;
    if (path.slice(-1) !== "/") path += "/";
    for (var i = 0; i < panels.length; i++) {
      var key = panels[i].getAttribute("data-noah-mega");
      if (path.slice(-key.length) === key) return key;
    }
    return null;
  }

  function setActiveMega(key) {
    cancelClose();
    if (!mega) return;
    var anyOpen = false;
    panels.forEach(function (panel) {
      var on = key !== null && panel.getAttribute("data-noah-mega") === key;
      // hidden 属性は CSS の display:grid に負けるため、インライン display も切り替える。
      panel.hidden = !on;
      panel.style.display = on ? "" : "none";
      if (on) anyOpen = true;
    });
    if (CLS.Header_megaActive) header.classList.toggle(CLS.Header_megaActive, anyOpen);
    mega.classList.toggle(CLS.Header_megaOpen, anyOpen);
    mega.setAttribute("aria-hidden", anyOpen ? "false" : "true");
    wraps.forEach(function (wrap) {
      var link = wrap.querySelector("a[aria-haspopup]");
      if (!link) return;
      var active = anyOpen && linkPanelKey(link) === key;
      link.classList.toggle(CLS.Header_navItemActive, active);
      link.setAttribute("aria-expanded", active ? "true" : "false");
    });
  }

  if (mega && panels.length) {
    wraps.forEach(function (wrap) {
      var link = wrap.querySelector("a");
      if (!link) return;
      var hasMega = link.hasAttribute("aria-haspopup");

      wrap.addEventListener("mouseenter", function () {
        if (hasMega) setActiveMega(linkPanelKey(link));
        else setActiveMega(null);
      });
      wrap.addEventListener("mouseleave", function () {
        if (hasMega) scheduleClose();
      });
      wrap.addEventListener("focusin", function () {
        if (hasMega) setActiveMega(linkPanelKey(link));
        else setActiveMega(null);
      });
      wrap.addEventListener("focusout", function () {
        if (hasMega) scheduleClose();
      });
    });

    mega.addEventListener("mouseenter", cancelClose);
    mega.addEventListener("mouseleave", scheduleClose);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setActiveMega(null);
    });
  }

  /* ---------------------------------------------------------------- *
   * Reveal: スクロール連動の出現アニメーション
   * ---------------------------------------------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll("." + CLS.Reveal_root));

  function showAllReveals() {
    reveals.forEach(function (el) {
      el.classList.add(CLS.Reveal_visible);
    });
  }

  if (reveals.length) {
    if (prefersReduced || !hasIO) {
      showAllReveals();
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add(CLS.Reveal_visible);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
      );
      reveals.forEach(function (el) {
        revealObserver.observe(el);
      });
    }
  }

  /* ---------------------------------------------------------------- *
   * CountUp: 数値カウントアップ
   * ---------------------------------------------------------------- */
  var COUNTUP_DURATION_MS = 1400;
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-countup]"));

  function formatNumber(value) {
    return value.toLocaleString("ja-JP");
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  if (counters.length && !prefersReduced && hasIO) {
    counters.forEach(function (el) {
      el.textContent = "0";
    });
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          countObserver.unobserve(entry.target);
          var end = parseInt(entry.target.getAttribute("data-countup"), 10) || 0;
          var start = performance.now();
          var step = function (now) {
            var progress = Math.min((now - start) / COUNTUP_DURATION_MS, 1);
            entry.target.textContent = formatNumber(Math.round(easeOutCubic(progress) * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) {
      countObserver.observe(el);
    });
  }

  /* ---------------------------------------------------------------- *
   * Forms: mailto 送信(お問い合わせ / 採用エントリー)
   *
   * 元実装(ContactForm / RecruitForm)と同じく、入力内容を整形して
   * 窓口宛メールを起動する暫定実装。本送信が必要になったら
   * フォームプラグイン(Contact Form 7 等)へ置き換えること。
   * ---------------------------------------------------------------- */
  var REQUIRED_FIELDS = ["type", "name", "email", "message"];

  function fieldLabel(form, el) {
    var text = null;
    if (el.id) {
      var label = form.querySelector('label[for="' + el.id + '"]');
      if (label) text = label.textContent;
    }
    if (!text) {
      var parent = el.closest("label");
      if (parent) text = parent.textContent;
    }
    if (!text) return el.name;
    return text.replace(/\s+/g, " ").replace(/必須/g, "").trim();
  }

  Array.prototype.forEach.call(document.querySelectorAll("form[data-noah-mailto]"), function (form) {
    form.removeAttribute("novalidate");

    REQUIRED_FIELDS.forEach(function (name) {
      var field = form.elements[name];
      if (field && typeof field.setAttribute === "function") field.required = true;
    });
    var agree = form.elements.agree;
    if (agree && typeof agree.setAttribute === "function") agree.required = true;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // ハニーポット: 入力があればボットとみなし黙って無視する。
      var honeypot = form.elements.fax;
      if (honeypot && honeypot.value) return;

      if (!form.reportValidity()) return;

      var lines = [];
      Array.prototype.forEach.call(form.elements, function (el) {
        if (!el.name || el.name === "fax") return;
        if (el.type === "submit" || el.type === "button" || el.type === "checkbox") return;
        lines.push(fieldLabel(form, el) + ": " + (el.value.trim() || "（未入力）"));
      });

      var subject = form.getAttribute("data-noah-subject") || "お問い合わせ";
      var typeField = form.elements.type;
      if (typeField && typeField.value) subject += "（" + typeField.value + "）";

      window.location.href =
        "mailto:" +
        form.getAttribute("data-noah-mailto") +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));
    });
  });
})();
