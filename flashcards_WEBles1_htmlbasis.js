// Web Essentials – Les 1: Introductie Web Essentials & HTML-basis
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = tekening op de voorkant (map afbeeldingen/WEBles1_htmlbasis/), imgAntwoord = tekening op de achterkant (optioneel)
// De structuur onderaan bepaalt het overzicht naast de kaart (volgorde en nummering van de cursus).

const kaarten_WEB_les1 = [

  // ===== 1.1 Studiemateriaal & platformen (1.1) =====
  { v: "Welke code-editor gebruik je in Web Essentials?", a: "Visual Studio Code (VS Code).", o: "1.1 Studiemateriaal & platformen",
    uitleg: "VS Code is gratis voor Windows en macOS via code.visualstudio.com." },

  // ===== 2.1 Ontstaan van het web, HTML & W3C (2.1) =====
  { v: "Wie ontwikkelde HTML, waar en in welk jaar?", a: "Sir Tim Berners-Lee, bij CERN in Genève, in 1991.", o: "2.1 Ontstaan van het web, HTML & W3C",
    uitleg: "Hij wilde wetenschappelijke documenten eenvoudig kunnen delen. Zo ontstond het World Wide Web." },
  { v: "Waarom ontwikkelde Tim Berners-Lee HTML?", a: "Om wetenschappelijke documenten eenvoudig te delen.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Wat gebeurde er in 1993?", a: "De officiële release van HTML 1.0. Browsers zoals NCSA Mosaic maakten het web toegankelijk voor het grote publiek.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Welke browser maakte het web in 1993 toegankelijk voor het grote publiek?", a: "NCSA Mosaic.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Wat werd er opgericht in 1994, en waarom?", a: "Het W3C (World Wide Web Consortium), om standaarden te waarborgen. In 1994 werd ook CSS geïntroduceerd.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Waar staat W3C voor?", a: "World Wide Web Consortium.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "In welk jaar werd CSS geïntroduceerd?", a: "In 1994 (samen met de oprichting van het W3C).", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Welke HTML-versies werden de norm tussen 1997 en 1999?", a: "HTML 3.2 en HTML 4.01.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Wat is XHTML en wanneer ontstond het?", a: "Een variant van HTML met zeer strenge syntaxregels, ontstaan rond 2000.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Wanneer werd HTML5 de officiële W3C-standaard, en wat bracht het?", a: "In 2014. Het bracht semantische elementen, ingebouwde audio/video en krachtige API's.", o: "2.1 Ontstaan van het web, HTML & W3C",
    uitleg: "Vóór HTML5 had je plugins (zoals Flash) nodig voor video. Semantische elementen zijn bijvoorbeeld header, nav, main, article en footer." },
  { v: "Wat gebeurde er in 2017 met HTML?", a: "De HTML 5.2-update. Er komt geen HTML 6: HTML wordt een \"HTML Living Standard\".", o: "2.1 Ontstaan van het web, HTML & W3C",
    uitleg: "Living Standard betekent dat HTML voortdurend wordt bijgewerkt, zonder nieuwe versienummers." },
  { v: "Komt er een HTML 6?", a: "Nee. Sinds HTML 5.2 (2017) is HTML een Living Standard die steeds verder evolueert.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Wat gebeurde er in 2019 met de HTML-standaard?", a: "De officiële overdracht naar de WHATWG.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Waar staat WHATWG voor?", a: "Web Hypertext Application Technology Working Group.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Wat was belangrijk in 2022–2023?", a: "De invoering van Interop en de focus op modern CSS.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Welke nieuwigheden komen er vanaf 2024?", a: "Web Components, de Popover API en native modals.", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Zet in de juiste volgorde: HTML5 officiële standaard – oprichting W3C – HTML 1.0 – overdracht naar WHATWG – Tim Berners-Lee ontwikkelt HTML.", a: "1991 Tim Berners-Lee ontwikkelt HTML\n1993 HTML 1.0\n1994 oprichting W3C\n2014 HTML5 officiële standaard\n2019 overdracht naar WHATWG", o: "2.1 Ontstaan van het web, HTML & W3C" },
  { v: "Geef de evolutie van websites volgens de cursus, met voorbeelden.", a: "Statische tekstpagina's in de jaren '90 (Amazon 1994, Yahoo 1996, Apple 1996)\n→ rijke sociale netwerken (Facebook 2004, YouTube 2005)\n→ moderne responsive webapps (Buienradar, NMBS Webapp).", o: "2.1 Ontstaan van het web, HTML & W3C" },

  // ===== 2.2 Drie pijlers van het web (2.2) =====
  { v: "Geef de 3 pijlers (lagen) van elke moderne webpagina.", a: "HTML5: structuur & inhoud\nCSS3: vormgeving, layout & design\nJavaScript: interactiviteit, dynamiek & logica", o: "2.2 Drie pijlers van het web",
    uitleg: "De drie lagen zijn gescheiden: HTML zegt wát er op de pagina staat, CSS hoe het eruitziet, JavaScript wat er gebeurt als je ermee werkt." },
  { v: "Welke technologie hoort bij elk nummer?", a: "1 = HTML5 (structuur & inhoud)\n2 = CSS3 (vormgeving, layout & design)\n3 = JavaScript (interactiviteit, dynamiek & logica)", o: "2.2 Drie pijlers van het web", img: "afbeeldingen/WEBles1_htmlbasis/we1_pijlers_vraag.png", imgAntwoord: "afbeeldingen/WEBles1_htmlbasis/we1_pijlers.png" },
  { v: "HTML zorgt voor … & …", a: "Structuur & inhoud.", o: "2.2 Drie pijlers van het web",
    uitleg: "HTML definieert de elementen, titels, paragrafen, lijsten, hyperlinks en semantiek." },
  { v: "CSS zorgt voor … & …", a: "Vormgeving & layout.", o: "2.2 Drie pijlers van het web",
    uitleg: "CSS definieert kleuren, typografie, margins, padding, Flexbox, Grid en animaties." },
  { v: "JavaScript zorgt voor … & …", a: "Gedrag & dynamiek (interactiviteit).", o: "2.2 Drie pijlers van het web",
    uitleg: "JavaScript definieert interactiviteit, DOM-manipulatie, event-listeners, API fetch en berekeningen." },
  { v: "Welke technologie definieert elementen, titels, paragrafen, lijsten, hyperlinks en semantiek?", a: "HTML.", o: "2.2 Drie pijlers van het web" },
  { v: "Welke technologie definieert kleuren, typografie, margins, padding, Flexbox, Grid en animaties?", a: "CSS.", o: "2.2 Drie pijlers van het web" },
  { v: "Welke technologie definieert DOM-manipulatie, event-listeners, API fetch en berekeningen?", a: "JavaScript.", o: "2.2 Drie pijlers van het web" },

  // ===== 2.3 De ontwikkelomgeving (2.3) =====
  { v: "Wat is de standaard code-editor voor webontwikkeling in deze cursus, en hoe breid je hem uit?", a: "Visual Studio Code (VS Code), uitbreidbaar met extensies zoals Live Server.", o: "2.3 De ontwikkelomgeving" },
  { v: "Welke browsers hebben krachtige Developer Tools, en met welke toets open je ze?", a: "Google Chrome, Microsoft Edge en Mozilla Firefox; je opent ze met F12.", o: "2.3 De ontwikkelomgeving" },
  { v: "Waarvoor gebruik je de Developer Tools (F12) van de browser?", a: "Om de HTML-structuur (DOM) en CSS live te inspecteren en te debuggen.", o: "2.3 De ontwikkelomgeving",
    uitleg: "Je gebruikt de browser dus niet alleen om websites te bezoeken en het resultaat van je code te bekijken, maar ook om fouten te zoeken." },
  { v: "Wat bedoelt de cursus met \"multi-device testing\"?", a: "Gebruikers bekijken webpagina's op smartphones, tablets en desktops. Daarom bouw je steeds met toegankelijkheid en responsiviteit in het achterhoofd.", o: "2.3 De ontwikkelomgeving" },
  { v: "Met welke sneltoets open je het Extensions-tabblad in VS Code?", a: "Ctrl+Shift+X (Windows) of Cmd+Shift+X (Mac).", o: "2.3 De ontwikkelomgeving" },

  // ===== 2.3 Extensies voor VS Code (2.3) =====
  { v: "Geef de 4 extensies die je moet installeren in VS Code.", a: "1. Live Server (Ritwick Dey)\n2. HTMLHint\n3. Prettier – Code formatter\n4. W3C Web Validator", o: "2.3 Extensies voor VS Code" },
  { v: "Wat doet de extensie Live Server?", a: "Ze start een lokale ontwikkelserver met hot reloading: zodra je een bestand opslaat (Ctrl+S), ververst de browser automatisch.", o: "2.3 Extensies voor VS Code",
    uitleg: "Live Server is gemaakt door Ritwick Dey. Hot reloading betekent dat je niet zelf op vernieuwen moet drukken." },
  { v: "Wat doet de extensie HTMLHint?", a: "Ze controleert je HTML-code direct tijdens het typen op fouten tegen de standaarden.", o: "2.3 Extensies voor VS Code",
    uitleg: "Voorbeelden van fouten die HTMLHint vindt: dubbele ID's, ontbrekende alt-attributen, tags die niet in kleine letters staan." },
  { v: "Geef 3 voorbeelden van fouten die HTMLHint opspoort.", a: "Dubbele ID's, ontbrekende alt-attributen en tags die niet in kleine letters staan.", o: "2.3 Extensies voor VS Code" },
  { v: "Wat doet de extensie Prettier – Code formatter?", a: "Ze formatteert je code automatisch volgens een strakke, consistente stijl (inspringen, spaties, haakjes).", o: "2.3 Extensies voor VS Code" },
  { v: "Hoe zet je in VS Code \"Format On Save\" aan (na het installeren van Prettier)?", a: "1. Druk Ctrl + , (Mac: Cmd + ,)\n2. Zoek naar \"Format On Save\"\n3. Vink \"Editor: Format On Save\" aan.", o: "2.3 Extensies voor VS Code",
    uitleg: "Daarna wordt je code bij elke Ctrl+S automatisch netjes geformatteerd." },
  { v: "Wat doet de extensie W3C Web Validator?", a: "Ze controleert je HTML- en CSS-bestanden rechtstreeks vanuit VS Code met de officiële W3C-validatieservices. Fouten en waarschuwingen worden gemarkeerd; met de muis erover krijg je extra uitleg.", o: "2.3 Extensies voor VS Code",
    uitleg: "Gebruik ze als aanvulling op de online W3C Markup Validation Service (validator.w3.org) en de W3C CSS Validation Service (jigsaw.w3.org/css-validator)." },
  { v: "Hoe heten de twee online validatieservices van het W3C?", a: "De W3C Markup Validation Service (voor HTML) en de W3C CSS Validation Service (voor CSS).", o: "2.3 Extensies voor VS Code" },
  { v: "Wat doet de extensie Auto Rename Tag?", a: "Als je de naam van een openingstag verandert (bv. h2 → h3), past ze de sluitingstag automatisch mee aan.", o: "2.3 Extensies voor VS Code",
    uitleg: "Dat bespaart tijd en voorkomt vergeten sluitfouten." },
  { v: "Wat doet de extensie htmltagwrap, en met welke sneltoets?", a: "Ze pakt geselecteerde tekst of code in een HTML-element in. Selecteer de tekst en druk Alt + W (Mac: Option + W).", o: "2.3 Extensies voor VS Code" },
  { v: "Wat doet de extensie Material Icon Theme?", a: "Ze geeft bestanden en mappen in de VS Code Explorer duidelijke, herkenbare icoontjes, zodat je in één oogopslag HTML-, CSS- en afbeeldingsbestanden herkent.", o: "2.3 Extensies voor VS Code" },
  { v: "Wat doet de extensie TODO Highlight?", a: "Ze licht opmerkingen zoals <!-- TODO: --> en /* TODO: */ op met een opvallende kleur, zodat je tijdelijke aantekeningen of nog te doen taken niet vergeet.", o: "2.3 Extensies voor VS Code" },
  { v: "Geef de 4 \"andere nuttige extensies\" uit de cursus.", a: "Auto Rename Tag, htmltagwrap, Material Icon Theme en TODO Highlight.", o: "2.3 Extensies voor VS Code" },

  // ===== 3.1 Waarom HTML leren? (3.1) =====
  { v: "Geef de 3 redenen waarom je HTML moet leren.", a: "1. HTML-elementen zijn de fundamentele bouwstenen van elke webpagina.\n2. Toegankelijkheid, gebruikerservaring (UX) en zoekmachineoptimalisatie (SEO) worden rechtstreeks bepaald door goed geschreven HTML.\n3. Steeds meer software draait in de browser; ook met React, Vue of Angular krijgt de browser uiteindelijk HTML, CSS en JavaScript.", o: "3.1 Waarom HTML leren?" },
  { v: "Welke 3 zaken worden volgens de cursus rechtstreeks bepaald door goed geschreven HTML?", a: "Toegankelijkheid (accessibility voor schermlezers), gebruikerservaring (UX) en zoekmachineoptimalisatie (SEO).", o: "3.1 Waarom HTML leren?" },
  { v: "Waar staan UX en SEO voor?", a: "UX = User Experience (gebruikerservaring).\nSEO = Search Engine Optimization (zoekmachineoptimalisatie).", o: "3.1 Waarom HTML leren?" },
  { v: "Waarom moet je HTML kennen, ook als je later met React, Vue of Angular werkt?", a: "Omdat de browser uiteindelijk altijd HTML, CSS en JavaScript te verwerken krijgt.", o: "3.1 Waarom HTML leren?" },

  // ===== 3.2 Elementen, tags en attributen (3.2) =====
  { v: "Waarmee omschrijft HTML inhoud, en waardoor wordt dat omsloten?", a: "Met tags, omsloten door scherpe haakjes < >.", o: "3.2 Elementen, tags en attributen" },
  { v: "Een container-element heeft een …, … en een …", a: "Openingstag, inhoud en een sluitingstag.", o: "3.2 Elementen, tags en attributen",
    uitleg: "Voorbeeld: <p>Dit is tekst</p>. De sluitingstag heeft een schuine streep /." },
  { v: "Hoe herken je een sluitingstag?", a: "Aan de schuine streep / na het openingshaakje, bv. </p>.", o: "3.2 Elementen, tags en attributen" },
  { v: "Wat is een leeg element?", a: "Een element zonder inhoud en zonder sluitingstag.", o: "3.2 Elementen, tags en attributen",
    uitleg: "Voorbeelden: <br> en <hr>. In de cursus van les 2 heet dat ook een \"void\" element." },
  { v: "Geef 2 voorbeelden van lege elementen uit les 1.", a: "<br> (regelomloop / regel afbreken) en <hr> (horizontale scheidingslijn).", o: "3.2 Elementen, tags en attributen" },
  { v: "Wat doet <br>?", a: "Een regelomloop: de tekst gaat verder op een nieuwe regel (regel afbreken).", o: "3.2 Elementen, tags en attributen" },
  { v: "Wat doet <hr>?", a: "Een horizontale scheidingslijn.", o: "3.2 Elementen, tags en attributen" },
  { v: "Is <br /> (met afsluitende slash) fout in HTML5?", a: "Nee, het is niet fout, maar sinds HTML5 is het verouderd.", o: "3.2 Elementen, tags en attributen",
    uitleg: "Je vindt het vaak nog in oudere HTML. In de code-afspraken van de cursus (6.4) schrijf je het wel zonder slash: <br>." },
  { v: "Blok-elementen beginnen op een … en nemen standaard de … in.", a: "Nieuwe regel; volledige beschikbare breedte.", o: "3.2 Elementen, tags en attributen",
    uitleg: "Voorbeelden: <h1>, <h4>, <p>, <section>." },
  { v: "Inline-elementen blijven op … en nemen alleen de ruimte in die …", a: "Dezelfde regel staan; hun inhoud nodig heeft.", o: "3.2 Elementen, tags en attributen",
    uitleg: "Voorbeelden: <a>, <strong>, <em>." },
  { v: "Geef 4 voorbeelden van blok-elementen uit les 1.", a: "<h1>, <h4>, <p> en <section>.", o: "3.2 Elementen, tags en attributen" },
  { v: "Geef 3 voorbeelden van inline-elementen uit les 1.", a: "<a>, <strong> en <em>.", o: "3.2 Elementen, tags en attributen" },
  { v: "Wat is whitespace collapse?", a: "De browser voegt meerdere opeenvolgende spaties, tabs en newlines in je HTML-code samen tot één enkele spatie.", o: "3.2 Elementen, tags en attributen" },
  { v: "Hoe toont de browser dit?\n<p>Dit is\n     tekst met\n     extra spaties.</p>", a: "Dit is tekst met extra spaties.", o: "3.2 Elementen, tags en attributen",
    uitleg: "Door whitespace collapse worden alle enters en extra spaties één spatie. Wil je echt een nieuwe regel, dan gebruik je <br> of een nieuwe paragraaf." },
  { v: "Wat zijn attributen?", a: "Extra informatie of eigenschappen die je aan een element meegeeft.", o: "3.2 Elementen, tags en attributen" },
  { v: "Waar staan attributen, en welk formaat volgen ze?", a: "Altijd in de openingstag, in het formaat naam=\"waarde\".", o: "3.2 Elementen, tags en attributen",
    uitleg: "Voorbeeld: <a href=\"https://ehb.be\">Erasmushogeschool Brussel</a>. Hier is href de naam en https://ehb.be de waarde." },
  { v: "Mag een element meerdere attributen hebben?", a: "Ja, bv. <img class=\"product-image\" src=\"foto.jpg\" alt=\"witte sneaker\" width=\"600\" height=\"400\">.", o: "3.2 Elementen, tags en attributen" },

  // ===== 3.3 Regels bij het nesten (3.3) =====
  { v: "Wat is nesten in HTML?", a: "Elementen in elkaar plaatsen (ouder- en kind-elementen).", o: "3.3 Regels bij het nesten",
    uitleg: "De cursus vergelijkt het met een schoendoos die in een kast past, maar een kast past niet in een schoendoos. HTML kent strikte afspraken over welke elementen als ouder en kind mogen." },
  { v: "Wat mogen inhoudelijke containers zoals <section>, <article> en <aside> bevatten?", a: "Vrijwel alle andere elementen, bv. een kop <h2>, meerdere paragrafen <p> en afbeeldingen <img>.", o: "3.3 Regels bij het nesten" },
  { v: "Mag een <blockquote> meerdere paragrafen <p> bevatten?", a: "Ja, om de tekst van het citaat op te delen.", o: "3.3 Regels bij het nesten" },
  { v: "Mogen tekstuele blok-elementen (koppen, paragrafen, lijsten) andere blok-elementen bevatten?", a: "Nee, ze mogen geen andere blok-elementen of structuurblokken bevatten.", o: "3.3 Regels bij het nesten" },
  { v: "Wat is hier fout, en hoe los je het op?\n<p>Mijn lijst:\n  <ol><li>Item</li></ol>\n</p>", a: "Een paragraaf <p> mag geen geordende lijst <ol> bevatten.\nOplossing: plaats de paragraaf en de lijst los achter elkaar op hetzelfde niveau.", o: "3.3 Regels bij het nesten" },
  { v: "Mag een kop (bv. <h3>) een paragraaf <p> of een lijst <ul> bevatten?", a: "Nee. Een kop dient louter als titel; plaats de lopende tekst of lijst eronder.", o: "3.3 Regels bij het nesten" },
  { v: "Wat is de regel voor inline-elementen bij nesten?", a: "Inline-elementen beïnvloeden enkel een stukje tekst binnen een regel en mogen nooit grotere blok-elementen omsluiten. Andere inline-elementen mogen ze wel bevatten.", o: "3.3 Regels bij het nesten" },
  { v: "Wat is hier fout?\n<em><p>Dit is belangrijk.</p></em>", a: "Een inline-element (<em>) mag geen blok-element (<p>) omsluiten.\nJuist: <p>Dit is <em>belangrijk</em>.</p>", o: "3.3 Regels bij het nesten" },
  { v: "Mag een hyperlink <a> een afbeelding <img> of een <strong> bevatten?", a: "Ja: inline-elementen mogen andere inline-elementen bevatten. Zo maak je bv. een afbeelding aanklikbaar.", o: "3.3 Regels bij het nesten" },
  { v: "Wat doe je als je twijfelt of een combinatie van elementen mag?", a: "Vertrouw op de logische opbouw van je document en controleer je code altijd via de W3C HTML Validator.", o: "3.3 Regels bij het nesten" },
  { v: "Wat betekent FILO bij het nesten van HTML-elementen?", a: "First In, Last Out: geneste elementen sluit je af in de omgekeerde volgorde waarin je ze opent. Het element dat je het laatst opent, sluit je als eerste.", o: "3.3 Regels bij het nesten" },
  { v: "Wat is hier fout?\n<p><strong>Belangrijke tekst</p></strong>", a: "De sluittags staan in de verkeerde volgorde (FILO).\nJuist: <p><strong>Belangrijke tekst</strong></p>", o: "3.3 Regels bij het nesten",
    uitleg: "<strong> is als laatste geopend, dus moet hij als eerste gesloten worden." },
  { v: "Wat is hier fout?\n<p><a href=\"contact.html\">Contacteer ons als je vragen hebt</p>", a: "De link <a> wordt niet afgesloten.\nJuist: <p><a href=\"contact.html\">Contacteer ons</a> als je vragen hebt</p>", o: "3.3 Regels bij het nesten",
    uitleg: "Let op: in de cursus staat bij \"Juist\" per ongeluk <a> in plaats van </a>. De sluitingstag moet natuurlijk </a> zijn." },
  { v: "Geef de 4 regels bij het nesten van HTML-elementen.", a: "1. Inhoudelijke containers (section, article, aside, blockquote) mogen vrijwel alles bevatten.\n2. Tekstuele blok-elementen (koppen, paragrafen, lijsten) mogen geen andere blok-elementen bevatten.\n3. Inline-elementen mogen nooit blok-elementen omsluiten (wel andere inline-elementen).\n4. Correct starten en afsluiten: FILO.", o: "3.3 Regels bij het nesten" },

  // ===== 4. Boilerplate (4) =====
  { v: "Wat geeft <!DOCTYPE html> aan?", a: "Dat het document een HTML5-document is.", o: "4. Boilerplate" },
  { v: "Vul de boilerplate aan:\n<!DOCTYPE html>\n<html lang=\"nl\">\n  <head>\n    <meta charset=\"…\">\n    <meta name=\"viewport\" content=\"…\">\n    <title>…</title>\n    <link rel=\"…\" href=\"style.css\">\n  </head>\n  <…>\n    …\n  </…>\n</html>", a: "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Titel in de tab van de browser</title>\n<link rel=\"stylesheet\" href=\"style.css\">\n<body> … </body>", o: "4. Boilerplate",
    uitleg: "Het <link>-element koppelt het externe CSS-bestand. Alles binnen de <body> is zichtbaar in de browser-viewport." },
  { v: "Welk deel van een HTML-document is zichtbaar in de browser-viewport?", a: "Alles binnen de <body>.", o: "4. Boilerplate" },
  { v: "Hoe koppel je een extern CSS-bestand in de boilerplate, en waar staat dat?", a: "Met <link rel=\"stylesheet\" href=\"style.css\"> in de <head>.", o: "4. Boilerplate" },
  { v: "Hoe koppel je een extern JavaScript-bestand in de boilerplate, en waar staat het?", a: "Met <script src=\"main.js\"></script>, onderaan in de <body>.", o: "4. Boilerplate" },
  { v: "Welke meta-tag zorgt voor de juiste weergave op mobiele schermen?", a: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", o: "4. Boilerplate" },

  // ===== 4.1 Onderdelen van de head (4.1) =====
  { v: "Waarom gebruik je <!DOCTYPE html>?", a: "Het voorkomt \"quirks mode\" in oudere browsers en dwingt HTML5-rendering af.", o: "4.1 Onderdelen van de head",
    uitleg: "In quirks mode bootst een browser oude, foutieve gedragingen na, waardoor je pagina anders kan getoond worden dan je verwacht." },
  { v: "Wat doet <html lang=\"nl\">?", a: "Het is het root-element; lang bepaalt de taal voor zoekmachines en screenreaders.", o: "4.1 Onderdelen van de head" },
  { v: "Wat is het root-element van een HTML-document?", a: "Het <html>-element.", o: "4.1 Onderdelen van de head" },
  { v: "Waarom is <meta charset=\"UTF-8\"> essentieel?", a: "Voor de juiste weergave van speciale tekens, accenten en leestekens.", o: "4.1 Onderdelen van de head" },
  { v: "Wat bepaalt <title>?", a: "De tekst op de browser-tab en de titel in de Google-zoekresultaten.", o: "4.1 Onderdelen van de head" },
  { v: "<!DOCTYPE html> voorkomt …", a: "Quirks mode (in oudere browsers).", o: "4.1 Onderdelen van de head" },

  // ===== 4.2 HTML-commentaar (4.2) =====
  { v: "Hoe schrijf je commentaar in HTML?", a: "<!-- Dit is een commentaar -->", o: "4.2 HTML-commentaar",
    uitleg: "Commentaar wordt niet getoond op de pagina." },
  { v: "Waarvoor gebruik je HTML-commentaar?", a: "Om code te documenteren of tijdelijk uit te schakelen. Het wordt niet getoond op de pagina.", o: "4.2 HTML-commentaar" },

  // ===== 5. Opmaak los van design (5) =====
  { v: "Wat is de basisregel bij het kiezen van HTML-elementen?", a: "Gebruik elementen volgens hun betekenis en niet alleen voor hun standaardweergave. Het uitzicht pas je later aan met CSS.", o: "5. Opmaak los van design",
    uitleg: "HTML-opmaak staat los van hoe je wilt dat het eruitziet (design)." },

  // ===== 5.1 Headings (koppen) (5.1) =====
  { v: "Hoeveel niveaus van koppen biedt HTML?", a: "6: <h1> tot en met <h6>.", o: "5.1 Headings (koppen)" },
  { v: "Hoe vaak mag <h1> op een pagina voorkomen?", a: "Slechts 1 keer per pagina (de hoofdtitel).", o: "5.1 Headings (koppen)" },
  { v: "Wat is hier fout?\n<h1>Als dit een paragraaf is waarvan ik de tekst gewoon groter wil maken dan mag ik daarvoor geen titel-element gebruiken.</h1>", a: "Oneigenlijk gebruik van een titel-element: een kop gebruik je voor een titel, niet om tekst groter te maken. Gebruik <p> en maak de tekst groter met CSS.", o: "5.1 Headings (koppen)" },
  { v: "Waarvoor gebruik je <h2>, <h3> en <h4> volgens het voorbeeld in de cursus?", a: "<h2> = belangrijke subkop (niveau 2), <h3> = sectiekop (niveau 3), <h4> = subsectie (niveau 4).", o: "5.1 Headings (koppen)" },

  // ===== 5.2 Paragrafen & regelomloop (5.2) =====
  { v: "Wat is een paragraaf <p>?", a: "Een inhoudelijke eenheid tekst.", o: "5.2 Paragrafen & regelomloop" },
  { v: "Waarvoor gebruik je <br>?", a: "Om binnen dezelfde paragraaf op een nieuwe regel verder te gaan.", o: "5.2 Paragrafen & regelomloop" },
  { v: "Wat is hier fout?\n<p>Een eerste paragraaf</p>\n<br>\n<br>\n<br>\n<p>Tweede paragraaf</p>", a: "Extra <br>-elementen gebruiken om witruimte te maken. Witruimte hoort in CSS ingesteld te worden.", o: "5.2 Paragrafen & regelomloop",
    uitleg: "<br> mag wel voor tekst die op een nieuwe lijn moet binnen een paragraaf." },

  // ===== 5.3 Visuele vs. semantische opmaak (5.3) =====
  { v: "Wat is het verschil tussen <strong> en <b>?", a: "<strong> is semantisch: sterke nadruk / belangrijk (vetgedrukt); screenreaders benadrukken het.\n<b> is visueel: vetgedrukte tekst zonder extra inhoudelijke betekenis.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "Wat is het verschil tussen <em> en <i>?", a: "<em> is semantisch: emphasis / klemtoon (cursief).\n<i> is visueel: cursieve tekst (bv. een vreemd woord of vakterm), zonder extra nadruk.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "<strong> is … en wordt …", a: "Semantisch; vetgedrukt weergegeven (sterke nadruk / belangrijk). Screenreaders benadrukken dit.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "<em> is … en wordt …", a: "Semantisch; cursief weergegeven (emphasis / klemtoon).", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "<b> is … : …", a: "Visueel: bold tekst zonder extra inhoudelijke betekenis.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "<i> is … : …", a: "Visueel: italic tekst, bv. een vreemd woord of een vakterm.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "Waarvoor dient <sup>? Geef een voorbeeld.", a: "Superscript (typografisch): tekst hoger en kleiner, bv. E = MC<sup>2</sup> → E = MC².", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "Waarvoor dient <sub>? Geef een voorbeeld.", a: "Subscript (typografisch): tekst lager en kleiner, bv. CO<sub>2</sub> → CO₂.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "Waarvoor dienen <del> en <ins>? Geef een voorbeeld.", a: "Schrappen en invoegen (semantisch), bv. bij een prijswijziging: <del>€99</del> <ins>€49</ins>.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "Waarvoor dient <blockquote>, en welk attribuut mag het hebben?", a: "Een lang citaat op een eigen regel. Het mag een cite=\"...\"-attribuut hebben (de bron).", o: "5.3 Visuele vs. semantische opmaak",
    uitleg: "Voorbeeld uit de cursus: <blockquote cite=\"http://en.wikipedia.org/wiki/Winnie-the-Pooh\"><p>Did you ever stop to think, and forget to start again?</p></blockquote>" },
  { v: "Wat is het verschil tussen <blockquote> en <q>?", a: "<blockquote> = lang citaat op een eigen regel.\n<q> = kort citaat binnen een lopende zin (voegt automatisch aanhalingstekens toe).", o: "5.3 Visuele vs. semantische opmaak",
    uitleg: "In de cursustabel staat \"haakjes\"; bedoeld zijn de aanhalingstekens die de browser automatisch rond het citaat zet." },
  { v: "Waarvoor dient <abbr>, en welk attribuut gebruik je erbij?", a: "Een afkorting. Met title=\"...\" geef je de volledig uitgeschreven term.", o: "5.3 Visuele vs. semantische opmaak",
    uitleg: "Voorbeeld: <abbr title=\"National Aeronautics and Space Administration\">NASA</abbr>" },
  { v: "Waarvoor dient <dfn>?", a: "De definitie van een nieuw begrip.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "Waarvoor dient <cite>?", a: "Een verwijzing naar de titel van een werk (boek, film, onderzoek).", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "Welke tags uit de tabel zijn visueel, welke typografisch?", a: "Visueel: <b> en <i>.\nTypografisch: <sup> en <sub>.\nDe rest is semantisch: <strong>, <em>, <del>/<ins>, <blockquote>, <q>, <abbr>, <dfn>, <cite>.", o: "5.3 Visuele vs. semantische opmaak" },
  { v: "Welke tag gebruik je voor de waarschuwing \"Pas op:\" in \"Pas op: Zakkenrollers actief in deze zone.\"?", a: "<strong>: <p><strong>Pas op:</strong> Zakkenrollers actief in deze zone.</p>", o: "5.3 Visuele vs. semantische opmaak",
    uitleg: "Het is echt belangrijke informatie, dus semantische nadruk." },

  // ===== 5.4 div en span (5.4) =====
  { v: "Wat zijn <div> en <span>?", a: "Algemene elementen zonder specifieke semantische betekenis. Je gebruikt ze om inhoud te groeperen om er later met CSS of JavaScript mee te werken.", o: "5.4 div en span" },
  { v: "Wat is het verschil tussen <div> en <span>?", a: "<div> is een blok-element en begint standaard op een nieuwe regel.\n<span> is een inline-element en blijft op dezelfde regel als de omliggende tekst.", o: "5.4 div en span" },
  { v: "Wanneer gebruik je <div> en <span>?", a: "Alleen wanneer er geen geschikter (semantisch) element is, zoals <header>, <article> of <strong>.", o: "5.4 div en span" },

  // ===== 6.1 Kleine letters (6.1) =====
  { v: "In welke letters schrijf je HTML-elementen en attribuutnamen?", a: "Consistent in kleine letters.", o: "6.1 Kleine letters",
    uitleg: "Fout: <IMG SRC=\"logo.png\">, <Img Src=\"logo.png\">, <a HREF=\"...\">. Correct: <img src=\"logo.png\" alt=\"Logo\">, <a href=\"...\">." },
  { v: "Is dit correct volgens de code-afspraken? <Img Src=\"logo.png\">", a: "Nee: tags en attributen in kleine letters. Correct: <img src=\"logo.png\" alt=\"Logo\">.", o: "6.1 Kleine letters" },

  // ===== 6.2 Dubbele quotes (6.2) =====
  { v: "Hoe omsluit je attribuutwaarden?", a: "Steeds met dubbele aanhalingstekens \"...\".", o: "6.2 Dubbele quotes" },
  { v: "Wat is fout aan deze twee links?\n<a href=https://ehb.be target=_blank>\n<a href='https://ehb.be'>", a: "Eerste: geen aanhalingstekens. Tweede: enkele in plaats van dubbele.\nCorrect: <a href=\"https://ehb.be\" target=\"_blank\">", o: "6.2 Dubbele quotes" },

  // ===== 6.3 Container-elementen sluiten (6.3) =====
  { v: "Moet je container-elementen altijd afsluiten, ook al toont de browser het zonder?", a: "Ja. Browsers zijn vergevingsgezind, maar in professionele code sluit je elk container-element netjes af.", o: "6.3 Container-elementen sluiten",
    uitleg: "Fout: <p>Eerste paragraaf<p>Tweede paragraaf. Correct: <p>Eerste paragraaf</p><p>Tweede paragraaf</p>." },

  // ===== 6.4 Geen slash bij lege elementen (6.4) =====
  { v: "Schrijf je een afsluitende slash bij lege elementen in HTML5 (bv. <img ... /> of <br />)?", a: "Nee, in HTML5 is die verouderd en overbodig. Correct: <img src=\"logo.png\" alt=\"Logo\"> en <br>.", o: "6.4 Geen slash bij lege elementen" },
  { v: "Geef 4 voorbeelden van lege elementen uit 6.4.", a: "<img>, <input>, <br> en <meta>.", o: "6.4 Geen slash bij lege elementen" },

  // ===== 6.5 Structuur & inspringen (6.5) =====
  { v: "Welke 2 correcte manieren zijn er om een element in je code te schrijven?", a: "1. Openingstag, inhoud en sluitingstag op dezelfde regel.\n2. Op aparte regels, met de inhoud netjes ingesprongen.", o: "6.5 Structuur & inspringen" },
  { v: "Wat is hier fout?\n<main><section class=\"hero\">\n<h1>Welkom op onze website</h1>\n<p>Dit is een voorbeeld.</p></section></main>", a: "Een rommelige, onregelmatige structuur. Zet elk element op een eigen regel en spring de inhoud netjes in.", o: "6.5 Structuur & inspringen" },
  { v: "Met welke sneltoets laat je VS Code je document automatisch formatteren (Format Document)?", a: "Windows: Shift + Alt + F\nMac: Shift + Option + F", o: "6.5 Structuur & inspringen",
    uitleg: "Je kan ook rechtsklikken in de editor en \"Format Document\" kiezen, of Format On Save aanzetten." },

  // ===== 7. Soorten lijsten (7) =====
  { v: "Geef de 3 soorten lijsten in HTML.", a: "1. Ongeordende lijst <ul>\n2. Geordende lijst <ol>\n3. Definitielijst <dl>", o: "7. Soorten lijsten" },

  // ===== 7.1 Ongeordende lijst (ul) (7.1) =====
  { v: "Wanneer gebruik je een ongeordende lijst <ul>?", a: "Als de volgorde van de items niet van belang is (opsommingstekens / bullets).", o: "7.1 Ongeordende lijst (ul)",
    uitleg: "Voorbeeld uit de cursus: een boodschappenlijstje (1kg aardappelen, 100ml melk, 50g boter)." },
  { v: "Met welk element maak je een item in een <ul> of <ol>?", a: "<li> (list item).", o: "7.1 Ongeordende lijst (ul)" },
  { v: "Waar staat ul voor?", a: "Unordered list (ongeordende lijst).", o: "7.1 Ongeordende lijst (ul)" },

  // ===== 7.2 Geordende lijst (ol) (7.2) =====
  { v: "Wanneer gebruik je een geordende lijst <ol>?", a: "Voor stappenplannen of rangschikkingen waarbij de volgorde essentieel is (nummering).", o: "7.2 Geordende lijst (ol)",
    uitleg: "Voorbeeld uit de cursus: de stappen van een recept (schil de aardappelen, kook ze, giet af en stamp fijn)." },
  { v: "Waar staat ol voor?", a: "Ordered list (geordende lijst).", o: "7.2 Geordende lijst (ol)" },

  // ===== 7.3 Definitielijst (dl) (7.3) =====
  { v: "Waaruit bestaat een definitielijst <dl>?", a: "Uit termen <dt> en hun bijbehorende definities of beschrijvingen <dd>.", o: "7.3 Definitielijst (dl)" },
  { v: "Waar staan dl, dt en dd voor?", a: "dl = definition list, dt = definition term (de term), dd = definition description (de beschrijving).", o: "7.3 Definitielijst (dl)" },
  { v: "Schrijf een definitielijst met de term HTML en de beschrijving \"HyperText Markup Language\".", a: "<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language.</dd>\n</dl>", o: "7.3 Definitielijst (dl)" },

  // ===== 7.4 Geneste lijsten (7.4) =====
  { v: "Waar plaats je een geneste lijst?", a: "Binnen een <li> van de bovenliggende lijst (denk aan FILO).", o: "7.4 Geneste lijsten",
    uitleg: "Voorbeeld:\n<ul>\n  <li>Desserts</li>\n  <li>Gebak\n    <ul>\n      <li>Croissant</li>\n    </ul>\n  </li>\n</ul>" },
  { v: "Wat is hier fout?\n<ul>\n  <li>Gebak</li>\n  <ul>\n    <li>Croissant</li>\n  </ul>\n</ul>", a: "De geneste <ul> staat rechtstreeks in de <ul>. Ze moet binnen de <li> \"Gebak\" staan, vóór de </li>.", o: "7.4 Geneste lijsten" },

  // ===== 8.1 Externe en interne links (8.1) =====
  { v: "Waarvoor kan je hyperlinks gebruiken?", a: "Om naar een andere pagina, website of specifieke plek op een pagina te navigeren, en om een e-mailadres of telefoonnummer aanklikbaar te maken.", o: "8.1 Externe en interne links" },
  { v: "Hoe maak je een link naar https://www.imdb.com?", a: "<a href=\"https://www.imdb.com\">Bekijk IMDb</a>", o: "8.1 Externe en interne links" },
  { v: "Hoe open je een externe link in een nieuw tabblad?", a: "Met target=\"_blank\" (en rel=\"noopener\"):\n<a href=\"https://www.imdb.com\" target=\"_blank\" rel=\"noopener\">IMDb</a>", o: "8.1 Externe en interne links" },
  { v: "Hoe maak je een link die een e-mail opent?", a: "<a href=\"mailto:tom.aertssens@ehb.be\">Stuur e-mail</a>", o: "8.1 Externe en interne links" },
  { v: "Hoe maak je een link die een telefoonnummer belt?", a: "<a href=\"tel:+3212345678\">Bel ons op</a>", o: "8.1 Externe en interne links" },

  // ===== 8.2 Ankerlinks (8.2) =====
  { v: "Wat is een ankerlink?", a: "Een link naar een plek op dezelfde pagina.", o: "8.2 Ankerlinks" },
  { v: "Hoe maak je een link die naar de sectie <h2 id=\"contact\"> springt?", a: "<a href=\"#contact\">Spring naar contactsectie</a>", o: "8.2 Ankerlinks",
    uitleg: "De # verwijst naar het id van het element waarnaar je springt." },
  { v: "Hoe maak je een link \"terug naar boven\"?", a: "<a href=\"#top\">Terug naar boven</a>", o: "8.2 Ankerlinks" },

  // ===== 8.3 Mappenstructuur & relatieve URL's (8.3) =====
  { v: "Wat betekent href=\"index.html\"?", a: "Een bestand in dezelfde map (SAME).", o: "8.3 Mappenstructuur & relatieve URL's" },
  { v: "Wat betekent href=\"music/index.html\"?", a: "Eén map dieper, in de submap music (CHILD).", o: "8.3 Mappenstructuur & relatieve URL's" },
  { v: "Wat betekent href=\"../index.html\"?", a: "Eén map hoger (PARENT).", o: "8.3 Mappenstructuur & relatieve URL's" },
  { v: "Wat betekent href=\"../../index.html\"?", a: "Twee mappen hoger (GRANDPARENT).", o: "8.3 Mappenstructuur & relatieve URL's" },
  { v: "Geef de 3 regels voor bestandsnamen.", a: "Uitsluitend kleine letters, geen spaties (gebruik een koppelteken -) en geen speciale tekens.", o: "8.3 Mappenstructuur & relatieve URL's" },
  { v: "Hoe heet de startpagina van een website vrijwel altijd?", a: "index.html", o: "8.3 Mappenstructuur & relatieve URL's" },

  // ===== 9. Character entities (9) =====
  { v: "Waarom heb je character entities nodig?", a: "Tekens zoals < en > worden gebruikt voor HTML-tags. Om ze als tekst te tonen, gebruik je entities.", o: "9. Character entities" },
  { v: "Welke entity gebruik je voor < ?", a: "&lt; (less than)", o: "9. Character entities" },
  { v: "Welke entity gebruik je voor > ?", a: "&gt; (greater than)", o: "9. Character entities" },
  { v: "Welke entity gebruik je voor & ?", a: "&amp; (ampersand)", o: "9. Character entities" },
  { v: "Welke entity gebruik je voor \" ?", a: "&quot;", o: "9. Character entities" },
  { v: "Welke entity gebruik je voor © ?", a: "&copy;", o: "9. Character entities" },
  { v: "Wat toont de browser voor: <p>Tom &amp; Jerry</p>", a: "Tom & Jerry", o: "9. Character entities" },
  { v: "Wat gaat er mis bij: <p>Gebruik <em> wordt in HTML gebruikt voor nadruk</p>", a: "De browser ziet <em> als HTML-element en maakt de rest van de tekst cursief.\nJuist: <p>Gebruik &lt;em&gt; wordt …</p>", o: "9. Character entities" },
  { v: "Waar vind je een overzicht van alle entities met een named entity code?", a: "Op de website van WHATWG (html.spec.whatwg.org, named character references). Ook MDN Web Docs heeft een overzicht.", o: "9. Character entities" },
  { v: "Hoeveel tekens kan UTF-8 coderen?", a: "Meer dan een miljoen.", o: "9. Character entities" },
  { v: "Waarom moet je voor accenten en emoji's meestal geen entity gebruiken?", a: "Dankzij de tekencodering UTF-8 worden de meeste speciale tekens (accenten, niet-Latijnse alfabetten, emoji's) rechtstreeks en correct weergegeven.", o: "9. Character entities" },
  { v: "Voor welke tekens blijven character entities wel nodig, ook met UTF-8?", a: "Voor tekens met een speciale betekenis in HTML: <, > en &.", o: "9. Character entities" },
  { v: "Hoe ziet een numerieke code voor een teken eruit? Geef een voorbeeld.", a: "&#x gevolgd door de hexadecimale code en ;, bv. &#x1D11E; voor de muzieksleutel 𝄞.", o: "9. Character entities",
    uitleg: "Andere voorbeelden uit de cursus: &#x10000; (Lineair B-teken), &#x12000; (spijkerschrift), &#x13000; (Egyptische hiëroglief)." },

  // ===== 10.1 Semantische layout-elementen (10.1) =====
  { v: "Wat is \"div-soep\"?", a: "Een pagina waarbij alle indelingen met <div class=\"...\"> gemaakt worden, in plaats van met betekenisvolle HTML5-layout-elementen.", o: "10.1 Semantische layout-elementen" },
  { v: "Waarom gebruik je semantische layout-elementen in plaats van div's?", a: "Ze helpen zoekmachines en toegankelijkheidstools de opbouw van je pagina te begrijpen.", o: "10.1 Semantische layout-elementen" },
  { v: "Geef de 7 semantische layout-elementen van HTML5 uit de cursus.", a: "<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>.", o: "10.1 Semantische layout-elementen" },
  { v: "Waarvoor dient <header>, en welke regel geldt?", a: "De introductie van een pagina of sectie (meestal titels, logo en navigatie). Een header mag niet genest worden in een andere <header> of <footer>.", o: "10.1 Semantische layout-elementen" },
  { v: "Waarvoor dient <nav>?", a: "Een sectie met de belangrijkste navigatielinks van de website.", o: "10.1 Semantische layout-elementen" },
  { v: "Waarvoor dient <main>, en hoe vaak mag het voorkomen?", a: "De unieke hoofdinhoud van het document. Slechts 1 keer per pagina.", o: "10.1 Semantische layout-elementen" },
  { v: "Waarvoor dient <section>?", a: "Een thematische groepering van inhoud, typisch met een eigen kop (<h2>).", o: "10.1 Semantische layout-elementen" },
  { v: "Waarvoor dient <article>?", a: "Zelfstandige, herbruikbare inhoud, bv. een blogpost, nieuwsbericht, productkaart of tweet.", o: "10.1 Semantische layout-elementen" },
  { v: "Waarvoor dient <aside>?", a: "Een zijbalk of gerelateerde info die losstaat van de hoofdinhoud (bv. gerelateerde artikels, citaten, advertenties).", o: "10.1 Semantische layout-elementen" },
  { v: "Waarvoor dient <footer>?", a: "De voettekst van een pagina of sectie (copyright, sitemap, contactlinks).", o: "10.1 Semantische layout-elementen" },
  { v: "Wanneer gebruik je nog een <div> in een semantische layout?", a: "Alleen voor CSS-styling of JavaScript, als er geen semantisch alternatief is.", o: "10.1 Semantische layout-elementen" },
  { v: "Mag <nav> in de <header> staan?", a: "Ja, de nav kan in de header, maar ook als losstaand blok.", o: "10.1 Semantische layout-elementen" },

  // ===== 10.1 Voorbeelden semantische layout (10.1) =====
  { v: "Zet deze pagina om naar semantische HTML5: welk element komt rond elk deel?\n1. Titel \"TechNews Magazine\" + navigatielijst\n2. Het hoofdgedeelte van de pagina\n3. Het blok \"Laatste nieuws\"\n4. Eén nieuwsbericht \"HTML & CSS\"\n5. \"Aanbevolen links\" (gerelateerde info)\n6. \"Erasmushogeschool Brussel\" onderaan", a: "1. <header> (met de lijst in een <nav>)\n2. <main>\n3. <section>\n4. <article>\n5. <aside>\n6. <footer>", o: "10.1 Voorbeelden semantische layout" },
  { v: "Een product in een webshop: welk semantisch element gebruik je voor de hele productkaart?", a: "<article>, met daarin een <header> (titel), een <div> (beschrijving) en een <footer> (prijs + knop).", o: "10.1 Voorbeelden semantische layout" },
  { v: "Welke elementen staan in de productkaart (article) uit de cursus, en wat staat erin?", a: "<header>: de titel van het product (<h2>).\n<div>: de beschrijving.\n<footer>: de prijs en de actieknop (\"In winkelwagen\").", o: "10.1 Voorbeelden semantische layout",
    uitleg: "Een <header> en <footer> kunnen dus ook binnen een article gebruikt worden, niet alleen voor de hele pagina." },

  // ===== Oefening: HTML debugging (Oef. 1) =====
  { v: "Zoek de fouten in deze code (minstens 5):\n<DOCTYPE HTML>\n<html>\n<head>\n  <title>Mijn Eerste Pagina\n</head>\n<body>\n  <h1>Welkom op mijn website<h1>\n  <p>Dit is een <b>belangrijke mededeling.</p></b>\n  <p>Bekijk de <a href=contact.html>contactpagina</a>!\n</body>", a: "1. <DOCTYPE HTML> moet <!DOCTYPE html> zijn (uitroepteken).\n2. <html> mist lang=\"nl\".\n3. <meta charset=\"UTF-8\"> (en viewport) ontbreekt in de head.\n4. <title> wordt niet afgesloten (</title>).\n5. <h1> wordt afgesloten met <h1> in plaats van </h1>.\n6. </p></b> staat in de verkeerde volgorde (FILO): </b></p>.\n7. href=contact.html mist dubbele aanhalingstekens.\n8. De laatste <p> wordt niet afgesloten.\n9. </html> ontbreekt.", o: "Oefening: HTML debugging",
    uitleg: "In de oefening staat ook <img src=\"foto.jpg\" alt=\"foto 1\">: een alt als \"foto 1\" beschrijft niets; geef een echte beschrijving. Gebruik voor belangrijke tekst ook liever <strong> dan <b>." },

  // ===== Oefening: semantische tekststructuur (Oef. 2–3) =====
  { v: "Je maakt een \"Top 5 Movies\"-pagina waarin elke filmnaam begint met een nummer (\"1. The Shawshank Redemption\"). Gebruik je een <ol> of koppen?", a: "Koppen (bv. <h2>), met het nummer zelf in de tekst. Genummerde titels bestaan niet in HTML, en het is geen geordende lijst.", o: "Oefening: semantische tekststructuur",
    uitleg: "De filmnamen zijn titels met elk een eigen beschrijving (paragraaf) eronder. Een lijst zou de structuur verkeerd weergeven." },
  { v: "Welke tag gebruik je voor elk stukje? (oefening 3)\n1. De boektitel \"A Brief History of Time\"\n2. De definitie van een zwart gat\n3. De afkorting NASA\n4. Het citaat van Hawking in de zin\n5. De 2 in E = mc²\n6. De 2 in CO₂\n7. Het copyrightsymbool", a: "1. <cite>\n2. <dfn>\n3. <abbr title=\"National Aeronautics and Space Administration\">\n4. <q> (kort citaat in de zin) of <blockquote> (op een eigen regel)\n5. <sup>\n6. <sub>\n7. &copy;", o: "Oefening: semantische tekststructuur" },

  // ===== Oefening: lijsten (Oef. 4 & 6) =====
  { v: "Hoe structureer je de filmgegevens van The Shawshank Redemption (oefening 4)?", a: "<h1> voor de filmtitel, <h2> \"General info\", de gegevens (Director, Release date, Duration, IMDB rating) in een <ul>, met geneste lijsten voor Genres en Writers, en een <hr> eronder.", o: "Oefening: lijsten" },
  { v: "In de receptenpagina (oefening 6) staat bij één bereidingsstap een lijst met ingrediënten. Welke lijsten gebruik je?", a: "Een <ol> voor de bereidingsstappen, met binnen één <li> een geneste <ul> met de ingrediënten.", o: "Oefening: lijsten" },
  { v: "Hoe maak je in oefening 6 de inhoudsopgave die naar de sectie \"begrippen\" springt?", a: "Je geeft de sectie een id: <section id=\"begrippen\">, en linkt ernaar met <a href=\"#begrippen\">. Onderaan elke sectie komt <a href=\"#top\">Terug naar boven</a>.", o: "Oefening: lijsten" },
  { v: "Welke lijst gebruik je voor culinaire begrippen met hun uitleg (Al dente, Mise-en-place)?", a: "Een definitielijst: <dl> met <dt> voor het begrip en <dd> voor de uitleg.", o: "Oefening: lijsten" },

  // ===== Oefening: relatieve paden (Oef. 5) =====
  { v: "Mappenstructuur:\nmy-website/\n  index.html\n  assets/images/logo.png\n  assets/css/style.css\n  pages/about.html\n  pages/blog/article1.html\nIn index.html: link naar about.html?", a: "href=\"pages/about.html\"", o: "Oefening: relatieve paden" },
  { v: "Mappenstructuur:\nmy-website/\n  index.html\n  assets/images/logo.png\n  assets/css/style.css\n  pages/about.html\n  pages/blog/article1.html\nIn index.html: afbeelding logo.png?", a: "src=\"assets/images/logo.png\"", o: "Oefening: relatieve paden" },
  { v: "Mappenstructuur:\nmy-website/\n  index.html\n  assets/images/logo.png\n  assets/css/style.css\n  pages/about.html\n  pages/blog/article1.html\nIn about.html: link terug naar index.html?", a: "href=\"../index.html\"", o: "Oefening: relatieve paden",
    uitleg: "about.html zit in pages/, dus één map hoger (PARENT) ligt index.html." },
  { v: "Mappenstructuur:\nmy-website/\n  index.html\n  assets/images/logo.png\n  assets/css/style.css\n  pages/about.html\n  pages/blog/article1.html\nIn article1.html: link naar about.html?", a: "href=\"../about.html\"", o: "Oefening: relatieve paden",
    uitleg: "article1.html zit in pages/blog/; één map hoger is pages/, waar about.html staat." },
  { v: "Mappenstructuur:\nmy-website/\n  index.html\n  assets/images/logo.png\n  assets/css/style.css\n  pages/about.html\n  pages/blog/article1.html\nIn article1.html: afbeelding logo.png?", a: "src=\"../../assets/images/logo.png\"", o: "Oefening: relatieve paden",
    uitleg: "Twee mappen hoger (GRANDPARENT) kom je in my-website/, daarna ga je naar assets/images/." },
  { v: "Mappenstructuur:\nmy-website/\n  index.html\n  assets/images/logo.png\n  assets/css/style.css\n  pages/about.html\n  pages/blog/article1.html\nIn article1.html: link naar style.css?", a: "<link rel=\"stylesheet\" href=\"../../assets/css/style.css\">", o: "Oefening: relatieve paden" },

  // ===== Oefening: semantische layout (Oef. 7) =====
  { v: "Oefening 7 (nieuwsartikel-pagina): waar komen deze onderdelen?\n1. Sitenaam (h1) en hoofdnavigatie\n2. Lijst met Home, Nieuws, Reviews, Contact\n3. Het nieuwsartikel\n4. Titel, auteur en datum van het artikel\n5. Tags/categorieën van het artikel\n6. \"Over de auteur\"\n7. Copyright en contactlink", a: "1. <header>\n2. <nav> met een <ul>\n3. <article> in de <main>\n4. Een <header> in het article\n5. Een <footer> in het article\n6. <aside>\n7. De algemene <footer> (met &copy; 2026 en een mailto:-link)", o: "Oefening: semantische layout" },

];

kaarten_WEB_les1.structuur = [
  { kop: "1. Vakorganisatie & evaluatie", slide: "1" },
  { o: "Vakorganisatie", slide: "1", sub: true },
  { o: "1.1 Studiemateriaal & platformen", slide: "1.1", sub: true },
  { o: "1.2 Evaluatieoverzicht", slide: "1.2", sub: true },
  { kop: "2. Inleiding", slide: "2" },
  { o: "2.1 Ontstaan van het web, HTML & W3C", slide: "2.1", sub: true },
  { o: "2.2 Drie pijlers van het web", slide: "2.2", sub: true },
  { o: "2.3 De ontwikkelomgeving", slide: "2.3", sub: true },
  { o: "2.3 Extensies voor VS Code", slide: "2.3", sub: true },
  { kop: "3. HTML grondbeginselen & syntax", slide: "3" },
  { o: "3.1 Waarom HTML leren?", slide: "3.1", sub: true },
  { o: "3.2 Elementen, tags en attributen", slide: "3.2", sub: true },
  { o: "3.3 Regels bij het nesten", slide: "3.3", sub: true },
  { kop: "4. Standaard HTML5 (boilerplate)", slide: "4" },
  { o: "4. Boilerplate", slide: "4", sub: true },
  { o: "4.1 Onderdelen van de head", slide: "4.1", sub: true },
  { o: "4.2 HTML-commentaar", slide: "4.2", sub: true },
  { kop: "5. Tekst- & semantische elementen", slide: "5" },
  { o: "5. Opmaak los van design", slide: "5", sub: true },
  { o: "5.1 Headings (koppen)", slide: "5.1", sub: true },
  { o: "5.2 Paragrafen & regelomloop", slide: "5.2", sub: true },
  { o: "5.3 Visuele vs. semantische opmaak", slide: "5.3", sub: true },
  { o: "5.4 div en span", slide: "5.4", sub: true },
  { kop: "6. Code-afspraken & best practices", slide: "6" },
  { o: "6.1 Kleine letters", slide: "6.1", sub: true },
  { o: "6.2 Dubbele quotes", slide: "6.2", sub: true },
  { o: "6.3 Container-elementen sluiten", slide: "6.3", sub: true },
  { o: "6.4 Geen slash bij lege elementen", slide: "6.4", sub: true },
  { o: "6.5 Structuur & inspringen", slide: "6.5", sub: true },
  { kop: "7. Drie soorten lijsten", slide: "7" },
  { o: "7. Soorten lijsten", slide: "7", sub: true },
  { o: "7.1 Ongeordende lijst (ul)", slide: "7.1", sub: true },
  { o: "7.2 Geordende lijst (ol)", slide: "7.2", sub: true },
  { o: "7.3 Definitielijst (dl)", slide: "7.3", sub: true },
  { o: "7.4 Geneste lijsten", slide: "7.4", sub: true },
  { kop: "8. Hyperlinks, e-mail & mapstructuren", slide: "8" },
  { o: "8.1 Externe en interne links", slide: "8.1", sub: true },
  { o: "8.2 Ankerlinks", slide: "8.2", sub: true },
  { o: "8.3 Mappenstructuur & relatieve URL's", slide: "8.3", sub: true },
  { kop: "9. Character entities", slide: "9" },
  { o: "9. Character entities", slide: "9", sub: true },
  { kop: "10. HTML5 semantische layout", slide: "10" },
  { o: "10.1 Semantische layout-elementen", slide: "10.1", sub: true },
  { o: "10.1 Voorbeelden semantische layout", slide: "10.1", sub: true },
  { kop: "Oefeningen les 1", slide: "Oef." },
  { o: "Oefening: HTML debugging", slide: "Oef. 1", sub: true },
  { o: "Oefening: semantische tekststructuur", slide: "Oef. 2–3", sub: true },
  { o: "Oefening: lijsten", slide: "Oef. 4 & 6", sub: true },
  { o: "Oefening: relatieve paden", slide: "Oef. 5", sub: true },
  { o: "Oefening: semantische layout", slide: "Oef. 7", sub: true },
];
