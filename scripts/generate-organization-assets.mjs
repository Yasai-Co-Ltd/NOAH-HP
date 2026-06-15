import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDir = path.join(root, "public/assets/about/organization");
const logoPath = path.join(root, "public/assets/noah_logo-mark.png");

await fs.mkdir(outputDir, { recursive: true });
const logo = await fs.readFile(logoPath);
const logoData = `data:image/png;base64,${logo.toString("base64")}`;

const fontFamily =
  "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif";

const businessUnits = [
  { number: "01", title: "脱炭素事業部", accent: "#1C8FD1" },
  { number: "02", title: "水素エネルギー事業部", accent: "#18A7AA" },
  { number: "03", title: "発電事業部", accent: "#2874C6" },
  { number: "04", title: "新エネルギー自動車事業部", accent: "#2A9D78" },
  { number: "05", title: "ハンドリング設備事業部", accent: "#D39B35" },
  { number: "06", title: "IOTソリューション事業部", accent: "#6473C7" },
];

const orgCards = businessUnits
  .map((unit, index) => {
    const column = index % 3;
    const row = Math.floor(index / 3);
    const x = 95 + column * 550;
    const y = 535 + row * 255;
    return `
      <g filter="url(#cardShadow)">
        <rect x="${x}" y="${y}" width="510" height="190" rx="6" fill="#FFFFFF"
          stroke="#D5E3EF" stroke-width="2"/>
        <rect x="${x}" y="${y}" width="8" height="190" rx="4" fill="${unit.accent}"/>
        <circle cx="${x + 62}" cy="${y + 57}" r="27" fill="${unit.accent}" opacity="0.12"/>
        <text x="${x + 62}" y="${y + 65}" text-anchor="middle" fill="${unit.accent}"
          font-family="${fontFamily}" font-size="21" font-weight="700">${unit.number}</text>
        <text x="${x + 105}" y="${y + 66}" fill="#0A2B5B"
          font-family="${fontFamily}" font-size="${unit.title.length > 13 ? 30 : 35}" font-weight="700">${unit.title}</text>
        <line x1="${x + 105}" y1="${y + 92}" x2="${x + 448}" y2="${y + 92}"
          stroke="#DDE8F1" stroke-width="2"/>
        <text x="${x + 105}" y="${y + 127}" fill="#557089"
          font-family="${fontFamily}" font-size="16" font-weight="600">BUSINESS DIVISION</text>
        <text x="${x + 105}" y="${y + 157}" fill="#8195A8"
          font-family="${fontFamily}" font-size="15">NOAH CONSTRUCTION CO., LTD.</text>
      </g>`;
  })
  .join("");

const organizationSvg = `
<svg width="1800" height="1120" viewBox="0 0 1800 1120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="headerGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#052766"/>
      <stop offset="1" stop-color="#0B4D91"/>
    </linearGradient>
    <linearGradient id="pageGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F7FBFF"/>
      <stop offset="1" stop-color="#EEF6FB"/>
    </linearGradient>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#0C459E" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
    <filter id="cardShadow" x="-20%" y="-30%" width="140%" height="170%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#052766" flood-opacity="0.10"/>
    </filter>
    <filter id="hubShadow" x="-20%" y="-30%" width="140%" height="170%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#052766" flood-opacity="0.22"/>
    </filter>
  </defs>

  <rect width="1800" height="1120" fill="url(#pageGradient)"/>
  <rect width="1800" height="1120" fill="url(#grid)"/>
  <circle cx="1660" cy="100" r="260" fill="#53C1E5" opacity="0.055"/>
  <circle cx="80" cy="1030" r="310" fill="#0C459E" opacity="0.035"/>

  <text x="90" y="90" fill="#1F95C7" font-family="${fontFamily}" font-size="18" font-weight="700">
    BUSINESS ORGANIZATION
  </text>
  <text x="90" y="145" fill="#052766" font-family="${fontFamily}" font-size="48" font-weight="700">
    事業組織
  </text>
  <line x1="90" y1="177" x2="1710" y2="177" stroke="#C8DCEA" stroke-width="2"/>

  <g filter="url(#hubShadow)">
    <rect x="360" y="225" width="1080" height="190" rx="6" fill="url(#headerGradient)"/>
    <rect x="405" y="255" width="130" height="130" rx="6" fill="#FFFFFF" fill-opacity="0.96"/>
    <image href="${logoData}" x="417" y="267" width="106" height="106" preserveAspectRatio="xMidYMid meet"/>
    <line x1="565" y1="260" x2="565" y2="380" stroke="#53C1E5" stroke-opacity="0.46" stroke-width="2"/>
    <text x="615" y="286" fill="#70D3EE" font-family="${fontFamily}" font-size="18" font-weight="700">
      NOAH CONSTRUCTION CO., LTD.
    </text>
    <text x="615" y="350" fill="#FFFFFF" font-family="${fontFamily}" font-size="49" font-weight="700">
      諾亜建設株式会社
    </text>
    <text x="1300" y="321" text-anchor="end" fill="#FFFFFF" fill-opacity="0.62"
      font-family="${fontFamily}" font-size="17">6 BUSINESS DIVISIONS</text>
  </g>

  <line x1="900" y1="415" x2="900" y2="470" stroke="#53C1E5" stroke-width="4"/>
  <line x1="350" y1="470" x2="1450" y2="470" stroke="#53C1E5" stroke-width="4"/>
  <line x1="350" y1="470" x2="350" y2="790" stroke="#53C1E5" stroke-width="4"/>
  <line x1="900" y1="470" x2="900" y2="790" stroke="#53C1E5" stroke-width="4"/>
  <line x1="1450" y1="470" x2="1450" y2="790" stroke="#53C1E5" stroke-width="4"/>

  ${orgCards}

  <text x="1710" y="1070" text-anchor="end" fill="#8195A8"
    font-family="${fontFamily}" font-size="14">NOAH BUSINESS STRUCTURE</text>
</svg>`;

