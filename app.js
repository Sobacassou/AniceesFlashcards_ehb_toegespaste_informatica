/* =====================================================
   1. JE KAARTEN
   v       = vraag (voorkant)
   a       = antwoord (achterkant)
   o       = (optioneel) onderwerp / onderhoofdstuk, staat bovenaan de kaart
   uitleg  = (optioneel) kleine extra uitleg onder het antwoord
   Zonder "o" zie je gewoon de naam van het hoofdstuk.
   ===================================================== */
/* Als een kaartenbestand niet geladen is, crasht de app niet maar toont ze welk bestand ontbreekt */
const ontbrekendeBestanden = [];
function ontbreekt(bestand) {
  ontbrekendeBestanden.push(bestand);
  return [{ v: "Het bestand " + bestand + " is niet gevonden.", a: "Zet " + bestand + " in dezelfde map als index.html (exact deze naam), en controleer of index.html er een <script>-regel voor heeft. Druk daarna op Ctrl+F5.", o: "Ontbrekend bestand" }];
}

const vakken = {
  "Web Essentials": {
    "1 – Introductie & HTML-basis": (typeof kaarten_WEB_les1 !== "undefined" ? kaarten_WEB_les1 : ontbreekt("flashcards_WEBles1_htmlbasis.js")),
    "2 – HTML media, tabellen & formulieren": (typeof kaarten_WEB_les2 !== "undefined" ? kaarten_WEB_les2 : ontbreekt("flashcards_WEBles2_htmlmedia.js")),
    "3 – CSS-basis, kleuren & typografie": (typeof kaarten_WEB_les3 !== "undefined" ? kaarten_WEB_les3 : ontbreekt("flashcards_WEBles3_cssbasis.js")),
    "4 – CSS media, tabellen, formulieren & box model": (typeof kaarten_WEB_les4 !== "undefined" ? kaarten_WEB_les4 : ontbreekt("flashcards_WEBles4_boxmodel.js")),
    "5 – CSS layout: float, flexbox & positioning": (typeof kaarten_WEB_les5 !== "undefined" ? kaarten_WEB_les5 : ontbreekt("flashcards_WEBles5_layout.js")),
  },
  "IT Essentials": {
    // ===== Deel I: Getalrepresentaties en schakelingen =====
    "I.1 – Talstelsels en codesystemen": (typeof kaarten_IT_deel1_les1 !== "undefined" ? kaarten_IT_deel1_les1 : ontbreekt("flashcards_ITdeel1les1_talstelsels.js")),
    "I.2 – Logische poorten en schakelingen": (typeof kaarten_IT_deel1_les2 !== "undefined" ? kaarten_IT_deel1_les2 : ontbreekt("flashcards_ITdeel1les2_logischepoorten.js")),
    "I.3 – Rekenschakelingen": (typeof kaarten_IT_deel1_les3 !== "undefined" ? kaarten_IT_deel1_les3 : ontbreekt("flashcards_ITdeel1les3_rekenschakelingen.js")),
    // ===== Deel II: Hardwarecomponenten =====
    // kaarten staan in flashcards_ITdeel2les1_computerarchitectuur.js
    "II.1 – Computerarchitectuur": (typeof kaarten_IT_deel2_les1 !== "undefined" ? kaarten_IT_deel2_les1 : ontbreekt("flashcards_ITdeel2les1_computerarchitectuur.js")),
    // kaarten staan in flashcards_ITdeel2les2_werkgeheugen.js
    "II.2 – Werkgeheugen": (typeof kaarten_IT_deel2_les2 !== "undefined" ? kaarten_IT_deel2_les2 : ontbreekt("flashcards_ITdeel2les2_werkgeheugen.js")),
    // kaarten staan in flashcards_ITdeel2les3_processoren.js
    "II.3 – Processoren": (typeof kaarten_IT_deel2_les3 !== "undefined" ? kaarten_IT_deel2_les3 : ontbreekt("flashcards_ITdeel2les3_processoren.js")),
    // kaarten staan in flashcards_ITdeel2les4_chipsets.js
    "II.4 – Chipsets en bussen": (typeof kaarten_IT_deel2_les4 !== "undefined" ? kaarten_IT_deel2_les4 : ontbreekt("flashcards_ITdeel2les4_chipsets.js")),
    // kaarten staan in flashcards_ITdeel2les5_magnetisch.js
    "II.5 – Magnetische opslag": (typeof kaarten_IT_deel2_les5 !== "undefined" ? kaarten_IT_deel2_les5 : ontbreekt("flashcards_ITdeel2les5_magnetisch.js")),
    // kaarten staan in flashcards_ITdeel2les6_optisch.js
    "II.6 – Optische geheugens en leesgeheugens": (typeof kaarten_IT_deel2_les6 !== "undefined" ? kaarten_IT_deel2_les6 : ontbreekt("flashcards_ITdeel2les6_optisch.js")),
    // kaarten staan in flashcards_ITdeel2les7_poorten.js
    "II.7 – Poorten": (typeof kaarten_IT_deel2_les7 !== "undefined" ? kaarten_IT_deel2_les7 : ontbreekt("flashcards_ITdeel2les7_poorten.js")),
    "II.8 – Randapparatuur": (typeof kaarten_IT_deel2_les8 !== "undefined" ? kaarten_IT_deel2_les8 : ontbreekt("flashcards_ITdeel2les8_randapparatuur.js")),
  },
  "Data Essentials": {
    // voorlopig 5 dummykaarten, worden later vervangen door echte kaarten uit de cursus
    "H1 – Dummykaarten": [
      { v: "Dummykaart 1: wat is een primaire sleutel?", a: "Een veld dat elke rij in een tabel uniek identificeert.", o: "Dummy" },
      { v: "Dummykaart 2: met welk SQL-commando haal je gegevens op?", a: "SELECT", o: "Dummy" },
      { v: "Dummykaart 3: hoe heet een rij in een tabel ook wel?", a: "Een record.", o: "Dummy" },
      { v: "Dummykaart 4: hoe heet een kolom in een tabel ook wel?", a: "Een veld (attribuut).", o: "Dummy" },
      { v: "Dummykaart 5: wat is een vreemde sleutel?", a: "Een veld dat verwijst naar de primaire sleutel van een andere tabel.", o: "Dummy" },
    ],
    // 11 testkaarten: beantwoord ze allemaal fout om het grote duiveltje (10 fout op rij) te testen
    "H2 – Testkaarten duiveltjes": [
      { v: "Testkaart 1: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 1.", o: "Test duiveltjes" },
      { v: "Testkaart 2: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 2.", o: "Test duiveltjes" },
      { v: "Testkaart 3: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 3.", o: "Test duiveltjes" },
      { v: "Testkaart 4: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 4.", o: "Test duiveltjes" },
      { v: "Testkaart 5: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 5.", o: "Test duiveltjes" },
      { v: "Testkaart 6: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 6.", o: "Test duiveltjes" },
      { v: "Testkaart 7: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 7.", o: "Test duiveltjes" },
      { v: "Testkaart 8: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 8.", o: "Test duiveltjes" },
      { v: "Testkaart 9: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 9.", o: "Test duiveltjes" },
      { v: "Testkaart 10: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 10.", o: "Test duiveltjes" },
      { v: "Testkaart 11: beantwoord met \u201cWist ik niet\u201d", a: "Testantwoord 11.", o: "Test duiveltjes" },
    ],
  },
  "Desktop OS": {
    // ===== Deel I: Linux =====
    "I.0 – Linux: introductie": (typeof kaarten_DOS_linux_intro !== "undefined" ? kaarten_DOS_linux_intro : ontbreekt("flashcards_DesktopOS_linux_intro.js")),
    "I.1 – Linux: werkcollege 1": (typeof kaarten_DOS_linux_wc1 !== "undefined" ? kaarten_DOS_linux_wc1 : ontbreekt("flashcards_DesktopOS_linux_wc1.js")),
    "I.2 – Linux: werkcollege 2": (typeof kaarten_DOS_linux_wc2 !== "undefined" ? kaarten_DOS_linux_wc2 : ontbreekt("flashcards_DesktopOS_linux_wc2.js")),
    "I.3 – Linux: werkcollege 3": (typeof kaarten_DOS_linux_wc3 !== "undefined" ? kaarten_DOS_linux_wc3 : ontbreekt("flashcards_DesktopOS_linux_wc3.js")),
    // ===== Deel II: Windows =====
    "II.1 – Windows: werkcollege 1": (typeof kaarten_DOS_windows_wc1 !== "undefined" ? kaarten_DOS_windows_wc1 : ontbreekt("flashcards_DesktopOS_windows_wc1.js")),
  },
};

/* ===== Vanaf hier hoef je niets aan te passen ===== */
let huidigVak = null;
let gekozenHoofdstukken = [];
let stapel = [];
let index = 0;
let fouten = [];

/* Alles wat onthouden wordt, staat in de browser (localStorage) */
function laad(sleutel, standaard) {
  try { return JSON.parse(localStorage.getItem(sleutel)) || standaard; } catch (e) { return standaard; }
}
function bewaar(sleutel, waarde) {
  try { localStorage.setItem(sleutel, JSON.stringify(waarde)); } catch (e) {}
}

let verborgen = new Set(laad("verborgen", []));   // weggegooide kaarten
let stats = laad("stats", {});                      // per kaart: hoe vaak goed/fout + laatste antwoord
let scores = laad("scores", {});                    // per vak: je laatste scores
let posities = laad("posities", {});                // waar je gebleven was (enkel zonder schudden)
let hervatbaar = false;                             // huidige ronde onthoudt zijn plaats?

/* Eenmalig: de vaknamen hadden vroeger een icoontje vooraan ("💻 IT Essentials", "🖥️ Desktop OS" …).
   Je voortgang staat nog onder die oude namen; hier wordt ze overgezet naar de namen zonder icoontje.
   Heb je een kaart intussen opnieuw beantwoord, dan blijft dat nieuwe antwoord staan. */
(function migreerVaknamenZonderIcoontje() {
  const ICOON = /^[^\p{L}\p{N}|]+\s/u;                   // icoontje + spatie vooraan de vaknaam
  const zonder = s => s.replace(ICOON, "");
  let gewijzigd = false;
  for (const id of Object.keys(stats)) {
    const n = zonder(id);
    if (n !== id) { if (!stats[n]) stats[n] = stats[id]; delete stats[id]; gewijzigd = true; }
  }
  for (const id of [...verborgen]) {
    const n = zonder(id);
    if (n !== id) { verborgen.delete(id); verborgen.add(n); gewijzigd = true; }
  }
  for (const p of Object.keys(posities)) {
    const n = zonder(p);
    if (n !== p) { if (!posities[n]) posities[n] = zonder(posities[p]); delete posities[p]; gewijzigd = true; }
  }
  for (const v of Object.keys(scores)) {
    const n = zonder(v);
    if (n !== v) { scores[n] = [...scores[v], ...(scores[n] || [])].slice(-20); delete scores[v]; gewijzigd = true; }
  }
  if (gewijzigd) { bewaar("stats", stats); bewaar("verborgen", [...verborgen]); bewaar("posities", posities); bewaar("scores", scores); }
  try {
    const s = sessionStorage.getItem("sessie");
    if (s) { const o = JSON.parse(s); if (o && typeof o.vak === "string" && ICOON.test(o.vak)) { o.vak = zonder(o.vak); sessionStorage.setItem("sessie", JSON.stringify(o)); } }
  } catch (e) {}
})();

/* Eenmalig: voortgang van het oude hoofdstuk "introductie en werkcollege 1" overzetten naar de 2 nieuwe hoofdstukken */
(function migreerLinuxSplitsing() {
  const vak = "Desktop OS|";
  const oud = vak + "I.1 – Linux: introductie en werkcollege 1|";
  if (typeof kaarten_DOS_linux_intro === "undefined") return;
  const introVragen = new Set(kaarten_DOS_linux_intro.map(k => k.v));
  const nieuweSleutel = id => {
    const v = id.slice(oud.length);
    return vak + (introVragen.has(v) ? "I.0 – Linux: introductie" : "I.1 – Linux: werkcollege 1") + "|" + v;
  };
  let gewijzigd = false;
  for (const id of Object.keys(stats)) {
    if (id.startsWith(oud)) { stats[nieuweSleutel(id)] = stats[id]; delete stats[id]; gewijzigd = true; }
  }
  for (const id of [...verborgen]) {
    if (id.startsWith(oud)) { verborgen.delete(id); verborgen.add(nieuweSleutel(id)); gewijzigd = true; }
  }
  for (const p of Object.keys(posities)) {
    if (p.includes("introductie en werkcollege 1")) { delete posities[p]; gewijzigd = true; }
  }
  if (gewijzigd) { bewaar("stats", stats); bewaar("verborgen", [...verborgen]); bewaar("posities", posities); }
})();

/* Eenmalig: de icoontjes (🖼️ ⚠️ …) zijn uit de vragen gehaald. De app herkent een kaart aan de tekst
   van de vraag, dus je voortgang wordt hier overgezet naar de vraag zonder icoontje. */
(function migreerZonderIcoontjes() {
  const ICOON = /\s?(?:\u{1F5BC}|\u26A0|\u{1F4C4}|\u267B|\u{1F4CB}|\u{1F389}|\u{1F5D1}|\u2B50)\uFE0F?\s?/gu;
  const zonder = s => s.replace(ICOON, m => (m.length > 2 && /^\s/.test(m) && /\s$/.test(m)) ? " " : "");
  let gewijzigd = false;
  for (const id of Object.keys(stats)) {
    const n = zonder(id);
    if (n !== id) { if (!stats[n]) stats[n] = stats[id]; delete stats[id]; gewijzigd = true; }
  }
  for (const id of [...verborgen]) {
    const n = zonder(id);
    if (n !== id) { verborgen.delete(id); verborgen.add(n); gewijzigd = true; }
  }
  for (const p of Object.keys(posities)) {
    const n = zonder(posities[p]);
    if (n !== posities[p]) { posities[p] = n; gewijzigd = true; }
  }
  if (gewijzigd) { bewaar("stats", stats); bewaar("verborgen", [...verborgen]); bewaar("posities", posities); }
  try {
    const s = sessionStorage.getItem("sessie");
    if (s && zonder(s) !== s) sessionStorage.setItem("sessie", zonder(s));
  } catch (e) {}
})();

function bewaarVerborgen() { bewaar("verborgen", [...verborgen]); }

function wasFout(id) { return stats[id] && stats[id].laatst === false; }

function kaartId(vak, hfst, kaart) {
  return vak + "|" + hfst + "|" + kaart.v;
}

function toonScherm(id) {
  document.querySelectorAll(".scherm").forEach(s => s.classList.remove("actief"));
  document.getElementById(id).classList.add("actief");
  bewaarSessie();
}

/* ===== Bij vernieuwen (refresh) blijf je op hetzelfde scherm =====
   Bewaard in sessionStorage: blijft bestaan zolang dit tabblad open is. */
function bewaarSessie() {
  try {
    const actief = document.querySelector(".scherm.actief");
    const s = { scherm: actief ? actief.id : "schermVak", vak: huidigVak, hfst: gekozenHoofdstukken };
    if (s.scherm === "schermHoofdstuk") s.aangevinkt = aangevinkteHoofdstukken();
    if (s.scherm === "schermOefenen") {
      s.stapel = stapel.map(k => [k.hfst, k.v, k.herhaling || 0]);
      s.fouten = fouten.map(k => [k.hfst, k.v, k.herhaling || 0]);
      s.index = index;
      s.hervatbaar = hervatbaar;
    }
    sessionStorage.setItem("sessie", JSON.stringify(s));
  } catch (e) {}
}

function herstelSessie() {
  let s = null;
  try { s = JSON.parse(sessionStorage.getItem("sessie")); } catch (e) {}
  if (!s || !s.vak || !vakken[s.vak] || s.scherm === "schermVak") return;
  gekozenHoofdstukken = (s.aangevinkt || s.hfst || []).filter(h => vakken[s.vak][h]);
  kiesVak(s.vak);
  if (s.scherm === "schermWeggegooid") { toonWeggegooid(); return; }
  if (s.scherm !== "schermOefenen" || !s.stapel) return;
  // de ronde opnieuw opbouwen, kaart per kaart, in dezelfde volgorde
  const zoek = ([hfst, v, herhaling]) => {
    const k = (vakken[s.vak][hfst] || []).find(x => x.v === v);
    if (!k || verborgen.has(kaartId(s.vak, hfst, k))) return null;
    return herhaling ? { ...k, hfst, herhaling } : { ...k, hfst };
  };
  const kaarten = s.stapel.map(zoek).filter(Boolean);
  if (kaarten.length === 0) return;
  gekozenHoofdstukken = (s.hfst || []).filter(h => vakken[s.vak][h]);
  stapel = kaarten;
  fouten = (s.fouten || []).map(zoek).filter(Boolean);
  index = Math.min(Math.max(s.index || 0, 0), stapel.length - 1);
  acties = [];
  hervatbaar = !!s.hervatbaar;
  reeks = 0;
  foutReeks = 0;
  toonScherm("schermOefenen");
  toonKaart();
}

