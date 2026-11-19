// Web Essentials – Les 5: CSS layout (float, flexbox & positioning)
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = afbeelding op de voorkant (map afbeeldingen/WEBles5_layout/), imgAntwoord = afbeelding op de achterkant (optioneel)
// wit: true = witte kaart die de cursus voorstelt · extra: true = extra info, niet uit de cursus (turquoise rand)
// tabel = kleine overzichtstabel (eerste rij = kolomkoppen)
// De structuur onderaan bepaalt het overzicht naast de kaart (volgorde en nummering van de cursus).

const kaarten_WEB_les5 = [

  // ===== 1.1 Wat is float? =====
  { v: "Waarvoor werd de float-eigenschap oorspronkelijk ontworpen?", a: "Voor redactionele pagina-indelingen: tekst of inline elementen netjes rond een afbeelding of een kader laten stromen, zoals in kranten en tijdschriften.", o: "1.1 Wat is float?" },
  { v: "Geef de 3 waarden van float. Welke is de standaard?", a: "float: left: zweeft naar links.\nfloat: right: zweeft naar rechts.\nfloat: none: zweeft niet (standaard).\n\n.a { float: left; }\n.b { float: right; }\n.c { float: none; }", o: "1.1 Wat is float?",
    uitleg: "Mogelijkheden van float:\n• float: left: het element zweeft naar de linkerkant van de container.\n• float: right: het element zweeft naar de rechterkant van de container.\n• float: none: het element zweeft niet (standaard)." },
  { v: "Schrijf de CSS om img.artikel-afbeelding links te laten zweven, met 20px ruimte rechts en 10px onder.", a: "img.artikel-afbeelding {\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 10px;\n}", o: "1.1 Wat is float?", oefening: true,
    uitleg: "img.artikel-afbeelding = een img met class artikel-afbeelding. float: left = de afbeelding zweeft naar links en de tekst loopt er rechts rond. margin-right/margin-bottom = ruimte tussen de afbeelding en de tekst.\n\nZweven betekent: het element schuift naar de linker- of rechterrand van zijn container, en de tekst die erna komt loopt eromheen." },
  { v: "Waarom zet je margin-right: 20px op een afbeelding met float: left?", a: "Zodat de tekst die rechts van de afbeelding doorloopt er niet tegen plakt.\n\nimg.artikel-afbeelding {\n  float: left;\n  margin-right: 20px;   /* Ruimte rechts zodat tekst niet plakt */\n}", o: "1.1 Wat is float?" },
  { v: "Wat gebeurt er met de tekst in de <p> na een afbeelding met float: left?", a: "Die loopt vloeiend aan de rechterkant van de afbeelding door, rond de afbeelding.\n\n<article>\n  <img src=\"images/laptop.jpg\" alt=\"Laptop op bureau\" class=\"artikel-afbeelding\">\n  <p>Dit is de tekst van het artikel...</p>\n</article>", o: "1.1 Wat is float?" },
  { v: "Float vroeger en nu", a: "Vroeger bouwde men met float ook volledige paginalayouts in kolommen. Vandaag doe je dat met flexbox (en later CSS Grid). Float gebruik je nu vooral nog om tekst rond een afbeelding te laten lopen.", o: "1.1 Wat is float?", extra: true },

  // ===== 1.2 clear & pitfalls van float =====
  { v: "Wat doet clear?", a: "Je geeft aan dat een element niet naast een zwevend (gefloat) element mag staan, maar eronder moet springen.", o: "1.2 clear & pitfalls van float" },
  { v: "Wat is het verschil tussen clear: left, clear: right en clear: both?", a: "clear: left: blijf onder links gefloate elementen.\nclear: right: blijf onder rechts gefloate elementen.\nclear: both: blijf onder alle gefloate elementen.\n\n.a { clear: left; }\n.b { clear: right; }\n.c { clear: both; }", o: "1.2 clear & pitfalls van float" },
  { v: "Een footer moet onder een links én een rechts gefloate kolom komen. Welke CSS?", a: "footer {\n  clear: both;\n}", o: "1.2 clear & pitfalls van float",
    uitleg: "clear: both: de footer blijft onder alle gefloate elementen, links en rechts." },
  { v: "Wat is parent collapse?", a: "Als een ouder-element (<section> of <div>) uitsluitend gefloate kinderen bevat, heeft die ouder geen hoogte meer: de hoogte 'klapt in' tot 0px.", o: "1.2 clear & pitfalls van float",
    uitleg: "Parent collapse = ingeklapte ouder-container. Je ziet het bijvoorbeeld doordat de achtergrondkleur of de rand van de ouder verdwijnt: de ouder is 0px hoog en de gefloate kinderen steken eruit." },
  { v: "Waarom ontstaat parent collapse?", a: "Een gefloat element wordt gedeeltelijk uit de normale documentstroom gehaald. Daardoor telt de ouder het niet mee voor zijn hoogte.", o: "1.2 clear & pitfalls van float" },
  { v: "Wat is de moderne oplossing voor parent collapse? Schrijf de CSS.", a: ".float-container {\n  display: flow-root;\n}", o: "1.2 clear & pitfalls van float",
    uitleg: "Vroeger waren daar ingewikkelde hacks voor nodig; moderne CSS heeft met display: flow-root één schone oplossing." },
  { v: "Wat doet display: flow-root precies?", a: "Het maakt van de container een nieuwe Block Formatting Context die zijn gefloate kinderen netjes omsluit.\n\n.float-container {\n  display: flow-root;\n}", o: "1.2 clear & pitfalls van float" },
  { v: "Wat had men vroeger nodig om parent collapse op te lossen?", a: "Ingewikkelde hacks. Moderne CSS heeft één schone oplossing: display: flow-root.", o: "1.2 clear & pitfalls van float" },
  { v: "Clearfix en Block Formatting Context", a: "De bekendste oude hack tegen parent collapse heet de 'clearfix'.\n\nEen Block Formatting Context (BFC) is een afgesloten blok dat zijn eigen floats volledig binnen zich houdt. Daarom omsluit een container met display: flow-root zijn gefloate kinderen.", o: "1.2 clear & pitfalls van float", extra: true,
    uitleg: "De cursus noemt clear een 'attribuut'; eigenlijk is het een CSS-eigenschap." },

  // ===== 2. Flexbox: eendimensionale layouts (1D) =====
  { v: "Waarvoor staat flexbox?", a: "Flexible Box Layout.", o: "2. Flexbox: eendimensionale layouts (1D)" },
  { v: "Waarvoor is flexbox speciaal ontworpen?", a: "Voor het verdelen van ruimte en het uitlijnen van elementen in één dimensie: als een rij (horizontaal) óf als een kolom (verticaal).", o: "2. Flexbox: eendimensionale layouts (1D)" },
  { v: "Flexbox werkt in … dimensie: als een … óf als een ….", a: "één · rij (horizontaal) · kolom (verticaal).", o: "2. Flexbox: eendimensionale layouts (1D)",
    uitleg: "Eendimensionaal (1D) betekent: je werkt in één richting tegelijk, een rij óf een kolom." },
  { v: "Flexbox (1D) en CSS Grid (2D)", a: "Voor layouts in rijen én kolommen tegelijk (2D) bestaat CSS Grid. Flexbox is voor één richting tegelijk.", o: "2. Flexbox: eendimensionale layouts (1D)", extra: true },

  // ===== 2.1 Didactische roadmap =====
  { v: "Geef de 6 stappen van de didactische roadmap om met flexbox te bouwen.", a: "1. Activeer flexbox op de ouder.\n2. Bepaal de richting (hoofdas).\n3. Lijn uit op de hoofdas.\n4. Lijn uit op de kruisas.\n5. Laat items plooien/wrappen.\n6. Stuur individuele kinderen bij.", o: "2.1 Didactische roadmap" },
  { v: "Welke CSS hoort bij elke stap van de flexbox-roadmap?", a: ".container { display: flex; }\nflex-direction: row | column;\njustify-content: space-between;\nalign-items: center;\nflex-wrap: wrap;\n.item { flex: 1; }", o: "2.1 Didactische roadmap" },
  { v: "Roadmap stap 1: op welk element zet je display: flex, de ouder of de kinderen?", a: "Op de ouder (de container).\n\n.container {\n  display: flex;\n}", o: "2.1 Didactische roadmap" },
  { v: "Roadmap stap 3 en 4: welke eigenschap lijnt uit op de hoofdas, en welke op de kruisas?", a: "Hoofdas: justify-content.\nKruisas: align-items.\n\n.container {\n  justify-content: space-between;\n  align-items: center;\n}", o: "2.1 Didactische roadmap" },
  { v: "Roadmap stap 6: hoe stuur je een individueel kind bij?", a: "Met een child-property op het item, bijvoorbeeld:\n\n.item {\n  flex: 1;\n}", o: "2.1 Didactische roadmap" },

  // ===== 2.2 Het as-systeem =====
  { v: "Op welke twee assen werkt flexbox?", a: "De hoofdas (main axis) en de kruisas (cross axis).", o: "2.2 Het as-systeem" },
  { v: "Welke as staat op plaats 1 en welke op plaats 2 in dit schema (flex-direction: row)?", a: "1 = main axis (hoofdas): horizontaal, van links naar rechts.\n2 = cross axis (kruisas): verticaal, van boven naar beneden.", o: "2.2 Het as-systeem", img: "afbeeldingen/WEBles5_layout/l5_assysteem_vraag.png", imgAntwoord: "afbeeldingen/WEBles5_layout/l5_assysteem.png" },
  { v: "Wat is de hoofdas (main axis)? Wat is de standaardrichting?", a: "De primaire richting waarin items achter elkaar geplaatst worden. Standaard horizontaal, van links naar rechts.", o: "2.2 Het as-systeem" },
  { v: "Wat is de kruisas (cross axis)? Wat is de standaardrichting?", a: "De as die loodrecht op de hoofdas staat. Standaard verticaal, van boven naar beneden.", o: "2.2 Het as-systeem" },
  { v: "De kruisas staat … op de hoofdas.", a: "loodrecht", o: "2.2 Het as-systeem" },
  { v: "De assen draaien mee met flex-direction", a: "Bij flex-direction: column wordt de hoofdas verticaal en de kruisas horizontaal. justify-content lijnt dan verticaal uit en align-items horizontaal.\n\n.kolom {\n  display: flex;\n  flex-direction: column;\n}", o: "2.2 Het as-systeem", extra: true },

  // ===== 2.3 Overzicht parent vs. child properties =====
  { v: "Noem de 7 parent/container-properties van flexbox.", a: "flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content en gap (row-gap / column-gap).", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Noem de 6 child/item-properties van flexbox.", a: "flex-grow, flex-shrink, flex-basis, flex, align-self en order.", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Welke elementen zijn de flex items?", a: "De direct onderliggende kinderen van de flex container.", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Geef de 4 waarden van flex-direction.", a: "row, column, row-reverse en column-reverse.", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Geef de 3 waarden van flex-wrap.", a: "nowrap, wrap en wrap-reverse.", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Wat is flex-flow?", a: "Een shorthand voor flex-direction + flex-wrap.\n\n.container {\n  flex-flow: row wrap;\n}", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Wat doet align-content?", a: "De uitlijning tussen meerdere rijen.", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Met welke eigenschappen maak je ruimte tussen flex items?", a: "gap, row-gap en column-gap.\n\n.container {\n  gap: 20px;\n}", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Wat doet order?", a: "De visuele volgorde van een item aanpassen.\n\n.item {\n  order: 1;\n}", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Wat doet flex-basis?", a: "Het bepaalt de basisgrootte van een item vóór de verdeling van de ruimte.", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Is align-self een parent- of een child-property? Wat doet het?", a: "Een child-property: het overschrijft align-items voor 1 item.", o: "2.3 Overzicht parent vs. child properties" },
  { v: "flex is een shorthand voor welke 3 eigenschappen?", a: "flex-grow, flex-shrink en flex-basis (grow shrink basis).", o: "2.3 Overzicht parent vs. child properties" },
  { v: "Meer over flex-flow", a: "flex-flow: row wrap; is hetzelfde als flex-direction: row; en flex-wrap: wrap; samen.", o: "2.3 Overzicht parent vs. child properties", extra: true },
  { v: "Meer over align-content", a: "align-content heeft pas effect als de items over meerdere rijen staan (dus met flex-wrap: wrap).", o: "2.3 Overzicht parent vs. child properties", extra: true },
  { v: "Meer over order", a: "order is een getal (standaard 0). Een item met een lager getal komt eerder, zonder dat je de HTML verandert.", o: "2.3 Overzicht parent vs. child properties", extra: true },

  // ===== 2.4 display & flex-direction =====
  { v: "Wat doet display: flex (of display: inline-flex)?", a: "Het transformeert het element naar een flex container. Alle directe kinderen worden automatisch flex items.", o: "2.4 display & flex-direction" },
  { v: "Wat bepaalt flex-direction?", a: "De richting van de hoofdas.", o: "2.4 display & flex-direction" },
  { v: "Wat is de standaardwaarde van flex-direction?", a: "row: horizontaal van links naar rechts.", o: "2.4 display & flex-direction" },
  { v: "Wat doen row, column, row-reverse en column-reverse?", a: "row (standaard): horizontaal van links naar rechts.\ncolumn: verticaal van boven naar beneden.\nrow-reverse: horizontaal van rechts naar links.\ncolumn-reverse: verticaal van beneden naar boven.", o: "2.4 display & flex-direction" },
  { v: "Welke flex-direction zet de items verticaal van beneden naar boven?", a: "column-reverse\n\n.container {\n  flex-direction: column-reverse;\n}", o: "2.4 display & flex-direction" },
  { v: "Welke flex-direction zet de items horizontaal van rechts naar links?", a: "row-reverse\n\n.container {\n  flex-direction: row-reverse;\n}", o: "2.4 display & flex-direction" },
  { v: "Schrijf de CSS voor een horizontale .navigatie-balk met flexbox.", a: ".navigatie-balk {\n  display: flex;\n  flex-direction: row;\n}", o: "2.4 display & flex-direction", oefening: true,
    uitleg: "display: flex = maakt van .navigatie-balk een flex-container. flex-direction: row = de items naast elkaar (horizontaal); dit is de standaard." },
  { v: "Verschil tussen display: flex en display: inline-flex", a: "display: flex: de container gedraagt zich als een block-element (volle breedte).\ndisplay: inline-flex: de container gedraagt zich als een inline-element (zo breed als zijn inhoud).\n\nBinnenin werkt flexbox bij allebei hetzelfde.", o: "2.4 display & flex-direction", extra: true },

  // ===== 2.4 justify-content =====
  { v: "Wat bepaalt justify-content?", a: "Hoe de overgebleven vrije ruimte op de hoofdas verdeeld wordt.", o: "2.4 justify-content" },
  { v: "Wat is de standaardwaarde van justify-content?", a: "flex-start: de items plakken aan het begin.", o: "2.4 justify-content" },
  { v: "Geef de 6 waarden van justify-content.", a: "flex-start, flex-end, center, space-between, space-around en space-evenly.", o: "2.4 justify-content" },
  { v: "Wat doen flex-start, flex-end en center bij justify-content?", a: "flex-start (standaard): items plakken aan het begin.\nflex-end: items plakken aan het einde.\ncenter: items staan in het midden.", o: "2.4 justify-content" },
  { v: "Wat doet justify-content: space-between?", a: "Het eerste item staat helemaal links, het laatste helemaal rechts, met gelijke ruimte ertussen.", o: "2.4 justify-content" },
  { v: "Wat is het verschil tussen space-around en space-evenly?", a: "space-around: gelijke ruimte rondom elk item, de randen hebben halve ruimte.\nspace-evenly: exact gelijke ruimte tussen alle items én de randen.", o: "2.4 justify-content",
    uitleg: "Bij space-around krijgt elk item links en rechts evenveel ruimte. Tussen twee items tel je die ruimte dus dubbel, aan de rand maar één keer: daarom hebben de randen 'halve ruimte'." },
  { v: "Logo links, menu rechts in een header: welke CSS?", a: ".header-container {\n  display: flex;\n  justify-content: space-between;\n}", o: "2.4 justify-content" },

  // ===== 2.4 align-items =====
  { v: "Wat bepaalt align-items?", a: "Hoe items verticaal (haaks op de hoofdas, dus op de kruisas) uitgelijnd worden.", o: "2.4 align-items" },
  { v: "Wat is de standaardwaarde van align-items? Wat doet ze?", a: "stretch: de items worden opgerekt om de volledige hoogte van de container te vullen.", o: "2.4 align-items" },
  { v: "Geef de 5 waarden van align-items.", a: "stretch, flex-start, flex-end, center en baseline.", o: "2.4 align-items" },
  { v: "Wat doen flex-start, flex-end en center bij align-items?", a: "flex-start: items aan de bovenkant.\nflex-end: items aan de onderkant.\ncenter: items verticaal gecentreerd.", o: "2.4 align-items" },
  { v: "Wat doet align-items: baseline?", a: "De items worden uitgelijnd op de basislijn van hun tekst.", o: "2.4 align-items",
    uitleg: "De basislijn is de denkbeeldige lijn waarop de letters staan." },
  { v: "Kaarten in een rij verticaal in het midden uitlijnen: welke CSS?", a: ".card-rij {\n  display: flex;\n  align-items: center;\n}", o: "2.4 align-items" },
  { v: "Waarom zijn kaarten in een flex-rij standaard allemaal even hoog?", a: "Door align-items: stretch (standaard): de items worden opgerekt tot de volledige hoogte van de container.", o: "2.4 align-items" },

  // ===== 2.4 flex-wrap & gap =====
  { v: "Zet gap ook ruimte aan de buitenkant van een flex container?", a: "Nee. gap zet alleen ruimte tússen de flex items, niet aan de buitenkant.", o: "2.4 flex-wrap & gap",
    uitleg: "Wil je ook ruimte aan de buitenkant, gebruik dan padding op de container.\n\n.producten-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}" },
  { v: "Wat doet flex-wrap: nowrap? Is het de standaard?", a: "Ja, het is de standaard: alle items worden op één regel gepropt (ze kunnen krimpen).", o: "2.4 flex-wrap & gap" },
  { v: "Wat doet flex-wrap: wrap?", a: "Items springen naar een nieuwe regel zodra de container te smal wordt.", o: "2.4 flex-wrap & gap" },
  { v: "Wat doet gap: 20px in een flex container?", a: "Het maakt een schone tussenruimte van 20px tussen de flex items, zonder gedoe met margin.", o: "2.4 flex-wrap & gap" },
  { v: "Schrijf een .producten-grid waarin items naar een nieuwe regel springen, met 20px ertussen.", a: ".producten-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}", o: "2.4 flex-wrap & gap", oefening: true,
    uitleg: "display: flex = flex-container. flex-wrap: wrap = items die niet meer passen, springen naar een nieuwe regel. gap: 20px = 20px ruimte tussen de items." },
  { v: "Waarom gebruik je gap in plaats van margin tussen flex items?", a: "gap maakt een schone tussenruimte tussen de items, zonder gedoe met margin.", o: "2.4 flex-wrap & gap" },

  // ===== 2.5 flex-grow, flex-shrink & flex-basis =====
  { v: "Wanneer bepalen de child-properties hoe flex items zich aanpassen?", a: "Wanneer de flex container vrije ruimte overheeft, of ruimte tekortkomt.", o: "2.5 flex-grow, flex-shrink & flex-basis" },
  { v: "Wat is flex-grow?", a: "De groeifactor: een getal zonder eenheid dat aangeeft hoeveel van de overgebleven vrije ruimte het item mag opsnoepen ten opzichte van de andere items.", o: "2.5 flex-grow, flex-shrink & flex-basis" },
  { v: "Wat betekent flex-grow: 0, 1 en 2? Welke is de standaard?", a: "0 (standaard): het item groeit niet.\n1: het item groeit en pakt een evenredig deel van de vrije ruimte.\n2: het item pakt 2x zoveel vrije ruimte als een item met flex-grow: 1.", o: "2.5 flex-grow, flex-shrink & flex-basis" },
  { v: "Er is 300px vrije ruimte. Item A heeft flex-grow: 1, item B flex-grow: 2. Hoeveel extra breedte krijgt elk?", a: "A krijgt 100px extra, B krijgt 200px extra (3 delen van 100px).\n\n.a { flex-grow: 1; }\n.b { flex-grow: 2; }", o: "2.5 flex-grow, flex-shrink & flex-basis",
    uitleg: "Rekenvoorbeeld: er is 300px vrije ruimte. Item A heeft flex-grow: 1, item B flex-grow: 2. Samen zijn dat 3 delen van 100px: A krijgt 100px extra, B 200px extra. Het gaat om de vrije ruimte, niet om de totale breedte." },
  { v: "Wat is flex-shrink?", a: "De krimpfactor: hoeveel een item moet krimpen als er ruimte tekort is.", o: "2.5 flex-grow, flex-shrink & flex-basis" },
  { v: "Wat betekent flex-shrink: 1 en flex-shrink: 0? Welke is de standaard?", a: "1 (standaard): het item krimpt mee indien nodig.\n0: het item weigert te krimpen en behoudt zijn exacte breedte.", o: "2.5 flex-grow, flex-shrink & flex-basis" },
  { v: "Een item mag nooit krimpen. Welke CSS?", a: ".item {\n  flex-shrink: 0;\n}", o: "2.5 flex-grow, flex-shrink & flex-basis" },
  { v: "Wat is flex-basis?", a: "De basisgrootte: de initiële grootte van het item vóór de resterende vrije ruimte verdeeld wordt via flex-grow of flex-shrink.", o: "2.5 flex-grow, flex-shrink & flex-basis" },
  { v: "In welke eenheden kan je flex-basis instellen? Wat is de standaard?", a: "px, %, em, rem of auto (standaard).\n\n.item {\n  flex-basis: 200px;\n}", o: "2.5 flex-grow, flex-shrink & flex-basis",
    uitleg: "Kan ingesteld worden in px, %, em, rem of auto (standaard)." },

  // ===== 2.5 De flex-shorthand =====
  { v: "Wat is de syntax van de flex-shorthand?", a: "flex: <flex-grow> <flex-shrink> <flex-basis>", o: "2.5 De flex-shorthand" },
  { v: "Is de flex-shorthand of zijn de losse eigenschappen aanbevolen?", a: "De flex-shorthand.", o: "2.5 De flex-shorthand",
    uitleg: "De cursus raadt de shorthand aan in plaats van de drie losse eigenschappen. Er zijn 4 veelgebruikte patronen." },
  { v: "Waarvoor staat flex: 1, en wat doet het?", a: "flex: 1 1 0%: het item neemt alle beschikbare ruimte in en kolommen worden exact even groot.\n\n.kolom-gelijk {\n  flex: 1;\n}", o: "2.5 De flex-shorthand" },
  { v: "Waarvoor staat flex: auto, en wat doet het?", a: "flex: 1 1 auto: het item groeit en krimpt op basis van zijn inhoudsbreedte.\n\n.kolom-inhoud {\n  flex: auto;\n}", o: "2.5 De flex-shorthand",
    uitleg: "Bij flex: auto is de basis de inhoud: een item met meer tekst wordt breder. Dat is het verschil met flex: 1." },
  { v: "Waarvoor staat flex: initial, en wat doet het?", a: "flex: 0 1 auto: het standaardgedrag. Het item groeit niet, krimpt wel, en de basis is de inhoud.\n\n.kolom-standaard {\n  flex: initial;\n}", o: "2.5 De flex-shorthand" },
  { v: "Schrijf een .sidebar die altijd 250px breed is: ze groeit nooit en krimpt nooit.", a: ".sidebar {\n  flex: 0 0 250px;\n}", o: "2.5 De flex-shorthand", oefening: true,
    uitleg: "flex: 0 0 250px = flex-grow 0 (groeit niet), flex-shrink 0 (krimpt niet), flex-basis 250px (start- en dus vaste breedte)." },
  { v: "Welk flex-patroon is het standaardgedrag van een flex item?", a: "flex: initial (= flex: 0 1 auto).", o: "2.5 De flex-shorthand" },
  { v: "Wat is het verschil tussen flex: 1 en flex: auto?", a: "flex: 1 (1 1 0%): de kolommen worden exact even groot.\nflex: auto (1 1 auto): de breedte hangt af van de inhoud.", o: "2.5 De flex-shorthand" },

  // ===== 2.5 align-self =====
  { v: "Wat doet align-self?", a: "Het overschrijft de align-items-waarde van de parent voor één specifiek kind.", o: "2.5 align-self" },
  { v: "Laat de kaart met de classes card-item en special naar de bodem zakken.", a: ".card-item.special {\n  align-self: flex-end;\n}", o: "2.5 align-self",
    uitleg: ".card-item.special (zonder spatie) selecteert een element dat beide classes heeft. Alle andere kaarten volgen nog steeds align-items van de ouder." },
  { v: "align-self werkt op de … as.", a: "kruisas (cross axis)", o: "2.5 align-self" },

  // ===== 2.6 Flexbox patterns =====
  { v: "Geef de 3 flexbox-patterns uit de cursus.", a: "A: het perfect centrerend blok (dead center).\nB: de footer steeds mooi onderaan (app layout).\nC: het media object (icoon/foto + tekst).", o: "2.6 Flexbox patterns" },
  { v: "Hoe centreer je een blok perfect, horizontaal én verticaal (pattern A)?", a: ".hero-banner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}", o: "2.6 Flexbox patterns" },
  { v: "Waarom staat er min-height: 400px in pattern A (dead center)?", a: "Zodat de container hoger is dan zijn inhoud; anders is er geen ruimte om verticaal te centreren.", o: "2.6 Flexbox patterns",
    uitleg: "Zonder min-height is de container maar zo hoog als zijn inhoud, en zie je niets van het verticaal centreren." },
  { v: "Welk probleem lost pattern B (app layout) op?", a: "Op pagina's met weinig inhoud loop je het risico dat de footer niet onderaan de viewport staat.", o: "2.6 Flexbox patterns" },
  { v: "Schrijf pattern B: de footer staat steeds mooi onderaan.", a: "body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex: 1;\n}", o: "2.6 Flexbox patterns", oefening: true,
    uitleg: "body als flex-container in een kolom (flex-direction: column), minstens zo hoog als het scherm (min-height: 100vh). main krijgt flex: 1 en neemt alle vrije hoogte in, zodat de footer onderaan geduwd wordt." },
  { v: "Waarom flex: 1 op main in pattern B?", a: "main neemt alles op wat overblijft, waardoor de footer naar beneden geduwd wordt.\n\nmain {\n  flex: 1;\n}", o: "2.6 Flexbox patterns" },
  { v: "Wat is een media object (pattern C)?", a: "Een icoon of foto met tekst ernaast.", o: "2.6 Flexbox patterns" },
  { v: "Schrijf pattern C: een .media-card met een foto van vaste 80px en tekst die de rest opvult, 15px ertussen.", a: ".media-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n}\n.media-card img {\n  flex: 0 0 80px;\n}\n.media-card .content {\n  flex: 1;\n}", o: "2.6 Flexbox patterns", oefening: true,
    uitleg: "display: flex = foto en tekst naast elkaar. align-items: flex-start = bovenaan uitlijnen. gap: 15px = ruimte ertussen. flex: 0 0 80px = de foto is altijd 80px (groeit en krimpt niet). flex: 1 = de tekst vult de rest.\n\nDe foto blijft altijd 80px breed, de tekst ernaast neemt de rest in." },
  { v: "Waarom align-items: flex-start bij de .media-card?", a: "Zodat de items bovenaan uitgelijnd worden en de foto niet opgerekt wordt tot de hoogte van de tekst (stretch is de standaard).", o: "2.6 Flexbox patterns" },

  // ===== 3.1 static & relative =====
  { v: "Wat kan je met de position-eigenschap?", a: "Elementen losmaken van de normale documentvolgorde en ze exact op het scherm of binnen een container plaatsen.", o: "3.1 static & relative" },
  { v: "Noem de 5 positioneringswaarden.", a: "static, relative, absolute, fixed en sticky.", o: "3.1 static & relative" },
  { v: "Wat doet position: static? Is het de standaard?", a: "Ja, het is de standaard. Het element volgt de normale, natuurlijke stroom van het HTML-document.", o: "3.1 static & relative" },
  { v: "Welke eigenschappen hebben geen enkel effect bij position: static?", a: "top, right, bottom, left en z-index.", o: "3.1 static & relative" },
  { v: "Wat doet position: relative?", a: "Het element wordt verschoven ten opzichte van zijn normale positie. De oorspronkelijke plek blijft gereserveerd in het document.", o: "3.1 static & relative" },
  { v: "Springen andere elementen naar de lege plek van een element met position: relative?", a: "Nee, de oorspronkelijke plek van het element blijft gereserveerd.", o: "3.1 static & relative" },
  { v: "Wat is de belangrijkste functie van position: relative?", a: "Het dient zeer vaak als ankerpunt (offset parent) voor kinderen met position: absolute.", o: "3.1 static & relative" },
  { v: "In welke richting verschuift een relative element met top: 10px en left: 20px?", a: "10px naar beneden en 20px naar rechts, ten opzichte van zijn normale plek.", o: "3.1 static & relative" },
  { v: "Schrijf een .relative-box die 10px naar beneden en 20px naar rechts verschuift.", a: ".relative-box {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}", o: "3.1 static & relative", oefening: true,
    uitleg: "position: relative = verschuiven ten opzichte van de eigen plaats; de oorspronkelijke ruimte blijft vrij. top: 10px = 10px weg van boven, dus naar beneden. left: 20px = 20px weg van links, dus naar rechts.\n\nLet op de richting: top: 10px duwt het element 10px weg van de bovenkant, dus naar beneden. left: 20px duwt het weg van links, dus naar rechts." },

  // ===== 3.1 absolute =====
  { v: "Wat gebeurt er met een element met position: absolute in de documentstroom?", a: "Het wordt volledig uit de documentstroom gehaald en neemt geen ruimte meer in.", o: "3.1 absolute" },
  { v: "Ten opzichte van wat wordt een element met position: absolute gepositioneerd?", a: "Ten opzichte van het dichtstbijzijnde ouder-element met position: relative (of absolute/fixed).", o: "3.1 absolute" },
  { v: "Ten opzichte van wat positioneert een absolute element zich als er geen gepositioneerde ouder is?", a: "Ten opzichte van de <body>.", o: "3.1 absolute" },
  { v: "Schrijf de CSS voor een rode badge 'Nieuw' rechtsboven (10px) in een .card van 300px breed.", a: ".card {\n  position: relative;\n  width: 300px;\n}\n.badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: red;\n  color: white;\n  padding: 5px 10px;\n}", o: "3.1 absolute", oefening: true,
    uitleg: "position: relative op .card = de kaart wordt het referentiepunt. position: absolute op .badge = de badge wordt geplaatst ten opzichte van de kaart. top/right: 10px = 10px van de bovenkant en de rechterkant. background-color/color = rode achtergrond, witte tekst. padding = ruimte rond de tekst." },
  { v: "Schrijf de HTML van een kaart met een badge 'Nieuw' en een afbeelding product.jpg.", a: "<div class=\"card\">\n  <span class=\"badge\">Nieuw</span>\n  <img src=\"product.jpg\">\n</div>", o: "3.1 absolute", oefening: true,
    uitleg: "<div class=\"card\"> = de kaart (het referentiepunt in de CSS). <span class=\"badge\"> = het label 'Nieuw'. <img src=\"product.jpg\"> = de afbeelding van het product." },
  { v: "Waarom zet je position: relative op .card in het badge-voorbeeld?", a: "Dat is het anker: de badge met position: absolute wordt dan ten opzichte van de kaart gepositioneerd.\n\n.card {\n  position: relative; /* HET ANKER! */\n}", o: "3.1 absolute" },
  { v: "Wat gebeurt er met de badge als je position: relative op .card vergeet?", a: "Dan zoekt de badge de volgende gepositioneerde ouder, of de <body>: hij belandt in de hoek van de pagina in plaats van in de kaart.", o: "3.1 absolute",
    uitleg: "Zo staat de badge 'Nieuw' 10px van de bovenrand en 10px van de rechterrand van de kaart. Vergeet je position: relative op .card, dan zoekt de badge verder naar boven en belandt hij in de hoek van de pagina." },
  { v: "Wat is het verschil tussen relative en absolute wat ruimte betreft?", a: "relative: de oorspronkelijke plek blijft gereserveerd.\nabsolute: het element neemt geen ruimte meer in.", o: "3.1 absolute" },
  { v: "Wat is precies het startpunt van absolute zonder gepositioneerde ouder?", a: "Technisch positioneert een absolute element zonder gepositioneerde ouder zich ten opzichte van het beginblok van de pagina (de 'initial containing block'). De cursus vereenvoudigt dat tot <body>.", o: "3.1 absolute", extra: true,
    uitleg: "Voor het examen hou je de cursusformulering aan: ten opzichte van de <body>." },

  // ===== 3.1 fixed & sticky =====
  { v: "Wat doet position: fixed?", a: "Het element wordt uit de documentstroom gehaald en vastgezet ten opzichte van de browser-viewport. Het blijft op exact dezelfde plek staan tijdens het scrollen.", o: "3.1 fixed & sticky",
    uitleg: "In het cursusvoorbeeld spreekt de commentaar over een tabelkop, terwijl de selector een navigatie is: dezelfde techniek werkt voor allebei." },
  { v: "Ten opzichte van wat wordt een element met position: fixed vastgezet?", a: "De browser-viewport (het scherm).", o: "3.1 fixed & sticky" },
  { v: "Schrijf een .back-to-top-knop die altijd 20px van de rechteronderhoek van het scherm staat.", a: ".back-to-top {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}", o: "3.1 fixed & sticky", oefening: true,
    uitleg: "position: fixed = vast ten opzichte van het scherm: de knop blijft staan als je scrolt. bottom/right: 20px = 20px van de onderkant en de rechterkant van het scherm.\n\nBack-to-top is de knop 'terug naar boven' die rechtsonder blijft staan." },
  { v: "Geef 2 andere toepassingen van position: fixed uit de cursus.", a: "Een popup over de hele pagina, zoals een loginboodschap of een cookie-banner.", o: "3.1 fixed & sticky" },
  { v: "Wat is position: sticky?", a: "Een hybride vorm tussen relative en fixed: het element gedraagt zich als relative tot je bij het scrollen een drempelwaarde (bv. top: 0) bereikt. Vanaf dan blijft het kleven als een fixed element.", o: "3.1 fixed & sticky" },
  { v: "Wat is de drempelwaarde bij position: sticky? Geef een voorbeeld.", a: "De positie waarop het element begint te kleven, bijvoorbeeld top: 0.\n\n.main-navigation {\n  position: sticky;\n  top: 0;\n}", o: "3.1 fixed & sticky" },
  { v: "Schrijf een .main-navigation die bovenaan blijft kleven tijdens het scrollen, met achtergrond #333 en witte tekst.", a: ".main-navigation {\n  position: sticky;\n  top: 0;\n  background-color: #333;\n  color: white;\n}", o: "3.1 fixed & sticky", oefening: true,
    uitleg: "position: sticky = gewoon in de pagina, tot je scrolt; dan blijft het kleven. top: 0 = het kleeft helemaal bovenaan. background-color: #333 = donkergrijs; color: white = witte tekst." },
  { v: "position: sticky is een hybride vorm tussen … en ….", a: "relative · fixed", o: "3.1 fixed & sticky" },
  { v: "Welke 2 position-waarden halen het element uit de documentstroom en zetten het ten opzichte van iets anders?", a: "absolute: ten opzichte van de dichtstbijzijnde gepositioneerde ouder.\nfixed: ten opzichte van de browser-viewport.", o: "3.1 fixed & sticky" },

  // ===== 3.2 z-index & stacking context =====
  { v: "Wat bepaalt z-index?", a: "Welk element bovenop ligt wanneer elementen elkaar overlappen.", o: "3.2 z-index & stacking context" },
  { v: "Op welke elementen werkt z-index?", a: "Alleen op gepositioneerde elementen (position anders dan static).", o: "3.2 z-index & stacking context" },
  { v: "Welk element ligt bovenop: een met z-index: 10 of een met z-index: 100?", a: "Het element met z-index: 100: een hogere z-index ligt boven een lagere.", o: "3.2 z-index & stacking context" },
  { v: "Schrijf een overlay op laag 10 met een pop-up erboven op laag 100.", a: ".achtergrond-overlay {\n  position: absolute;\n  z-index: 10;\n}\n.pop-up-modal {\n  position: absolute;\n  z-index: 100;\n}", o: "3.2 z-index & stacking context", oefening: true,
    uitleg: "z-index = de laag: een hoger getal ligt bovenop. z-index werkt alleen op een element met position (hier absolute). De pop-up (100) ligt dus boven de overlay (10)." },
  { v: "Je zet z-index: 100 op een element, maar het werkt niet. Wat ontbreekt er?", a: "Een position anders dan static: z-index werkt alleen op gepositioneerde elementen.\n\n.element {\n  position: relative;\n  z-index: 100;\n}", o: "3.2 z-index & stacking context" },
  { v: "Geef het tweede voorbeeld van z-index uit de cursus.", a: "Een winkelkar met het aantal artikels.", o: "3.2 z-index & stacking context",
    uitleg: "Een ander voorbeeld uit de cursus is een winkelkar met het aantal artikels: het bolletje met het aantal ligt boven het winkelkar-icoon." },
  { v: "Waar staat de z in z-index voor? En wat is een stacking context?", a: "De z verwijst naar de derde as: de diepte, naar je toe uit het scherm (x = horizontaal, y = verticaal).\n\nEen element met een position en een z-index vormt een eigen 'stapel' (stacking context). z-index-waarden worden binnen die stapel met elkaar vergeleken.", o: "3.2 z-index & stacking context", extra: true },

  // ===== 4.1 Aanbevolen video's =====
  { v: "Welke 4 video's worden aangeraden voor les 5?", a: "CSS Positioning & Z-Index Uitgelegd, CSS Flexbox, CSS Flexbox Code Along en CSS Flexbox in 20 Minuten.", o: "4.1 Aanbevolen video's" },
  { v: "Welk voorbeeldbestand hoort bij de video CSS Flexbox Code Along?", a: "oefeningen/les5/flexbox-basics.html", o: "4.1 Aanbevolen video's" },

  // ===== 4.2 Quick reference =====
  { v: "Welke 3 layouttechnieken behandelt les 5?", a: "Float, flexbox en positioning (met z-index).", o: "4.2 Quick reference",
    uitleg: "Het kernoverzicht toont de meest gebruikte waarden. In de uitleg van de les staan er nog meer, zoals space-evenly, baseline, row-reverse en wrap-reverse." },
  { v: "Welke waarden heeft clear in het kernoverzicht?", a: "none, left, right en both.\n\n.float-item {\n  clear: none | left | right | both;\n}", o: "4.2 Quick reference" },
  { v: "Schrijf het float-blok uit het kernoverzicht.", a: ".float-item {\n  float: left | right | none;\n  clear: none | left | right | both;\n}\n.float-container {\n  display: flow-root;\n}", o: "4.2 Quick reference", oefening: true,
    uitleg: "float = links, rechts of niet zweven. clear = niet naast een zwevend element staan, maar eronder. display: flow-root op de container = de container blijft om zijn zwevende kinderen heen (geen ingezakte ouder)." },
  { v: "Schrijf het flex-container-blok uit het kernoverzicht.", a: ".flex-container {\n  display: flex;\n  flex-direction: row | column;\n  justify-content: flex-start | flex-end | center | space-between | space-around;\n  align-items: stretch | flex-start | flex-end | center;\n  flex-wrap: nowrap | wrap;\n  gap: 20px;\n}", o: "4.2 Quick reference", oefening: true,
    uitleg: "display: flex = flex-container. flex-direction = rij of kolom. justify-content = verdeling op de hoofdas. align-items = uitlijning op de dwarsas. flex-wrap = wel of niet naar een nieuwe regel. gap = ruimte tussen de items." },
  { v: "Schrijf het flex-item-blok uit het kernoverzicht.", a: ".flex-item {\n  flex: <grow> <shrink> <basis>;\n  align-self: auto | flex-start | flex-end | center;\n}", o: "4.2 Quick reference", oefening: true,
    uitleg: "flex = grow (groeien), shrink (krimpen) en basis (startbreedte) in één regel. align-self = de uitlijning van één item op de dwarsas, anders dan de rest." },
  { v: "Geef de 2 voorbeelden van de flex-shorthand uit het kernoverzicht.", a: "flex: 1 1 0% en flex: 0 0 200px.", o: "4.2 Quick reference" },
  { v: "Schrijf het positioning-blok uit het kernoverzicht.", a: ".position-item {\n  position: static | relative | absolute | fixed | sticky;\n  top: 0; right: 0; bottom: 0; left: 0;\n  z-index: 100;\n}", o: "4.2 Quick reference", oefening: true,
    uitleg: "position = de manier van plaatsen: static (standaard), relative, absolute, fixed of sticky. top/right/bottom/left = de afstand tot de randen. z-index = welke laag bovenop ligt." },
  { v: "Wat betekent align-self: auto?", a: "Het item volgt gewoon de align-items-waarde van zijn ouder. clear: none is de standaard van clear.", o: "4.2 Quick reference", extra: true },
];

