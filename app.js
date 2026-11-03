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
  return [{ v: "⚠️ Het bestand " + bestand + " is niet gevonden.", a: "Zet " + bestand + " in dezelfde map als index.html (exact deze naam), en controleer of index.html er een <script>-regel voor heeft. Druk daarna op Ctrl+F5.", o: "Ontbrekend bestand" }];
}

const vakken = {
  "🌐 Web Essentials": {
    "H1 – HTML": [
      { v: "Waar staat HTML voor?", a: "HyperText Markup Language", o: "1.1 Wat is HTML?" },
      { v: "Welke tag gebruik je voor de grootste titel?", a: "<h1>", o: "1.2 Tags" },
      { v: "Welke tag maakt een link?", a: "<a href=\"...\">", o: "1.2 Tags" },
    ],
    "H2 – CSS": [
      { v: "Waar staat CSS voor?", a: "Cascading Style Sheets", o: "2.1 Basis" },
      { v: "Hoe selecteer je een element met id=\"menu\"?", a: "#menu", o: "2.2 Selectors" },
      { v: "Hoe selecteer je alle elementen met class=\"knop\"?", a: ".knop", o: "2.2 Selectors" },
    ],
  },
  "💻 IT Essentials": {
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
  },
  "📊 Data Essentials": {
    "H1 – Databanken": [
      { v: "Wat is een primaire sleutel?", a: "Een veld dat elke rij in een tabel uniek identificeert", o: "1.1 Tabellen" },
      { v: "Met welk SQL-commando haal je gegevens op?", a: "SELECT", o: "1.2 SQL" },
    ],
  },
  "🖥️ Desktop OS": {
    // ===== Deel I: Linux =====
    "I.0 – Linux: introductie": (typeof kaarten_DOS_linux_intro !== "undefined" ? kaarten_DOS_linux_intro : ontbreekt("flashcards_DesktopOS_linux_intro.js")),
    "I.1 – Linux: werkcollege 1": (typeof kaarten_DOS_linux_wc1 !== "undefined" ? kaarten_DOS_linux_wc1 : ontbreekt("flashcards_DesktopOS_linux_wc1.js")),
    "I.2 – Linux: werkcollege 2": (typeof kaarten_DOS_linux_wc2 !== "undefined" ? kaarten_DOS_linux_wc2 : ontbreekt("flashcards_DesktopOS_linux_wc2.js")),
    "I.3 – Linux: werkcollege 3": (typeof kaarten_DOS_linux_wc3 !== "undefined" ? kaarten_DOS_linux_wc3 : ontbreekt("flashcards_DesktopOS_linux_wc3.js")),
    // ===== Deel II: Windows (nog aan te vullen) =====
    "II – Windows": [
      { v: "Welk commando toont je IP-configuratie in Windows?", a: "ipconfig", o: "1.1 Command Prompt" },
      { v: "Wat is het verschil tussen een standaard- en een administratoraccount?", a: "Een administrator mag systeeminstellingen wijzigen en software installeren, een standaardgebruiker niet", o: "1.2 Gebruikers" },
    ],
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

/* Eenmalig: voortgang van het oude hoofdstuk "introductie en werkcollege 1" overzetten naar de 2 nieuwe hoofdstukken */
(function migreerLinuxSplitsing() {
  const vak = "🖥️ Desktop OS|";
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
      s.stapel = stapel.map(k => [k.hfst, k.v]);
      s.fouten = fouten.map(k => [k.hfst, k.v]);
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
  const zoek = ([hfst, v]) => {
    const k = (vakken[s.vak][hfst] || []).find(x => x.v === v);
    return k && !verborgen.has(kaartId(s.vak, hfst, k)) ? { ...k, hfst } : null;
  };
  const kaarten = s.stapel.map(zoek).filter(Boolean);
  if (kaarten.length === 0) return;
  gekozenHoofdstukken = (s.hfst || []).filter(h => vakken[s.vak][h]);
  stapel = kaarten;
  fouten = (s.fouten || []).map(zoek).filter(Boolean);
  index = Math.min(Math.max(s.index || 0, 0), stapel.length - 1);
  acties = [];
  hervatbaar = !!s.hervatbaar;
  toonScherm("schermOefenen");
  toonKaart();
}

function toonVakken() {
  const lijst = document.getElementById("vakLijst");
  lijst.innerHTML = "";
  for (const vak in vakken) {
    const knop = document.createElement("button");
    knop.className = "licht";
    knop.textContent = vak;
    knop.onclick = () => { gekozenHoofdstukken = []; kiesVak(vak); };
    lijst.appendChild(knop);
  }
  if (ontbrekendeBestanden.length) {
    const p = document.createElement("p");
    p.style.cssText = "color:#f5a623;text-align:left;font-size:.9em";
    p.textContent = "⚠️ Niet gevonden: " + ontbrekendeBestanden.join(", ") + " — zet deze bestanden in dezelfde map als index.html en druk Ctrl+F5.";
    lijst.appendChild(p);
  }
}

function kiesVak(vak) {
  huidigVak = vak;
  document.getElementById("vakTitel").textContent = vak;
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
  terug.textContent = `♻️ ${aantalWeg} weggegooide kaart${aantalWeg === 1 ? "" : "en"} bekijken`;

  toonVerderInfo();
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
// toont onder de Start-knop of je verder gaat, met een link om opnieuw te beginnen
function toonVerderInfo() {
  const info = document.getElementById("verderInfo");
  if (!info) return;
  const hfst = aangevinkteHoofdstukken();
  const id = hfst.length ? posities[positieSleutel(hfst)] : null;
  const volgorde = id ? volledigeVolgorde(hfst) : [];
  const plaats = volgorde.indexOf(id);
  if (!id || plaats < 0 || document.getElementById("schudden").checked) { info.style.display = "none"; return; }
  info.style.display = "block";
  info.innerHTML = `▶ Je gaat verder bij kaart ${plaats + 1} van ${volgorde.length} · ` +
    `<a href="#" onclick="beginOpnieuw(); return false;">opnieuw beginnen</a>`;
}
function beginOpnieuw() {
  delete posities[positieSleutel(aangevinkteHoofdstukken())];
  bewaar("posities", posities);
  toonVerderInfo();
}

function toonGeschiedenis() {
  const vak = document.getElementById("geschiedenis");
  if (!vak) return;   // het blok "Je laatste scores" staat niet meer op de pagina
  const lijst = (scores[huidigVak] || []).slice(-5).reverse();
  if (lijst.length === 0) { vak.style.display = "none"; return; }
  vak.style.display = "block";
  vak.innerHTML = "<h3>📈 Je laatste scores</h3>" +
    lijst.map(s => `<div><span>${s.datum}</span><b>${s.goed} / ${s.totaal}</b></div>`).join("") +
    `<button class="terug" onclick="wisVoortgang()">Voortgang van dit vak wissen</button>`;
}

function wisVoortgang() {
  if (!confirm("Alle scores en foute kaarten van dit vak wissen?")) return;
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
            <span class="weg-vraag">${k.img ? "🖼️ " : ""}${maakVeilig(k.v)}</span>
            <span class="weg-antwoord">${maakVeilig(k.a)}</span>
            <span class="weg-bron" data-vraag="${encodeURIComponent(k.v)}">📄 bestand zoeken…</span>
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
    if (naam in bestandTekst) return;
    try {
      const r = await fetch(naam);
      bestandTekst[naam] = r.ok ? await r.text() : null;
    } catch (e) { bestandTekst[naam] = null; }
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
      el.textContent = "📄 open de app via Live Server om het bestand en de regel te zien";
      return;
    }
    const bron = bronVan(vraag);
    if (bron) {
      el.textContent = `📄 ${bron.naam} · regel ${bron.regel}`;
      el.title = "Open dit bestand in VS Code en druk Ctrl+G om naar de regel te springen";
    } else {
      el.textContent = "📄 niet gevonden in de bestanden";
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
  setTimeout(() => { knop.textContent = "📋 Lijst kopiëren"; }, 3000);
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

function startOefenen(kaarten) {
  const gewoneStart = !kaarten;
  if (!kaarten) {
    gekozenHoofdstukken = [...document.querySelectorAll("#hoofdstukLijst input:checked")].map(c => c.value);
    if (gekozenHoofdstukken.length === 0) { alert("Kies minstens één hoofdstuk."); return; }
    kaarten = gekozenHoofdstukken
      .flatMap(h => vakken[huidigVak][h].map(k => ({ ...k, hfst: h })))
      .filter(k => !verborgen.has(kaartId(huidigVak, k.hfst, k)));
    if (kaarten.length === 0) { alert("Er zijn geen kaarten meer over in deze hoofdstukken."); return; }
    // filter: nog niet beantwoord / fout / juist
    const wil = gekozenFilters();
    if (!wil.nieuw && !wil.fout && !wil.juist) { alert("Vink minstens één soort kaarten aan."); return; }
    kaarten = kaarten.filter(k => wil[statusVan(kaartId(huidigVak, k.hfst, k))]);
    if (kaarten.length === 0) { alert("Er zijn geen kaarten van die soort in deze hoofdstukken 🎉"); return; }
  }
  stapel = [...kaarten];
  const geschud = document.getElementById("schudden").checked;
  if (geschud) schud(stapel);
  index = 0;
  fouten = [];
  acties = [];
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

function toonKaart() {
  const kaart = stapel[index];
  zetOngedaanKnoppen();
  bewaarSessie();
  if (hervatbaar) {
    posities[positieSleutel()] = kaartId(huidigVak, kaart.hfst, kaart);
    bewaar("posities", posities);
  }
  document.getElementById("kaart").classList.remove("omgedraaid");
  document.getElementById("antwoordKnoppen").style.display = "none";
  document.getElementById("hint").style.display = "block";
  // teller + aantal juist (groen) en fout (rood): zelfde telling als op de hoofdstukkenpagina
  const t = telJuistFout(gekozenHoofdstukken);
  document.getElementById("teller").innerHTML =
    `<span title="Waar je zit in deze ronde (enkel de kaarten die je filters toelaten)">Kaart ${index + 1} van ${stapel.length}</span>` +
    // op smallere schermen blijven ✓ en ✗ bovenaan; op brede schermen staan ze links (toonStand)
    `<span class="groen kort">Juist ${t.juist}</span>` +
    `<span class="rood kort">Fout ${t.fout}</span>`;
  toonStand(t);
  const vraagEl = document.getElementById("vraag");
  vraagEl.textContent = kaart.v;
  // meerkeuze/juist-fout (vraag over meerdere regels): links uitlijnen, leest makkelijker
  vraagEl.classList.toggle("meerkeuze", kaart.v.includes("\n"));
  vraagEl.classList.toggle("code", /\n {2,}/.test(kaart.v));
  // tekening op de voorkant (bv. met nummers i.p.v. de namen)
  zetFiguur("figVoor", kaart.img);
  document.getElementById("figAchter").innerHTML = "";

  // titel bovenaan: hoofdstuk › onderwerp
  const titel = kaart.o ? `${kaart.hfst} › ${kaart.o}` : kaart.hfst;
  document.getElementById("onderwerpVoor").textContent = titel;

  // achterkant pas invullen na de draai, zodat je het antwoord niet ziet flitsen
  setTimeout(() => {
    document.getElementById("onderwerpAchter").textContent = titel;
    const antwoordEl = document.getElementById("antwoord");
    antwoordEl.textContent = kaart.a;
    // ingesprongen regels (bv. een .yaml-bestand): in een vaste letterbreedte, spaties blijven staan
    antwoordEl.classList.toggle("code", /\n {2,}/.test(kaart.a));
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

  vak.innerHTML =
    `<h3>${kaart.hfst}</h3><ol class="ov-onderwerpen">` +
    structuur.map(r => {
      const klassen = [r.sub ? "sub" : "", r.kop ? "kop" : "", r.o && r.o === huidig ? "hier" : ""].join(" ");
      return `<li class="${klassen}"><span>${r.o || r.kop}</span>` +
             (r.slide ? `<small>${r.slide}</small>` : "") + `</li>`;
    }).join("") +
    `</ol>`;

  // huidig onderwerp in beeld houden binnen het paneel
  const hier = vak.querySelector("li.hier");
  if (hier && vak.scrollHeight > vak.clientHeight) {
    const boven = hier.offsetTop - vak.scrollTop;
    if (boven < 0 || boven > vak.clientHeight - hier.offsetHeight) vak.scrollTop = hier.offsetTop - vak.clientHeight / 3;
  }
}

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
  img.onerror = () => { vak.innerHTML = `<div class="fig-fout">⚠️ Tekening niet gevonden: ${src}</div>`; };
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
  const kaartEl = document.getElementById("kaart");
  const achter = kaartEl.querySelector(".achterkant");
  const voor = kaartEl.querySelector(".voorkant");
  kaartEl.style.height = "";                       // eerst terug naar de standaardhoogte
  let nodig = Math.max(achter.scrollHeight, voor.scrollHeight) + 2;
  // niet hoger dan het scherm: dan scrolt de kaart zelf (knoppen blijven zichtbaar)
  const ruimte = window.innerHeight - kaartEl.getBoundingClientRect().top - 80;
  nodig = Math.min(nodig, Math.max(ruimte, 400));
  // vergelijken met de standaardhoogte (400px uit style.css), niet met clientHeight:
  // door de animatie op de hoogte is clientHeight op dit moment nog de oude hoogte
  kaartEl.style.height = nodig > 400 ? nodig + "px" : "";
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
  acties.push({ soort: "antwoord", index, id, vorig: stats[id] ? { ...stats[id] } : undefined, fout: !wistHet });
  const s = stats[id] || { goed: 0, fout: 0 };
  if (wistHet) s.goed++; else s.fout++;
  s.laatst = wistHet;
  stats[id] = s;
  bewaar("stats", stats);

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
    bewaar("stats", stats);
    if (actie.fout) fouten.pop();
  } else {
    verborgen.delete(actie.id);
    bewaarVerborgen();
    stapel.splice(actie.index, 0, actie.kaart);
  }
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
  acties.push({ soort: "weg", index, kaart, id: kaartId(huidigVak, kaart.hfst, kaart) });
  verborgen.add(kaartId(huidigVak, kaart.hfst, kaart));
  bewaarVerborgen();
  stapel.splice(index, 1);
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
    const goed = stapel.length - fouten.length;
    score.textContent = `${goed} / ${stapel.length}`;

    // score bewaren in de geschiedenis van dit vak (max. 20)
    const lijst = scores[huidigVak] || [];
    const nu = new Date();
    lijst.push({
      datum: nu.toLocaleDateString("nl-BE") + " " + nu.toLocaleTimeString("nl-BE", { hour: "2-digit", minute: "2-digit" }),
      goed: goed,
      totaal: stapel.length,
    });
    scores[huidigVak] = lijst.slice(-20);
    bewaar("scores", scores);
    eindeInfo.scoreBewaard = true;
  }
  document.getElementById("herhaalKnop").style.display = fouten.length ? "block" : "none";
  // knop met de naam van het vak, bv. "Terug naar de hoofdstukken van IT Essentials"
  const vakNaam = huidigVak.replace(/^\S+\s/, "");   // emoji vooraan weglaten
  document.getElementById("terugHoofdstukken").textContent = `Terug naar de hoofdstukken van ${vakNaam}`;
  toonScherm("schermEinde");
  zetOngedaanKnoppen();
}

function herhaalFouten() {
  startOefenen(fouten);
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

/* verder-info bijwerken als je hoofdstukken of schudden aan/uit vinkt;
   je keuze voor schudden wordt ook onthouden */
document.getElementById("hoofdstukLijst").addEventListener("change", () => { toonVerderInfo(); bewaarSessie(); });
document.getElementById("alles").addEventListener("change", () => setTimeout(() => { toonVerderInfo(); bewaarSessie(); }));
(() => {
  const schudden = document.getElementById("schudden");
  schudden.checked = laad("schudden", "nee") === "ja";
  schudden.addEventListener("change", () => { bewaar("schudden", schudden.checked ? "ja" : "nee"); toonVerderInfo(); });
})();

// scherm groter/kleiner gemaakt: kaarthoogte opnieuw berekenen
window.addEventListener("resize", () => {
  if (document.getElementById("schermOefenen").classList.contains("actief")) pasHoogteAan();
});