/* ===== Eigen pop-ups (in plaats van alert/confirm van de browser) =====
   In Consolas en de zwart-witte kleuren van VS Code. melding() toont een boodschap met OK;
   bevestig() vraagt "zeker?" en geeft true (bevestigd) of false (annuleren). Enter = OK, Esc = annuleren. */
function popup(tekst, knoppen) {
  return new Promise(klaar => {
    document.getElementById("popup")?.remove();
    const laag = document.createElement("div");
    laag.id = "popup";
    laag.innerHTML = `<div class="popup-venster" role="dialog" aria-modal="true">
        <div class="popup-titel">Anicée's Flashcards</div>
        <div class="popup-tekst"></div>
        <div class="popup-knoppen"></div>
      </div>`;
    laag.querySelector(".popup-tekst").textContent = tekst;
    const rij = laag.querySelector(".popup-knoppen");
    const sluit = waarde => { document.removeEventListener("keydown", toets, true); laag.remove(); klaar(waarde); };
    for (const k of knoppen) {
      const b = document.createElement("button");
      b.type = "button"; b.textContent = k.tekst; b.className = k.hoofd ? "popup-hoofd" : "popup-gewoon";
      b.onclick = () => sluit(k.waarde);
      rij.appendChild(b);
    }
    const toets = e => {
      if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); sluit(knoppen.length > 1 ? false : true); }
      else if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); sluit(true); }
      else e.stopPropagation();   // sneltoetsen van de kaarten (spatie, pijlen, Z, W) niet laten doorgaan
    };
    document.addEventListener("keydown", toets, true);
    laag.addEventListener("click", e => { if (e.target === laag) sluit(knoppen.length > 1 ? false : true); });
    document.body.appendChild(laag);
    rij.querySelector(".popup-hoofd")?.focus();
  });
}
function melding(tekst) { return popup(tekst, [{ tekst: "OK", waarde: true, hoofd: true }]); }
function bevestig(tekst, ja = "OK") {
  return popup(tekst, [{ tekst: "Annuleren", waarde: false }, { tekst: ja, waarde: true, hoofd: true }]);
}

/* ===== Vaknamen op het scherm =====
   De vaknamen in de code hebben geen icoontje meer (oude voortgang wordt bovenaan overgezet).
   Op het scherm tonen we de naam met het academiejaar. */
const ACADEMIEJAAR = "2026-27";   // getoond achter elke vaknaam
// vaknaam om te tonen: een eventueel icoontje vooraan weg (enkel als het geen letter of cijfer is), plus het academiejaar
function vakZonderEmoji(vak) { return vak.replace(/^[^\p{L}\p{N}]+\s/u, "") + ` (${ACADEMIEJAAR})`; }

// knop- of titeltekst: enkel de naam, zonder emoji
function vakLabelHTML(vak) {
  return maakVeilig(vakZonderEmoji(vak));
}

function toonVakken() {
  const lijst = document.getElementById("vakLijst");
  lijst.innerHTML = "";
  for (const vak in vakken) {
    const knop = document.createElement("button");
    knop.className = "licht vak-knop";
    knop.innerHTML = vakLabelHTML(vak);
    knop.onclick = () => { gekozenHoofdstukken = []; kiesVak(vak); };
    lijst.appendChild(knop);
  }
  if (ontbrekendeBestanden.length) {
    const p = document.createElement("p");
    p.style.cssText = "color:#f5a623;text-align:left;font-size:.9em";
    p.textContent = "Niet gevonden: " + ontbrekendeBestanden.join(", ") + " — zet deze bestanden in dezelfde map als index.html en druk Ctrl+F5.";
    lijst.appendChild(p);
  }
}

function kiesVak(vak) {
  huidigVak = vak;
  document.getElementById("vakTitel").innerHTML = vakLabelHTML(vak);
  document.getElementById("alles").checked = false;
  const lijst = document.getElementById("hoofdstukLijst");
  lijst.innerHTML = "";
  let aantalWeg = 0;

  for (const hfst in vakken[vak]) {
    const kaarten = vakken[vak][hfst];
    const weg = kaarten.filter(k => verborgen.has(kaartId(vak, hfst, k))).length;
    // % juist/fout van het totaal aantal kaarten, op basis van je laatste antwoord per kaart
    // (weggegooide kaarten tellen niet mee)
    const actief = kaarten.filter(k => !verborgen.has(kaartId(vak, hfst, k)));
    const goedAantal = actief.filter(k => { const st = stats[kaartId(vak, hfst, k)]; return st && st.laatst === true; }).length;
    const foutAantal = actief.filter(k => wasFout(kaartId(vak, hfst, k))).length;
    const beantwoord = goedAantal + foutAantal;
    const pct = n => actief.length ? Math.round(n / actief.length * 100) : 0;
    aantalWeg += weg;
    const aangevinkt = gekozenHoofdstukken.includes(hfst) ? "checked" : "";
    lijst.innerHTML += `
      <label class="hoofdstuk">
        <input type="checkbox" value="${hfst}" ${aangevinkt}>
        <span class="hfst-naam">${hfst}</span>
        <small>
          <span>${actief.length} kaarten${beantwoord ? ` · ${beantwoord} beantwoord` : ""}</span>
          ${goedAantal || foutAantal ? `<span><span class="groen">${pct(goedAantal)}% juist</span> · <span class="rood">${pct(foutAantal)}% fout</span></span>` : ""}
        </small>
      </label>`;
  }

  const terug = document.getElementById("terugzetten");
  terug.style.display = aantalWeg ? "block" : "none";
  terug.textContent = `${aantalWeg} weggegooide kaart${aantalWeg === 1 ? "" : "en"} bekijken`;

  toonScherm("schermHoofdstuk");
}

/* ---------- Verderzetten waar je gebleven was ---------- */
// sleutel = vak + de aangevinkte hoofdstukken (elke combinatie onthoudt zijn eigen plaats)
function aangevinkteHoofdstukken() {
  return [...document.querySelectorAll("#hoofdstukLijst input:checked")].map(c => c.value);
}
function positieSleutel(hoofdstukken = gekozenHoofdstukken) {
  return huidigVak + "|" + hoofdstukken.join("+");
}
// alle kaarten van de hoofdstukken in volgorde van je js-bestanden (zonder filters)
function volledigeVolgorde(hoofdstukken) {
  return hoofdstukken.flatMap(h => vakken[huidigVak][h].map(k => kaartId(huidigVak, h, k)));
}
// zoekt in de stapel de kaart waar je was; is die er niet meer (weggegooid, gefilterd),
// dan de eerstvolgende kaart die er wel nog is
function hervatIndex() {
  const id = posities[positieSleutel()];
  if (!id) return 0;
  const volgorde = volledigeVolgorde(gekozenHoofdstukken);
  const plaats = volgorde.indexOf(id);
  if (plaats < 0) return 0;
  const i = stapel.findIndex(k => volgorde.indexOf(kaartId(huidigVak, k.hfst, k)) >= plaats);
  return i < 0 ? 0 : i;
}

function toonGeschiedenis() {
  const vak = document.getElementById("geschiedenis");
  if (!vak) return;   // het blok "Je laatste scores" staat niet meer op de pagina
  const lijst = (scores[huidigVak] || []).slice(-5).reverse();
  if (lijst.length === 0) { vak.style.display = "none"; return; }
  vak.style.display = "block";
  vak.innerHTML = "<h3>Je laatste scores</h3>" +
    lijst.map(s => `<div><span>${s.datum}</span><b>${s.goed} / ${s.totaal}</b></div>`).join("") +
    `<button class="terug" onclick="wisVoortgang()">Voortgang van dit vak wissen</button>`;
}

async function wisVoortgang() {
  if (!(await bevestig("Alle scores en foute kaarten van dit vak wissen?", "Wissen"))) return;
  delete scores[huidigVak];
  for (const id in stats) if (id.startsWith(huidigVak + "|")) delete stats[id];
  bewaar("scores", scores);
  bewaar("stats", stats);
  kiesVak(huidigVak);
}

function vinkAlles(aan) {
  document.querySelectorAll("#hoofdstukLijst input").forEach(c => c.checked = aan);
}

/* ===== Filter: nog niet beantwoord / fout / juist ===== */
function statusVan(id) {
  const st = stats[id];
  if (!st || st.laatst === undefined) return "nieuw";
  return st.laatst ? "juist" : "fout";
}

function gekozenFilters() {
  return {
    nieuw: document.getElementById("fNieuw").checked,
    fout:  document.getElementById("fFout").checked,
    juist: document.getElementById("fJuist").checked,
    moeilijk: document.getElementById("fMoeilijk").checked,
  };
}

/* ===== Weggegooide kaarten bekijken en kiezen wat terug mag ===== */
function toonWeggegooid() {
  const lijst = document.getElementById("wegLijst");
  let html = "";

  for (const hfst in vakken[huidigVak]) {
    const weg = vakken[huidigVak][hfst].filter(k => verborgen.has(kaartId(huidigVak, hfst, k)));
    if (weg.length === 0) continue;
    html += `<h3 class="weg-hoofdstuk">${hfst} <small>(${weg.length})</small></h3><div class="weg-raster">`;
    for (const k of weg) {
      const id = kaartId(huidigVak, hfst, k);
      html += `
        <label class="weg-kaart">
          <input type="checkbox" data-id="${encodeURIComponent(id)}" onchange="telGeselecteerd()">
          <span>
            <span class="weg-vraag">${k.img ? " " : ""}${maakVeilig(k.v)}</span>
            <span class="weg-antwoord">${maakVeilig(k.a)}</span>
            <span class="weg-bron" data-vraag="${encodeURIComponent(k.v)}">bestand zoeken…</span>
          </span>
        </label>`;
    }
    html += `</div>`;
  }
  lijst.innerHTML = html || `<p class="hint">Je hebt geen weggegooide kaarten in dit vak.</p>`;
  telGeselecteerd();
  toonScherm("schermWeggegooid");
  vulBronnenIn();
}

/* Bij elke weggegooide kaart tonen in welk .js-bestand en op welke regel ze staat,
   zodat je ze daar manueel kan aanpassen of verwijderen.
   De app leest daarvoor zelf de geladen scriptbestanden in. Dat lukt alleen via
   een webadres (bv. Live Server), niet als je index.html rechtstreeks opent (file://). */
const bestandTekst = {};   // cache: bestandsnaam -> inhoud

async function laadScripts() {
  const namen = [...document.scripts].map(sc => sc.getAttribute("src")).filter(Boolean);
  await Promise.all(namen.map(async naam => {
    if (naam.split("?")[0] in bestandTekst) return;
    try {
      const r = await fetch(naam);
      bestandTekst[naam.split("?")[0]] = r.ok ? await r.text() : null;   // zonder ?v=… in de lijst
    } catch (e) { bestandTekst[naam.split("?")[0]] = null; }
  }));
}

// zoekt in welk bestand en op welke regel een vraag staat (null als niet gevonden)
function bronVan(vraag) {
  const zoek = "v: " + JSON.stringify(vraag);
  for (const naam in bestandTekst) {
    const tekst = bestandTekst[naam];
    if (!tekst) continue;
    let pos = tekst.indexOf(zoek);
    if (pos === -1) pos = tekst.indexOf(vraag);
    if (pos === -1) continue;
    return { naam, regel: tekst.slice(0, pos).split("\n").length };
  }
  return null;
}

async function vulBronnenIn() {
  await laadScripts();
  const gelukt = Object.values(bestandTekst).some(t => t);
  document.querySelectorAll(".weg-bron").forEach(el => {
    const vraag = decodeURIComponent(el.dataset.vraag);
    if (!gelukt) {
      el.textContent = "open de app via Live Server om het bestand en de regel te zien";
      return;
    }
    const bron = bronVan(vraag);
    if (bron) {
      el.textContent = ` ${bron.naam} · regel ${bron.regel}`;
      el.title = "Open dit bestand in VS Code en druk Ctrl+G om naar de regel te springen";
    } else {
      el.textContent = "niet gevonden in de bestanden";
    }
  });
}

/* Lijst van alle weggegooide kaarten van dit vak als tekst, per bestand gegroepeerd.
   Die kan je kopiëren en in de chat plakken, zodat ze uit de js-bestanden verwijderd kunnen worden. */
async function maakWegLijstTekst() {
  await laadScripts();
  const perBestand = {};
  let aantal = 0;
  for (const hfst in vakken[huidigVak]) {
    for (const k of vakken[huidigVak][hfst]) {
      if (!verborgen.has(kaartId(huidigVak, hfst, k))) continue;
      const bron = bronVan(k.v);
      const sleutel = bron ? bron.naam : `(bestand onbekend – ${hfst})`;
      (perBestand[sleutel] = perBestand[sleutel] || []).push({ regel: bron ? bron.regel : null, v: k.v });
      aantal++;
    }
  }
  let tekst = `Weggegooide kaarten – ${huidigVak} (${aantal})\n` +
              `Verwijder deze kaarten uit de js-bestanden:\n`;
  for (const naam in perBestand) {
    tekst += `\n${naam}\n`;
    for (const k of perBestand[naam].sort((x, y) => (x.regel || 0) - (y.regel || 0)))
      tekst += `- ${k.regel ? "regel " + k.regel + ": " : ""}${k.v}\n`;
  }
  return tekst;
}

async function kopieerWegLijst() {
  const knop = document.getElementById("kopieerKnop");
  const tekst = await maakWegLijstTekst();
  try {
    await navigator.clipboard.writeText(tekst);
    knop.textContent = "✓ Gekopieerd";
  } catch (e) {
    // kopiëren niet toegelaten? dan als tekstbestand downloaden
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([tekst], { type: "text/plain" }));
    a.download = "weggegooide-kaarten.txt";
    a.click();
    knop.textContent = "✓ Gedownload als weggegooide-kaarten.txt";
  }
  setTimeout(() => { knop.textContent = "Lijst kopiëren"; }, 3000);
}

/* tekens als < en > in vragen (bv. "<h1>") tonen in plaats van uitvoeren */
function maakVeilig(tekst) {
  const d = document.createElement("div");
  d.textContent = tekst;
  return d.innerHTML;
}

function telGeselecteerd() {
  const n = document.querySelectorAll("#wegLijst input:checked").length;
  const knop = document.getElementById("wegKnop");
  knop.disabled = n === 0;
  knop.textContent = n ? `${n} kaart${n === 1 ? "" : "en"} terugzetten` : "Vink kaarten aan om terug te zetten";
}

function zetGeselecteerdTerug() {
  document.querySelectorAll("#wegLijst input:checked")
    .forEach(c => verborgen.delete(decodeURIComponent(c.dataset.id)));
  bewaarVerborgen();
  // nog kaarten over? dan blijf je in de lijst, anders terug naar de hoofdstukken
  const nogOver = [...verborgen].some(id => id.startsWith(huidigVak + "|"));
  if (nogOver) toonWeggegooid(); else kiesVak(huidigVak);
}

function schud(lijst) {
  for (let i = lijst.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lijst[i], lijst[j]] = [lijst[j], lijst[i]];
  }
  return lijst;
}

/* Oefenkaarten (oefening: true) staan in een apart bestand, maar horen bij een hoofdstuk:
   ze komen achter de laatste kaart van hetzelfde onderwerp, zodat je weet waar in de cursus je zit. */
function voegOefeningenToe(lijst, oef) {
  if (!Array.isArray(lijst) || !Array.isArray(oef)) return;
  for (const k of oef) {
    let i = -1;
    lijst.forEach((x, j) => { if (x.o === k.o) i = j; });
    if (i === -1) lijst.push(k); else lijst.splice(i + 1, 0, k);
  }
}
// keuze oefenkaarten: vierkantjes, maar er staat er altijd precies één aan
document.querySelectorAll('input[name="oefKeuze"]').forEach(c => c.addEventListener("change", () => {
  document.querySelectorAll('input[name="oefKeuze"]').forEach(x => { x.checked = (x === c); });
}));
if (typeof kaarten_WEB_les2_oef !== "undefined") voegOefeningenToe(vakken["Web Essentials"]["2 – HTML media, tabellen & formulieren"], kaarten_WEB_les2_oef);