const dealerSvg = `
<svg width="1800" height="680" viewBox="0 0 1800 680" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dealerPage" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F8FCFF"/>
      <stop offset="1" stop-color="#EDF6FB"/>
    </linearGradient>
    <linearGradient id="dealerCard" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#052766"/>
      <stop offset="1" stop-color="#0B4D91"/>
    </linearGradient>
    <pattern id="dealerGrid" width="52" height="52" patternUnits="userSpaceOnUse">
      <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#0C459E" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
    <filter id="dealerShadow" x="-20%" y="-30%" width="140%" height="170%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#052766" flood-opacity="0.13"/>
    </filter>
  </defs>

  <rect width="1800" height="680" fill="url(#dealerPage)"/>
  <rect width="1800" height="680" fill="url(#dealerGrid)"/>
  <circle cx="1710" cy="-40" r="310" fill="#53C1E5" opacity="0.07"/>

  <text x="90" y="84" fill="#1F95C7" font-family="${fontFamily}" font-size="18" font-weight="700">
    AUTHORIZED SALES NETWORK
  </text>
  <text x="90" y="140" fill="#052766" font-family="${fontFamily}" font-size="48" font-weight="700">
    契約販売店
  </text>
  <line x1="90" y1="174" x2="1710" y2="174" stroke="#C8DCEA" stroke-width="2"/>

  <g filter="url(#dealerShadow)">
    <rect x="90" y="250" width="650" height="270" rx="6" fill="url(#dealerCard)"/>
    <rect x="130" y="290" width="104" height="104" rx="6" fill="#FFFFFF" fill-opacity="0.96"/>
    <image href="${logoData}" x="140" y="300" width="84" height="84" preserveAspectRatio="xMidYMid meet"/>
    <text x="275" y="309" fill="#70D3EE" font-family="${fontFamily}" font-size="16" font-weight="700">
      NOAH CONSTRUCTION
    </text>
    <text x="275" y="370" fill="#FFFFFF" font-family="${fontFamily}" font-size="45" font-weight="700">
      名古屋支社
    </text>
    <text x="275" y="416" fill="#FFFFFF" fill-opacity="0.74" font-family="${fontFamily}" font-size="25" font-weight="600">
      コンテナハウス事業部
    </text>
    <rect x="275" y="451" width="210" height="36" rx="18" fill="#53C1E5" fill-opacity="0.16"/>
    <text x="380" y="475" text-anchor="middle" fill="#70D3EE" font-family="${fontFamily}" font-size="14" font-weight="700">
      SALES NETWORK HUB
    </text>
  </g>

  <line x1="740" y1="385" x2="1020" y2="385" stroke="#53C1E5" stroke-width="4"/>
  <circle cx="880" cy="385" r="44" fill="#FFFFFF" stroke="#53C1E5" stroke-width="4"/>
  <path d="M856 384h48M889 369l15 15-15 15" fill="none" stroke="#0B4D91" stroke-width="5"
    stroke-linecap="round" stroke-linejoin="round"/>
  <text x="880" y="456" text-anchor="middle" fill="#557089" font-family="${fontFamily}" font-size="14" font-weight="700">
    CONTRACTED DEALER
  </text>

  <g filter="url(#dealerShadow)">
    <rect x="1020" y="250" width="690" height="270" rx="6" fill="#FFFFFF" stroke="#C9DDEB" stroke-width="2"/>
    <rect x="1020" y="250" width="10" height="270" rx="5" fill="#18A7AA"/>
    <circle cx="1105" cy="338" r="48" fill="#18A7AA" fill-opacity="0.12"/>
    <path d="M1082 338h46M1105 315v46" stroke="#18A7AA" stroke-width="5" stroke-linecap="round"/>
    <text x="1185" y="324" fill="#18A7AA" font-family="${fontFamily}" font-size="16" font-weight="700">
      AUTHORIZED SALES PARTNER
    </text>
    <text x="1185" y="390" fill="#052766" font-family="${fontFamily}" font-size="49" font-weight="700">
      ティーエス株式会社
    </text>
    <line x1="1185" y1="425" x2="1640" y2="425" stroke="#D7E6EF" stroke-width="2"/>
    <text x="1185" y="466" fill="#657D91" font-family="${fontFamily}" font-size="17">
      契約販売店ネットワーク
    </text>
  </g>

  <text x="1710" y="625" text-anchor="end" fill="#8195A8"
    font-family="${fontFamily}" font-size="14">NOAH AUTHORIZED SALES NETWORK</text>
</svg>`;

await Promise.all([
  sharp(Buffer.from(organizationSvg))
    .png({ compressionLevel: 9 })
    .toFile(path.join(outputDir, "business-organization-modern.png")),
  sharp(Buffer.from(dealerSvg))
    .png({ compressionLevel: 9 })
    .toFile(path.join(outputDir, "authorized-dealers-modern.png")),
]);

console.log(outputDir);
