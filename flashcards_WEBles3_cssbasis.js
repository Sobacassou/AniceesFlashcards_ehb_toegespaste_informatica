// Web Essentials – Les 3: CSS-basis, kleuren & typografie
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = tekening op de voorkant (map afbeeldingen/WEBles3_cssbasis/), imgAntwoord = tekening op de achterkant (optioneel)
// De structuur onderaan bepaalt het overzicht naast de kaart (volgorde en nummering van de cursus).

const kaarten_WEB_les3 = [

  // ===== 1.1 Wat is CSS? (1.1) =====
  { v: "Waar staat CSS voor?", a: "Cascading Style Sheets.", o: "1.1 Wat is CSS?" },
  { v: "Wat is het verschil tussen de taak van HTML en van CSS?", a: "HTML zorgt voor de structuur en betekenis (semantiek) van een webpagina; CSS verzorgt de visuele vormgeving en lay-out (kleuren, lettertypes, uitlijning, spatiëring).\n\n<h1>Welkom</h1>           <!-- HTML: structuur -->\nh1 { color: #0056b3; }   /* CSS: vormgeving */", o: "1.1 Wat is CSS?" },
  { v: "Geef de 4 voordelen van het scheiden van inhoud (HTML) en vormgeving (CSS).", a: "1. Scheiding van inhoud en vormgeving\n2. Herbruikbaarheid\n3. Onderhoudbaarheid\n4. Flexibiliteit", o: "1.1 Wat is CSS?" },
  { v: "Wat betekent herbruikbaarheid bij CSS?", a: "Eén CSS-bestand kan tientallen HTML-pagina's stijlen.\n\n<link rel=\"stylesheet\" href=\"css/stijl.css\">   <!-- op elke pagina -->", o: "1.1 Wat is CSS?" },
  { v: "Wat betekent onderhoudbaarheid bij CSS?", a: "Eén aanpassing in de CSS verandert meteen de look-and-feel van de hele website.", o: "1.1 Wat is CSS?" },
  { v: "Wat betekent flexibiliteit bij CSS?", a: "Je kan de stijl van een pagina aanpassen zonder iets aan de HTML-code te wijzigen.", o: "1.1 Wat is CSS?" },
  { v: "Wat betekent \"scheiding van inhoud en vormgeving\"?", a: "De eenvoudige basisopmaak van pure HTML is niet bedoeld als volwaardige vormgeving; daarvoor gebruik je CSS.", o: "1.1 Wat is CSS?" },

  // ===== 1.2 Drie methoden om CSS toe te passen (1.2) =====
  { v: "Geef de 3 manieren om CSS toe te passen.", a: "1. Extern: een apart .css-bestand, gekoppeld met <link>\n2. Intern / embedded: in een <style>-tag in de <head>\n3. Inline: met het style-attribuut op het element", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Welke manier om CSS toe te passen is de best practice?", a: "Externe CSS (een apart .css-bestand), in 99% van de gevallen.\n\n<head>\n  <link rel=\"stylesheet\" href=\"css/stijl.css\">\n</head>", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Hoe koppel je het externe stylesheet css/stijl.css, en waar staat dat?", a: "<link rel=\"stylesheet\" href=\"css/stijl.css\"> in de <head>.", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Hoe koppel je een apart stylesheet dat alleen gebruikt wordt bij het afdrukken?", a: "Met media=\"print\": <link rel=\"stylesheet\" href=\"css/print.css\" media=\"print\">", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Wanneer gebruik je interne (embedded) CSS?", a: "Soms voor pagina-specifieke stijlen of snelle prototypes.\n\n<head>\n  <style>\n    h1 { color: #0056b3; }\n  </style>\n</head>", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Waar staat interne CSS?", a: "In de <head> van het HTML-document, binnen een <style>-tag.", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Hoe ziet inline CSS eruit?", a: "<p style=\"color: red; font-weight: bold;\">Dringende mededeling</p>", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Waarom wordt inline CSS afgeraden voor algemene opmaak?", a: "Het vervuilt de HTML en is moeilijk te onderhouden.\n\n<p style=\"color: red; font-size: 20px;\">Tekst</p>", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Waarvoor wordt inline CSS wel gebruikt?", a: "In combinatie met JavaScript, voor dynamische stijlaanpassingen.\n\n<p style=\"color: red;\">Tekst</p>", o: "1.2 Drie methoden om CSS toe te passen" },

  // ===== 1.3 Vergelijkingstabel (1.3) =====
  // -- overzichtstabel uit de cursus --
  { v: "Drie manieren om CSS toe te passen (vergelijkingstabel 1.3)", a: "Extern is de best practice (99% van de gevallen).", o: "1.3 Vergelijkingstabel", wit: true,
    tabel: [
      ["Methode", "Locatie", "Voordelen", "Nadelen"],
      ["Extern", "Los .css-bestand via <link>", "Schone HTML, herbruikbaar, beter onderhoudbaar, caching", "Extra HTTP-request (minimaal)"],
      ["Intern", "In <head> via <style>", "Handig voor testen of unieke stijlen voor één pagina", "Niet herbruikbaar op andere pagina's"],
      ["Inline", "Op het element via style=\"...\"", "Hoge prioriteit, snel voor vluchtige tests", "Vervuilt HTML, moeilijk te onderhouden"]
    ] },
  { v: "Geef de voor- en nadelen van externe CSS.", a: "Voordelen: schone HTML, herbruikbaar, beter onderhoudbaar, caching.\nNadeel: een extra HTTP-request (minimaal).\n\n<link rel=\"stylesheet\" href=\"css/stijl.css\">", o: "1.3 Vergelijkingstabel" },
  { v: "Geef de voor- en nadelen van interne CSS (<style>).", a: "Voordeel: handig voor testen of unieke stijlen voor één pagina.\nNadeel: niet herbruikbaar op andere pagina's.\n\n<style>\n  h1 { color: #0056b3; }\n</style>", o: "1.3 Vergelijkingstabel" },
  { v: "Geef de voor- en nadelen van inline CSS.", a: "Voordelen: hoge prioriteit, snel voor vluchtige tests.\nNadelen: vervuilt de HTML, moeilijk te onderhouden.\n\n<p style=\"color: red;\">Tekst</p>", o: "1.3 Vergelijkingstabel" },
  { v: "Wat is het (kleine) nadeel van externe CSS?", a: "Een extra HTTP-request om het bestand te laden (minimaal).", o: "1.3 Vergelijkingstabel",
    uitleg: "Daartegenover staat caching: de browser bewaart het bestand en hoeft het voor de volgende pagina's niet opnieuw te downloaden." },

  // ===== 2.1 CSS-basissyntaxis (2.1) =====
  { v: "Waaruit bestaat een CSS-stijlregel?", a: "Uit een selector en een declaratieblok tussen accolades { }.", o: "2.1 CSS-basissyntaxis" },
  { v: "Waaruit bestaat een declaratie?", a: "Uit een property (eigenschap) en een value (waarde), gescheiden door een dubbele punt :.\n\ncolor: #0056b3;\n/* color = property, #0056b3 = value */", o: "2.1 CSS-basissyntaxis" },
  { v: "Hoe scheid je declaraties binnen een declaratieblok?", a: "Met puntkomma's ;.\n\nh1 {\n  color: #0056b3;\n  font-size: 2rem;\n}", o: "2.1 CSS-basissyntaxis" },
  { v: "Benoem de onderdelen:\nh1 {\n  color: #0056b3;\n}", a: "h1 = selector\n{ … } = declaratieblok\ncolor: #0056b3; = declaratie\ncolor = property (eigenschap)\n#0056b3 = value (waarde)", o: "2.1 CSS-basissyntaxis" },
  { v: "Hoe schrijf je commentaar in CSS?", a: "Tussen /* en */. Dat kan over één of meerdere regels.\n\n/* Dit is commentaar */\n/* Commentaar\n   over meerdere regels */", o: "2.1 CSS-basissyntaxis" },
  { v: "Kan je in CSS commentaar schrijven met //?", a: "Nee, CSS heeft geen //-commentaar. Gebruik altijd /* ... */.\n\n/* juist */\n// fout in CSS", o: "2.1 CSS-basissyntaxis" },
  { v: "Waarvoor gebruik je commentaar in CSS?", a: "Om code toe te lichten of tijdelijk uit te schakelen; de browser negeert alles tussen /* en */.\n\np {\n  color: #333333;\n  /* font-size: 20px; */\n}", o: "2.1 CSS-basissyntaxis" },

  // ===== 2.2 Basisselectors (2.2) =====
  { v: "Geef de 6 basisselectors uit de cursus.", a: "1. Type-/elementselector (p)\n2. Class-selector (.naam)\n3. ID-selector (#naam)\n4. Attribuutselector ([attribuut=\"waarde\"])\n5. Groeperingsselector (komma)\n6. Universele selector (*)\n\np { color: #333333; }\n.intro { font-size: 1.2rem; }\n#hoofd-header { padding: 20px; }\ninput[type=\"text\"] { border: 1px solid #cccccc; }\nh1, h2 { color: #0056b3; }\n* { margin: 0; }", o: "2.2 Basisselectors" },
  { v: "Wat selecteert een type-/elementselector, bv. p?", a: "Alle elementen van dat HTML-type (alle <p>'s).", o: "2.2 Basisselectors" },
  { v: "Een class-selector schrijf je met een …, een ID-selector met een …", a: "Punt (.); hekje (#).\n\n.intro { color: green; }\n#hoofd-navigatie { background-color: #333333; }", o: "2.2 Basisselectors" },
  { v: "Hoe vaak mag een class-waarde op een pagina voorkomen, en mag een element meerdere classes hebben?", a: "Zo vaak je wil, en ja: één element mag meerdere classes hebben, bv. class=\"intro-tekst belangrijk\".\n\n<p class=\"intro-tekst belangrijk\">Tekst</p>", o: "2.2 Basisselectors" },
  { v: "Hoe vaak mag een ID op een pagina voorkomen?", a: "Maar één keer. Een ID is uniek.\n\n<header id=\"hoofd-header\">...</header>", o: "2.2 Basisselectors" },
  { v: "Waarmee mag een ID niet beginnen?", a: "Met een cijfer.\n\n<div id=\"menu\">       <!-- juist -->\n<div id=\"1menu\">      <!-- fout -->", o: "2.2 Basisselectors" },
  { v: "Geef de regels voor het benoemen van classes en ID's.", a: "Duidelijke, beschrijvende namen; beginnen met een letter; geen spaties. Een class als het meerdere keren kan voorkomen, een unieke naam voor een ID.\n\n.product-kaart { padding: 10px; }\n#hoofd-navigatie { background-color: #333333; }", o: "2.2 Basisselectors" },
  { v: "Wanneer kies je een class in plaats van een ID?", a: "Als een elementtype meerdere keren op de pagina kan voorkomen.\n\n.kaart { padding: 10px; }       /* meerdere kaarten */\n#hoofd-header { padding: 20px; }  /* uniek */", o: "2.2 Basisselectors" },
  { v: "Wat selecteert a[href^=\"https\"]?", a: "Alle links waarvan de href begint met \"https\" (externe links).\n\na[href^=\"https\"] {\n  color: green;\n}", o: "2.2 Basisselectors",
    uitleg: "^= betekent \"begint met\". Het is een attribuutselector." },
  { v: "Wat selecteert input[type=\"text\"]?", a: "Alle tekstinvoervelden.\n\ninput[type=\"text\"] {\n  border: 1px solid #cccccc;\n}", o: "2.2 Basisselectors" },
  { v: "Wat doet de groeperingsselector h1, h2, h3 { … }?", a: "Hij past dezelfde stijlregels toe op h1, h2 én h3 tegelijk.\n\nh1, h2, h3 {\n  font-family: Arial, sans-serif;\n}", o: "2.2 Basisselectors" },
  { v: "Wat selecteert *?", a: "Alle elementen op de pagina (universele selector).\n\n* {\n  margin: 0;\n  padding: 0;\n}", o: "2.2 Basisselectors",
    uitleg: "Het voorbeeld in de cursus is * { box-sizing: border-box; }." },
  { v: "Schrijf de selector voor: 1. alle paragrafen, 2. elementen met class=\"nieuw\", 3. het element met id=\"hoofd-navigatie\".", a: "1. p\n2. .nieuw\n3. #hoofd-navigatie\n\np { color: #333333; }\n.nieuw { color: green; }\n#hoofd-navigatie { background-color: #333333; }", o: "2.2 Basisselectors" },

  // ===== 2.3 Combinators & relatieselectors (2.3) =====
  { v: "Geef de 4 combinators.", a: "1. Descendant selector (spatie)\n2. Child selector (>)\n3. Adjacent sibling selector (+)\n4. General sibling selector (~)\n\nnav a { color: white; }\nul > li { list-style: none; }\nh2 + p { font-weight: bold; }\nh2 ~ p { color: gray; }", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat selecteert nav a?", a: "Alle <a>-elementen binnen een <nav>, ongeacht het nestingsniveau (descendant selector).", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat selecteert ul > li?", a: "Alleen de <li>-elementen die directe kinderen zijn van een <ul> (child selector).", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat selecteert h2 + p?", a: "De eerste <p> die direct na een <h2> staat (adjacent sibling selector).", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat selecteert h2 ~ p?", a: "Alle <p>-elementen die siblings zijn van een <h2> en erna staan (general sibling selector).", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat is het verschil tussen nav a en nav > a?", a: "nav a: alle links binnen de nav, op elk niveau.\nnav > a: alleen links die rechtstreeks kind zijn van de nav.\n\nnav a { color: white; }     /* alle links in nav */\nnav > a { color: yellow; }  /* enkel directe kinderen */", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat is het verschil tussen h2 + p en h2 ~ p?", a: "h2 + p: alleen de eerste p direct na de h2.\nh2 ~ p: alle p's na de h2 (op hetzelfde niveau).\n\nh2 + p { font-weight: bold; }  /* eerste p na h2 */\nh2 ~ p { color: gray; }        /* alle p na h2 */", o: "2.3 Combinators & relatieselectors" },

  // ===== 2.4 Elementen groeperen (2.4) =====
  { v: "Wanneer gebruik je <div> of <span> om iets te stijlen?", a: "Wanneer er geen geschikt semantisch HTML-element is.\n\n<p>Dit is <span class=\"markeer\">gemarkeerd</span>.</p>\n.markeer { background-color: yellow; }", o: "2.4 Elementen groeperen" },
  { v: "Wat is het verschil tussen <div> en <span> bij het stijlen?", a: "<div> (block-level): om meerdere elementen te groeperen in een blok (bv. een kaart, sectie of container).\n<span> (inline-level): om een specifiek woord of zinsdeel binnen een tekstblok te stijlen.", o: "2.4 Elementen groeperen" },
  { v: "Je wil alleen de prijs \"€ 49,99\" in een zin groen maken. Welk element en welke CSS?", a: "Een <span> met een class:\n<p>Prijs: <span class=\"prijs-highlight\">€ 49,99</span></p>\n.prijs-highlight { color: #28a745; }", o: "2.4 Elementen groeperen" },

  // ===== 3.1 De cascade (3.1) =====
  { v: "Wat betekent \"cascading\"?", a: "Stijlregels stromen van boven naar beneden; als meerdere regels voor hetzelfde element gelden, beslist de browser welke wint.\n\np { color: blue; }\np { color: red; }   /* wint: staat later */", o: "3.1 De cascade" },
  { v: "Geef de 3 criteria waarmee de browser beslist welke CSS-regel wint, in volgorde.", a: "1. Belangrijkheid (!important)\n2. Specificiteit (gewicht van de selector)\n3. Volgorde in de code (bij gelijke specificiteit wint de laatste regel)\n\np { color: blue !important; }  /* 1. !important */\n#tekst { color: red; }         /* 2. specificiteit */\np { color: green; }            /* 3. volgorde */", o: "3.1 De cascade" },
  { v: "Welke kleur krijgt de tekst?\np { color: blue; }\np { color: red; }", a: "Rood: bij gelijke specificiteit wint de laatst geschreven regel.", o: "3.1 De cascade" },
  { v: "Je laadt base.css, components.css en home.css in die volgorde. Welke wint bij gelijke specificiteit?", a: "home.css: de regel uit het laatst geladen bestand wint.\n\n<link rel=\"stylesheet\" href=\"css/base.css\">\n<link rel=\"stylesheet\" href=\"css/components.css\">\n<link rel=\"stylesheet\" href=\"css/home.css\">", o: "3.1 De cascade",
    uitleg: "De browser behandelt alle stylesheets samen als één verzameling regels. De volgorde van inladen is dus belangrijk." },
  { v: "Kan een regel uit base.css (eerst geladen) toch winnen van een latere regel uit home.css?", a: "Ja, als de selector in base.css een hogere specificiteit heeft. Specificiteit weegt zwaarder dan de bestandsvolgorde.\n\n/* base.css */\n#hoofd p { color: blue; }   /* wint: hogere specificiteit */\n/* home.css */\np { color: red; }", o: "3.1 De cascade" },
  { v: "Waar staat embedded CSS (<style>) meestal, en wat betekent dat?", a: "Na de externe stylesheets. Daardoor wint ze bij gelijke specificiteit.\n\n<link rel=\"stylesheet\" href=\"css/stijl.css\">\n<style>\n  p { color: red; }\n</style>", o: "3.1 De cascade" },

  // ===== 3.2 Specificiteit (3.2) =====
  // -- overzichtstabel uit de cursus --
  { v: "Specificiteit (overzicht 3.2)", a: "Een verschil in een kolom weegt zwaarder dan alle kolommen erna samen.", o: "3.2 Specificiteit", wit: true,
    tabel: [
      ["Selectortype", "Voorbeeld", "Score (Inline, ID, Class, Type)"],
      ["Universele selector", "*", "(0, 0, 0, 0)"],
      ["Type-/elementselector", "p, h1, ::before", "(0, 0, 0, 1)"],
      ["Class / attribuut / pseudo-class", ".btn, [type=\"text\"], :hover", "(0, 0, 1, 0)"],
      ["ID-selector", "#hoofd-header", "(0, 1, 0, 0)"],
      ["Inline style", "style=\"...\"", "(1, 0, 0, 0)"]
    ] },
  { v: "In welke 4 kolommen berekent de browser specificiteit?", a: "(Inline, ID, Class, Type).\n\n<p style=\"...\">   <!-- (1, 0, 0, 0) -->\n#hoofd-header      /* (0, 1, 0, 0) */\n.btn               /* (0, 0, 1, 0) */\np                  /* (0, 0, 0, 1) */", o: "3.2 Specificiteit",
    uitleg: "Eerst vergelijkt de browser de kolom Inline, dan ID, dan Class, dan Type. Een verschil in een kolom weegt zwaarder dan alle kolommen erna samen." },
  { v: "Wat is de specificiteit van de universele selector *?", a: "(0, 0, 0, 0)\n\n* { margin: 0; }   /* (0, 0, 0, 0) */", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van een type-selector (p, h1) of een pseudo-element (::before)?", a: "(0, 0, 0, 1)\n\np { color: #333333; }            /* (0, 0, 0, 1) */\np::before { content: \"> \"; }   /* (0, 0, 0, 2) */", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van een class, attribuutselector of pseudo-class (.btn, [type=\"text\"], :hover)?", a: "(0, 0, 1, 0)\n\n.btn { padding: 5px; }                   /* (0, 0, 1, 0) */\n[type=\"text\"] { border: 1px solid; }   /* (0, 0, 1, 0) */\na:hover { color: red; }                  /* (0, 0, 1, 1) */", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van een ID-selector (#hoofd-header)?", a: "(0, 1, 0, 0)\n\n#hoofd-header { padding: 20px; }   /* (0, 1, 0, 0) */", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van een inline style (style=\"...\")?", a: "(1, 0, 0, 0)\n\n<p style=\"color: orange;\">Tekst</p>", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van p.beschrijving?", a: "(0, 0, 1, 1): één class en één type.\n\np.beschrijving { color: orange; }   /* (0, 0, 1, 1) */", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van .beschrijving?", a: "(0, 0, 1, 0)\n\n.beschrijving { color: green; }   /* (0, 0, 1, 0) */", o: "3.2 Specificiteit" },
  { v: "Welke kleur krijgt <p id=\"hoofd-tekst\" class=\"beschrijving\">?\np { color: black; }\n.beschrijving { color: green; }\np.beschrijving { color: orange; }\n#hoofd-tekst { color: purple; }", a: "Paars: #hoofd-tekst heeft specificiteit (0, 1, 0, 0) en wint van alles hierboven.", o: "3.2 Specificiteit" },
  { v: "Welke kleur krijgt deze tekst als er in de CSS #hoofd-tekst { color: purple; } staat?\n<p id=\"hoofd-tekst\" style=\"color: orange;\">Tekst</p>", a: "Oranje: de inline style heeft (1, 0, 0, 0) en wint van de ID-selector.", o: "3.2 Specificiteit" },
  { v: "Is !important een extra specificiteitsscore?", a: "Nee. !important geeft de declaratie voorrang op alle normale declaraties, zelfs op een inline style.\n\np { color: blue !important; }", o: "3.2 Specificiteit" },
  { v: "Waarom gebruik je !important zo weinig mogelijk?", a: "Het maakt de cascade moeilijker te begrijpen en te overschrijven. Maak eerst de selector specifieker of verbeter de volgorde; gebruik !important alleen als het echt nodig is (bv. een uitzonderingsklasse).\n\n/* liever */\n.menu a { color: white; }\n/* dan */\na { color: white !important; }", o: "3.2 Specificiteit" },
  { v: "Wint (0, 1, 0, 0) of (0, 0, 9, 9)?", a: "(0, 1, 0, 0): een verschil in een hogere kolom (ID) weegt zwaarder dan alle kolommen erna samen.", o: "3.2 Specificiteit" },

  // ===== 3.3 Overerving (inheritance) (3.3) =====
  { v: "Wat is overerving in CSS?", a: "Sommige eigenschappen worden automatisch doorgegeven van ouder-elementen (parent) naar kind-elementen (child).\n\nbody { color: #333333; font-family: Arial, sans-serif; }\n/* elke p in body erft die kleur en dat lettertype */", o: "3.3 Overerving (inheritance)" },
  { v: "Welke soort eigenschappen worden wel geërfd? Geef voorbeelden.", a: "Tekstgerelateerde eigenschappen: color, font-family, font-size, line-height en text-align.\n\nbody {\n  color: #333333;\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n}", o: "3.3 Overerving (inheritance)" },
  { v: "Welke soort eigenschappen worden niet geërfd? Geef voorbeelden.", a: "Layout- en boxmodel-eigenschappen: margin, padding, border, background-color, width en height.\n\n.kaart {\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #cccccc;\n}", o: "3.3 Overerving (inheritance)" },
  { v: "Hoe dwing je overerving af?", a: "Met de waarde inherit, bv. color: inherit;", o: "3.3 Overerving (inheritance)",
    uitleg: "Voorbeeld: een link neemt dan de tekstkleur van zijn ouder over in plaats van het standaard blauw." },
  { v: "Wordt background-color geërfd?", a: "Nee, het is een layout-/boxmodel-eigenschap.\n\ndiv { background-color: yellow; }\n/* een p in die div krijgt zelf geen achtergrondkleur */", o: "3.3 Overerving (inheritance)" },
  { v: "Wordt color geërfd?", a: "Ja, het is een tekstgerelateerde eigenschap.\n\ndiv { color: green; }\n/* een p in die div wordt ook groen */", o: "3.3 Overerving (inheritance)" },

  // ===== 4.1 Notatiemethoden voor kleuren (4.1) =====
  { v: "Met welke 2 eigenschappen stel je kleuren in?", a: "color (voorgrond / tekst) en background-color (achtergrond).\n\np {\n  color: #333333;\n  background-color: #f4f4f9;\n}", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Geef de 4 notatiemethoden voor kleuren.", a: "1. Kleurnamen (red)\n2. Hexadecimaal (#RRGGBB)\n3. RGB (rgb(255, 0, 0))\n4. HSL (hsl(0, 100%, 50%))\n\nh1 { color: red; }\nh2 { color: #ff0000; }\nh3 { color: rgb(255, 0, 0); }\nh4 { color: hsl(0, 100%, 50%); }", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Hoeveel kleurnamen kent CSS, en waarvoor zijn ze handig?", a: "148 Engelse kleurnamen (bv. red, darkcyan, lightgray). Handig om snel te testen.\n\np { color: darkcyan; }", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Hoe is een hexadecimale kleur opgebouwd?", a: "Een # met 6 tekens (0–9 en A–F). Telkens 2 tekens voor rood, groen en blauw (00 t/m FF = 0 t/m 255).\n\nh1 { color: #0056b3; }   /* 00 = rood, 56 = groen, b3 = blauw */", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Hoe schrijf je #FF0000 verkort?", a: "#F00\n\nh1 { color: #f00; }", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Op welke schaal geef je de waarden bij rgb(red, green, blue)?", a: "0 tot 255.\n\nh1 { color: rgb(255, 0, 0); }", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Waar staan de 3 waarden van hsl() voor?", a: "Hue (tint), saturation (verzadiging) en lightness (lichtheid).\n\nh1 { color: hsl(120, 100%, 50%); }   /* groen */", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Wat is hue in hsl(), en welke hoek is rood, groen en blauw?", a: "De hoek op het kleurenwiel, van 0 tot 360: 0 = rood, 120 = groen, 240 = blauw.\n\nh1 { color: hsl(0, 100%, 50%); }     /* rood */\nh2 { color: hsl(120, 100%, 50%); }   /* groen */\nh3 { color: hsl(240, 100%, 50%); }   /* blauw */", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Wat betekent saturation 0% en 100% in hsl()?", a: "0% = grijs, 100% = volledige kleur.\n\np { color: hsl(240, 0%, 50%); }     /* grijs */\np { color: hsl(240, 100%, 50%); }   /* volledig blauw */", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Wat betekent lightness 0%, 50% en 100% in hsl()?", a: "0% = zwart, 50% = normale kleur, 100% = wit.\n\np { color: hsl(240, 100%, 0%); }    /* zwart */\np { color: hsl(240, 100%, 50%); }   /* blauw */\np { color: hsl(240, 100%, 100%); }  /* wit */", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Schrijf rood in 5 notaties.", a: "red\n#ff0000\n#f00\nrgb(255, 0, 0)\nhsl(0, 100%, 50%)\n\nh1 { color: red; }\nh1 { color: #ff0000; }\nh1 { color: #f00; }\nh1 { color: rgb(255, 0, 0); }\nh1 { color: hsl(0, 100%, 50%); }", o: "4.1 Notatiemethoden voor kleuren" },

  // ===== 4.2 Transparantie & alpha (4.2) =====
  { v: "Wat doen rgba() en hsla()?", a: "Ze voegen een 4de parameter toe: alpha, tussen 0.0 (volledig transparant) en 1.0 (volledig dekkend). Alleen de kleur wordt transparant; de inhoud blijft leesbaar.\n\n.banner {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: hsla(0, 0%, 100%, 1);\n}", o: "4.2 Transparantie & alpha" },
  { v: "Wat is het verschil tussen background-color: rgba(0, 0, 0, 0.5) en opacity: 0.5?", a: "rgba: alleen de achtergrond is half transparant; de tekst blijft helder.\nopacity: het hele element, inclusief tekst en kinderen, wordt transparant.\n\n.a { background-color: rgba(0, 0, 0, 0.5); }   /* tekst blijft helder */\n.b { opacity: 0.5; }                          /* alles half doorzichtig */", o: "4.2 Transparantie & alpha" },
  { v: "Je wil een donkere, half doorzichtige achtergrond met witte, goed leesbare tekst. Wat gebruik je?", a: "background-color: rgba(0, 0, 0, 0.5); color: #ffffff;", o: "4.2 Transparantie & alpha",
    uitleg: "Met opacity zou de tekst ook doorzichtig worden." },

  // ===== 4.3 CSS custom properties (variabelen) (4.3) =====
  { v: "Waarvoor dienen CSS-variabelen (custom properties)?", a: "Om centrale waarden (zoals een kleurenschema) te definiëren en te hergebruiken. Dat verhoogt de onderhoudbaarheid.\n\n:root {\n  --hoofdkleur: #0056b3;\n}\nh1 {\n  color: var(--hoofdkleur);\n}", o: "4.3 CSS custom properties (variabelen)",
    uitleg: "De cursus zegt: je moet ze niet gebruiken tijdens oefeningen of examens, maar ze zijn heel handig in grotere projecten." },
  { v: "Hoe declareer je een CSS-variabele, en hoe gebruik je ze?", a: "Declareren: --primary-color: #0056b3;\nGebruiken: color: var(--primary-color);", o: "4.3 CSS custom properties (variabelen)" },
  { v: "Waar definieer je CSS-variabelen, en waarom?", a: "Bovenaan je CSS in de :root-pseudo-class, zodat ze overal in het document beschikbaar zijn.\n\n:root {\n  --hoofdkleur: #0056b3;\n  --achtergrond: #f4f4f9;\n}", o: "4.3 CSS custom properties (variabelen)" },
  { v: "Wat gebeurt er als je de waarde van een CSS-variabele aanpast?", a: "Ze verandert automatisch overal waar de variabele gebruikt wordt.\n\n:root { --hoofdkleur: #0056b3; }\nh1 { color: var(--hoofdkleur); }\n.btn { background-color: var(--hoofdkleur); }", o: "4.3 CSS custom properties (variabelen)" },

  // ===== 5.1 Lettertypefamilies (5.1) =====
  { v: "Wat is een font stack?", a: "Een lijst lettertypes in font-family, gescheiden door komma's. Vindt de browser het eerste lettertype niet, dan valt hij terug op het volgende.\n\nbody {\n  font-family: \"Helvetica Neue\", Arial, sans-serif;\n}", o: "5.1 Lettertypefamilies" },
  { v: "Waarmee eindig je een font stack altijd?", a: "Met een generieke familienaam: serif, sans-serif of monospace.\n\nbody {\n  font-family: Georgia, \"Times New Roman\", serif;\n}", o: "5.1 Lettertypefamilies" },
  { v: "Welke generieke familie gebruik je voor codeblokken?", a: "monospace (bv. font-family: \"Consolas\", \"Courier New\", Courier, monospace;).\n\ncode {\n  font-family: \"Consolas\", \"Courier New\", Courier, monospace;\n}", o: "5.1 Lettertypefamilies" },
  { v: "Waarom staat \"Helvetica Neue\" tussen aanhalingstekens in een font stack?", a: "Lettertypenamen met spaties zet je tussen aanhalingstekens.\n\nbody {\n  font-family: \"Helvetica Neue\", Arial, sans-serif;\n}", o: "5.1 Lettertypefamilies" },

  // ===== 5.2 Lettergrootte & maateenheden (5.2) =====
  // -- overzichtstabel uit de cursus --
  { v: "Maateenheden (overzicht 5.2)", a: "De standaardlettergrootte van browsers is 16px.", o: "5.2 Lettergrootte & maateenheden", wit: true,
    tabel: [
      ["Eenheid", "Type", "Omschrijving", "Gebruik"],
      ["px", "Absoluut", "Vaste schermpixels; schaalt niet mee met gebruikersinstellingen", "Borders, kleine vaste details"],
      ["%", "Relatief", "Ten opzichte van het ouder-element (hangt af van de eigenschap)", "Breedtes, hoogtes, afmetingen"],
      ["em", "Relatief", "Font-size van het ouder-element (stapelt bij nesting)", "Margins/padding relatief aan tekst"],
      ["rem", "Relatief", "Font-size van <html> (1rem = 16px)", "Typografie (font-size), layout"],
      ["vw / vh", "Viewport", "1% van de viewportbreedte / -hoogte", "Fullscreen hero-secties"]
    ] },
  { v: "Wat is de standaardlettergrootte van browsers?", a: "16px.\n\nhtml { font-size: 16px; }   /* standaard */", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat is px, en waarvoor gebruik je het?", a: "Absoluut: vaste schermpixels die niet meeschalen met de gebruikersinstellingen. Voor borders en kleine vaste details.\n\n.kaart { border: 1px solid #cccccc; }", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat is %, en waarvoor gebruik je het?", a: "Relatief ten opzichte van een eigenschap van het ouder-element (de exacte betekenis hangt af van de eigenschap). Voor breedtes, hoogtes en afmetingen van elementen.\n\n.kolom { width: 50%; }", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Waartegenover is em relatief, en waarvoor gebruik je het?", a: "Ten opzichte van de font-size van het ouder-element (het stapelt bij nesting). Voor margins en padding relatief aan tekst.\n\n.knop {\n  font-size: 1rem;\n  padding: 0.5em 1em;\n}", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Waartegenover is rem relatief, en waarvoor gebruik je het?", a: "Ten opzichte van de font-size van het root-element <html> (1rem = 16px standaard). Voor typografie (font-size) en layout.", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat is het verschil tussen em en rem?", a: "em is relatief aan de font-size van het ouder-element (en stapelt bij nesting); rem is altijd relatief aan het root-element <html>.", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat betekenen 1vw en 1vh?", a: "1vw = 1% van de viewportbreedte, 1vh = 1% van de viewporthoogte.\n\n.hero {\n  width: 100vw;\n  height: 100vh;\n}", o: "5.2 Lettergrootte & maateenheden",
    uitleg: "Vooral handig voor fullscreen hero-secties." },
  { v: "Welke eenheid gebruik je voor: 1. een border, 2. font-size, 3. een fullscreen hero-sectie?", a: "1. px\n2. rem\n3. vw / vh\n\n.kaart { border: 1px solid #cccccc; }\nh1 { font-size: 2.5rem; }\n.hero { height: 100vh; }", o: "5.2 Lettergrootte & maateenheden" },
  { v: "html { font-size: 16px; } — hoeveel pixels is h1 { font-size: 2.5rem; }?", a: "40px (2,5 × 16).\n\nhtml { font-size: 16px; }\nh1 { font-size: 2.5rem; }   /* 40px */", o: "5.2 Lettergrootte & maateenheden" },
  { v: "De ouder heeft font-size 16px. Hoeveel pixels is .disclaimer { font-size: 80%; }?", a: "12,8px (16 × 0,8).\n\n.disclaimer { font-size: 80%; }   /* 12,8px */", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Geef de 5 maateenheden uit de tabel, met hun type.", a: "px (absoluut), % (relatief), em (relatief), rem (relatief), vw/vh (viewport).\n\n.kaart {\n  border: 1px solid #cccccc;   /* px */\n  width: 50%;                  /* % */\n  padding: 1em;                /* em */\n  font-size: 1rem;             /* rem */\n  height: 50vh;                /* vh */\n}", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat doet font-size: clamp(1.5rem, 3vw, 2.5rem)?", a: "Vloeiende, responsieve typografie: de grootte is 3vw, maar nooit kleiner dan 1.5rem en nooit groter dan 2.5rem.\n\nh1 {\n  font-size: clamp(1.5rem, 3vw, 2.5rem);\n}", o: "5.2 Lettergrootte & maateenheden",
    uitleg: "Dit is \"ter info\". De volgorde is clamp(minimum, voorgestelde waarde, maximum)." },

  // ===== 5.3 Tekststijlen & opmaak (5.3) =====
  { v: "Welke waarden kan font-weight hebben?", a: "normal, bold of een getal van 100 tot 900.\n\nh1 { font-weight: bold; }\np { font-weight: 300; }", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarden kan font-style hebben?", a: "normal, italic of oblique.\n\nem { font-style: italic; }", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarden kan text-transform hebben?", a: "none, uppercase, lowercase of capitalize.\n\n.badge { text-transform: uppercase; }", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarden kan text-decoration hebben, en welke gebruik je vaak voor hyperlinks?", a: "none, underline of line-through. none haalt de onderlijning van links weg.\n\na { text-decoration: none; }\n.oud { text-decoration: line-through; }", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarde voor line-height is ideaal voor leesbaarheid, en in welke eenheid?", a: "1.5 tot 1.6, een verhouding zonder eenheid.\n\np { line-height: 1.6; }", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarden kan text-align hebben?", a: "left, center, right of justify.\n\nh1 { text-align: center; }", o: "5.3 Tekststijlen & opmaak" },
  { v: "Met welke eigenschappen stel je de spatiëring tussen letters en tussen woorden in?", a: "letter-spacing (tussen letters) en word-spacing (tussen woorden).\n\nh1 {\n  letter-spacing: 2px;\n  word-spacing: 5px;\n}", o: "5.3 Tekststijlen & opmaak" },
  { v: "Met welke eigenschap zet je tekst in hoofdletters?", a: "text-transform: uppercase;", o: "5.3 Tekststijlen & opmaak" },
  { v: "Met welke eigenschap haal je de onderlijning van een link weg?", a: "text-decoration: none;", o: "5.3 Tekststijlen & opmaak" },

  // ===== 6.1 Link-pseudo-classes (LVHA) (6.1) =====
  { v: "Wat zijn pseudo-classes?", a: "Selectors die elementen stijlen op basis van hun toestand of gebruikersinteractie (bv. :hover).\n\na:hover {\n  color: red;\n}", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat is de LVHA-regel?", a: "De vaste volgorde voor link-pseudo-classes: :link → :visited → :hover → :active.\n\na:link { color: blue; }\na:visited { color: purple; }\na:hover { color: red; }\na:active { color: orange; }", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Waarom is de volgorde LVHA belangrijk?", a: "Een link kan meerdere toestanden tegelijk hebben (bv. :visited én :hover). Bij gelijke specificiteit wint de laatste regel; met deze volgorde krijgt de juiste stijl voorrang.\n\na:link { color: blue; }\na:visited { color: purple; }\na:hover { color: red; }\na:active { color: orange; }", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat stijlt a:link?", a: "Een nog niet bezochte link.\n\na:link { color: blue; }", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat stijlt a:visited?", a: "Een link naar een pagina die je al bezocht hebt.\n\na:visited { color: purple; }", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat stijlt a:hover?", a: "Een link waar de muis over beweegt.\n\na:hover { color: red; }", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat stijlt a:active?", a: "Een link op het moment dat je erop klikt.\n\na:active { color: orange; }", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Waarom is a:focus-visible belangrijk?", a: "Het toont de focus bij toetsenbordnavigatie (met TAB). Cruciaal voor toegankelijkheid.\n\na:focus-visible {\n  outline: 3px solid #0056b3;\n}", o: "6.1 Link-pseudo-classes (LVHA)",
    uitleg: "Voorbeeld: a:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }" },

  // ===== 6.2 Structurele pseudo-classes (6.2) =====
  { v: "Wat selecteren li:first-child en li:last-child?", a: "Het eerste en het laatste <li>-kind van zijn ouder.", o: "6.2 Structurele pseudo-classes" },
  { v: "Wat selecteert tr:nth-child(even), en waarvoor gebruik je het?", a: "Elke even rij. Voor zebrastrepen in tabellen.\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}", o: "6.2 Structurele pseudo-classes" },
  { v: "Wat selecteert li:nth-child(3)?", a: "Exact het derde item.\n\nli:nth-child(3) {\n  color: red;\n}", o: "6.2 Structurele pseudo-classes" },
  { v: "Waarop selecteren structurele pseudo-classes?", a: "Op de positie van een element in de HTML-boom.\n\nli:first-child { font-weight: bold; }\ntr:nth-child(even) { background-color: #f2f2f2; }", o: "6.2 Structurele pseudo-classes" },

  // ===== 6.3 Pseudo-elements (6.3) =====
  { v: "Wat zijn pseudo-elements?", a: "Ze stijlen een specifiek onderdeel van een element, of voegen virtuele inhoud toe.\n\np::first-letter { font-size: 2rem; }\n.verplicht::after { content: \" *\"; }", o: "6.3 Pseudo-elements" },
  { v: "Hoe schrijf je een pseudo-element: met één of twee dubbele punten?", a: "Met twee: ::first-letter, ::before, ::after. (Een pseudo-class heeft er één: :hover.)\n\na:hover { color: red; }              /* pseudo-class: 1 dubbele punt */\np::first-letter { font-size: 2rem; } /* pseudo-element: 2 */", o: "6.3 Pseudo-elements" },
  { v: "Wat doet p.intro::first-letter?", a: "Het stijlt de eerste letter van een intro-paragraaf, bv. als grote beginletter (drop cap).\n\np.intro::first-letter {\n  font-size: 3rem;\n  font-weight: bold;\n}", o: "6.3 Pseudo-elements" },
  { v: "Wat doet dit?\n.verplicht::after { content: \" *\"; color: red; }", a: "Het voegt na elk element met class \"verplicht\" een rood sterretje toe.", o: "6.3 Pseudo-elements" },
  { v: "Welke eigenschap is verplicht bij ::before en ::after om inhoud toe te voegen?", a: "content, bv. content: \" *\";", o: "6.3 Pseudo-elements" },

  // ===== 6.4 Webfonts (6.4) =====
  { v: "Geef de 2 manieren om webfonts te integreren.", a: "Optie A: Google Fonts (hosted fonts)\nOptie B: custom embedded fonts met @font-face\n\n<link href=\"https://fonts.googleapis.com/css2?family=Open+Sans\" rel=\"stylesheet\">\n@font-face { font-family: \"MijnFont\"; src: url(\"../fonts/mijnfont.woff2\"); }", o: "6.4 Webfonts" },
  { v: "Hoe gebruik je een Google Font (3 stappen)?", a: "1. Kies een lettertype op fonts.google.com (bv. Roboto).\n2. Zet de gegenereerde <link>-elementen in de <head>.\n3. Gebruik de font-family in je CSS, bv. font-family: \"Roboto\", sans-serif;", o: "6.4 Webfonts" },
  { v: "Waar zet je de <link> van Google Fonts ten opzichte van je eigen stylesheet?", a: "Vóór je eigen stylesheet in de <head>.", o: "6.4 Webfonts" },
  { v: "Waarmee definieer je een eigen fontbestand (bv. .woff2) in CSS, en waar?", a: "Met @font-face, bovenaan je CSS-bestand.\n\n@font-face {\n  font-family: \"MijnFont\";\n  src: url(\"../fonts/mijnfont.woff2\") format(\"woff2\");\n}", o: "6.4 Webfonts" },
  { v: "Vul aan:\n@font-face {\n  font-family: \"…\";\n  src: url(\"../fonts/mijnfont.woff2\") format(\"…\");\n}", a: "font-family: \"MijnAangepastFont\";\nformat(\"woff2\")", o: "6.4 Webfonts",
    uitleg: "Daarna gebruik je het gewoon: h1 { font-family: \"MijnAangepastFont\", Georgia, serif; }" },
  { v: "Welke bestandsformaten voor fonts noemt de cursus?", a: ".woff2 en .woff.\n\n@font-face {\n  font-family: \"MijnFont\";\n  src: url(\"../fonts/mijnfont.woff2\") format(\"woff2\"),\n       url(\"../fonts/mijnfont.woff\") format(\"woff\");\n}", o: "6.4 Webfonts" },

  // ===== 7.2 Veelgemaakte fouten bij CSS (7.2) =====
  { v: "Geef de 4 veelgemaakte fouten bij CSS.", a: "1. Puntkomma vergeten na een declaratie.\n2. Foute relatieve paden naar afbeeldingen/fonts.\n3. Geen punt bij een class of geen hekje bij een ID.\n4. Te veel !important gebruiken.\n\np { color: red }              /* puntkomma vergeten */\nintro { color: green; }       /* punt vergeten bij class */\nmenu { color: blue; }         /* hekje vergeten bij ID */", o: "7.2 Veelgemaakte fouten bij CSS" },
  { v: "Waartegenover zijn paden in stijl.css relatief: het CSS-bestand of het HTML-bestand?", a: "Ten opzichte van de locatie van het CSS-bestand, bv. ../images/logo.png.\n\n/* css/stijl.css */\nheader {\n  background-image: url(\"../images/logo.png\");\n}", o: "7.2 Veelgemaakte fouten bij CSS" },
  { v: "Je CSS staat in css/stijl.css en je logo in images/logo.png. Welk pad gebruik je in de CSS?", a: "url(\"../images/logo.png\")\n\nheader {\n  background-image: url(\"../images/logo.png\");\n}", o: "7.2 Veelgemaakte fouten bij CSS" },

  // ===== Oefening: CSS debuggen (Oef. 1) =====
  { v: "Zoek de fouten (minstens 6):\nbody {\n  font-family: Open Sans, sans-serif\n  background-color: #f4f4f9000;\n  color: 333333;\n}\n#cookie-banner {\n  font-size: 14px\n  line-height: 1,5;\n}\n.hoofd-titel {\n  color: #0056b3;\nbelangrijk {\n  color: red;\n}", a: "1. Puntkomma vergeten na sans-serif (en \"Open Sans\" tussen aanhalingstekens).\n2. #f4f4f9000 is geen geldige hexkleur (9 tekens): #f4f4f9.\n3. color: 333333 mist het hekje: #333333.\n4. Puntkomma vergeten na 14px.\n5. 1,5 moet 1.5 zijn (punt in plaats van komma).\n6. .hoofd-titel wordt niet afgesloten met }.\n7. belangrijk mist de punt van een class: .belangrijk.", o: "Oefening: CSS debuggen" },

  // ===== Oefening: specificiteit berekenen (Oef. 2) =====
  { v: "Bereken de specificiteit (Inline, ID, Class, Type):\n1. a\n2. .blog-post a\n3. #main-content .blog-post p a\n4. div.container article p a.link", a: "1. (0, 0, 0, 1)\n2. (0, 0, 1, 1)\n3. (0, 1, 1, 2)\n4. (0, 0, 2, 4)", o: "Oefening: specificiteit berekenen" },
  { v: "Welke kleur krijgt de link \"flexibel\"?\n<div id=\"main-content\" class=\"container\">\n  <article class=\"blog-post\">\n    <p class=\"intro\">CSS is <a href=\"#\" class=\"link\">flexibel</a>.</p>\n  </article>\n</div>\na { color: blue; }\n.blog-post a { color: green; }\n#main-content .blog-post p a { color: red; }\ndiv.container article p a.link { color: orange; }", a: "Rood: #main-content .blog-post p a heeft (0, 1, 1, 2) en is de enige regel met een ID. Die wint van (0, 0, 2, 4).", o: "Oefening: specificiteit berekenen" },
  { v: "Dezelfde CSS als bij \"flexibel\". Welke kleur krijgt de tweede link \"selectors\" (zonder class)?\n<p>Lees meer over <a href=\"#\">selectors</a>.</p>", a: "Rood: ook deze link staat in een p binnen .blog-post binnen #main-content. Regel 4 geldt niet (geen class link).", o: "Oefening: specificiteit berekenen" },
  { v: "Schrijf de selector voor alleen de <p>'s die directe kinderen zijn van <article class=\"blog-post\">.", a: ".blog-post > p\n\n.blog-post > p {\n  color: #333333;\n}", o: "Oefening: specificiteit berekenen" },
  { v: "Schrijf de selector voor alleen de <a>'s binnen een paragraaf met class intro.", a: ".intro a (of p.intro a)\n\n.intro a {\n  color: green;\n}", o: "Oefening: specificiteit berekenen" },

  // ===== Oefening: rem vs em (Oef. 4) =====
  { v: "html { font-size: 16px; } en .artikel { font-size: 20px; }\nHoeveel pixels is h1 { font-size: 2.5rem; }?", a: "40px (2,5 × 16; rem kijkt naar html).", o: "Oefening: rem vs em" },
  { v: "html { font-size: 16px; } en .artikel { font-size: 20px; }\nHoeveel pixels is h2 { font-size: 1.5em; } binnen .artikel?", a: "30px (1,5 × 20; em kijkt naar de ouder .artikel).", o: "Oefening: rem vs em" },
  { v: "html { font-size: 16px; } en .artikel { font-size: 20px; }\nHoeveel pixels is p { font-size: 1rem; }?", a: "16px (1 × 16; rem kijkt altijd naar html, ook binnen .artikel).", o: "Oefening: rem vs em" },
  { v: "html { font-size: 16px; } en p { font-size: 1rem; }\nHoeveel pixels is span.subtekst { font-size: 0.8em; } binnen die p?", a: "12,8px (0,8 × 16; em kijkt naar de ouder p van 16px).", o: "Oefening: rem vs em" },

  // ===== Oefening: artikel-card (Oef. 6–7) =====
  { v: "Schrijf de CSS voor de knop .btn: geen onderlijning, padding 5px, groene achtergrond #28a745 met witte tekst, en bij hover #218838.", a: ".btn {\n  text-decoration: none;\n  padding: 5px;\n  background-color: #28a745;\n  color: #ffffff;\n}\n.btn:hover {\n  background-color: #218838;\n}", o: "Oefening: artikel-card" },
  { v: "Schrijf de CSS voor de .badge: blauwe achtergrond #0056b3, witte tekst, 0.75rem, hoofdletters en padding 5px.", a: ".badge {\n  background-color: #0056b3;\n  color: #ffffff;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  padding: 5px;\n}", o: "Oefening: artikel-card" },
  { v: "Je wil de titels in de Google Font \"Sigmar One\" en de rest in \"Gill Sans\". Wat moet je doen?", a: "1. De <link> van Sigmar One (van fonts.google.com) in de <head> zetten.\n2. h1, h2 { font-family: \"Sigmar One\", sans-serif; }\n3. body { font-family: \"Gill Sans\", sans-serif; }", o: "Oefening: artikel-card" },

];

kaarten_WEB_les3.structuur = [
  { kop: "Module 1: Introductie tot CSS", slide: "M1" },
  { o: "1.1 Wat is CSS?", slide: "1.1", sub: true },
  { o: "1.2 Drie methoden om CSS toe te passen", slide: "1.2", sub: true },
  { o: "1.3 Vergelijkingstabel", slide: "1.3", sub: true },
  { kop: "Module 2: Syntaxis, selectors & combinators", slide: "M2" },
  { o: "2.1 CSS-basissyntaxis", slide: "2.1", sub: true },
  { o: "2.2 Basisselectors", slide: "2.2", sub: true },
  { o: "2.3 Combinators & relatieselectors", slide: "2.3", sub: true },
  { o: "2.4 Elementen groeperen", slide: "2.4", sub: true },
  { kop: "Module 3: Cascade, overerving & specificiteit", slide: "M3" },
  { o: "3.1 De cascade", slide: "3.1", sub: true },
  { o: "3.2 Specificiteit", slide: "3.2", sub: true },
  { o: "3.3 Overerving (inheritance)", slide: "3.3", sub: true },
  { kop: "Module 4: Kleuren & CSS-variabelen", slide: "M4" },
  { o: "4.1 Notatiemethoden voor kleuren", slide: "4.1", sub: true },
  { o: "4.2 Transparantie & alpha", slide: "4.2", sub: true },
  { o: "4.3 CSS custom properties (variabelen)", slide: "4.3", sub: true },
  { kop: "Module 5: Typografie & maateenheden", slide: "M5" },
  { o: "5.1 Lettertypefamilies", slide: "5.1", sub: true },
  { o: "5.2 Lettergrootte & maateenheden", slide: "5.2", sub: true },
  { o: "5.3 Tekststijlen & opmaak", slide: "5.3", sub: true },
  { kop: "Module 6: Pseudo-classes, pseudo-elements & webfonts", slide: "M6" },
  { o: "6.1 Link-pseudo-classes (LVHA)", slide: "6.1", sub: true },
  { o: "6.2 Structurele pseudo-classes", slide: "6.2", sub: true },
  { o: "6.3 Pseudo-elements", slide: "6.3", sub: true },
  { o: "6.4 Webfonts", slide: "6.4", sub: true },
  { kop: "Module 7: Veelgemaakte fouten", slide: "M7" },
  { o: "7.2 Veelgemaakte fouten bij CSS", slide: "7.2", sub: true },
  { kop: "Oefeningen les 3", slide: "Oef." },
  { o: "Oefening: CSS debuggen", slide: "Oef. 1", sub: true },
  { o: "Oefening: specificiteit berekenen", slide: "Oef. 2", sub: true },
  { o: "Oefening: rem vs em", slide: "Oef. 4", sub: true },
  { o: "Oefening: artikel-card", slide: "Oef. 6–7", sub: true },
];