function startOefenen(kaarten) {
  const gewoneStart = !kaarten;
  if (!kaarten) {
    gekozenHoofdstukken = [...document.querySelectorAll("#hoofdstukLijst input:checked")].map(c => c.value);
    if (gekozenHoofdstukken.length === 0) { melding("Kies minstens één hoofdstuk."); return; }
    kaarten = gekozenHoofdstukken
      .flatMap(h => vakken[huidigVak][h].map(k => ({ ...k, hfst: h })))
      .filter(k => !verborgen.has(kaartId(huidigVak, k.hfst, k)));
    if (kaarten.length === 0) { melding("Er zijn geen kaarten meer over in deze hoofdstukken."); return; }
    // filter: nog niet beantwoord / fout / juist
    const wil = gekozenFilters();
    if (!wil.nieuw && !wil.fout && !wil.juist && !wil.moeilijk) { melding("Vink minstens één soort kaarten aan."); return; }
    kaarten = kaarten.filter(k => {
      const id = kaartId(huidigVak, k.hfst, k);
      if (wil[statusVan(id)]) return true;
      return wil.moeilijk && statusVan(id) === "juist" && stats[id].moeilijk === true;   // juist, maar was moeilijk
    });
    if (kaarten.length === 0) { melding("Er zijn geen kaarten van die soort in deze hoofdstukken."); return; }
    // oefenkaarten: alles, enkel oefenkaarten of zonder oefenkaarten
    const oefKeuze = (document.querySelector('input[name="oefKeuze"]:checked') || {}).value || "alles";
    if (oefKeuze === "enkel") kaarten = kaarten.filter(k => k.oefening === true);
    if (oefKeuze === "zonder") kaarten = kaarten.filter(k => k.oefening !== true);
    if (kaarten.length === 0) { melding(oefKeuze === "enkel" ? "Er zijn geen oefenkaarten in deze hoofdstukken." : "Er zijn geen kaarten van die soort in deze hoofdstukken."); return; }
  }
  stapel = [...kaarten];
  const geschud = document.getElementById("schudden").checked;
  document.getElementById("schudden").checked = false;   // schudden geldt enkel voor deze ronde
  if (geschud) schud(stapel);
  index = 0;
  fouten = [];
  acties = [];
  reeks = 0;
  foutReeks = 0;
  kansMoeilijk = new Set();
  aantalBeantwoord = 0;
  konijnTegoed = false;
  // niet geschud? dan ga je verder waar je de vorige keer gebleven was
  hervatbaar = gewoneStart && !geschud;
  if (hervatbaar) index = hervatIndex();
  toonScherm("schermOefenen");
  toonKaart();
}

/* Telt je laatste antwoord per kaart (over al je sessies), voor de gekozen hoofdstukken.
   Weggegooide kaarten tellen niet mee. Dezelfde telling als op de hoofdstukkenpagina. */
function telJuistFout(hoofdstukken) {
  let juist = 0, fout = 0, totaal = 0;
  for (const hfst of hoofdstukken) {
    for (const k of vakken[huidigVak][hfst] || []) {
      const id = kaartId(huidigVak, hfst, k);
      if (verborgen.has(id)) continue;
      totaal++;
      if (!stats[id]) continue;
      if (stats[id].laatst === true) juist++;
      else if (stats[id].laatst === false) fout++;
    }
  }
  return { juist, fout, totaal, nieuw: totaal - juist - fout };
}

/* Links naast de kaart: de stand van de gekozen hoofdstukken (over al je sessies) */
function toonStand(t) {
  const el = document.getElementById("stand");
  if (!el) return;
  const titel = gekozenHoofdstukken.length === 1 ? gekozenHoofdstukken[0] : `${gekozenHoofdstukken.length} hoofdstukken`;
  const pct = n => t.totaal ? (n / t.totaal * 100) : 0;
  el.innerHTML = `
    <div class="stand-titel">${maakVeilig(titel)}</div>
    <div class="stand-rij"><span>Totaal kaarten</span><b>${t.totaal}</b></div>
    <div class="stand-rij"><span>Onbeantwoord</span><b>${t.nieuw}</b></div>
    <div class="stand-rij groen"><span>Juist</span><b>${t.juist}</b></div>
    <div class="stand-rij rood"><span>Fout</span><b>${t.fout}</b></div>
    <div class="stand-balk" title="groen = juist, rood = fout, grijs = nog niet beantwoord">
      <span class="b-juist" style="width:${pct(t.juist)}%"></span><span class="b-fout" style="width:${pct(t.fout)}%"></span>
    </div>`;
}

/* ===== Web Essentials: code in het antwoord tonen zoals in VS Code =====
   Regels met HTML of CSS komen in een donker codeblok met de kleuren van VS Code;
   tags in een gewone zin (bv. "Het <img>-element") krijgen dezelfde kleuren. */
