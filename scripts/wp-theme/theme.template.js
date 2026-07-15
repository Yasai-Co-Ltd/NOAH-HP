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
   * Forms: サーバー送信(お問い合わせ / 採用エントリー)
   *
   * data-noah-form を持つフォームを、WordPress REST API
   * (window.NOAH_CONTACT.endpoint) へ非同期 POST する。送信先アドレスは
   * サーバー側 (inc/contact.php) が決定し、クライアントには持たせない。
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

  function ensureStatusEl(form) {
    var el = form.querySelector(".noah-form-status");
    if (!el) {
      el = document.createElement("p");
      el.className = "noah-form-status";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      form.appendChild(el);
    }
    return el;
  }

  function setStatus(el, message, kind) {
    el.textContent = message;
    el.className = "noah-form-status is-visible is-" + kind;
  }

  Array.prototype.forEach.call(document.querySelectorAll("form[data-noah-form]"), function (form) {
    form.removeAttribute("novalidate");

    REQUIRED_FIELDS.forEach(function (name) {
      var field = form.elements[name];
      if (field && typeof field.setAttribute === "function") field.required = true;
    });
    var agreeField = form.elements.agree;
    if (agreeField && typeof agreeField.setAttribute === "function") agreeField.required = true;

    var submitBtn = form.querySelector('button[type="submit"], [type="submit"]');
    var status = ensureStatusEl(form);
    var sending = false;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (sending) return;

      // ハニーポット: 入力があればボットとみなし黙って無視する。
      var honeypot = form.elements.fax;
      if (honeypot && honeypot.value) return;

      if (!form.reportValidity()) return;

      var config = window.NOAH_CONTACT;
      if (!config || !config.endpoint) {
        setStatus(status, "送信先が設定されていません。時間をおいて再度お試しください。", "error");
        return;
      }

      // ラベル付きフィールド一覧 (本文組み立て用) と主要項目を収集する。
      var fields = [];
      Array.prototype.forEach.call(form.elements, function (el) {
        if (!el.name || el.name === "fax") return;
        if (el.type === "submit" || el.type === "button") return;
        if (el.type === "checkbox") return;
        fields.push({ label: fieldLabel(form, el), value: (el.value || "").trim() });
      });

      var subject = form.getAttribute("data-noah-subject") || "お問い合わせ";
      var typeField = form.elements.type;
      if (typeField && typeField.value) subject += "（" + typeField.value + "）";

      var payload = {
        form: form.getAttribute("data-noah-form") || "contact",
        subject: subject,
        name: form.elements.name ? form.elements.name.value : "",
        email: form.elements.email ? form.elements.email.value : "",
        agree: agreeField ? !!agreeField.checked : true,
        fax: honeypot ? honeypot.value : "",
        fields: fields,
      };

      sending = true;
      if (submitBtn) submitBtn.disabled = true;
      setStatus(status, "送信しています…", "pending");

      fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-WP-Nonce": config.nonce },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () {
              return {};
            })
            .then(function (data) {
              return { ok: res.ok, data: data };
            });
        })
        .then(function (r) {
          if (r.ok && r.data && r.data.success) {
            form.reset();
            setStatus(
              status,
              r.data.message || "送信しました。担当者より折り返しご連絡いたします。",
              "success"
            );
          } else {
            setStatus(
              status,
              (r.data && r.data.message) || "送信に失敗しました。時間をおいて再度お試しください。",
              "error"
            );
          }
        })
        .catch(function () {
          setStatus(status, "通信エラーが発生しました。時間をおいて再度お試しください。", "error");
        })
        .then(function () {
          sending = false;
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  });
})();
