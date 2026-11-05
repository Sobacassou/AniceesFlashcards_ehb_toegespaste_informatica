// Web Essentials – Les 3: CSS-basis, kleuren & typografie
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = tekening op de voorkant (map afbeeldingen/WEBles3_cssbasis/), imgAntwoord = tekening op de achterkant (optioneel)
// De structuur onderaan bepaalt het overzicht naast de kaart (volgorde en nummering van de cursus).

const kaarten_WEB_les3 = [

  // ===== 1.1 Wat is CSS? (1.1) =====
  { v: "Waar staat CSS voor?", a: "Cascading Style Sheets.", o: "1.1 Wat is CSS?" },
  { v: "Wat is het verschil tussen de taak van HTML en van CSS?", a: "HTML zorgt voor de structuur en betekenis (semantiek) van een webpagina; CSS verzorgt de visuele vormgeving en lay-out (kleuren, lettertypes, uitlijning, spatiëring).", o: "1.1 Wat is CSS?" },
  { v: "Geef de 4 voordelen van het scheiden van inhoud (HTML) en vormgeving (CSS).", a: "1. Scheiding van inhoud en vormgeving\n2. Herbruikbaarheid\n3. Onderhoudbaarheid\n4. Flexibiliteit", o: "1.1 Wat is CSS?" },
  { v: "Wat betekent herbruikbaarheid bij CSS?", a: "Eén CSS-bestand kan tientallen HTML-pagina's stijlen.", o: "1.1 Wat is CSS?" },
  { v: "Wat betekent onderhoudbaarheid bij CSS?", a: "Eén aanpassing in de CSS verandert meteen de look-and-feel van de hele website.", o: "1.1 Wat is CSS?" },
  { v: "Wat betekent flexibiliteit bij CSS?", a: "Je kan de stijl van een pagina aanpassen zonder iets aan de HTML-code te wijzigen.", o: "1.1 Wat is CSS?" },
  { v: "Wat betekent \"scheiding van inhoud en vormgeving\"?", a: "De eenvoudige basisopmaak van pure HTML is niet bedoeld als volwaardige vormgeving; daarvoor gebruik je CSS.", o: "1.1 Wat is CSS?" },

  // ===== 1.2 Drie methoden om CSS toe te passen (1.2) =====
  { v: "Geef de 3 manieren om CSS toe te passen.", a: "1. Extern: een apart .css-bestand, gekoppeld met <link>\n2. Intern / embedded: in een <style>-tag in de <head>\n3. Inline: met het style-attribuut op het element", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Welke manier om CSS toe te passen is de best practice?", a: "Externe CSS (een apart .css-bestand), in 99% van de gevallen.", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Hoe koppel je het externe stylesheet css/stijl.css, en waar staat dat?", a: "<link rel=\"stylesheet\" href=\"css/stijl.css\"> in de <head>.", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Hoe koppel je een apart stylesheet dat alleen gebruikt wordt bij het afdrukken?", a: "Met media=\"print\": <link rel=\"stylesheet\" href=\"css/print.css\" media=\"print\">", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Wanneer gebruik je interne (embedded) CSS?", a: "Soms voor pagina-specifieke stijlen of snelle prototypes.", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Waar staat interne CSS?", a: "In de <head> van het HTML-document, binnen een <style>-tag.", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Hoe ziet inline CSS eruit?", a: "<p style=\"color: red; font-weight: bold;\">Dringende mededeling</p>", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Waarom wordt inline CSS afgeraden voor algemene opmaak?", a: "Het vervuilt de HTML en is moeilijk te onderhouden.", o: "1.2 Drie methoden om CSS toe te passen" },
  { v: "Waarvoor wordt inline CSS wel gebruikt?", a: "In combinatie met JavaScript, voor dynamische stijlaanpassingen.", o: "1.2 Drie methoden om CSS toe te passen" },

  // ===== 1.3 Vergelijkingstabel (1.3) =====
  { v: "Geef de voor- en nadelen van externe CSS.", a: "Voordelen: schone HTML, herbruikbaar, beter onderhoudbaar, caching.\nNadeel: een extra HTTP-request (minimaal).", o: "1.3 Vergelijkingstabel" },
  { v: "Geef de voor- en nadelen van interne CSS (<style>).", a: "Voordeel: handig voor testen of unieke stijlen voor één pagina.\nNadeel: niet herbruikbaar op andere pagina's.", o: "1.3 Vergelijkingstabel" },
  { v: "Geef de voor- en nadelen van inline CSS.", a: "Voordelen: hoge prioriteit, snel voor vluchtige tests.\nNadelen: vervuilt de HTML, moeilijk te onderhouden.", o: "1.3 Vergelijkingstabel" },
  { v: "Wat is het (kleine) nadeel van externe CSS?", a: "Een extra HTTP-request om het bestand te laden (minimaal).", o: "1.3 Vergelijkingstabel",
    uitleg: "Daartegenover staat caching: de browser bewaart het bestand en hoeft het voor de volgende pagina's niet opnieuw te downloaden." },

  // ===== 2.1 CSS-basissyntaxis (2.1) =====
  { v: "Waaruit bestaat een CSS-stijlregel?", a: "Uit een selector en een declaratieblok tussen accolades { }.", o: "2.1 CSS-basissyntaxis" },
  { v: "Waaruit bestaat een declaratie?", a: "Uit een property (eigenschap) en een value (waarde), gescheiden door een dubbele punt :.", o: "2.1 CSS-basissyntaxis" },
  { v: "Hoe scheid je declaraties binnen een declaratieblok?", a: "Met puntkomma's ;.", o: "2.1 CSS-basissyntaxis" },
  { v: "Benoem de onderdelen:\nh1 {\n  color: #0056b3;\n}", a: "h1 = selector\n{ … } = declaratieblok\ncolor: #0056b3; = declaratie\ncolor = property (eigenschap)\n#0056b3 = value (waarde)", o: "2.1 CSS-basissyntaxis" },
  { v: "Hoe schrijf je commentaar in CSS?", a: "Tussen /* en */. Dat kan over één of meerdere regels.", o: "2.1 CSS-basissyntaxis" },
  { v: "Kan je in CSS commentaar schrijven met //?", a: "Nee, CSS heeft geen //-commentaar. Gebruik altijd /* ... */.", o: "2.1 CSS-basissyntaxis" },
  { v: "Waarvoor gebruik je commentaar in CSS?", a: "Om code toe te lichten of tijdelijk uit te schakelen; de browser negeert alles tussen /* en */.", o: "2.1 CSS-basissyntaxis" },

  // ===== 2.2 Basisselectors (2.2) =====
  { v: "Geef de 6 basisselectors uit de cursus.", a: "1. Type-/elementselector (p)\n2. Class-selector (.naam)\n3. ID-selector (#naam)\n4. Attribuutselector ([attribuut=\"waarde\"])\n5. Groeperingsselector (komma)\n6. Universele selector (*)", o: "2.2 Basisselectors" },
  { v: "Wat selecteert een type-/elementselector, bv. p?", a: "Alle elementen van dat HTML-type (alle <p>'s).", o: "2.2 Basisselectors" },
  { v: "Een class-selector schrijf je met een …, een ID-selector met een …", a: "Punt (.); hekje (#).", o: "2.2 Basisselectors" },
  { v: "Hoe vaak mag een class-waarde op een pagina voorkomen, en mag een element meerdere classes hebben?", a: "Zo vaak je wil, en ja: één element mag meerdere classes hebben, bv. class=\"intro-tekst belangrijk\".", o: "2.2 Basisselectors" },
  { v: "Hoe vaak mag een ID op een pagina voorkomen?", a: "Maar één keer. Een ID is uniek.", o: "2.2 Basisselectors" },
  { v: "Waarmee mag een ID niet beginnen?", a: "Met een cijfer.", o: "2.2 Basisselectors" },
  { v: "Geef de regels voor het benoemen van classes en ID's.", a: "Duidelijke, beschrijvende namen; beginnen met een letter; geen spaties. Een class als het meerdere keren kan voorkomen, een unieke naam voor een ID.", o: "2.2 Basisselectors" },
  { v: "Wanneer kies je een class in plaats van een ID?", a: "Als een elementtype meerdere keren op de pagina kan voorkomen.", o: "2.2 Basisselectors" },
  { v: "Wat selecteert a[href^=\"https\"]?", a: "Alle links waarvan de href begint met \"https\" (externe links).", o: "2.2 Basisselectors",
    uitleg: "^= betekent \"begint met\". Het is een attribuutselector." },
  { v: "Wat selecteert input[type=\"text\"]?", a: "Alle tekstinvoervelden.", o: "2.2 Basisselectors" },
  { v: "Wat doet de groeperingsselector h1, h2, h3 { … }?", a: "Hij past dezelfde stijlregels toe op h1, h2 én h3 tegelijk.", o: "2.2 Basisselectors" },
  { v: "Wat selecteert *?", a: "Alle elementen op de pagina (universele selector).", o: "2.2 Basisselectors",
    uitleg: "Het voorbeeld in de cursus is * { box-sizing: border-box; }." },
  { v: "Schrijf de selector voor: 1. alle paragrafen, 2. elementen met class=\"nieuw\", 3. het element met id=\"hoofd-navigatie\".", a: "1. p\n2. .nieuw\n3. #hoofd-navigatie", o: "2.2 Basisselectors" },

  // ===== 2.3 Combinators & relatieselectors (2.3) =====
  { v: "Geef de 4 combinators.", a: "1. Descendant selector (spatie)\n2. Child selector (>)\n3. Adjacent sibling selector (+)\n4. General sibling selector (~)", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat selecteert nav a?", a: "Alle <a>-elementen binnen een <nav>, ongeacht het nestingsniveau (descendant selector).", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat selecteert ul > li?", a: "Alleen de <li>-elementen die directe kinderen zijn van een <ul> (child selector).", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat selecteert h2 + p?", a: "De eerste <p> die direct na een <h2> staat (adjacent sibling selector).", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat selecteert h2 ~ p?", a: "Alle <p>-elementen die siblings zijn van een <h2> en erna staan (general sibling selector).", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat is het verschil tussen nav a en nav > a?", a: "nav a: alle links binnen de nav, op elk niveau.\nnav > a: alleen links die rechtstreeks kind zijn van de nav.", o: "2.3 Combinators & relatieselectors" },
  { v: "Wat is het verschil tussen h2 + p en h2 ~ p?", a: "h2 + p: alleen de eerste p direct na de h2.\nh2 ~ p: alle p's na de h2 (op hetzelfde niveau).", o: "2.3 Combinators & relatieselectors" },

  // ===== 2.4 Elementen groeperen (2.4) =====
  { v: "Wanneer gebruik je <div> of <span> om iets te stijlen?", a: "Wanneer er geen geschikt semantisch HTML-element is.", o: "2.4 Elementen groeperen" },
  { v: "Wat is het verschil tussen <div> en <span> bij het stijlen?", a: "<div> (block-level): om meerdere elementen te groeperen in een blok (bv. een kaart, sectie of container).\n<span> (inline-level): om een specifiek woord of zinsdeel binnen een tekstblok te stijlen.", o: "2.4 Elementen groeperen" },
  { v: "Je wil alleen de prijs \"€ 49,99\" in een zin groen maken. Welk element en welke CSS?", a: "Een <span> met een class:\n<p>Prijs: <span class=\"prijs-highlight\">€ 49,99</span></p>\n.prijs-highlight { color: #28a745; }", o: "2.4 Elementen groeperen" },

  // ===== 3.1 De cascade (3.1) =====
  { v: "Wat betekent \"cascading\"?", a: "Stijlregels stromen van boven naar beneden; als meerdere regels voor hetzelfde element gelden, beslist de browser welke wint.", o: "3.1 De cascade" },
  { v: "Geef de 3 criteria waarmee de browser beslist welke CSS-regel wint, in volgorde.", a: "1. Belangrijkheid (!important)\n2. Specificiteit (gewicht van de selector)\n3. Volgorde in de code (bij gelijke specificiteit wint de laatste regel)", o: "3.1 De cascade" },
  { v: "Welke kleur krijgt de tekst?\np { color: blue; }\np { color: red; }", a: "Rood: bij gelijke specificiteit wint de laatst geschreven regel.", o: "3.1 De cascade" },
  { v: "Je laadt base.css, components.css en home.css in die volgorde. Welke wint bij gelijke specificiteit?", a: "home.css: de regel uit het laatst geladen bestand wint.", o: "3.1 De cascade",
    uitleg: "De browser behandelt alle stylesheets samen als één verzameling regels. De volgorde van inladen is dus belangrijk." },
  { v: "Kan een regel uit base.css (eerst geladen) toch winnen van een latere regel uit home.css?", a: "Ja, als de selector in base.css een hogere specificiteit heeft. Specificiteit weegt zwaarder dan de bestandsvolgorde.", o: "3.1 De cascade" },
  { v: "Waar staat embedded CSS (<style>) meestal, en wat betekent dat?", a: "Na de externe stylesheets. Daardoor wint ze bij gelijke specificiteit.", o: "3.1 De cascade" },

  // ===== 3.2 Specificiteit (3.2) =====
  { v: "In welke 4 kolommen berekent de browser specificiteit?", a: "(Inline, ID, Class, Type).", o: "3.2 Specificiteit",
    uitleg: "Eerst vergelijkt de browser de kolom Inline, dan ID, dan Class, dan Type. Een verschil in een kolom weegt zwaarder dan alle kolommen erna samen." },
  { v: "Wat is de specificiteit van de universele selector *?", a: "(0, 0, 0, 0)", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van een type-selector (p, h1) of een pseudo-element (::before)?", a: "(0, 0, 0, 1)", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van een class, attribuutselector of pseudo-class (.btn, [type=\"text\"], :hover)?", a: "(0, 0, 1, 0)", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van een ID-selector (#hoofd-header)?", a: "(0, 1, 0, 0)", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van een inline style (style=\"...\")?", a: "(1, 0, 0, 0)", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van p.beschrijving?", a: "(0, 0, 1, 1): één class en één type.", o: "3.2 Specificiteit" },
  { v: "Wat is de specificiteit van .beschrijving?", a: "(0, 0, 1, 0)", o: "3.2 Specificiteit" },
  { v: "Welke kleur krijgt <p id=\"hoofd-tekst\" class=\"beschrijving\">?\np { color: black; }\n.beschrijving { color: green; }\np.beschrijving { color: orange; }\n#hoofd-tekst { color: purple; }", a: "Paars: #hoofd-tekst heeft specificiteit (0, 1, 0, 0) en wint van alles hierboven.", o: "3.2 Specificiteit" },
  { v: "Welke kleur krijgt deze tekst als er in de CSS #hoofd-tekst { color: purple; } staat?\n<p id=\"hoofd-tekst\" style=\"color: orange;\">Tekst</p>", a: "Oranje: de inline style heeft (1, 0, 0, 0) en wint van de ID-selector.", o: "3.2 Specificiteit" },
  { v: "Is !important een extra specificiteitsscore?", a: "Nee. !important geeft de declaratie voorrang op alle normale declaraties, zelfs op een inline style.", o: "3.2 Specificiteit" },
  { v: "Waarom gebruik je !important zo weinig mogelijk?", a: "Het maakt de cascade moeilijker te begrijpen en te overschrijven. Maak eerst de selector specifieker of verbeter de volgorde; gebruik !important alleen als het echt nodig is (bv. een uitzonderingsklasse).", o: "3.2 Specificiteit" },
  { v: "Wint (0, 1, 0, 0) of (0, 0, 9, 9)?", a: "(0, 1, 0, 0): een verschil in een hogere kolom (ID) weegt zwaarder dan alle kolommen erna samen.", o: "3.2 Specificiteit" },

  // ===== 3.3 Overerving (inheritance) (3.3) =====
  { v: "Wat is overerving in CSS?", a: "Sommige eigenschappen worden automatisch doorgegeven van ouder-elementen (parent) naar kind-elementen (child).", o: "3.3 Overerving (inheritance)" },
  { v: "Welke soort eigenschappen worden wel geërfd? Geef voorbeelden.", a: "Tekstgerelateerde eigenschappen: color, font-family, font-size, line-height en text-align.", o: "3.3 Overerving (inheritance)" },
  { v: "Welke soort eigenschappen worden niet geërfd? Geef voorbeelden.", a: "Layout- en boxmodel-eigenschappen: margin, padding, border, background-color, width en height.", o: "3.3 Overerving (inheritance)" },
  { v: "Hoe dwing je overerving af?", a: "Met de waarde inherit, bv. color: inherit;", o: "3.3 Overerving (inheritance)",
    uitleg: "Voorbeeld: een link neemt dan de tekstkleur van zijn ouder over in plaats van het standaard blauw." },
  { v: "Wordt background-color geërfd?", a: "Nee, het is een layout-/boxmodel-eigenschap.", o: "3.3 Overerving (inheritance)" },
  { v: "Wordt color geërfd?", a: "Ja, het is een tekstgerelateerde eigenschap.", o: "3.3 Overerving (inheritance)" },

  // ===== 4.1 Notatiemethoden voor kleuren (4.1) =====
  { v: "Met welke 2 eigenschappen stel je kleuren in?", a: "color (voorgrond / tekst) en background-color (achtergrond).", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Geef de 4 notatiemethoden voor kleuren.", a: "1. Kleurnamen (red)\n2. Hexadecimaal (#RRGGBB)\n3. RGB (rgb(255, 0, 0))\n4. HSL (hsl(0, 100%, 50%))", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Hoeveel kleurnamen kent CSS, en waarvoor zijn ze handig?", a: "148 Engelse kleurnamen (bv. red, darkcyan, lightgray). Handig om snel te testen.", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Hoe is een hexadecimale kleur opgebouwd?", a: "Een # met 6 tekens (0–9 en A–F). Telkens 2 tekens voor rood, groen en blauw (00 t/m FF = 0 t/m 255).", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Hoe schrijf je #FF0000 verkort?", a: "#F00", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Op welke schaal geef je de waarden bij rgb(red, green, blue)?", a: "0 tot 255.", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Waar staan de 3 waarden van hsl() voor?", a: "Hue (tint), saturation (verzadiging) en lightness (lichtheid).", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Wat is hue in hsl(), en welke hoek is rood, groen en blauw?", a: "De hoek op het kleurenwiel, van 0 tot 360: 0 = rood, 120 = groen, 240 = blauw.", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Wat betekent saturation 0% en 100% in hsl()?", a: "0% = grijs, 100% = volledige kleur.", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Wat betekent lightness 0%, 50% en 100% in hsl()?", a: "0% = zwart, 50% = normale kleur, 100% = wit.", o: "4.1 Notatiemethoden voor kleuren" },
  { v: "Schrijf rood in 5 notaties.", a: "red\n#ff0000\n#f00\nrgb(255, 0, 0)\nhsl(0, 100%, 50%)", o: "4.1 Notatiemethoden voor kleuren" },

  // ===== 4.2 Transparantie & alpha (4.2) =====
  { v: "Wat doen rgba() en hsla()?", a: "Ze voegen een 4de parameter toe: alpha, tussen 0.0 (volledig transparant) en 1.0 (volledig dekkend). Alleen de kleur wordt transparant; de inhoud blijft leesbaar.", o: "4.2 Transparantie & alpha" },
  { v: "Wat is het verschil tussen background-color: rgba(0, 0, 0, 0.5) en opacity: 0.5?", a: "rgba: alleen de achtergrond is half transparant; de tekst blijft helder.\nopacity: het hele element, inclusief tekst en kinderen, wordt transparant.", o: "4.2 Transparantie & alpha" },
  { v: "Je wil een donkere, half doorzichtige achtergrond met witte, goed leesbare tekst. Wat gebruik je?", a: "background-color: rgba(0, 0, 0, 0.5); color: #ffffff;", o: "4.2 Transparantie & alpha",
    uitleg: "Met opacity zou de tekst ook doorzichtig worden." },

  // ===== 4.3 CSS custom properties (variabelen) (4.3) =====
  { v: "Waarvoor dienen CSS-variabelen (custom properties)?", a: "Om centrale waarden (zoals een kleurenschema) te definiëren en te hergebruiken. Dat verhoogt de onderhoudbaarheid.", o: "4.3 CSS custom properties (variabelen)",
    uitleg: "De cursus zegt: je moet ze niet gebruiken tijdens oefeningen of examens, maar ze zijn heel handig in grotere projecten." },
  { v: "Hoe declareer je een CSS-variabele, en hoe gebruik je ze?", a: "Declareren: --primary-color: #0056b3;\nGebruiken: color: var(--primary-color);", o: "4.3 CSS custom properties (variabelen)" },
  { v: "Waar definieer je CSS-variabelen, en waarom?", a: "Bovenaan je CSS in de :root-pseudo-class, zodat ze overal in het document beschikbaar zijn.", o: "4.3 CSS custom properties (variabelen)" },
  { v: "Wat gebeurt er als je de waarde van een CSS-variabele aanpast?", a: "Ze verandert automatisch overal waar de variabele gebruikt wordt.", o: "4.3 CSS custom properties (variabelen)" },

  // ===== 5.1 Lettertypefamilies (5.1) =====
  { v: "Wat is een font stack?", a: "Een lijst lettertypes in font-family, gescheiden door komma's. Vindt de browser het eerste lettertype niet, dan valt hij terug op het volgende.", o: "5.1 Lettertypefamilies" },
  { v: "Waarmee eindig je een font stack altijd?", a: "Met een generieke familienaam: serif, sans-serif of monospace.", o: "5.1 Lettertypefamilies" },
  { v: "Welke generieke familie gebruik je voor codeblokken?", a: "monospace (bv. font-family: \"Consolas\", \"Courier New\", Courier, monospace;).", o: "5.1 Lettertypefamilies" },
  { v: "Waarom staat \"Helvetica Neue\" tussen aanhalingstekens in een font stack?", a: "Lettertypenamen met spaties zet je tussen aanhalingstekens.", o: "5.1 Lettertypefamilies" },

  // ===== 5.2 Lettergrootte & maateenheden (5.2) =====
  { v: "Wat is de standaardlettergrootte van browsers?", a: "16px.", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat is px, en waarvoor gebruik je het?", a: "Absoluut: vaste schermpixels die niet meeschalen met de gebruikersinstellingen. Voor borders en kleine vaste details.", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat is %, en waarvoor gebruik je het?", a: "Relatief ten opzichte van een eigenschap van het ouder-element (de exacte betekenis hangt af van de eigenschap). Voor breedtes, hoogtes en afmetingen van elementen.", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Waartegenover is em relatief, en waarvoor gebruik je het?", a: "Ten opzichte van de font-size van het ouder-element (het stapelt bij nesting). Voor margins en padding relatief aan tekst.", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Waartegenover is rem relatief, en waarvoor gebruik je het?", a: "Ten opzichte van de font-size van het root-element <html> (1rem = 16px standaard). Voor typografie (font-size) en layout.", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat is het verschil tussen em en rem?", a: "em is relatief aan de font-size van het ouder-element (en stapelt bij nesting); rem is altijd relatief aan het root-element <html>.", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat betekenen 1vw en 1vh?", a: "1vw = 1% van de viewportbreedte, 1vh = 1% van de viewporthoogte.", o: "5.2 Lettergrootte & maateenheden",
    uitleg: "Vooral handig voor fullscreen hero-secties." },
  { v: "Welke eenheid gebruik je voor: 1. een border, 2. font-size, 3. een fullscreen hero-sectie?", a: "1. px\n2. rem\n3. vw / vh", o: "5.2 Lettergrootte & maateenheden" },
  { v: "html { font-size: 16px; } — hoeveel pixels is h1 { font-size: 2.5rem; }?", a: "40px (2,5 × 16).", o: "5.2 Lettergrootte & maateenheden" },
  { v: "De ouder heeft font-size 16px. Hoeveel pixels is .disclaimer { font-size: 80%; }?", a: "12,8px (16 × 0,8).", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Geef de 5 maateenheden uit de tabel, met hun type.", a: "px (absoluut), % (relatief), em (relatief), rem (relatief), vw/vh (viewport).", o: "5.2 Lettergrootte & maateenheden" },
  { v: "Wat doet font-size: clamp(1.5rem, 3vw, 2.5rem)?", a: "Vloeiende, responsieve typografie: de grootte is 3vw, maar nooit kleiner dan 1.5rem en nooit groter dan 2.5rem.", o: "5.2 Lettergrootte & maateenheden",
    uitleg: "Dit is \"ter info\". De volgorde is clamp(minimum, voorgestelde waarde, maximum)." },

  // ===== 5.3 Tekststijlen & opmaak (5.3) =====
  { v: "Welke waarden kan font-weight hebben?", a: "normal, bold of een getal van 100 tot 900.", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarden kan font-style hebben?", a: "normal, italic of oblique.", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarden kan text-transform hebben?", a: "none, uppercase, lowercase of capitalize.", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarden kan text-decoration hebben, en welke gebruik je vaak voor hyperlinks?", a: "none, underline of line-through. none haalt de onderlijning van links weg.", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarde voor line-height is ideaal voor leesbaarheid, en in welke eenheid?", a: "1.5 tot 1.6, een verhouding zonder eenheid.", o: "5.3 Tekststijlen & opmaak" },
  { v: "Welke waarden kan text-align hebben?", a: "left, center, right of justify.", o: "5.3 Tekststijlen & opmaak" },
  { v: "Met welke eigenschappen stel je de spatiëring tussen letters en tussen woorden in?", a: "letter-spacing (tussen letters) en word-spacing (tussen woorden).", o: "5.3 Tekststijlen & opmaak" },
  { v: "Met welke eigenschap zet je tekst in hoofdletters?", a: "text-transform: uppercase;", o: "5.3 Tekststijlen & opmaak" },
  { v: "Met welke eigenschap haal je de onderlijning van een link weg?", a: "text-decoration: none;", o: "5.3 Tekststijlen & opmaak" },

  // ===== 6.1 Link-pseudo-classes (LVHA) (6.1) =====
  { v: "Wat zijn pseudo-classes?", a: "Selectors die elementen stijlen op basis van hun toestand of gebruikersinteractie (bv. :hover).", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat is de LVHA-regel?", a: "De vaste volgorde voor link-pseudo-classes: :link → :visited → :hover → :active.", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Waarom is de volgorde LVHA belangrijk?", a: "Een link kan meerdere toestanden tegelijk hebben (bv. :visited én :hover). Bij gelijke specificiteit wint de laatste regel; met deze volgorde krijgt de juiste stijl voorrang.", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat stijlt a:link?", a: "Een nog niet bezochte link.", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat stijlt a:visited?", a: "Een link naar een pagina die je al bezocht hebt.", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat stijlt a:hover?", a: "Een link waar de muis over beweegt.", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Wat stijlt a:active?", a: "Een link op het moment dat je erop klikt.", o: "6.1 Link-pseudo-classes (LVHA)" },
  { v: "Waarom is a:focus-visible belangrijk?", a: "Het toont de focus bij toetsenbordnavigatie (met TAB). Cruciaal voor toegankelijkheid.", o: "6.1 Link-pseudo-classes (LVHA)",
    uitleg: "Voorbeeld: a:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }" },

  // ===== 6.2 Structurele pseudo-classes (6.2) =====
  { v: "Wat selecteren li:first-child en li:last-child?", a: "Het eerste en het laatste <li>-kind van zijn ouder.", o: "6.2 Structurele pseudo-classes" },
  { v: "Wat selecteert tr:nth-child(even), en waarvoor gebruik je het?", a: "Elke even rij. Voor zebrastrepen in tabellen.", o: "6.2 Structurele pseudo-classes" },
  { v: "Wat selecteert li:nth-child(3)?", a: "Exact het derde item.", o: "6.2 Structurele pseudo-classes" },
  { v: "Waarop selecteren structurele pseudo-classes?", a: "Op de positie van een element in de HTML-boom.", o: "6.2 Structurele pseudo-classes" },

  // ===== 6.3 Pseudo-elements (6.3) =====
  { v: "Wat zijn pseudo-elements?", a: "Ze stijlen een specifiek onderdeel van een element, of voegen virtuele inhoud toe.", o: "6.3 Pseudo-elements" },
  { v: "Hoe schrijf je een pseudo-element: met één of twee dubbele punten?", a: "Met twee: ::first-letter, ::before, ::after. (Een pseudo-class heeft er één: :hover.)", o: "6.3 Pseudo-elements" },
  { v: "Wat doet p.intro::first-letter?", a: "Het stijlt de eerste letter van een intro-paragraaf, bv. als grote beginletter (drop cap).", o: "6.3 Pseudo-elements" },
  { v: "Wat doet dit?\n.verplicht::after { content: \" *\"; color: red; }", a: "Het voegt na elk element met class \"verplicht\" een rood sterretje toe.", o: "6.3 Pseudo-elements" },
  { v: "Welke eigenschap is verplicht bij ::before en ::after om inhoud toe te voegen?", a: "content, bv. content: \" *\";", o: "6.3 Pseudo-elements" },

  // ===== 6.4 Webfonts (6.4) =====
  { v: "Geef de 2 manieren om webfonts te integreren.", a: "Optie A: Google Fonts (hosted fonts)\nOptie B: custom embedded fonts met @font-face", o: "6.4 Webfonts" },
  { v: "Hoe gebruik je een Google Font (3 stappen)?", a: "1. Kies een lettertype op fonts.google.com (bv. Roboto).\n2. Zet de gegenereerde <link>-elementen in de <head>.\n3. Gebruik de font-family in je CSS, bv. font-family: \"Roboto\", sans-serif;", o: "6.4 Webfonts" },
  { v: "Waar zet je de <link> van Google Fonts ten opzichte van je eigen stylesheet?", a: "Vóór je eigen stylesheet in de <head>.", o: "6.4 Webfonts" },
  { v: "Waarmee definieer je een eigen fontbestand (bv. .woff2) in CSS, en waar?", a: "Met @font-face, bovenaan je CSS-bestand.", o: "6.4 Webfonts" },
  { v: "Vul aan:\n@font-face {\n  font-family: \"…\";\n  src: url(\"../fonts/mijnfont.woff2\") format(\"…\");\n}", a: "font-family: \"MijnAangepastFont\";\nformat(\"woff2\")", o: "6.4 Webfonts",
    uitleg: "Daarna gebruik je het gewoon: h1 { font-family: \"MijnAangepastFont\", Georgia, serif; }" },
  { v: "Welke bestandsformaten voor fonts noemt de cursus?", a: ".woff2 en .woff.", o: "6.4 Webfonts" },

  // ===== 7.2 Veelgemaakte fouten bij CSS (7.2) =====
  { v: "Geef de 4 veelgemaakte fouten bij CSS.", a: "1. Puntkomma vergeten na een declaratie.\n2. Foute relatieve paden naar afbeeldingen/fonts.\n3. Geen punt bij een class of geen hekje bij een ID.\n4. Te veel !important gebruiken.", o: "7.2 Veelgemaakte fouten bij CSS" },
  { v: "Waartegenover zijn paden in stijl.css relatief: het CSS-bestand of het HTML-bestand?", a: "Ten opzichte van de locatie van het CSS-bestand, bv. ../images/logo.png.", o: "7.2 Veelgemaakte fouten bij CSS" },
  { v: "Je CSS staat in css/stijl.css en je logo in images/logo.png. Welk pad gebruik je in de CSS?", a: "url(\"../images/logo.png\")", o: "7.2 Veelgemaakte fouten bij CSS" },

  // ===== Oefening: CSS debuggen (Oef. 1) =====
  { v: "Zoek de fouten (minstens 6):\nbody {\n  font-family: Open Sans, sans-serif\n  background-color: #f4f4f9000;\n  color: 333333;\n}\n#cookie-banner {\n  font-size: 14px\n  line-height: 1,5;\n}\n.hoofd-titel {\n  color: #0056b3;\nbelangrijk {\n  color: red;\n}", a: "1. Puntkomma vergeten na sans-serif (en \"Open Sans\" tussen aanhalingstekens).\n2. #f4f4f9000 is geen geldige hexkleur (9 tekens): #f4f4f9.\n3. color: 333333 mist het hekje: #333333.\n4. Puntkomma vergeten na 14px.\n5. 1,5 moet 1.5 zijn (punt in plaats van komma).\n6. .hoofd-titel wordt niet afgesloten met }.\n7. belangrijk mist de punt van een class: .belangrijk.", o: "Oefening: CSS debuggen" },

  // ===== Oefening: specificiteit berekenen (Oef. 2) =====
  { v: "Bereken de specificiteit (Inline, ID, Class, Type):\n1. a\n2. .blog-post a\n3. #main-content .blog-post p a\n4. div.container article p a.link", a: "1. (0, 0, 0, 1)\n2. (0, 0, 1, 1)\n3. (0, 1, 1, 2)\n4. (0, 0, 2, 4)", o: "Oefening: specificiteit berekenen" },
  { v: "Welke kleur krijgt de link \"flexibel\"?\n<div id=\"main-content\" class=\"container\">\n  <article class=\"blog-post\">\n    <p class=\"intro\">CSS is <a href=\"#\" class=\"link\">flexibel</a>.</p>\n  </article>\n</div>\na { color: blue; }\n.blog-post a { color: green; }\n#main-content .blog-post p a { color: red; }\ndiv.container article p a.link { color: orange; }", a: "Rood: #main-content .blog-post p a heeft (0, 1, 1, 2) en is de enige regel met een ID. Die wint van (0, 0, 2, 4).", o: "Oefening: specificiteit berekenen" },
  { v: "Dezelfde CSS als bij \"flexibel\". Welke kleur krijgt de tweede link \"selectors\" (zonder class)?\n<p>Lees meer over <a href=\"#\">selectors</a>.</p>", a: "Rood: ook deze link staat in een p binnen .blog-post binnen #main-content. Regel 4 geldt niet (geen class link).", o: "Oefening: specificiteit berekenen" },
  { v: "Schrijf de selector voor alleen de <p>'s die directe kinderen zijn van <article class=\"blog-post\">.", a: ".blog-post > p", o: "Oefening: specificiteit berekenen" },
  { v: "Schrijf de selector voor alleen de <a>'s binnen een paragraaf met class intro.", a: ".intro a (of p.intro a)", o: "Oefening: specificiteit berekenen" },

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