function kleurHTML(s) {   // s is al veilig gemaakt (&lt; en &gt;)
  const st = s.split(/(&lt;!--.*?--&gt;)/);   // commentaar apart (groen)
  if (st.length > 1) return st.map((d, i) => i % 2 ? `<span class="c-com">${d}</span>` : kleurHTML(d)).join("");
  return s.replace(/&lt;(\/?)([a-zA-Z][\w-]*)((?:(?!&gt;).)*?)(\/?)&gt;/g, (m, sl, naam, attrs, zelf) => {
    const a = attrs.replace(/([\w:-]+)(=)("[^"]*"|[^\s"]+)?/g,
      (x, n, is, w) => `<span class="c-attr">${n}</span>${is}${w ? `<span class="c-str">${w}</span>` : ""}`);
    return `<span class="c-punt">&lt;${sl}</span><span class="c-tag">${naam}</span>${a}<span class="c-punt">${zelf}&gt;</span>`;
  });
}
function kleurCSS(s) {
  const c = s.match(/^(.*?)(\s*\/\*.*\*\/\s*)$/);   // commentaar achteraan (groen)
  if (c) return kleurCSS(c[1]) + `<span class="c-com">${c[2]}</span>`;
  let e = s.match(/^(\s*)([^{]+?)(\s*\{\s*)(.+?)(\s*\}\s*)$/);   // regel op één lijn: h1 { color: red; }
  if (e) return `${e[1]}<span class="c-sel">${e[2]}</span><span class="c-punt">${e[3]}</span>${e[4].split(/(?<=;)\s*/).map(d => kleurCSS(d)).join(" ")}<span class="c-punt">${e[5]}</span>`;
  if (/^\s*\}\s*$/.test(s)) return `<span class="c-punt">${s}</span>`;
  if (/^\s*[^\s{}<>:;]+(?:::?[\w-]+)?,\s*$/.test(s) || /^\s*[.#*]?[\w-]*(?:::?[\w-]+)?\s*$/.test(s)) return `<span class="c-sel">${s}</span>`;   // selector op een eigen regel
  let m = s.match(/^(\s*)([^{]+?)(\s*\{\s*)$/);
  if (m) return `${m[1]}<span class="c-sel">${m[2]}</span><span class="c-punt">${m[3]}</span>`;
  m = s.match(/^(\s*)([\w-]+)(\s*:\s*)(.+?)(;)(\s*)$/) || s.match(/^(\s+)([\w-]+)(\s*:\s*)(.+?)()(\s*)$/);
  if (m) return `${m[1]}<span class="c-attr">${m[2]}</span>${m[3]}<span class="c-str">${m[4].replace(/(?<![#\w.-])(-?\d*\.?\d+)(px|rem|em|%|vh|vw|s)?(?![\w])/g, '<span class="c-num">$1$2</span>')}</span>${m[5]}${m[6]}`;
  return s;
}
function isCodeRegel(r) {
  return /^\s*&lt;/.test(r) || /^\s*[^{}]+\{\s*$/.test(r) || /^\s*[^{}&]+\{[^}]*\}/.test(r) || /^\s*\.\.\.\s*$/.test(r) || /^[\w-]+\.html\b/.test(r) || /\/\*.*\*\/\s*$/.test(r) || /^\s*\/[*/]/.test(r) || /^\s*[\w-]+\s*:\s*[^;]+;\s*$/.test(r) || /^\s*@[\w-]+/.test(r) || /^\s*[^\s{}<>]+,\s*$/.test(r) || /^\s*\}\s*$/.test(r) || /^\s+[\w-]+\s*:\s*[^;]+;\s*$/.test(r) || /^\s{2,}\S/.test(r);
}
function codeVisueel(tekst) {
  const regels = maakVeilig(tekst).split("\n");
  let html = "", blok = [];
  const sluit = () => { if (blok.length) { html += `<pre class="codeblok">${blok.join("\n")}</pre>`; blok = []; } };
  for (const r of regels) {
    if (isCodeRegel(r)) blok.push(/&lt;/.test(r) ? kleurHTML(r) : kleurCSS(r));
    else { sluit(); html += `<div>${r.replace(/&lt;\/?[a-zA-Z](?:(?!&gt;).)*&gt;/g, m => `<code class="code-in">${kleurHTML(m)}</code>`)}</div>`; }
  }
  sluit();
  return html;
}

function toonKaart() {
  const kaart = stapel[index];
  zetOngedaanKnoppen();
  bewaarSessie();
  if (hervatbaar && !kaart.herhaling) {
    posities[positieSleutel()] = kaartId(huidigVak, kaart.hfst, kaart);
    bewaar("posities", posities);
  }
  document.getElementById("kaart").classList.remove("omgedraaid");
  document.getElementById("kaart").classList.toggle("wit", kaart.wit === true);   // witte kaart = cursus voorstellen
  document.getElementById("kaart").classList.toggle("extra", kaart.extra === true);   // lichtgroene kaart = extra info, niet uit de cursus
  document.getElementById("kaart").classList.toggle("oefening", kaart.oefening === true);   // oefenkaart (zacht pastelblauw)
  document.getElementById("antwoordKnoppen").style.display = "none";
  document.getElementById("hint").style.display = "block";
  // teller + aantal juist (groen) en fout (rood): zelfde telling als op de hoofdstukkenpagina
  const t = telJuistFout(gekozenHoofdstukken);
  // herhalingen tellen niet mee in "Kaart x van y"
  const gewoon = stapel.filter(k => !k.herhaling).length;
  const hierGewoon = stapel.slice(0, index + 1).filter(k => !k.herhaling).length;
  document.getElementById("teller").innerHTML =
    `<span title="Waar je zit in deze ronde (enkel de kaarten die je filters toelaten)">Kaart ${Math.max(hierGewoon, 1)} van ${gewoon}</span>` +
    // op smallere schermen blijven ✓ en ✗ bovenaan; op brede schermen staan ze links (toonStand)
    `<span class="groen kort">Juist ${t.juist}</span>` +
    `<span class="rood kort">Fout ${t.fout}</span>`;
  toonStand(t);
  const vraagEl = document.getElementById("vraag");
  vraagEl.textContent = kaart.v;
  if (kaart.oefening) vraagEl.innerHTML = codeVisueel(kaart.v);
  // meerkeuze/juist-fout (vraag over meerdere regels): links uitlijnen, leest makkelijker
  vraagEl.classList.toggle("meerkeuze", kaart.v.includes("\n"));
  vraagEl.classList.toggle("code", /\n {2,}/.test(kaart.v));
  // tekening op de voorkant (bv. met nummers i.p.v. de namen)
  zetFiguur("figVoor", kaart.img);
  document.getElementById("figAchter").innerHTML = "";

  // titel bovenaan: hoofdstuk › onderwerp
  const titel = kaart.o ? `${kaart.hfst} › ${kaart.o}` : kaart.hfst;
  document.getElementById("onderwerpVoor").textContent = titel;
  zetHerhaalLabel(kaart);

  // achterkant pas invullen na de draai, zodat je het antwoord niet ziet flitsen
  setTimeout(() => {
    document.getElementById("onderwerpAchter").textContent = titel;
    zetHerhaalLabel(kaart);
    const antwoordEl = document.getElementById("antwoord");
    if (huidigVak === "Web Essentials") { antwoordEl.innerHTML = codeVisueel(kaart.a); antwoordEl.classList.remove("code"); }
    else {
      antwoordEl.textContent = kaart.a;
      // ingesprongen regels (bv. een .yaml-bestand): in een vaste letterbreedte, spaties blijven staan
      antwoordEl.classList.toggle("code", /\n {2,}/.test(kaart.a));
    }
    if (kaart.tabel) antwoordEl.insertAdjacentHTML("beforeend", miniTabel(kaart.tabel));
    document.getElementById("uitleg").textContent = kaart.uitleg || "";
    // achterkant: de volledige tekening (met namen), anders dezelfde als voorkant
    zetFiguur("figAchter", kaart.imgAntwoord || kaart.img);
    pasHoogteAan();
  }, 250);

  // overzicht als laatste: als daar iets misloopt, werkt de kaart toch
  try { toonOverzicht(kaart); } catch (e) { console.error("Overzicht:", e); }
}

/* Overzicht rechts van de kaart: enkel het huidige hoofdstuk
   met zijn onderwerpen, en een aanduiding waar je je bevindt. */
function onderwerpenVan(hfst) {
  const lijst = [];
  for (const k of vakken[huidigVak][hfst]) {
    const o = k.o || hfst;
    if (!lijst.includes(o)) lijst.push(o);
  }
  return lijst;
}

function toonOverzicht(kaart) {
  const vak = document.getElementById("overzicht");
  if (!vak) return;
  const huidig = kaart.o || kaart.hfst;
  // volgorde van de slides als die bestaat, anders de volgorde van de kaarten
  const structuur = vakken[huidigVak][kaart.hfst].structuur ||
                    onderwerpenVan(kaart.hfst).map(o => ({ o }));

  // nummers (slide of sectie) vooraan in een eigen kolom; die kolom alleen tonen als de meeste regels
  // een nummer hebben dat niet al in de titel staat (in Web Essentials staat het nummer al in de titel)
  const nrVan = r => nrInTitel(r.o || r.kop, r.slide) ? "" : (r.slide || "");
  const metNrs = structuur.filter(r => nrVan(r)).length > structuur.length / 2;

  vak.innerHTML =
    `<h3><span>${kaart.hfst}</span><button type="button" class="licht ov-inklap">⌃ Inklappen</button></h3>` +
    `<ol class="ov-onderwerpen${metNrs ? " met-nrs" : ""}">` +
    structuur.map(r => {
      // kan je naar dit onderwerp springen? enkel als er in deze ronde nog kaarten van zijn
      const spring = r.o && r.o !== huidig && eersteKaartVan(kaart.hfst, r.o) >= 0;
      const leeg = r.o && r.o !== huidig && !spring;
      // stand van dit onderwerp: onbeantwoord of fout / totaal (zonder weggegooide kaarten)
      const st = r.o ? standVan(kaart.hfst, r.o) : { open: 0, totaal: 0 };
      const alleJuist = st.totaal > 0 && st.open === 0;
      const klassen = [r.sub ? "sub" : "", r.kop ? "kop" : "", r.o && r.o === huidig ? "hier" : "",
                       spring ? "klikbaar" : "", leeg ? "leeg" : "", leeg && alleJuist ? "juist" : "",
                       st.open > 0 ? "tedoen" : ""].join(" ");
      const data = spring ? ` data-o="${encodeURIComponent(r.o)}" title="Ga naar de kaarten van dit onderwerp"` :
                   leeg && alleJuist ? ` title="Alle kaarten van dit onderwerp juist"` :
                   leeg ? ` title="Geen kaarten van dit onderwerp in deze ronde"` : "";
      const teken = st.totaal === 0 ? "" :
        `<b class="ov-aantal${alleJuist ? " klaar" : ""}" title="onbeantwoord of fout / totaal">` +
        `<span class="ov-vink">${alleJuist ? "✓" : "&nbsp;"}</span><span class="ov-open">${st.open}</span>` +
        `<span class="ov-totaal">/${st.totaal}</span></b>`;
      return `<li class="${klassen}"${data}>` + (metNrs ? `<i class="ov-nr">${nrVan(r)}</i>` : "") +
             `<span class="ov-titel">${r.o || r.kop}</span><small>${teken}</small></li>`;
    }).join("") +
    `</ol>`;

  // nieuwe kaart terwijl het overzicht opengeklapt is (bv. op een onderwerp getikt): terug naar boven, compact
  if (ovOpen) { ovOpen = false; vak.classList.remove("open"); document.body.classList.remove("overzicht-open"); window.scrollTo(0, 0); }
  pasOverzichtAan();
}

// staat het nummer (bv. "2.3" of "M1") al vooraan in de titel? dan tonen we het rechts niet nog eens
function nrInTitel(titel, nr) {
  if (!nr || !titel) return false;
  if (titel.startsWith(nr) && !/\d/.test(titel.charAt(nr.length))) return true;   // "2.3 De ontwikkelomgeving" – 2.3
  const m = nr.match(/^M(\d+)$/);                                                    // "Module 1: …" – M1
  return !!m && new RegExp("^Module " + m[1] + "\\b").test(titel);
}

// stand van een onderwerp: hoeveel kaarten nog onbeantwoord of fout zijn, op het totaal (zonder weggegooide)
function standVan(hfst, o) {
  const ks = (vakken[huidigVak][hfst] || []).filter(k => (k.o || hfst) === o && !verborgen.has(kaartId(huidigVak, hfst, k)));
  const open = ks.filter(k => { const s = stats[kaartId(huidigVak, hfst, k)]; return !s || s.laatst !== true; }).length;
  return { open, totaal: ks.length };
}

// huidig onderwerp in beeld houden binnen het paneel
function houdHierInBeeld(vak) {
  const hier = vak.querySelector("li.hier");
  if (hier && vak.scrollHeight > vak.clientHeight) {
    const boven = hier.offsetTop - vak.scrollTop;
    if (boven < 0 || boven > vak.clientHeight - hier.offsetHeight) vak.scrollTop = hier.offsetTop - vak.clientHeight / 3;
  }
}

/* Portret: onder het compacte overzicht staat een knop "Hele overzicht tonen". Dan klapt het
   overzicht helemaal open (geen eigen scrollbalk, je scrolt gewoon de pagina). Met "Inklappen"
   bovenaan, of bij een nieuwe kaart, wordt het weer compact. */
let ovOpen = false;
function zetOverzichtOpen(open) {
  const vak = document.getElementById("overzicht");
  if (!vak || open === ovOpen) return;
  const verschoven = vak.scrollTop;       // dezelfde onderwerpen in beeld houden bij het openklappen
  ovOpen = open;
  vak.classList.toggle("open", open);
  document.body.classList.toggle("overzicht-open", open);
  pasOverzichtAan();
  if (open) { if (verschoven > 0) window.scrollBy(0, verschoven); }
  else window.scrollTo(0, 0);
}
(function maakOverzichtKnop() {
  const vak = document.getElementById("overzicht");
  if (!vak) return;
  const knop = document.createElement("button");
  knop.id = "ovOpenKnop"; knop.className = "licht ov-open-knop"; knop.type = "button";
  knop.textContent = "⌄ Hele overzicht tonen";
  knop.onclick = () => zetOverzichtOpen(true);
  vak.after(knop);
  vak.addEventListener("click", e => { if (e.target.closest(".ov-inklap")) zetOverzichtOpen(false); });
})();

/* Portret (smal scherm): het overzicht onder de kaart krijgt een eigen scrollbalk
   en loopt tot onderaan het scherm, zodat je altijd ziet waar je bent */
function pasOverzichtAan() {
  const vak = document.getElementById("overzicht");
  if (!vak) return;
  if (window.innerWidth < 1100 && ovOpen) {
    vak.style.maxHeight = "none";        // opengeklapt: geen eigen scrollbalk, de pagina scrolt
    return;
  }
  if (window.innerWidth < 1100) {
    const boven = vak.getBoundingClientRect().top + window.scrollY;   // los van hoe ver je gescrold bent
    let hoogte = Math.max(220, window.innerHeight - boven - 16);
    vak.style.maxHeight = hoogte + "px";
    // past de pagina dan nog net niet (marges onderaan)? dan het overzicht nog iets kleiner maken
    const teVeel = document.documentElement.scrollHeight - window.innerHeight;
    if (teVeel > 0 && hoogte - teVeel >= 220) vak.style.maxHeight = (hoogte - teVeel) + "px";
  } else {
    vak.style.maxHeight = "";
  }
  houdHierInBeeld(vak);
}

/* In het overzicht op een onderwerp klikken: naar de eerste kaart van dat onderwerp
   in deze ronde springen (vooruit of terug). Kaarten die je overslaat blijven onbeantwoord. */
function eersteKaartVan(hfst, o) {
  // liefst de eerstvolgende kaart na de huidige, anders de eerste in de ronde
  const past = k => k.hfst === hfst && (k.o || k.hfst) === o;
  for (let i = index + 1; i < stapel.length; i++) if (past(stapel[i])) return i;
  return stapel.findIndex(past);
}
document.addEventListener("click", e => {
  const li = e.target.closest("#overzicht li.klikbaar");
  if (!li || bezig) return;
  const kaart = stapel[index];
  const i = eersteKaartVan(kaart.hfst, decodeURIComponent(li.dataset.o));
  if (i < 0) return;
  index = i;
  toonKaart();
});

/* Kaart laten meegroeien met een lange uitleg (in plaats van scrollen) */
/* Tekening op de kaart zetten, met een knopje om ze groot te bekijken */
function zetFiguur(id, src) {
  const vak = document.getElementById(id);
  vak.innerHTML = "";
  if (!src) return;
  const img = document.createElement("img");
  img.src = src;
  img.alt = "tekening";
  img.onload = pasHoogteAan;                        // kaart groter maken als de tekening geladen is
  img.onerror = () => { vak.innerHTML = `<div class="fig-fout">Tekening niet gevonden: ${src}</div>`; };
  const knop = document.createElement("button");
  knop.className = "vergroot";
  knop.type = "button";
  knop.title = "Groot bekijken (G)";
  knop.innerHTML = "⤢ <span class=\"toets\">G</span>";
  knop.onclick = e => { e.stopPropagation(); toonGroot(img.src); };  // niet omdraaien
  vak.append(img, knop);
}
function toonGroot(src) {
  document.getElementById("grootImg").src = src;
  document.getElementById("grootFig").classList.add("open");
}
function sluitGroot() {
  document.getElementById("grootFig").classList.remove("open");
}
// G: de tekening van de kant die je nu ziet groot tonen
function vergrootHuidige() {
  const omgedraaid = document.getElementById("kaart").classList.contains("omgedraaid");
  const img = document.querySelector((omgedraaid ? "#figAchter" : "#figVoor") + " img");
  if (img) toonGroot(img.src);
}

function pasHoogteAan() {
  // de kaart blijft altijd op de standaardhoogte (400px uit style.css):
  // wat niet past (lange uitleg, grote afbeelding, tabel) scrolt binnen de kaart
  document.getElementById("kaart").style.height = "";
  setTimeout(pasOverzichtAan, 250);   // na de animatie op de kaarthoogte staat het overzicht op zijn plaats
}

function draaiOm() {
  const kaart = document.getElementById("kaart");
  kaart.classList.toggle("omgedraaid");
  if (kaart.classList.contains("omgedraaid")) {
    document.getElementById("antwoordKnoppen").style.display = "flex";
    document.getElementById("hint").style.display = "none";
  }
}

let bezig = false;   // even wachten terwijl de kaart groen/rood oplicht
let acties = [];      // wat je deze ronde deed, om ongedaan te maken (Z)
let eindeInfo = null; // wat toonEinde veranderde, om dat ook terug te draaien

function volgende(wistHet) {
  if (bezig) return;
  const kaart = stapel[index];
  if (!wistHet) fouten.push(kaart);

  // onthoud dit antwoord voor de volgende keer
  const id = kaartId(huidigVak, kaart.hfst, kaart);
  const actie = { soort: "antwoord", index, id, vorig: stats[id] ? { ...stats[id] } : undefined, fout: !wistHet, reeks, foutReeks, kans: kansMoeilijk.has(id), aantal: aantalBeantwoord, konijnTegoed };
  actie.ingepland = planHerhaling(kaart, wistHet);   // foute kaart (of eerste juiste herhaling) later terug in de ronde
  acties.push(actie);
  const onderdeel = kaart.o || kaart.hfst;
  const openVoor = standVan(kaart.hfst, onderdeel).open;   // nog open kaarten van dit onderdeel, vóór dit antwoord
  const s = stats[id] || { goed: 0, fout: 0 };
  if (wistHet) s.goed++; else s.fout++;
  // een foute kaart gaat pas van de teller als ook de controle (na 12) juist is: de herhaling na 6 telt nog niet
  s.laatst = wistHet && !(kaart.herhaling === 1 && document.getElementById("herhalen").checked);
  // moeilijke kaart: fout, en daarna bij de herhaling of de controle nog eens fout
  const wasMoeilijk = s.moeilijk === true;
  if (!wistHet && kaart.herhaling) s.moeilijk = true;
  const werdMoeilijk = !wasMoeilijk && s.moeilijk === true;   // net een moeilijke kaart geworden? dan groot duiveltje
  // in een latere sessie de eerste keer meteen juist? dan is ze niet meer moeilijk
  if (wistHet && !kaart.herhaling) delete s.moeilijk;
  let viaKans = false;
  // één kans: net moeilijk geworden, of een moeilijke kaart de eerste keer in deze sessie weer fout
  if (!wistHet && (werdMoeilijk || (wasMoeilijk && !kaart.herhaling))) kansMoeilijk.add(id);
  else if (!wistHet && wasMoeilijk && kaart.herhaling) kansMoeilijk.delete(id);   // nog eens fout: kans weg
  // of in dezelfde sessie: eerstvolgende herhaling én controle juist (de controle komt enkel na een juiste herhaling)
  if (wistHet && kaart.herhaling === 2 && document.getElementById("herhalen").checked && kansMoeilijk.has(id)) {
    delete s.moeilijk; kansMoeilijk.delete(id); viaKans = true;
  }
  // groen paardje telkens als de kaart van de stapel moeilijk gaat: via haar "één kans" in deze sessie,
  // of een moeilijke kaart uit een vorige sessie die je meteen juist hebt
  const overwonnen = viaKans || (wasMoeilijk && !s.moeilijk);
  stats[id] = s;
  bewaar("stats", stats);
  // laatste open kaart van dit onderdeel juist? dan springt het op ✓ (en komt de gele eenhoorn)
  const onderdeelKlaar = wistHet && openVoor > 0 && standVan(kaart.hfst, onderdeel).open === 0;
  reeks = wistHet ? reeks + 1 : 0;
  if (wistHet) aantalBeantwoord++;   // enkel juiste antwoorden tellen (ook herhalingen en controles)
  // beloningen, telkens maar één tegelijk. Voorrang: gele eenhoorn > groen paardje > konijntje > draakje
  // (zeldzaam en betekenisvol gaat voor op vaak en voorspelbaar)
  const geelNu = onderdeelKlaar;                                            // laatste open kaart van het onderdeel juist
  const paardjeNu = overwonnen && !geelNu;                                  // kaart van de stapel moeilijk
  if (wistHet && aantalBeantwoord % 15 === 0) konijnTegoed = true;          // om de 15 juiste antwoorden in een ronde (niet op rij)
  const konijnNu = wistHet && konijnTegoed && !geelNu && !paardjeNu;        // valt het samen met eenhoorn of paardje: bij het volgende juiste antwoord
  if (konijnNu) konijnTegoed = false;
  const draakNu = wistHet && reeks % 3 === 0 && !geelNu && !paardjeNu && !konijnNu;   // 3, 6, 9 ... op rij juist
  if (geelNu) toonGeleEenhoorn();
  if (paardjeNu) toonEenhoorn();
  if (konijnNu) toonKonijn();
  if (draakNu) toonDraak();
  // controle juist, maar de kaart blijft op de stapel moeilijk: groene ster (voorlopig altijd, ook samen met iets anders)
  if (wistHet && kaart.herhaling === 2 && document.getElementById("herhalen").checked && s.moeilijk === true) toonGroeneSter();
  foutReeks = wistHet ? 0 : foutReeks + 1;
  if (werdMoeilijk) toonGrootDuiveltje();                 // kaart wordt moeilijk: groot duiveltje dat in 5 kleintjes ontploft
  else if (foutReeks === 3) toonDuiveltje();               // 3 op rij fout: duiveltje (1 keer per foute reeks)

  // rand van de kaart even groen (juist) of rood (fout) laten oplichten
  const kaartEl = document.getElementById("kaart");
  const flits = wistHet ? "flits-goed" : "flits-fout";
  kaartEl.classList.add(flits);
  bezig = true;
  setTimeout(() => {
    kaartEl.classList.remove(flits);
    bezig = false;
    index++;
    if (index < stapel.length) toonKaart();
    else toonEinde();
  }, 450);
}

/* ---------- Ongedaan maken (Z) ----------
   Zet je laatste antwoord of weggegooide kaart terug, ook vanaf het eindscherm.
   De kaart komt terug met het antwoord zichtbaar, zodat je meteen opnieuw kan kiezen. */
function maakOngedaan() {
  if (bezig || acties.length === 0) return;
  const actie = acties.pop();

  // kwam je van het eindscherm? dan ook de bewaarde score en positie terugdraaien
  if (document.getElementById("schermEinde").classList.contains("actief") && eindeInfo) {
    if (eindeInfo.scoreBewaard && scores[huidigVak]) { scores[huidigVak].pop(); bewaar("scores", scores); }
    hervatbaar = eindeInfo.hervatbaar;
    if (eindeInfo.positie) { posities[positieSleutel()] = eindeInfo.positie; bewaar("posities", posities); }
    eindeInfo = null;
  }

  if (actie.soort === "antwoord") {
    if (actie.vorig) stats[actie.id] = actie.vorig; else delete stats[actie.id];
    if (actie.kans) kansMoeilijk.add(actie.id); else kansMoeilijk.delete(actie.id);   // kans terug zoals vóór dit antwoord
    bewaar("stats", stats);
    if (actie.fout) fouten.pop();
    if (actie.ingepland >= 0) stapel.splice(actie.ingepland, 1);
  } else {
    verborgen.delete(actie.id);
    bewaarVerborgen();
    stapel.splice(actie.index, 0, actie.kaart);
    for (const [i, k] of actie.kopies || []) stapel.splice(i, 0, k);   // ook de ingeplande herhalingen terug
  }
  reeks = actie.reeks;
  if (actie.aantal !== undefined) aantalBeantwoord = actie.aantal;
  if (actie.konijnTegoed !== undefined) konijnTegoed = actie.konijnTegoed;
  foutReeks = actie.foutReeks;
  index = actie.index;
  toonScherm("schermOefenen");
  toonKaart();
  setTimeout(draaiOm, 260);   // na het invullen van de achterkant
}

function zetOngedaanKnoppen() {
  document.querySelectorAll(".ongedaan").forEach(k => k.disabled = acties.length === 0);
}

function gooiWeg() {
  if (bezig) return;
  const kaart = stapel[index];
  acties.push({ soort: "weg", index, kaart, id: kaartId(huidigVak, kaart.hfst, kaart), reeks, foutReeks });
  verborgen.add(kaartId(huidigVak, kaart.hfst, kaart));
  bewaarVerborgen();
  stapel.splice(index, 1);
  // ingeplande herhalingen van dezelfde kaart ook weghalen (en onthouden voor ongedaan maken)
  const weg = acties[acties.length - 1];
  weg.kopies = [];
  for (let i = stapel.length - 1; i >= index; i--) {
    const k = stapel[i];
    if (k.herhaling && k.hfst === kaart.hfst && k.v === kaart.v) { weg.kopies.unshift([i, k]); stapel.splice(i, 1); }
  }
  if (index < stapel.length) toonKaart();
  else toonEinde();
}

function toonEinde() {
  eindeInfo = { hervatbaar, positie: posities[positieSleutel()], scoreBewaard: false };
  // hoofdstuk helemaal doorlopen: volgende keer begin je terug vooraan
  if (hervatbaar) { delete posities[positieSleutel()]; bewaar("posities", posities); hervatbaar = false; }
  const score = document.getElementById("score");
  if (stapel.length === 0) {
    score.textContent = "Geen kaarten meer";
  } else {
    // herhalingen tellen niet mee in de score: enkel je eerste antwoord per kaart
    const gewoon = stapel.filter(k => !k.herhaling).length;
    const goed = gewoon - fouten.filter(k => !k.herhaling).length;
    score.textContent = `${goed} / ${gewoon}`;

    // score bewaren in de geschiedenis van dit vak (max. 20)
    const lijst = scores[huidigVak] || [];
    const nu = new Date();
    lijst.push({
      datum: nu.toLocaleDateString("nl-BE") + " " + nu.toLocaleTimeString("nl-BE", { hour: "2-digit", minute: "2-digit" }),
      goed: goed,
      totaal: gewoon,
    });
    scores[huidigVak] = lijst.slice(-20);
    bewaar("scores", scores);
    eindeInfo.scoreBewaard = true;
  }
  // titel: "Klaar met IT Essentials – II.2 Werkgeheugen" (meerdere hoofdstukken: enkel hun nummers)
  const vakTitel = vakZonderEmoji(huidigVak);
  const namen = gekozenHoofdstukken || [];
  const deel = namen.length === 1 ? namen[0].replace(" – ", " ") : namen.map(h => h.split(" – ")[0]).join(", ");
  document.getElementById("eindeTitel").textContent = deel ? `Klaar met ${vakTitel} – ${deel}` : `Klaar met ${vakTitel}`;
  // knop met de naam van het vak, bv. "Terug naar de hoofdstukken van IT Essentials"
  const vakNaam = huidigVak.replace(/^\S+\s/, "");   // emoji vooraan weglaten
  document.getElementById("terugHoofdstukken").textContent = `Terug naar de hoofdstukken van ${vakNaam}`;
  toonScherm("schermEinde");
  zetOngedaanKnoppen();
}

function herhaalFouten() {
  startOefenen(fouten.filter(k => !k.herhaling));
}

/* ===== Foute kaarten herhalen tijdens het oefenen (vinkje op het hoofdstukkenscherm) =====
   Gespreide herhaling: een foute kaart komt terug na 6 kaarten. Juist bij die herhaling?
   Dan nog één controle na 12 kaarten. Weer fout? Dan opnieuw na 6. Wat op het einde van de
   ronde nog openstaat, komt vóór het eindscherm. */
const HERHAAL_NA = { 1: 6, 2: 12 };
function planHerhaling(kaart, wistHet) {
  if (!document.getElementById("herhalen").checked) return -1;
  let niveau = 0;
  if (!wistHet) niveau = 1;                                // fout: na 6 kaarten terug
  else if (kaart.herhaling === 1) niveau = 2;              // eerste herhaling juist: nog eens na 12
  if (!niveau) return -1;                                  // gewone kaart juist, of de controle na 12 juist: klaar
  const kopie = { ...kaart, herhaling: niveau };
  const plek = Math.min(index + 1 + HERHAAL_NA[niveau], stapel.length);
  stapel.splice(plek, 0, kopie);
  return plek;
}
function zetHerhaalLabel(kaart) {
  for (const id of ["onderwerpVoor", "onderwerpAchter"]) {
    const el = document.getElementById(id);
    el.querySelector(".herhaal-label")?.remove();
    el.querySelector(".extra-label")?.remove();
    if (kaart.extra) {
      const lab = document.createElement("span");
      lab.className = "extra-label";
      lab.textContent = "Extra info, niet uit de cursus · ";
      el.prepend(lab);
    }
    if (kaart.herhaling) {
      const lab = document.createElement("span");
      lab.className = "herhaal-label";
      lab.textContent = kaart.herhaling === 2 ? "↻ Controle · " : "↻ Herhaling · ";
      el.prepend(lab);
    }
  }
}

/* ===== Beloning: groene eenhoorn =====
   Een moeilijke kaart die je in een latere sessie de eerste keer meteen juist hebt, gaat van de stapel
   moeilijke kaarten: dan galoppeert de groene eenhoorn over het scherm (het omgekeerde van het grote duiveltje). */
const EENHOORN_SVG = `
<svg viewBox="-30 -30 180 160" aria-hidden="true">
<path class="eh-tw" d="M-22 60 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#DCDCAA"/>
<path class="eh-tw" d="M-8 88 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#9FE1CB"/>
<g transform="translate(70,90)"><g class="eh-rock eh-p"><g transform="translate(-70,-90)">
<g transform="translate(42,58)"><g class="eh-hair eh-p"><g transform="translate(-42,-58)">
<path d="M44 56 Q22 44 12 62 Q2 82 12 106 Q12 92 20 88 Q16 104 28 112 Q26 96 34 88 Q30 100 40 104 Q36 86 42 76 Q46 66 48 62Z" fill="#3B6D11"/>
<path d="M40 60 Q22 58 18 76 Q16 88 22 96 Q22 82 30 76 Q28 88 34 94 Q34 78 42 68Z" fill="#6A9955"/>
<path d="M30 64 Q22 74 24 88" stroke="#97C459" stroke-width="1.4" fill="none" stroke-linecap="round"/>
</g></g></g>
<g transform="translate(82,55)"><g class="eh-vl2 eh-p">
<path d="M0 4 Q-4 -26 -30 -48 Q-34 -50 -36 -46 Q-28 -40 -32 -32 Q-40 -34 -42 -30 Q-32 -22 -34 -16 Q-42 -16 -42 -12 Q-30 -6 -26 -2 Q-30 2 -28 6 Q-14 10 0 10Z" fill="#2E8B6E"/>
<path d="M-2 6 Q-6 -18 -24 -36 Q-20 -22 -24 -12 Q-14 -8 -14 2Z" fill="#3FB68E"/>
<path d="M-4 2 Q-14 -14 -30 -30 M-6 4 Q-18 -6 -34 -14 M-8 6 Q-18 2 -26 2" stroke="#5DCAA5" stroke-width="1.3" fill="none" stroke-linecap="round"/>
</g></g>
<g transform="translate(45,70)"><g class="eh-hu2 eh-p"><path d="M-8 -8 L6 -8 L3.5 22 L-3 22Z" fill="#2E8B6E"/><g transform="translate(0,21)"><g class="eh-hk2 eh-p"><rect x="-2.5" y="-1" width="5" height="18" rx="2.5" fill="#2E8B6E"/><path d="M-4 13 L4 13 L5 16 L-5 16Z" fill="#5DCAA5"/><path d="M-4 15 L4 15 L6 22 L-6 22Z" fill="#173404"/></g></g></g></g>
<g transform="translate(88,70)"><g class="eh-fu2 eh-p"><path d="M-5 -6 L5 -6 L3 22 L-3 22Z" fill="#2E8B6E"/><g transform="translate(0,21)"><g class="eh-fk2 eh-p"><rect x="-2.5" y="-1" width="5" height="18" rx="2.5" fill="#2E8B6E"/><path d="M-4 13 L4 13 L5 16 L-5 16Z" fill="#5DCAA5"/><path d="M-4 15 L4 15 L6 22 L-6 22Z" fill="#173404"/></g></g></g></g>
<circle cx="50" cy="62" r="17" fill="#3FB68E"/>
<ellipse cx="70" cy="66" rx="28" ry="15" fill="#3FB68E"/>
<circle cx="90" cy="64" r="15" fill="#3FB68E"/>
<path d="M58 78 Q70 82 84 78" stroke="#2E8B6E" stroke-width="1.2" fill="none" stroke-linecap="round"/>
<g transform="translate(52,72)"><g class="eh-hu1 eh-p"><path d="M-9 -8 L7 -8 L4 22 L-3 22Z" fill="#3FB68E"/><g transform="translate(0,21)"><g class="eh-hk1 eh-p"><rect x="-2.5" y="-1" width="5" height="18" rx="2.5" fill="#3FB68E"/><path d="M-4 13 L4 13 L5 16 L-5 16Z" fill="#9FE1CB"/><path d="M-4 15 L4 15 L6 22 L-6 22Z" fill="#27500A"/></g></g></g></g>
<g transform="translate(94,72)"><g class="eh-fu1 eh-p"><path d="M-6 -6 L6 -6 L3.5 22 L-3.5 22Z" fill="#3FB68E"/><g transform="translate(0,21)"><g class="eh-fk1 eh-p"><rect x="-2.5" y="-1" width="5" height="18" rx="2.5" fill="#3FB68E"/><path d="M-4 13 L4 13 L5 16 L-5 16Z" fill="#9FE1CB"/><path d="M-4 15 L4 15 L6 22 L-6 22Z" fill="#27500A"/></g></g></g></g>
<text x="40" y="66" font-size="11" font-family="monospace" fill="#085041">&lt;/&gt;</text>
<g transform="translate(82,55)"><g class="eh-vl1 eh-p">
<path d="M0 4 Q-4 -26 -30 -48 Q-34 -50 -36 -46 Q-28 -40 -32 -32 Q-40 -34 -42 -30 Q-32 -22 -34 -16 Q-42 -16 -42 -12 Q-30 -6 -26 -2 Q-30 2 -28 6 Q-14 10 0 10Z" fill="#9FE1CB"/>
<path d="M-2 6 Q-6 -18 -24 -36 Q-20 -22 -24 -12 Q-14 -8 -14 2Z" fill="#DDF5EC"/>
<path d="M-4 2 Q-14 -14 -30 -30 M-6 4 Q-18 -6 -34 -14 M-8 6 Q-18 2 -26 2" stroke="#5DCAA5" stroke-width="1.3" fill="none" stroke-linecap="round"/>
</g></g>
<g transform="translate(92,58)"><g class="eh-nod eh-p"><g transform="translate(-92,-58)">
<path d="M82 60 Q84 36 104 20 L126 30 Q108 44 104 70Z" fill="#3FB68E"/>
<path d="M110 0 Q92 -6 86 12 Q76 20 80 36 Q72 46 78 60 Q82 52 88 54 Q84 42 94 38 Q90 28 100 26 Q98 16 110 14Z" fill="#3B6D11"/>
<path d="M104 6 Q92 8 90 22 Q86 32 88 44 Q92 34 98 30 Q94 22 102 16Z" fill="#6A9955"/>
<path d="M96 12 Q88 22 90 34 M86 40 Q82 48 84 56" stroke="#97C459" stroke-width="1.3" fill="none" stroke-linecap="round"/>
<circle cx="118" cy="22" r="17" fill="#3FB68E"/>
<ellipse cx="134" cy="32" rx="12" ry="10" fill="#52C49A"/>
<ellipse cx="139" cy="29" rx="1.6" ry="2.2" fill="#085041"/>
<path d="M129 39 q5 4 10 0" stroke="#085041" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<path d="M106 8 Q100 -12 113 -7 Q116 1 114 9Z" fill="#3FB68E"/>
<path d="M108 4 Q105 -6 111 -4 Q112 1 111 6Z" fill="#9FE1CB"/>
<path d="M120 6 L131 -20 L126 8Z" fill="#DCDCAA"/>
<path d="M124 -4 l5 1.5 M122 2 l5 1.5 M127 -11 l3 1" stroke="#BA7517" stroke-width="1.2"/>
<path d="M110 2 Q122 -8 132 4 Q126 2 124 10 Q120 3 114 12 Q112 6 108 8Z" fill="#3B6D11"/>
<path d="M116 2 Q123 -2 128 4 Q122 3 120 7Z" fill="#6A9955"/>
<ellipse cx="122" cy="22" rx="7" ry="8.5" fill="#fff"/>
<ellipse cx="123.5" cy="23" rx="5.5" ry="7" fill="#0F6E56"/>
<circle cx="124" cy="24" r="3.4" fill="#04342C"/>
<circle cx="125.8" cy="20.5" r="2" fill="#fff"/>
<circle cx="122" cy="27" r="1" fill="#fff"/>
<path d="M115.5 16 Q122 11 129 15.5 M128 15 l3.5 -3 M126 13.5 l2 -4 M123 13 l0.5 -4" stroke="#04342C" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<ellipse cx="125" cy="33" rx="4" ry="2.2" fill="#F4C0D1"/>
</g></g></g>
</g></g></g>
</svg>`;

/* Groene eenhoorn (nu): galoppeert horizontaal over het hele scherm, ter hoogte van het midden van de kaart. */
const EH_GALOP = 4000, EH_HOEK = 0, EH_BREEDTE = 180;   // ms over het hele scherm, stijghoek in graden (0 = horizontaal), breedte in px
function toonEenhoorn() {
  const oud = document.getElementById("eenhoorn");
  if (oud) oud.remove();                 // nooit twee tegelijk
  const laag = document.createElement("div");
  laag.id = "eenhoorn";
  laag.innerHTML = `<div class="eh-loper"><div class="eh-steiger">${EENHOORN_SVG}</div></div>`;
  document.body.appendChild(laag);
  laag.querySelectorAll(".eh-tw").forEach(e => e.remove());   // vaste fonkelsterretjes weg: de sterretjes stuiven nu op met de stofwolk
  const loper = laag.querySelector(".eh-loper");
  loper.style.width = EH_BREEDTE + "px";        // iets groter dan de gewone 150px
  const helling = Math.tan(EH_HOEK * Math.PI / 180);
  const begin = performance.now();
  function beeld(nu) {
    if (!laag.isConnected) return;
    const u = (nu - begin) / EH_GALOP;
    if (u >= 1) { laag.remove(); return; }
    const k = document.getElementById("kaart"), r = k ? k.getBoundingClientRect() : null;
    const midden = r && r.height && r.bottom > 0 && r.top < window.innerHeight ? r.top + r.height / 2 : window.innerHeight / 2;
    const w = loper.offsetWidth, h = loper.offsetHeight;
    const x = -w + (window.innerWidth + w) * u;
    const y = midden - h / 2 - (x + w / 2 - window.innerWidth / 2) * helling;   // licht stijgend, midden van het scherm = midden van de kaart
    loper.style.transform = `translate(${x}px, ${y}px) rotate(${-EH_HOEK}deg)`;
    loper.style.opacity = u < 0.04 ? u / 0.04 : u > 0.96 ? (1 - u) / 0.04 : 1;
    if (nu - laatsteStof > 55 && u < 0.97) { laatsteStof = nu; stofwolkje(laag, x + w * 0.22, y + h * 0.86); }
    requestAnimationFrame(beeld);
  }
  let laatsteStof = 0;
  requestAnimationFrame(beeld);
  setTimeout(() => laag.remove(), EH_GALOP + 1500); // vangnet
}

/* Stofwolkje (en soms een sterretje) dat achter de galopperende eenhoorn opstuift. */
function stofwolkje(laag, x, y) {
  const ster = Math.random() < 0.4;
  x -= Math.random() * 50;                      // wolkjes en sterretjes door elkaar langs het spoor
  const d = document.createElement("div");
  const g = ster ? 10 + Math.random() * 8 : 14 + Math.random() * 16;
  d.style.cssText = `position:absolute;left:${x - g / 2}px;top:${y - g / 2 + (Math.random() - 0.5) * 30}px;width:${g}px;height:${g}px;pointer-events:none;`;
  if (ster) {
    const kleur = Math.random() < 0.5 ? "#FFD866" : "#4EC9B0";
    d.innerHTML = `<svg viewBox="0 0 20 20" width="100%" height="100%"><path d="M10 0 L12.5 7.5 L20 10 L12.5 12.5 L10 20 L7.5 12.5 L0 10 L7.5 7.5 Z" fill="${kleur}"/></svg>`;
  } else {
    d.style.borderRadius = "50%";
    d.style.background = "radial-gradient(circle, rgba(210,200,180,0.75) 0%, rgba(190,180,160,0.45) 55%, rgba(190,180,160,0) 72%)";
  }
  laag.insertBefore(d, laag.firstChild);   // achter de eenhoorn
  const dx = -(20 + Math.random() * 50), dy = -(10 + Math.random() * 35), duur = 800 + Math.random() * 600;
  const a = d.animate(ster ? [                    // sterretjes blijven even lang zichtbaar als de wolkjes
    { transform: "translate(0,0) scale(0.6) rotate(0deg)", opacity: 1 },
    { transform: `translate(${dx * 0.75}px,${dy * 0.75}px) scale(1) rotate(140deg)`, opacity: 0.9, offset: 0.7 },
    { transform: `translate(${dx}px,${dy}px) scale(0.8) rotate(200deg)`, opacity: 0 }
  ] : [
    { transform: "translate(0,0) scale(0.5)", opacity: 0.9 },
    { transform: `translate(${dx}px,${dy}px) scale(2.2)`, opacity: 0 }
  ], { duration: ster ? duur * 1.4 : duur, easing: "ease-out", fill: "forwards" });
  a.onfinish = () => d.remove();
}

/* ===== Beloning: draakje =====
   Telkens als je 3 kaarten op rij juist hebt (3, 6, 9 ...) vliegt er rechts een
   blauw draakje zigzaggend van onder naar boven. Op ¾ hoogte spuwt hij blauw vuur.
   Een fout zet de reeks terug op 0. */
let reeks = 0;

const DRAAK_SVG = `
<svg viewBox="-60 0 220 165" aria-hidden="true">
<path class="dr-tw" d="M86 140 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill="#9CDCFE"/>
<path class="dr-tw" d="M104 152 l2 4.5 4.5 2 -4.5 2 -2 4.5 -2 -4.5 -4.5 -2 4.5 -2z" fill="#50FA7B"/>
<g class="dr-bob">
<g transform="translate(100,82)"><g class="dr-wf dr-p"><path d="M0 0 Q14 -34 40 -40 Q36 -28 44 -22 Q34 -18 38 -8 Q26 -8 24 4 Q12 -2 0 8Z" fill="#1E5A8A"/></g></g>
<g transform="translate(98,112)"><g class="dr-tail dr-p"><g transform="translate(-98,-112)">
<path d="M98 110 Q118 122 114 136 Q111 146 124 144" stroke="#569CD6" stroke-width="9" fill="none" stroke-linecap="round"/>
<path d="M121 139 Q132 134 136 142 Q130 150 124 150Z" fill="#4FC1FF"/>
</g></g></g>
<circle cx="104" cy="88" r="3.5" fill="#4FC1FF"/>
<circle cx="107" cy="98" r="3.5" fill="#4FC1FF"/>
<circle cx="106" cy="108" r="3" fill="#4FC1FF"/>
<ellipse cx="88" cy="100" rx="19" ry="22" fill="#569CD6"/>
<ellipse cx="82" cy="104" rx="11" ry="15" fill="#9CDCFE"/>
<path d="M74 97 h15 M73 104 h17 M75 111 h13" stroke="#7DB9E8" stroke-width="1.4" stroke-linecap="round"/>
<text x="93" y="104" font-size="9" font-family="monospace" fill="#0E3A5F">{}</text>
<ellipse cx="79" cy="121" rx="6.5" ry="4.5" fill="#3F7FBF"/>
<ellipse cx="94" cy="122" rx="6.5" ry="4.5" fill="#3F7FBF"/>
<g transform="translate(74,90)"><g class="dr-arm dr-p"><ellipse cx="-3" cy="-6" rx="4" ry="7" fill="#3F7FBF"/></g></g>
<g transform="translate(97,86)"><g class="dr-wn dr-p">
<path d="M0 0 Q20 -32 48 -34 Q42 -22 50 -13 Q40 -11 42 0 Q30 -1 28 10 Q14 4 0 9Z" fill="#007ACC"/>
<path d="M2 2 L48 -34 M2 4 L50 -13 M2 6 L42 0 M2 8 L28 10" stroke="#4FC1FF" stroke-width="1.5" stroke-linecap="round"/>
</g></g>
<g transform="translate(76,74)"><g class="dr-head dr-p"><g transform="translate(-76,-74)">
<ellipse cx="72" cy="30" rx="5" ry="8" fill="#9CDCFE" transform="rotate(25 72 30)"/>
<ellipse cx="57" cy="28" rx="4.5" ry="7.5" fill="#9CDCFE" transform="rotate(-10 57 28)"/>
<path d="M84 46 l12 -3 -6 10Z" fill="#4FC1FF"/>
<circle cx="64" cy="54" r="25" fill="#569CD6"/>
<ellipse cx="44" cy="64" rx="12" ry="9" fill="#7DB9E8"/>
<circle cx="38" cy="60" r="1.3" fill="#0E3A5F"/>
<circle cx="43" cy="59" r="1.3" fill="#0E3A5F"/>
<path d="M37 67 Q45 79 54 67Z" fill="#0E3A5F"/>
<ellipse cx="46" cy="73" rx="4" ry="2.6" fill="#F4C0D1"/>
<g class="dr-open">
<ellipse cx="62" cy="50" rx="9" ry="10.5" fill="#0B1E2D"/>
<ellipse cx="62" cy="55" rx="6" ry="4.5" fill="#2E9E5B"/>
<circle cx="59" cy="46" r="3.4" fill="#fff"/>
<circle cx="65.5" cy="55" r="1.6" fill="#fff"/>
</g>
<path class="dr-happy" d="M54 52 Q62 42 70 52" stroke="#0B1E2D" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="75" cy="64" rx="5.5" ry="3.2" fill="#F4C0D1"/>
<ellipse cx="44" cy="54" rx="3" ry="2" fill="#F4C0D1"/>
<g transform="translate(36,66)"><g class="dr-flame dr-p"><g class="dr-flick dr-p">
<path d="M0 0 Q-20 -16 -52 -12 Q-42 -5 -76 -3 Q-46 4 -64 13 Q-32 11 -18 15 Q-8 9 0 5Z" fill="#007ACC"/>
<path d="M0 1 Q-16 -9 -42 -7 Q-32 0 -54 2 Q-30 6 -15 10 Q-6 6 0 4Z" fill="#4FC1FF"/>
<path d="M0 2 Q-10 -3 -26 -1 Q-13 4 0 3.5Z" fill="#E8F7FF"/>
<path d="M-74 -14 l1.6 3.6 3.6 1.6 -3.6 1.6 -1.6 3.6 -1.6 -3.6 -3.6 -1.6 3.6 -1.6z" fill="#9CDCFE"/>
<path d="M-84 6 l1.4 3 3 1.4 -3 1.4 -1.4 3 -1.4 -3 -3 -1.4 3 -1.4z" fill="#50FA7B"/>
<circle cx="-66" cy="18" r="1.6" fill="#4FC1FF"/>
</g></g></g>
</g></g></g>
</g>
</svg>`;

function toonDraak() {
  const oud = document.getElementById("draakje");
  if (oud) oud.remove();                 // nooit twee tegelijk
  const laag = document.createElement("div");
  laag.id = "draakje";
  laag.innerHTML = `<div class="dr-vlieger"><div class="dr-zig">${DRAAK_SVG}</div></div>`;
  document.body.appendChild(laag);
  const duur = 6286;                     // 4,4 s op snelheid 0,7
  // op ¾ hoogte vuur spuwen (zelfde moment als in de mockup)
  setTimeout(() => laag.classList.add("vuur"), duur * 0.56);
  setTimeout(() => laag.classList.remove("vuur"), duur * 0.72);
  setTimeout(() => laag.remove(), duur + 300);
}

/* ===== Roos konijntje: om de 15 juiste antwoorden in een ronde =====
   Hopt over de hele breedte van het scherm, ter hoogte van de onderste rand van het kaartje. */
let aantalBeantwoord = 0;
let konijnTegoed = false;   // konijntje uitgesteld omdat de gele eenhoorn of het groene paardje voorging
const KONIJN_SVG = `
<svg viewBox="0 0 120 120" aria-hidden="true">
<g class="ko-lijf">
<ellipse cx="22" cy="86" rx="11" ry="10" fill="#FDE7F1"/>
<g transform="translate(70,30)"><g class="ko-oorA ko-p"><path d="M-6 0 Q-14 -34 -4 -40 Q4 -36 2 0Z" fill="#E879B4"/><path d="M-4 -4 Q-9 -28 -3 -33 Q1 -30 0 -4Z" fill="#FBC4DF"/></g></g>
<ellipse cx="60" cy="80" rx="34" ry="24" fill="#F28CC4"/>
<ellipse cx="56" cy="86" rx="18" ry="13" fill="#FBC4DF"/>
<text x="45" y="90" font-size="11" font-family="monospace" fill="#8E2F64">&lt;/&gt;</text>
<g transform="translate(40,98)"><g class="ko-poot ko-p"><ellipse cx="0" cy="4" rx="13" ry="6" fill="#E879B4"/></g></g>
<g transform="translate(78,100)"><ellipse cx="0" cy="3" rx="7" ry="5" fill="#E879B4"/></g>
<circle cx="86" cy="52" r="22" fill="#F28CC4"/>
<g transform="translate(82,32)"><g class="ko-oorB ko-p"><path d="M-6 0 Q-12 -38 0 -44 Q10 -40 6 0Z" fill="#F28CC4"/><path d="M-3 -4 Q-7 -32 1 -37 Q6 -33 3 -4Z" fill="#FBC4DF"/></g></g>
<rect x="78" y="44" width="28" height="10" rx="4" fill="#1E1E1E"/>
<rect x="80" y="46" width="10" height="6" rx="2" fill="#50FA7B"/>
<rect x="94" y="46" width="10" height="6" rx="2" fill="#50FA7B"/>
<path d="M90 49 h4" stroke="#1E1E1E" stroke-width="2"/>
<ellipse cx="106" cy="60" rx="3" ry="2.4" fill="#C586C0"/>
<path d="M101 66 q4 3 8 0" stroke="#8E2F64" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<ellipse cx="94" cy="64" rx="4" ry="2.4" fill="#FFB3D9"/>
</g>
</svg>`;
function toonKonijn() {
  const oud = document.getElementById("konijn");
  if (oud) oud.remove();
  const laag = document.createElement("div");
  laag.id = "konijn";
  laag.innerHTML = `<div class="ko-loper">${KONIJN_SVG}</div>`;
  document.body.appendChild(laag);
  const loper = laag.querySelector(".ko-loper");
  const rustig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DUUR = 6500, HOPS = 11, begin = performance.now();
  function beeld(nu) {
    if (!laag.isConnected) return;
    const t = (nu - begin) / DUUR;
    if (t >= 1) { laag.remove(); return; }
    const k = document.getElementById("kaart"), r = k ? k.getBoundingClientRect() : null;
    const onder = r && r.height ? r.bottom : window.innerHeight;
    const w = loper.offsetWidth, h = loper.offsetHeight;
    const x = -w + (window.innerWidth + w) * t;                         // van links buiten tot rechts buiten het scherm
    const ph = (t * HOPS) % 1, hop = rustig ? 0 : -46 * Math.sin(Math.PI * ph);
    const sq = ph < 0.08 || ph > 0.94 ? 0.86 : 1;                       // inveren bij afzet en landing
    loper.style.transform = `translate(${x}px, ${onder - h * 0.93 + hop}px) scale(${2 - sq}, ${sq})`;
    loper.style.opacity = t < 0.06 ? t / 0.06 : t > 0.92 ? (1 - t) / 0.08 : 1;
    requestAnimationFrame(beeld);
  }
  requestAnimationFrame(beeld);
}

/* ===== Duiveltje: 3 kaarten op rij fout =====
   Hopt op een derde van links van boven naar beneden en ontploft in wolkjes en
   codetekentjes zodra zijn voetjes de onderkant van het scherm raken.
   Eén keer per foute reeks: pas na een juist antwoord kan hij opnieuw komen. */
let foutReeks = 0;
/* Moeilijke kaarten met nog één kans in deze sessie: wordt een kaart moeilijk (of had je een moeilijke kaart
   de eerste keer weer fout), dan gaat ze enkel van de stapel moeilijk als de eerstvolgende herhaling én de
   controle juist zijn. Eén fout daartussen = kans weg tot een volgende sessie. */
let kansMoeilijk = new Set();

const DUIVEL_SVG = `
<svg viewBox="0 0 170 180" aria-hidden="true"><g class="du-hop">
<g transform="translate(66,100)"><g class="du-wl du-p"><path d="M0 0 Q-24 -30 -46 -22 Q-38 -14 -44 -4 Q-32 -6 -32 6 Q-20 0 -16 12 Q-8 4 0 8Z" fill="#8E5A8A"/><path d="M-2 2 L-46 -22 M-2 4 L-44 -4 M-2 6 L-32 6" stroke="#C586C0" stroke-width="1.4" stroke-linecap="round"/></g></g>
<g transform="translate(104,100)"><g class="du-wr du-p"><path d="M0 0 Q24 -30 46 -22 Q38 -14 44 -4 Q32 -6 32 6 Q20 0 16 12 Q8 4 0 8Z" fill="#8E5A8A"/><path d="M2 2 L46 -22 M2 4 L44 -4 M2 6 L32 6" stroke="#C586C0" stroke-width="1.4" stroke-linecap="round"/></g></g>
<g transform="translate(100,138)"><g class="du-tail du-p">
<path d="M0 0 Q22 8 26 -8 Q30 -24 44 -22" stroke="#D9474F" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M40 -30 Q54 -30 52 -18 Q46 -12 40 -14 Q44 -22 40 -30Z" fill="#D9474F"/>
</g></g>
<ellipse cx="73" cy="158" rx="8" ry="5" fill="#A8323A"/>
<ellipse cx="97" cy="158" rx="8" ry="5" fill="#A8323A"/>
<ellipse cx="85" cy="128" rx="23" ry="26" fill="#F0626A"/>
<ellipse cx="85" cy="133" rx="14" ry="17" fill="#F7B0B3"/>
<text x="76" y="137" font-size="11" font-family="monospace" fill="#8A2A31">!=</text>
<g transform="translate(60,118)"><g class="du-fork du-p">
<rect x="-10" y="-62" width="3.5" height="80" rx="1.75" fill="#DCDCAA" transform="rotate(-8)"/>
<path d="M-26 -66 Q-25 -56 -16 -55 L-6 -56 Q2 -58 2 -68 L-2 -66 Q-3 -61 -7 -61 L-9 -72 L-13 -60 Q-20 -60 -22 -66Z" fill="#DCDCAA" transform="rotate(-8)"/>
<ellipse cx="-2" cy="0" rx="5.5" ry="7" fill="#D9474F"/>
</g></g>
<g transform="translate(108,116)"><g class="du-arm du-p"><ellipse cx="4" cy="-8" rx="5" ry="8" fill="#D9474F"/></g></g>
<path d="M58 44 Q50 22 62 12 Q62 28 70 38Z" fill="#DCDCAA"/>
<path d="M112 44 Q120 22 108 12 Q108 28 100 38Z" fill="#DCDCAA"/>
<path d="M58 66 L46 56 L58 78Z" fill="#F0626A"/>
<path d="M112 66 L124 56 L112 78Z" fill="#F0626A"/>
<circle cx="85" cy="70" r="30" fill="#F0626A"/>
<path d="M70 44 Q78 52 85 44 Q92 52 100 44 Q92 40 85 41 Q78 40 70 44Z" fill="#D9474F"/>
<ellipse cx="73" cy="70" rx="7.5" ry="9" fill="#2A0E14"/><ellipse cx="97" cy="70" rx="7.5" ry="9" fill="#2A0E14"/>
<ellipse cx="73" cy="74" rx="5" ry="3.5" fill="#2E9E5B"/><ellipse cx="97" cy="74" rx="5" ry="3.5" fill="#2E9E5B"/>
<circle cx="70.5" cy="66" r="2.8" fill="#fff"/><circle cx="94.5" cy="66" r="2.8" fill="#fff"/>
<circle cx="75.5" cy="74" r="1.2" fill="#fff"/><circle cx="99.5" cy="74" r="1.2" fill="#fff"/>
<path d="M65 58 L79 61 M105 58 L91 61" stroke="#8A2A31" stroke-width="2.4" stroke-linecap="round"/>
<path d="M74 84 Q85 96 98 83 Q86 88 74 84Z" fill="#5A1A22"/>
<path d="M91 86.5 l1.8 4.5 2 -5.2Z" fill="#fff"/>
<ellipse cx="64" cy="81" rx="5" ry="3" fill="#F7B0B3"/>
<ellipse cx="106" cy="81" rx="5" ry="3" fill="#F7B0B3"/>
</g></svg>`;

// wolkjes en codetekentjes van de ontploffing
const DUIVEL_BOEM = `
<i class="du-pf" style="--s:2.2;width:44px;height:44px;left:-22px;top:-22px;background:#C586C0"></i>
<i class="du-pf" style="--s:1.8;width:36px;height:36px;left:-44px;top:-6px;background:#F0626A;animation-delay:.04s"></i>
<i class="du-pf" style="--s:1.8;width:36px;height:36px;left:8px;top:-4px;background:#F0626A;animation-delay:.04s"></i>
<i class="du-pf" style="--s:1.6;width:30px;height:30px;left:-14px;top:-40px;background:#DCDCAA;animation-delay:.07s"></i>
<i class="du-pf" style="--s:1.4;width:26px;height:26px;left:-13px;top:-13px;background:#F7B0B3;animation-delay:.1s"></i>
<span class="du-pt" style="--dx:-70px;--dy:-60px;--r:-40deg;color:#DCDCAA">{</span>
<span class="du-pt" style="--dx:72px;--dy:-58px;--r:40deg;color:#DCDCAA">}</span>
<span class="du-pt" style="--dx:-88px;--dy:-8px;--r:-20deg;color:#C586C0">!=</span>
<span class="du-pt" style="--dx:86px;--dy:-14px;--r:30deg;color:#50FA7B">;</span>
<span class="du-pt" style="--dx:-40px;--dy:-96px;--r:-60deg;color:#F0626A">*</span>
<span class="du-pt" style="--dx:36px;--dy:-100px;--r:70deg;color:#4FC1FF">#</span>
<span class="du-pt" style="--dx:-58px;--dy:16px;--r:-90deg;color:#F0626A">✦</span>
<span class="du-pt" style="--dx:60px;--dy:14px;--r:90deg;color:#DCDCAA">✦</span>
<span class="du-pt" style="--dx:2px;--dy:-118px;--r:20deg;color:#C586C0">✦</span>`;

function toonDuiveltje() {
  const oud = document.getElementById("duiveltje");
  if (oud) oud.remove();                 // nooit twee tegelijk
  const laag = document.createElement("div");
  laag.id = "duiveltje";
  // zichtbare schermhoogte (op een tablet zonder de adresbalk), zodat zijn voetjes echt de onderkant raken
  laag.style.setProperty("--bodem", window.innerHeight + "px");
  laag.innerHTML = `<div class="du-valler"><div class="du-wob">${DUIVEL_SVG}</div><div class="du-fx">${DUIVEL_BOEM}</div></div>`;
  document.body.appendChild(laag);
  const val = 2500;                      // hoppen tot onderaan (snelheid 1,2)
  setTimeout(() => laag.classList.add("boem"), val);
  setTimeout(() => laag.remove(), val + 900);
}

/* ===== Beloning: gele eenhoorn =====
   Verschijnt wanneer een onderdeel op ✓ springt: je beantwoordt de laatste openstaande kaart
   van dat onderdeel juist. Hij galoppeert één rondje over het kaartje (enkel binnen de kaart), steigert
   (afremmen, achterbenen onder het lijf, voorbenen plooien, landen) en loopt vervagend verder.
   De benen worden per beeld berekend, zodat galop en steigeren vloeiend in elkaar overgaan. */
const GH_SNELHEID = 0.7;
const GH = { TA: 2800, TB: 1900, TC: 900, P: 500, BIN: 450, BOUT: 400 };   // in ms op snelheid 1
GH.D = GH.TA + GH.TB + GH.TC;
const GH_BENEN = ["hu1", "hk1", "hu2", "hk2", "fu1", "fk1", "fu2", "fk2"];

const ghSm = u => u * u * (3 - 2 * u);
const ghLerp = (a, b, u) => a + (b - a) * u;
const GH_V = 1 / 0.9;
// eerst gewoon galopperen, op het einde afremmen tot stilstand (en omgekeerd: optrekken)
function ghRem(u) { return u < 0.8 ? u * GH_V : 0.8 * GH_V + GH_V * (u - 0.8) - GH_V * (u - 0.8) * (u - 0.8) / 0.4; }
function ghOptrek(u) { return 1 - ghRem(1 - u); }
// positie op het rondje (0 = vooraan in het midden)
function ghHoek(t) {
  if (t < GH.TA) return 2 * Math.PI * ghRem(t / GH.TA);
  if (t < GH.TA + GH.TB) return 2 * Math.PI;
  return 2 * Math.PI + (Math.PI / 2) * ghOptrek(Math.min(1, (t - GH.TA - GH.TB) / GH.TC));
}

// galop: hoeken per gewricht doorheen één sprong (zelfde ritme als de groene eenhoorn)
const GH_T = {
  hu: [[0, -22], [.30, 32], [.45, 38], [.70, 0], [.90, -28], [1, -22]],
  hk: [[0, -8], [.15, -18], [.30, -4], [.45, -35], [.60, -70], [.80, -45], [.92, -12], [1, -8]],
  fu: [[0, -28], [.25, 8], [.35, 24], [.50, 18], [.65, -6], [.85, -42], [1, -28]],
  fk: [[0, -4], [.30, 2], [.40, 45], [.55, 115], [.70, 90], [.85, 10], [1, -4]],
  rty: [[0, 1], [.25, 0], [.5, 2], [.7, 0], [.87, -5], [1, 1]],
  rr: [[0, -1], [.25, -4], [.5, 1], [.7, 4], [.87, 0], [1, -1]],
  nod: [[0, -2], [.2, -6], [.55, 6], [.8, 2], [1, -2]],
};
function ghSamp(tab, ph) {
  ph = ((ph % 1) + 1) % 1;
  for (let i = 1; i < tab.length; i++) {
    if (ph <= tab[i][0]) { const a = tab[i - 1], b = tab[i]; return a[1] + (b[1] - a[1]) * (ph - a[0]) / (b[0] - a[0]); }
  }
  return tab[tab.length - 1][1];
}
function ghGalop(t) {
  const ph = t / GH.P;
  return {
    hu1: ghSamp(GH_T.hu, ph), hk1: ghSamp(GH_T.hk, ph), hu2: ghSamp(GH_T.hu, ph + .9), hk2: ghSamp(GH_T.hk, ph + .9),
    fu1: ghSamp(GH_T.fu, ph + .55), fk1: ghSamp(GH_T.fk, ph + .55), fu2: ghSamp(GH_T.fu, ph + .65), fk2: ghSamp(GH_T.fk, ph + .65),
    nod: ghSamp(GH_T.nod, ph), ang: 0, dy: 0,
  };
}
// steigeren: houdingen op vaste momenten (u = 0..1), daartussen vloeiend
const GH_VELDEN = [...GH_BENEN, "nod", "ang", "dy"];
const GH_K = [
  { u: 0,   hu1: -12, hk1: -14, hu2: -18, hk2: -10, fu1: -16, fk1: 0,   fu2: -6,  fk2: 0,   nod: -6,  ang: 2,   dy: 1 },  // remmen
  { u: .16, hu1: -28, hk1: -24, hu2: -24, hk2: -22, fu1: -10, fk1: 4,   fu2: -2,  fk2: 2,   nod: -16, ang: -7,  dy: 5 },  // achterhand zakt
  { u: .36, hu1: 34,  hk1: -30, hu2: 28,  hk2: -26, fu1: -72, fk1: 128, fu2: -58, fk2: 118, nod: -6,  ang: -50, dy: 0 },  // omhoog
  { u: .70, hu1: 34,  hk1: -30, hu2: 28,  hk2: -26, fu1: -72, fk1: 128, fu2: -58, fk2: 118, nod: -6,  ang: -50, dy: 0 },  // steigeren
  { u: .86, hu1: 6,   hk1: -14, hu2: 2,   hk2: -12, fu1: -30, fk1: 20,  fu2: -14, fk2: 8,   nod: -2,  ang: -10, dy: 0 },  // voorbenen naar beneden
  { u: 1,   hu1: -6,  hk1: -14, hu2: -14, hk2: -10, fu1: -6,  fk1: 6,   fu2: 10,  fk2: 0,   nod: 4,   ang: 3,   dy: 2 },  // landen
];
function ghHouding(u) {
  let i = 1;
  while (i < GH_K.length - 1 && u > GH_K[i].u) i++;
  const a = GH_K[i - 1], b = GH_K[i], q = ghSm(Math.max(0, Math.min(1, (u - a.u) / (b.u - a.u)))), o = {};
  GH_VELDEN.forEach(f => o[f] = ghLerp(a[f], b[f], q));
  if (u > .36 && u < .70) {   // trappelen met de geplooide voorbeentjes
    const q2 = (u - .36) / .34, env = Math.sin(Math.PI * q2), w = q2 * Math.PI * 4;
    o.fu1 += 10 * Math.sin(w) * env; o.fk1 -= 22 * Math.sin(w) * env;
    o.fu2 += 10 * Math.sin(w + Math.PI) * env; o.fk2 -= 22 * Math.sin(w + Math.PI) * env;
    o.ang += 2.5 * Math.sin(q2 * Math.PI * 3) * env;
  }
  return o;
}

const GELE_EENHOORN_SVG = `
<svg viewBox="-30 -30 180 160" aria-hidden="true">
<path class="gh-tw" d="M-22 60 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#FFFFFF"/>
<path class="gh-tw" d="M-8 88 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#D7BA7D"/>
<g transform="translate(50,116)"><g class="gh-p gh-rear"><g transform="translate(-50,-116)">
<g transform="translate(70,90)"><g class="gh-p gh-rock"><g transform="translate(-70,-90)">
<g transform="translate(42,58)"><g class="gh-p gh-hair"><g transform="translate(-42,-58)">
<path d="M44 56 Q22 44 12 62 Q2 82 12 106 Q12 92 20 88 Q16 104 28 112 Q26 96 34 88 Q30 100 40 104 Q36 86 42 76 Q46 66 48 62Z" fill="#B5933F"/>
<path d="M40 60 Q22 58 18 76 Q16 88 22 96 Q22 82 30 76 Q28 88 34 94 Q34 78 42 68Z" fill="#D7BA7D"/>
<path d="M30 64 Q22 74 24 88" stroke="#F2E6A0" stroke-width="1.4" fill="none" stroke-linecap="round"/>
</g></g></g>
<g transform="translate(45,70)"><g class="gh-p gh-hu2"><path d="M-8 -8 L6 -8 L3.5 22 L-3 22Z" fill="#B8B27E"/><g transform="translate(0,21)"><g class="gh-p gh-hk2"><rect x="-2.5" y="-1" width="5" height="18" rx="2.5" fill="#B8B27E"/><path d="M-4 13 L4 13 L5 16 L-5 16Z" fill="#D7BA7D"/><path d="M-4 15 L4 15 L6 22 L-6 22Z" fill="#5C4A1E"/></g></g></g></g>
<g transform="translate(88,70)"><g class="gh-p gh-fu2"><path d="M-5 -6 L5 -6 L3 22 L-3 22Z" fill="#B8B27E"/><g transform="translate(0,21)"><g class="gh-p gh-fk2"><rect x="-2.5" y="-1" width="5" height="18" rx="2.5" fill="#B8B27E"/><path d="M-4 13 L4 13 L5 16 L-5 16Z" fill="#D7BA7D"/><path d="M-4 15 L4 15 L6 22 L-6 22Z" fill="#5C4A1E"/></g></g></g></g>
<circle cx="50" cy="62" r="17" fill="#DCDCAA"/>
<ellipse cx="70" cy="66" rx="28" ry="15" fill="#DCDCAA"/>
<circle cx="90" cy="64" r="15" fill="#DCDCAA"/>
<path d="M58 78 Q70 82 84 78" stroke="#B8B27E" stroke-width="1.2" fill="none" stroke-linecap="round"/>
<g transform="translate(52,72)"><g class="gh-p gh-hu1"><path d="M-9 -8 L7 -8 L4 22 L-3 22Z" fill="#DCDCAA"/><g transform="translate(0,21)"><g class="gh-p gh-hk1"><rect x="-2.5" y="-1" width="5" height="18" rx="2.5" fill="#DCDCAA"/><path d="M-4 13 L4 13 L5 16 L-5 16Z" fill="#F2E6A0"/><path d="M-4 15 L4 15 L6 22 L-6 22Z" fill="#795E26"/></g></g></g></g>
<g transform="translate(94,72)"><g class="gh-p gh-fu1"><path d="M-6 -6 L6 -6 L3.5 22 L-3.5 22Z" fill="#DCDCAA"/><g transform="translate(0,21)"><g class="gh-p gh-fk1"><rect x="-2.5" y="-1" width="5" height="18" rx="2.5" fill="#DCDCAA"/><path d="M-4 13 L4 13 L5 16 L-5 16Z" fill="#F2E6A0"/><path d="M-4 15 L4 15 L6 22 L-6 22Z" fill="#795E26"/></g></g></g></g>
<text x="40" y="66" font-size="11" font-family="monospace" fill="#795E26">&lt;/&gt;</text>
<g transform="translate(92,58)"><g class="gh-p gh-nod"><g transform="translate(-92,-58)">
<path d="M82 60 Q84 36 104 20 L126 30 Q108 44 104 70Z" fill="#DCDCAA"/>
<path d="M110 0 Q92 -6 86 12 Q76 20 80 36 Q72 46 78 60 Q82 52 88 54 Q84 42 94 38 Q90 28 100 26 Q98 16 110 14Z" fill="#B5933F"/>
<path d="M104 6 Q92 8 90 22 Q86 32 88 44 Q92 34 98 30 Q94 22 102 16Z" fill="#D7BA7D"/>
<path d="M96 12 Q88 22 90 34 M86 40 Q82 48 84 56" stroke="#F2E6A0" stroke-width="1.3" fill="none" stroke-linecap="round"/>
<circle cx="118" cy="22" r="17" fill="#DCDCAA"/>
<ellipse cx="134" cy="32" rx="12" ry="10" fill="#E8E6C0"/>
<ellipse cx="139" cy="29" rx="1.6" ry="2.2" fill="#795E26"/>
<path d="M129 39 q5 4 10 0" stroke="#795E26" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<path d="M106 8 Q100 -12 113 -7 Q116 1 114 9Z" fill="#DCDCAA"/>
<path d="M108 4 Q105 -6 111 -4 Q112 1 111 6Z" fill="#F2E6A0"/>
<path d="M120 6 L131 -20 L126 8Z" fill="#FFFFFF"/>
<path d="M124 -4 l5 1.5 M122 2 l5 1.5 M127 -11 l3 1" stroke="#569CD6" stroke-width="1.2"/>
<path d="M110 2 Q122 -8 132 4 Q126 2 124 10 Q120 3 114 12 Q112 6 108 8Z" fill="#B5933F"/>
<path d="M116 2 Q123 -2 128 4 Q122 3 120 7Z" fill="#D7BA7D"/>
<ellipse cx="122" cy="22" rx="7" ry="8.5" fill="#fff"/>
<ellipse cx="123.5" cy="23" rx="5.5" ry="7" fill="#8A6D1E"/>
<circle cx="124" cy="24" r="3.4" fill="#2B1D00"/>
<circle cx="125.8" cy="20.5" r="2" fill="#fff"/>
<circle cx="122" cy="27" r="1" fill="#fff"/>
<path d="M115.5 16 Q122 11 129 15.5 M128 15 l3.5 -3 M126 13.5 l2 -4 M123 13 l0.5 -4" stroke="#2B1D00" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<ellipse cx="125" cy="33" rx="4" ry="2.2" fill="#F4C0D1"/>
</g></g></g>
</g></g></g>
</g></g></g>
</svg>`;

function toonGeleEenhoorn() {
  const oud = document.getElementById("geleEenhoorn");
  if (oud) oud.remove();                 // nooit twee tegelijk
  const laag = document.createElement("div");
  laag.id = "geleEenhoorn";
  laag.innerHTML = `<div class="gh-loper">${GELE_EENHOORN_SVG}</div>`;
  document.body.appendChild(laag);
  const loper = laag.querySelector(".gh-loper");
  const deel = n => laag.querySelector(".gh-" + n);
  const E = {};
  GH_BENEN.forEach(k => E[k] = deel(k));
  const rearEl = deel("rear"), rockEl = deel("rock"), nodEl = deel("nod");
  const rustig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const kaartEl = document.getElementById("kaart");
  const begin = performance.now();

  function beeld(nu) {
    if (!laag.isConnected) return;
    const t = (nu - begin) * GH_SNELHEID;
    if (t >= GH.D) { laag.remove(); return; }
    // de laag ligt precies over het kaartje (elk beeld opnieuw, zodat hij meeloopt als je scrolt):
    // wat buiten de kaart komt, wordt afgeknipt met de afgeronde hoeken van de kaart
    const r = kaartEl ? kaartEl.getBoundingClientRect() : null;
    const opKaart = r && r.width > 0 && r.height > 0;
    const kx = opKaart ? r.left : 0, ky = opKaart ? r.top : 0;
    const kb = opKaart ? r.width : window.innerWidth, kh = opKaart ? r.height : window.innerHeight;
    laag.style.left = kx + "px"; laag.style.top = ky + "px";
    laag.style.width = kb + "px"; laag.style.height = kh + "px";
    laag.style.borderRadius = opKaart ? getComputedStyle(kaartEl).borderRadius : "0";
    // 160 px breed, op een smalle kaart iets kleiner zodat hij er nog op past
    const w = Math.min(160, kb * 0.42), h = w * 160 / 180;
    loper.style.width = w + "px";
    // plaats op het rondje binnen de kaart: vooraan groter en naar rechts, achteraan kleiner en naar links
    const hoek = ghHoek(t), rx = Math.max(0, kb / 2 - w * 0.6), ry = Math.min(48, kh * 0.12);
    const x = rx * Math.sin(hoek), y = ry * Math.cos(hoek), schaal = 0.82 + 0.18 * Math.cos(hoek);
    let sx = Math.cos(hoek);
    sx = (sx < 0 ? -1 : 1) * Math.max(Math.abs(sx), 0.18);
    loper.style.transform = `translate(${kb / 2 + x - w / 2}px, ${kh / 2 + y - h / 2 + 10}px) scale(${sx * schaal}, ${schaal})`;
    const uit = t < GH.TA + GH.TB ? 1 : 1 - (t - GH.TA - GH.TB) / GH.TC;
    loper.style.opacity = Math.max(0, Math.min(1, t / 300, uit));

    // benen: galop, en rond het steigeren vloeiend overgaan naar de steigerhoudingen
    const G = rustig ? ghHouding(1) : ghGalop(t);
    let H = null, mix = 0;
    if (t >= GH.TA - GH.BIN && t < GH.TA) { mix = ghSm((t - (GH.TA - GH.BIN)) / GH.BIN); H = ghHouding(0); }
    else if (t >= GH.TA && t < GH.TA + GH.TB) { mix = 1; H = ghHouding((t - GH.TA) / GH.TB); }
    else if (t >= GH.TA + GH.TB && t < GH.TA + GH.TB + GH.BOUT) { mix = 1 - ghSm((t - GH.TA - GH.TB) / GH.BOUT); H = ghHouding(1); }
    const V = {};
    GH_VELDEN.forEach(f => V[f] = H ? ghLerp(G[f], H[f], mix) : G[f]);
    GH_BENEN.forEach(k => E[k].style.transform = `rotate(${V[k]}deg)`);
    nodEl.style.transform = `rotate(${V.nod}deg)`;
    const ph = t / GH.P, wieg = rustig ? 0 : 1 - mix;
    rockEl.style.transform = `translateY(${ghSamp(GH_T.rty, ph) * wieg}px) rotate(${ghSamp(GH_T.rr, ph) * wieg}deg)`;
    rearEl.style.transform = `translateY(${V.dy}px) rotate(${V.ang}deg)`;
    requestAnimationFrame(beeld);
  }
  requestAnimationFrame(beeld);
}

/* ===== Groot duiveltje: 10 kaarten op rij fout =====
   Hopt op een derde van links naar beneden, net zoals het gewone duiveltje. Halverwege de
   hoogte van je kaart ontploft hij in 5 kleine duiveltjes (elk een eigen kleur en "fout" op
   hun buik). Die vliegen alle kanten op en ontploffen elk tegen de rand van het scherm.
   Eén keer per foute reeks: pas na een juist antwoord kan hij opnieuw komen. */
const GD = { P: 833, TV: 2500, BD: 650, SNEL: 0.75 };   // hopje, valtijd, duur van een ontploffing (ms), snelheid kleintjes (px/ms)

function gdDuivel(c) {
  return `<svg viewBox="0 0 170 180" aria-hidden="true"><g class="gd-sq">
<g transform="translate(66,100)"><g class="gd-p gd-wl"><path d="M0 0 Q-24 -30 -46 -22 Q-38 -14 -44 -4 Q-32 -6 -32 6 Q-20 0 -16 12 Q-8 4 0 8Z" fill="${c.w}"/><path d="M-2 2 L-46 -22 M-2 4 L-44 -4 M-2 6 L-32 6" stroke="${c.wl}" stroke-width="1.4" stroke-linecap="round"/></g></g>
<g transform="translate(104,100)"><g class="gd-p gd-wr"><path d="M0 0 Q24 -30 46 -22 Q38 -14 44 -4 Q32 -6 32 6 Q20 0 16 12 Q8 4 0 8Z" fill="${c.w}"/><path d="M2 2 L46 -22 M2 4 L44 -4 M2 6 L32 6" stroke="${c.wl}" stroke-width="1.4" stroke-linecap="round"/></g></g>
<g transform="translate(100,138)"><g class="gd-p gd-tail"><path d="M0 0 Q22 8 26 -8 Q30 -24 44 -22" stroke="${c.d}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M40 -30 Q54 -30 52 -18 Q46 -12 40 -14 Q44 -22 40 -30Z" fill="${c.d}"/></g></g>
<ellipse cx="73" cy="158" rx="8" ry="5" fill="${c.f}"/><ellipse cx="97" cy="158" rx="8" ry="5" fill="${c.f}"/>
<ellipse cx="85" cy="128" rx="23" ry="26" fill="${c.b}"/><ellipse cx="85" cy="133" rx="14" ry="17" fill="${c.l}"/>
<text x="85" y="137" text-anchor="middle" font-size="${c.t.length > 2 ? 9 : 11}" font-family="monospace" fill="${c.x}">${c.t}</text>
<g transform="translate(60,118)"><g class="gd-p gd-fork"><rect x="-10" y="-62" width="3.5" height="80" rx="1.75" fill="#DCDCAA" transform="rotate(-8)"/><path d="M-26 -66 Q-25 -56 -16 -55 L-6 -56 Q2 -58 2 -68 L-2 -66 Q-3 -61 -7 -61 L-9 -72 L-13 -60 Q-20 -60 -22 -66Z" fill="#DCDCAA" transform="rotate(-8)"/><ellipse cx="-2" cy="0" rx="5.5" ry="7" fill="${c.d}"/></g></g>
<g transform="translate(108,116)"><g class="gd-p gd-arm"><ellipse cx="4" cy="-8" rx="5" ry="8" fill="${c.d}"/></g></g>
<path d="M58 44 Q50 22 62 12 Q62 28 70 38Z" fill="#DCDCAA"/><path d="M112 44 Q120 22 108 12 Q108 28 100 38Z" fill="#DCDCAA"/>
<path d="M58 66 L46 56 L58 78Z" fill="${c.b}"/><path d="M112 66 L124 56 L112 78Z" fill="${c.b}"/>
<circle cx="85" cy="70" r="30" fill="${c.b}"/>
<path d="M70 44 Q78 52 85 44 Q92 52 100 44 Q92 40 85 41 Q78 40 70 44Z" fill="${c.d}"/>
<ellipse cx="73" cy="70" rx="7.5" ry="9" fill="#2A0E14"/><ellipse cx="97" cy="70" rx="7.5" ry="9" fill="#2A0E14"/>
<ellipse cx="73" cy="74" rx="5" ry="3.5" fill="#2E9E5B"/><ellipse cx="97" cy="74" rx="5" ry="3.5" fill="#2E9E5B"/>
<circle cx="70.5" cy="66" r="2.8" fill="#fff"/><circle cx="94.5" cy="66" r="2.8" fill="#fff"/>
<circle cx="75.5" cy="74" r="1.2" fill="#fff"/><circle cx="99.5" cy="74" r="1.2" fill="#fff"/>
<path d="M65 58 L79 61 M105 58 L91 61" stroke="${c.x}" stroke-width="2.4" stroke-linecap="round"/>
<path d="M74 84 Q85 96 98 83 Q86 88 74 84Z" fill="#5A1A22"/><path d="M91 86.5 l1.8 4.5 2 -5.2Z" fill="#fff"/>
<ellipse cx="64" cy="81" rx="5" ry="3" fill="${c.l}"/><ellipse cx="106" cy="81" rx="5" ry="3" fill="${c.l}"/>
</g></svg>`;
}
const GD_GROOT = { b: "#F0626A", l: "#F7B0B3", d: "#D9474F", f: "#A8323A", w: "#8E5A8A", wl: "#C586C0", x: "#8A2A31", t: "!=" };
// de 5 kleintjes: eigen kleur, eigen "fout" op de buik en de richting waarin ze wegvliegen (graden)
const GD_KLEIN = [
  { b: "#F14C4C", l: "#F9B4B4", d: "#C93636", f: "#8E2424", w: "#7A2E2E", wl: "#F48771", x: "#6B1A1A", t: "404",  a: -100 },
  { b: "#C586C0", l: "#E4C1E1", d: "#A066A0", f: "#6F3F6B", w: "#5A3358", wl: "#D7A6D3", x: "#4A2448", t: "NaN",  a: -25 },
  { b: "#CE9178", l: "#EBC6B4", d: "#B07058", f: "#7A4A35", w: "#6E4A3A", wl: "#E0B29C", x: "#5A3020", t: "null", a: 30 },
  { b: "#E06C9F", l: "#F2B8D0", d: "#C04F82", f: "#86325A", w: "#7A3A5C", wl: "#F0A0C4", x: "#5E1E3E", t: "err",  a: 110 },
  { b: "#D16969", l: "#EFB3B3", d: "#B04A4A", f: "#7A2E2E", w: "#6A3A4A", wl: "#E89A9A", x: "#5A1E1E", t: ";;",   a: 190 },
];
const GD_TEKENS = ["{", "}", "!=", ";", "*", "#", "✦", "✦"];

// één ontploffing (wolkjes en codetekentjes), stap per stap getekend met gdToonWolk
function gdMaakWolk(laag, kleuren, groot) {
  const e = document.createElement("div");
  e.className = "gd-wolk";
  const s = groot ? 1.3 : 0.8, n = groot ? 8 : 5;
  const puffs = [[44, -22, -22, 2.2, 0, kleuren[0]], [36, -44, -6, 1.8, 40, kleuren[1]], [36, 8, -4, 1.8, 40, kleuren[1]],
                 [30, -14, -40, 1.6, 70, "#DCDCAA"], [26, -13, -13, 1.4, 100, kleuren[2]]];
  const tekens = [];
  for (let i = 0; i < n; i++) {
    const h = i / n * Math.PI * 2 + 0.4;
    tekens.push([GD_TEKENS[i % GD_TEKENS.length], ["#DCDCAA", "#C586C0", "#50FA7B", "#4FC1FF", kleuren[0]][i % 5],
                 Math.cos(h) * (groot ? 90 : 55), Math.sin(h) * (groot ? 80 : 50), (i % 2 ? 1 : -1) * 60]);
  }
  e.innerHTML = puffs.map(p => `<i style="width:${p[0] * s}px;height:${p[0] * s}px;left:${p[1] * s}px;top:${p[2] * s}px;background:${p[5]}"></i>`).join("") +
                tekens.map(t => `<span style="color:${t[1]}">${t[0]}</span>`).join("");
  laag.appendChild(e);
  return { e, puffs, tekens, I: [...e.querySelectorAll("i")], S: [...e.querySelectorAll("span")] };
}
function gdToonWolk(W, k, x, y) {
  if (k < 0 || k > 1) { W.e.style.display = "none"; return; }
  W.e.style.display = "block";
  W.e.style.transform = `translate(${x}px, ${y}px)`;
  W.I.forEach((el, i) => {
    const p = W.puffs[i], kk = Math.max(0, k - p[4] / GD.BD);
    el.style.transform = `scale(${0.2 + (p[3] - 0.2) * Math.min(1, kk * 1.3)})`;
    el.style.opacity = kk <= 0 ? 0 : Math.max(0, 0.95 * (1 - kk));
  });
  W.S.forEach((el, i) => {
    const t = W.tekens[i];
    el.style.transform = `translate(${t[2] * k}px, ${t[3] * k}px) scale(${0.4 + 0.6 * k}) rotate(${t[4] * k}deg)`;
    el.style.opacity = k < 0.8 ? 1 : 1 - (k - 0.8) / 0.2;
  });
}

function toonGrootDuiveltje() {
  const oud = document.getElementById("grootDuiveltje");
  if (oud) oud.remove();                 // nooit twee tegelijk
  const laag = document.createElement("div");
  laag.id = "grootDuiveltje";
  document.body.appendChild(laag);
  const maak = (c, breedte) => { const e = document.createElement("div"); e.className = "gd-duivel"; e.style.width = breedte + "px"; e.innerHTML = gdDuivel(c); laag.appendChild(e); return e; };
  const groot = maak(GD_GROOT, 100);
  const grootSq = groot.querySelector(".gd-sq");
  const klein = GD_KLEIN.map(c => maak(c, 44));
  const midden = gdMaakWolk(laag, ["#C586C0", "#F0626A", "#F7B0B3"], true);
  const randen = GD_KLEIN.map(c => gdMaakWolk(laag, [c.b, c.d, c.l], false));

  // waar ontploft hij? op een derde van links, op halve hoogte van je kaart (zoals ze nu op het scherm staat)
  const B = window.innerWidth, H = window.innerHeight;
  const kaartEl = document.getElementById("kaart");
  const r = kaartEl ? kaartEl.getBoundingClientRect() : null;
  const bx = B / 3, by = r && r.height ? r.top + r.height / 2 : H / 2, m = 20;
  // waar raakt elk kleintje de rand van het scherm, en hoe lang vliegt het daarheen
  const doelen = GD_KLEIN.map(c => {
    const h = c.a * Math.PI / 180, dx = Math.cos(h), dy = Math.sin(h);
    const tx = dx > 0 ? (B - m - bx) / dx : dx < 0 ? (m - bx) / dx : Infinity;
    const ty = dy > 0 ? (H - m - by) / dy : dy < 0 ? (m - by) / dy : Infinity;
    const afstand = Math.min(tx, ty);
    return { x: bx + dx * afstand, y: by + dy * afstand, duur: Math.max(380, Math.min(900, afstand / GD.SNEL)) };
  });
  const T0 = GD.TV + 60;
  const einde = T0 + Math.max(...doelen.map(d => d.duur)) + GD.BD + 50;
  const lerp = (a, b, u) => a + (b - a) * u;
  const begin = performance.now();

  function beeld(nu) {
    if (!laag.isConnected) return;
    const t = nu - begin;
    if (t >= einde) { laag.remove(); return; }
    // het grote duiveltje: 2 hopjes, bij de 3de landing (halverwege de kaart) ontploft hij
    if (t < GD.TV + 130) {
      const ph = (t % GD.P) / GD.P, hop = t < GD.TV ? -58 * Math.sin(Math.PI * ph) : 0;
      const wieg = 17 * Math.sin(t / GD.P * Math.PI), draai = 6 * Math.sin(t / GD.P * Math.PI);
      const y = lerp(-170, by - 74, Math.min(1, t / GD.TV)) + hop;   // 74 = midden van zijn lijf in de tekening
      let sq = ph < 0.1 ? lerp(0.84, 1, ph / 0.1) : ph > 0.92 ? lerp(1, 0.84, (ph - 0.92) / 0.08) : 1, sc = 1, op = 1;
      if (t >= GD.TV) { const k = (t - GD.TV) / 130; sq = lerp(0.7, 0.3, k); sc = 1 - k; op = 1 - k; }
      groot.style.transform = `translate(${bx - 50 + wieg}px, ${y}px) rotate(${draai}deg) scale(${sc})`;
      grootSq.style.transform = `scale(${2 - sq}, ${sq})`;
      groot.style.opacity = op;
    } else groot.style.opacity = 0;
    gdToonWolk(midden, (t - GD.TV) / GD.BD, bx, by);
    // de 5 kleintjes vliegen naar de rand van het scherm en ontploffen daar
    doelen.forEach((d, i) => {
      const k = (t - T0) / d.duur;
      if (k >= 0 && k < 1) {
        const pop = Math.min(1, 0.3 + k / 0.15 * 0.7);
        klein[i].style.opacity = 1;
        klein[i].style.transform = `translate(${lerp(bx, d.x, k) - 22}px, ${lerp(by, d.y, k) - 26}px) rotate(${(i % 2 ? 1 : -1) * 240 * k}deg) scale(${pop})`;
      } else klein[i].style.opacity = 0;
      gdToonWolk(randen[i], (t - T0 - d.duur) / GD.BD, d.x, d.y);
    });
    requestAnimationFrame(beeld);
  }
  requestAnimationFrame(beeld);
}

/* Sneltoetsen op het oefenscherm:
   spatie = kaart omdraaien, ← = wist ik niet (rood), → = wist ik (groen), w = weggooien */
document.addEventListener("keydown", e => {
  if (e.repeat) return;
  // vergrote tekening open? Esc, spatie of G sluit ze
  const groot = document.getElementById("grootFig");
  if (groot && groot.classList.contains("open")) {
    if (["Escape", "Space", "KeyG"].includes(e.code)) { e.preventDefault(); sluitGroot(); }
    return;
  }
  // Z (of Ctrl+Z): laatste actie ongedaan maken, ook op het eindscherm
  if ((e.key === "z" || e.key === "Z") &&
      (document.getElementById("schermOefenen").classList.contains("actief") ||
       document.getElementById("schermEinde").classList.contains("actief"))) {
    e.preventDefault();
    maakOngedaan();
    return;
  }
  if (!document.getElementById("schermOefenen").classList.contains("actief")) return;
  if (e.key === "g" || e.key === "G") { e.preventDefault(); vergrootHuidige(); return; }
  // pijltjes werken zodra je het antwoord gezien hebt (ook als je de kaart terug omdraaide)
  const knoppenZichtbaar = document.getElementById("antwoordKnoppen").style.display === "flex";

  if (e.code === "Space") {
    e.preventDefault();                                       // niet laten scrollen
    if (document.activeElement) document.activeElement.blur(); // geen knop per ongeluk indrukken
    draaiOm();
  } else if (e.key === "ArrowLeft" && knoppenZichtbaar) {    // pas na het omdraaien
    e.preventDefault();
    volgende(false);
  } else if (e.key === "ArrowRight" && knoppenZichtbaar) {
    e.preventDefault();
    volgende(true);
  } else if (e.key === "w" || e.key === "W") {              // w = kaart weggooien
    e.preventDefault();
    gooiWeg();
  }
});

toonVakken();
herstelSessie();

/* aangevinkte hoofdstukken bewaren; schudden staat altijd uit als je de app opent (geldt enkel voor één ronde) */
document.getElementById("hoofdstukLijst").addEventListener("change", () => bewaarSessie());
document.getElementById("alles").addEventListener("change", () => setTimeout(() => bewaarSessie()));
(() => {
  const schudden = document.getElementById("schudden");
  schudden.checked = false;
  try { localStorage.removeItem("schudden"); } catch (e) {}   // oude, onthouden keuze opruimen
  const herhalen = document.getElementById("herhalen");
  herhalen.checked = laad("herhalen", "ja") === "ja";   // standaard aan
  herhalen.addEventListener("change", () => bewaar("herhalen", herhalen.checked ? "ja" : "nee"));
})();

// scherm groter/kleiner gemaakt: kaarthoogte opnieuw berekenen
window.addEventListener("resize", () => {
  if (document.getElementById("schermOefenen").classList.contains("actief")) { pasHoogteAan(); pasOverzichtAan(); }
});

// startscherm: de groene eenhoorn als symbooltje voor de titel
(function () {
  const el = document.getElementById("titelDieren");
  if (el) el.innerHTML = `<span class="titel-dier">${EENHOORN_SVG}</span>`;
})();

/* ===== Groene ster =====
   Controle juist, maar de kaart blijft moeilijk: links op de kaart, iets onder het midden,
   verschijnt een groene ster (zelfde groen als de eenhoorn), die zachtjes wiegt en weer verdwijnt. */
function toonGroeneSter() {
  const kaart = document.getElementById("kaart");
  const r = kaart ? kaart.getBoundingClientRect() : null;
  const zichtbaar = r && r.height && r.bottom > 0 && r.top < window.innerHeight;
  const cx = zichtbaar ? r.left + 127 : 140, cy = (zichtbaar ? r.top + r.height / 2 : window.innerHeight / 2) + 45;
  const G = 56;
  const ster = document.createElement("div");
  ster.style.cssText = `position:fixed;z-index:60;pointer-events:none;left:${cx - G / 2}px;top:${cy - G / 2}px;width:${G}px;height:${G}px;` +
    "filter:drop-shadow(0 0 3px rgba(63,182,142,0.7));";
  ster.innerHTML = `<svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
    <path d="M50 4 L61.8 37.6 L97.5 38.2 L69 59.9 L79.4 94 L50 73.6 L20.6 94 L31 59.9 L2.5 38.2 L38.2 37.6 Z"
          fill="#3FB68E" stroke="#2E8B6E" stroke-width="4" stroke-linejoin="round"/>
    <path d="M50 20 L57 40 L50 36 L43 40 Z" fill="#9FE1CB" opacity="0.8"/></svg>`;
  document.body.appendChild(ster);
  ster.animate([
    { transform: "scale(0) rotate(-90deg)", opacity: 0 },
    { transform: "scale(1.2) rotate(8deg)", opacity: 1, offset: 0.08 },
    { transform: "scale(0.95) rotate(-4deg)", opacity: 1, offset: 0.13 },
    { transform: "scale(1) rotate(0deg)", opacity: 1, offset: 0.18 },
    { transform: "scale(1.06) rotate(-6deg)", opacity: 1, offset: 0.38 },
    { transform: "scale(1) rotate(6deg)", opacity: 1, offset: 0.58 },
    { transform: "scale(1.04) rotate(0deg)", opacity: 1, offset: 0.82 },
    { transform: "scale(0.5) rotate(30deg)", opacity: 0 }
  ], { duration: 5850, easing: "ease-in-out", fill: "forwards" });
  setTimeout(() => ster.remove(), 5950);
}

/* Kleine overzichtstabel op een kaart (bv. afbeeldingsformaten): eerste rij = kolomkoppen. */
function miniTabel(rijen) {
  const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const [kop, ...rest] = rijen;
  return `<table class="mini-tabel"><thead><tr>${kop.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead>` +
    `<tbody>${rest.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}