kaarten_WEB_les5.structuur = [
  { kop: "Module 1: Klassieke layout met float", slide: "M1" },
  { o: "1.1 Wat is float?", slide: "1.1", sub: true },
  { o: "1.2 clear & pitfalls van float", slide: "1.2", sub: true },
  { kop: "Module 2: Flexbox, eendimensionale layouts (1D)", slide: "M2" },
  { o: "2. Flexbox: eendimensionale layouts (1D)", slide: "2", sub: true },
  { o: "2.1 Didactische roadmap", slide: "2.1", sub: true },
  { o: "2.2 Het as-systeem", slide: "2.2", sub: true },
  { o: "2.3 Overzicht parent vs. child properties", slide: "2.3", sub: true },
  { o: "2.4 display & flex-direction", slide: "2.4", sub: true },
  { o: "2.4 justify-content", slide: "2.4", sub: true },
  { o: "2.4 align-items", slide: "2.4", sub: true },
  { o: "2.4 flex-wrap & gap", slide: "2.4", sub: true },
  { o: "2.5 flex-grow, flex-shrink & flex-basis", slide: "2.5", sub: true },
  { o: "2.5 De flex-shorthand", slide: "2.5", sub: true },
  { o: "2.5 align-self", slide: "2.5", sub: true },
  { o: "2.6 Flexbox patterns", slide: "2.6", sub: true },
  { kop: "Module 3: CSS positioning (position & z-index)", slide: "M3" },
  { o: "3.1 static & relative", slide: "3.1", sub: true },
  { o: "3.1 absolute", slide: "3.1", sub: true },
  { o: "3.1 fixed & sticky", slide: "3.1", sub: true },
  { o: "3.2 z-index & stacking context", slide: "3.2", sub: true },
  { kop: "Module 4: Video's & kernoverzicht", slide: "M4" },
  { o: "4.1 Aanbevolen video's", slide: "4.1", sub: true },
  { o: "4.2 Quick reference", slide: "4.2", sub: true },
];
