// Web Essentials – Les 2: HTML media, tabellen & formulieren
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = tekening op de voorkant (map afbeeldingen/WEBles2_htmlmedia/), imgAntwoord = tekening op de achterkant (optioneel)
// De structuur onderaan bepaalt het overzicht naast de kaart (volgorde en nummering van de cursus).

const kaarten_WEB_les2 = [

  // ===== 1.1 Basissyntaxis & attributen van img (1.1) =====
  { v: "Welk element gebruik je voornamelijk om afbeeldingen in HTML te plaatsen?", a: "Het <img>-element.", o: "1.1 Basissyntaxis & attributen van img",
    uitleg: "Afbeeldingen maken een pagina visueel aantrekkelijk en versterken de boodschap. In les 2 gaat het alleen over de HTML (structuur, semantiek, attributen); de visuele uitlijning met CSS komt in les 4." },
  { v: "Is <img> een container-element of een leeg element?", a: "Een void (leeg) element, zonder sluitingstag.\n\n<img src=\"images/foto.jpg\" alt=\"Foto\">   <!-- geen </img> -->", o: "1.1 Basissyntaxis & attributen van img" },
  { v: "Geef de 6 attributen van <img> uit het voorbeeld in de cursus.", a: "src, alt, title, width, height en loading.\n\n<img src=\"images/quokka.jpg\" alt=\"Een quokka\" title=\"Quokka\"\n     width=\"600\" height=\"450\" loading=\"lazy\">", o: "1.1 Basissyntaxis & attributen van img" },
  { v: "Wat doet het attribuut src bij <img>, en is het verplicht?", a: "Source: het relatieve of absolute pad naar het afbeeldingsbestand. Verplicht.\n\n<img src=\"images/logo.png\" alt=\"Logo\">", o: "1.1 Basissyntaxis & attributen van img" },
  { v: "Wat doet het attribuut alt bij <img>, en is het verplicht?", a: "Alternative text: een beschrijvende tekst als de afbeelding niet laadt, of die een screenreader voorleest. Verplicht (voor toegankelijkheid en SEO).\n\n<img src=\"images/logo.png\" alt=\"Erasmushogeschool Brussel logo\">", o: "1.1 Basissyntaxis & attributen van img" },
  { v: "Wat doet het attribuut title bij <img>?", a: "Een optionele tooltip-tekst die verschijnt wanneer je met de muis over de afbeelding beweegt.\n\n<img src=\"images/quokka.jpg\" alt=\"Een quokka\" title=\"Quokka op Rottnest Island\">", o: "1.1 Basissyntaxis & attributen van img" },
  { v: "Wat geef je op met width en height bij <img>, en in welke eenheid?", a: "De intrinsieke afmetingen in pixels, zonder \"px\" te vermelden (bv. width=\"600\").\n\n<img src=\"images/foto.jpg\" alt=\"Foto\" width=\"600\" height=\"400\">", o: "1.1 Basissyntaxis & attributen van img" },
  { v: "Waarom geef je width en height op bij een <img>?", a: "Dan reserveert de browser meteen de juiste ruimte op het scherm. Zo voorkom je Cumulative Layout Shift (CLS): de pagina verspringt niet tijdens het laden.\n\n<img src=\"images/foto.jpg\" alt=\"Foto\" width=\"600\" height=\"400\">", o: "1.1 Basissyntaxis & attributen van img" },
  { v: "Waar staat CLS voor, en wat is het?", a: "Cumulative Layout Shift: de pagina verspringt tijdens het laden, omdat er pas ruimte gemaakt wordt als de afbeelding binnen is.", o: "1.1 Basissyntaxis & attributen van img",
    uitleg: "Je voorkomt het door width en height op te geven." },
  { v: "Wat doet loading=\"lazy\"?", a: "De browser laadt de afbeelding pas wanneer ze bijna in de zichtbare viewport komt. Dat bevordert de laadsnelheid.\n\n<img src=\"images/foto.jpg\" alt=\"Foto\" loading=\"lazy\">", o: "1.1 Basissyntaxis & attributen van img" },
  { v: "Schrijf een <img> voor images/quokka.jpg van 600 bij 450 pixels die pas laadt als ze in beeld komt, met alt-tekst.", a: "<img src=\"images/quokka.jpg\" alt=\"Een Quokka familie op Rottnest Island\" width=\"600\" height=\"450\" loading=\"lazy\">", o: "1.1 Basissyntaxis & attributen van img", oefening: true,
    uitleg: "src = het pad naar de afbeelding. alt = beschrijving voor screenreaders. width/height = de grootte, zodat de pagina niet verspringt. loading=\"lazy\" = pas laden als de afbeelding in beeld komt." },

  // ===== 1.2 Het attribuut alt, accessibility & SEO (1.2) =====
  { v: "Voor welke 2 zaken is het alt-attribuut essentieel?", a: "Webtoegankelijkheid (a11y) en zoekmachineoptimalisatie (SEO).", o: "1.2 Het attribuut alt, accessibility & SEO",
    uitleg: "a11y is een afkorting van accessibility: a, 11 letters, y." },
  { v: "Wat betekent a11y?", a: "Accessibility (webtoegankelijkheid): tussen de a en de y staan 11 letters.", o: "1.2 Het attribuut alt, accessibility & SEO" },
  { v: "Hoe schrijf je de alt-tekst bij een informatieve afbeelding?", a: "Een korte, accurate beschrijving van de inhoud of functie van de afbeelding, bv. alt=\"Erasmushogeschool Brussel logo\".\n\n<img src=\"images/logo.png\" alt=\"Erasmushogeschool Brussel logo\">", o: "1.2 Het attribuut alt, accessibility & SEO" },
  { v: "Hoe schrijf je de alt bij een decoratieve afbeelding?", a: "Een leeg alt-attribuut: alt=\"\". Screenreaders slaan de afbeelding dan netjes over.\n\n<img src=\"images/lijn.png\" alt=\"\">", o: "1.2 Het attribuut alt, accessibility & SEO" },
  { v: "Mag je het alt-attribuut weglaten bij een decoratieve afbeelding?", a: "Nee, laat het nooit helemaal weg. Gebruik alt=\"\".\n\n<img src=\"images/ster.png\" alt=\"\">   <!-- juist -->\n<img src=\"images/ster.png\">          <!-- fout -->", o: "1.2 Het attribuut alt, accessibility & SEO" },
  { v: "Wat voor soort element is <img> standaard?", a: "Een inline-replaced element.\n\n<p>Tekst <img src=\"images/icoon.png\" alt=\"Icoon\" width=\"20\" height=\"20\"> verder.</p>", o: "1.2 Het attribuut alt, accessibility & SEO" },
  { v: "Wat betekent het dat <img> een inline-replaced element is?", a: "Het staat op dezelfde regel als tekst en volgt de tekstbasislijn, maar accepteert wel expliciete afmetingen (width/height). Meerdere afbeeldingen staan naast elkaar zolang de schermbreedte het toelaat.\n\n<p>Tekst <img src=\"images/icoon.png\" alt=\"Icoon\" width=\"20\" height=\"20\"> op dezelfde regel.</p>", o: "1.2 Het attribuut alt, accessibility & SEO",
    uitleg: "Voor kleine iconen tussen tekst is dat ideaal. Voor grotere afbeeldingen pas je dit gedrag meestal aan in CSS (display: block, zie les 4)." },

  // ===== 1.3 Afbeeldingsformaten op het web (1.3) =====
  // -- overzichtstabel uit de cursus --
  { v: "Afbeeldingsformaten op het web (overzicht 1.3)", a: "Vijf formaten: vier raster, één vector.", o: "1.3 Afbeeldingsformaten op het web", wit: true,
    tabel: [
      ["Formaat", "Type", "Kenmerken"],
      ["WebP / AVIF", "Raster", "Huidige Webstandaard. 30% tot 50% kleiner dan JPG/PNG bij gelijke kwaliteit. Ondersteunen transparantie."],
      ["JPEG / JPG", "Raster", "Ideaal voor foto's met veel kleurverlopen. Geen transparantie."],
      ["PNG", "Raster", "Ondersteunt transparantie (alpha-kanaal). Ideaal voor logo's en illustraties."],
      ["SVG", "Vector", "Schaalbaar zonder kwaliteitsverlies (XML-gebaseerd). Zeer klein in bestandsgrootte."],
      ["GIF", "Raster", "Verouderd. Ondersteunt eenvoudige animaties (slechts 256 kleuren)."]
    ] },
  { v: "Wat zijn WebP en AVIF?", a: "De huidige webstandaard (raster): 30% tot 50% kleiner dan JPG/PNG bij gelijke kwaliteit, en ze ondersteunen transparantie.", o: "1.3 Afbeeldingsformaten op het web" },
  { v: "Hoeveel kleiner zijn WebP/AVIF dan JPG/PNG bij gelijke kwaliteit?", a: "30% tot 50%.", o: "1.3 Afbeeldingsformaten op het web" },
  { v: "Waarvoor is JPEG/JPG ideaal, en wat kan het niet?", a: "Ideaal voor foto's met veel kleurverlopen (raster). Geen transparantie.", o: "1.3 Afbeeldingsformaten op het web" },
  { v: "Waarvoor is PNG ideaal, en wat ondersteunt het?", a: "Ideaal voor logo's en illustraties (raster). Ondersteunt transparantie (alpha-kanaal).", o: "1.3 Afbeeldingsformaten op het web" },
  { v: "Wat is SVG?", a: "Een vectorformaat (XML-gebaseerd): schaalbaar zonder kwaliteitsverlies, met een zeer kleine bestandsgrootte.\n\n<img src=\"images/icoon.svg\" alt=\"Icoon\">", o: "1.3 Afbeeldingsformaten op het web" },
  { v: "Wat is GIF, en wat zijn de beperkingen?", a: "Een verouderd rasterformaat dat eenvoudige animaties ondersteunt, met slechts 256 kleuren.", o: "1.3 Afbeeldingsformaten op het web" },
  { v: "Welk afbeeldingsformaat is vector, de andere zijn raster?", a: "SVG.", o: "1.3 Afbeeldingsformaten op het web" },
  { v: "Welke formaten ondersteunen transparantie?", a: "WebP/AVIF, PNG en SVG. (JPG niet.)", o: "1.3 Afbeeldingsformaten op het web" },
  { v: "Welk formaat kies je voor: 1. een foto, 2. een logo met transparantie, 3. een icoon dat scherp moet blijven op elke grootte?", a: "1. JPG (of WebP/AVIF)\n2. PNG (of SVG)\n3. SVG", o: "1.3 Afbeeldingsformaten op het web" },

  // ===== 1.4 figure en figcaption (1.4) =====
  { v: "Wanneer gebruik je <figure> met <figcaption>?", a: "Wanneer een afbeelding (of illustratie, diagram, code-snippet) een zelfstandige eenheid vormt met een bijschrift.\n\n<figure>\n  <img src=\"images/diagram.png\" alt=\"Diagram\">\n  <figcaption>Figuur 1: Diagram</figcaption>\n</figure>", o: "1.4 figure en figcaption" },
  { v: "Waarvoor dient <figcaption>?", a: "Het bijschrift binnen een <figure>.", o: "1.4 figure en figcaption" },
  { v: "Schrijf een figuur met een afbeelding en het bijschrift \"Figuur 1: Zonsondergang aan de Belgische kust\".", a: "<figure>\n  <img src=\"images/zonsondergang.jpg\" alt=\"Zonsondergang boven de Noordzee te Oostende\" width=\"800\" height=\"500\">\n  <figcaption>Figuur 1: Zonsondergang aan de Belgische kust</figcaption>\n</figure>", o: "1.4 figure en figcaption", oefening: true,
    uitleg: "<figure> = een figuur (afbeelding met bijschrift) als één geheel. <img> = de afbeelding, met alt, width en height. <figcaption> = het bijschrift bij de figuur." },

  // ===== 1.5 Afbeeldingen vinden & copyright (1.5) =====
  { v: "Wat geeft dit?\n<img src=\"https://placehold.co/300x200/orange/white\" alt=\"Dummy\">", a: "Een dummy-afbeelding van 300 × 200 pixels, oranje met witte tekst.\n\n<img src=\"https://placehold.co/300x200/orange/white\" alt=\"Dummy\">", o: "1.5 Afbeeldingen vinden & copyright" },

  // ===== 1.7 SVG insluiten (1.7) =====
  { v: "Geef de 2 manieren om een SVG in HTML te gebruiken.", a: "1. Gekoppeld via de <img>-tag: <img src=\"icon.svg\" alt=\"...\">\n2. Inline embedded: de <svg>-code rechtstreeks in de HTML plakken.", o: "1.7 SVG insluiten" },
  { v: "Wat is het voordeel van een inline embedded SVG ten opzichte van <img src=\"...svg\">?", a: "De SVG wordt onderdeel van de DOM. Je kan afzonderlijke onderdelen met CSS en JavaScript aanpassen (bv. de kleur bij :hover met fill) en interactie of animaties toevoegen.\n\n<svg width=\"24\" height=\"24\">\n  <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#0056b3\" />\n</svg>", o: "1.7 SVG insluiten" },
  { v: "Kan je de binnenste onderdelen van een SVG stylen met CSS als je die laadt via <img src=\"...\">?", a: "Nee. Dan is het een los afbeeldingsbestand; de interne elementen kan je niet rechtstreeks met CSS stylen of benaderen.\n\n<img src=\"icoon.svg\" alt=\"Icoon\">   <!-- binnenkant niet te stylen -->", o: "1.7 SVG insluiten" },
  { v: "Met welke CSS-eigenschap verander je de kleur van een inline SVG, bv. bij :hover?", a: "fill (bv. fill: red;)", o: "1.7 SVG insluiten" },

  // ===== 2.1 HTML5 audio (2.1) =====
  { v: "Wat maakt HTML5 mogelijk voor multimedia?", a: "Audio en video afspelen zonder externe plugins.\n\n<audio src=\"media/lied.mp3\" controls></audio>\n<video src=\"media/intro.mp4\" controls></video>", o: "2.1 HTML5 audio" },
  { v: "Welke bestandsformaten speelt <audio> af (volgens de cursus)?", a: "MP3, WAV en OGG.\n\n<audio controls>\n  <source src=\"media/lied.mp3\" type=\"audio/mpeg\">\n  <source src=\"media/lied.ogg\" type=\"audio/ogg\">\n</audio>", o: "2.1 HTML5 audio" },
  { v: "Wat doet het attribuut controls bij <audio> of <video>?", a: "Het toont de standaard afspeelknoppen (play/pause, volume, tijdsbalk).\n\n<audio src=\"media/lied.mp3\" controls></audio>", o: "2.1 HTML5 audio" },
  { v: "Wat doet het attribuut autoplay, en wat is het probleem ermee?", a: "Het geluid start automatisch zodra de pagina laadt. Vrijwel alle browsers blokkeren dat vanwege de gebruikservaring (UX).\n\n<audio src=\"media/lied.mp3\" controls autoplay></audio>", o: "2.1 HTML5 audio" },
  { v: "Wat doet het attribuut loop?", a: "Het geluid (of de video) herhaalt oneindig.\n\n<audio src=\"media/lied.mp3\" controls loop></audio>", o: "2.1 HTML5 audio" },
  { v: "Wat doet het attribuut muted?", a: "Het geluid is standaard gedempt.\n\n<video src=\"media/intro.mp4\" controls muted></video>", o: "2.1 HTML5 audio" },
  { v: "Wat doet het attribuut preload, en welke waarden heeft het?", a: "Het bepaalt hoeveel van het bestand vooraf geladen wordt: auto, metadata of none.\n\n<audio src=\"media/lied.mp3\" controls preload=\"metadata\"></audio>", o: "2.1 HTML5 audio" },
  { v: "Waarom zet je tekst en een downloadlink tussen <audio> en </audio>?", a: "Als fallback: die tekst verschijnt alleen als de browser geen HTML5-audio ondersteunt.\n\n<audio src=\"media/lied.mp3\" controls>\n  Je browser ondersteunt geen HTML5-audio.\n  <a href=\"media/lied.mp3\">Download het bestand</a>\n</audio>", o: "2.1 HTML5 audio",
    uitleg: "<audio controls preload=\"metadata\" src=\"media/podcast-ep1.mp3\">Uw browser ondersteunt geen HTML5 audio. Download het bestand <a href=\"media/podcast-ep1.mp3\">hier</a>.</audio>" },
  { v: "Geef de 5 audio-attributen uit de cursus.", a: "controls, autoplay, loop, muted en preload.\n\n<audio src=\"media/lied.mp3\" controls autoplay loop muted preload=\"auto\"></audio>", o: "2.1 HTML5 audio" },

  // ===== 2.2 HTML5 video (2.2) =====
  { v: "Welke videoformaten ondersteunt <video> (volgens de cursus)?", a: "MP4 (H.264), WebM en OGG.\n\n<video controls>\n  <source src=\"media/intro.webm\" type=\"video/webm\">\n  <source src=\"media/intro.mp4\" type=\"video/mp4\">\n</video>", o: "2.2 HTML5 video" },
  { v: "Waarvoor dient het <source>-element in een <video>?", a: "Om meerdere videobronnen op te geven. De browser kiest de eerste die hij kan afspelen.\n\n<video controls>\n  <source src=\"media/intro.webm\" type=\"video/webm\">\n  <source src=\"media/intro.mp4\" type=\"video/mp4\">\n</video>", o: "2.2 HTML5 video" },
  { v: "Waarom zet je in het cursusvoorbeeld eerst de WebM-bron en dan de MP4-bron?", a: "WebM is de eerste keuze (kleiner bestand, sneller laden); MP4 is de fallback die gegarandeerd op werkelijk elk toestel werkt.\n\n<video controls>\n  <source src=\"media/intro.webm\" type=\"video/webm\">\n  <source src=\"media/intro.mp4\" type=\"video/mp4\">\n</video>", o: "2.2 HTML5 video" },
  { v: "Wat doet het attribuut poster bij <video>?", a: "Het geeft het pad naar een afbeelding die getoond wordt voordat de video wordt afgespeeld.\n\n<video src=\"media/intro.mp4\" controls poster=\"images/video-thumbnail.jpg\"></video>", o: "2.2 HTML5 video" },
  { v: "Wat doet het attribuut playsinline bij <video>?", a: "Op mobiele apparaten speelt de video binnen de pagina af, in plaats van automatisch full-screen te gaan.\n\n<video src=\"media/intro.mp4\" autoplay muted loop playsinline></video>", o: "2.2 HTML5 video" },
  { v: "Wat moet aanwezig zijn als je wil dat een video automatisch afspeelt (bv. een achtergrondvideo)?", a: "Het attribuut muted: <video autoplay muted loop playsinline>.", o: "2.2 HTML5 video" },
  { v: "Vul aan:\n<video width=\"640\" height=\"360\" … poster=\"…\">\n  <source src=\"media/intro.webm\" type=\"…\">\n  <source src=\"media/intro.mp4\" type=\"…\">\n</video>", a: "controls; poster=\"images/video-thumbnail.jpg\"\ntype=\"video/webm\"\ntype=\"video/mp4\"", o: "2.2 HTML5 video" },
  { v: "Waarmee voeg je ondertiteling of captions toe aan een video?", a: "Met het <track>-element, via .vtt-bestanden (WebVTT-formaat).", o: "2.2 HTML5 video",
    uitleg: "Dit is \"ter info\". Attributen van <track> zijn kind, srclang, label en default; details vind je op MDN Web Docs." },
  { v: "Waar staat .vtt voor bij ondertitels?", a: "WebVTT (Web Video Text Tracks), het formaat voor ondertitels die je via <track> toevoegt.", o: "2.2 HTML5 video" },

  // ===== 2.3 Externe content met iframe (2.3) =====
  { v: "Waarvoor gebruik je een <iframe>?", a: "Om een ander HTML-document of externe diensten (zoals YouTube, Google Maps of Spotify) in te bedden in je pagina.\n\n<iframe src=\"https://www.youtube.com/embed/FB4bL9Ti8Yk\" title=\"Lesvideo\"\n        loading=\"lazy\" allowfullscreen></iframe>", o: "2.3 Externe content met iframe" },
  { v: "Waar staat iframe voor?", a: "Inline frame.\n\n<iframe src=\"https://www.youtube.com/embed/FB4bL9Ti8Yk\" title=\"Lesvideo\"></iframe>", o: "2.3 Externe content met iframe" },
  { v: "Geef de 2 best practices voor <iframe>.", a: "1. Voeg altijd een title-attribuut toe voor screenreaders.\n2. Gebruik loading=\"lazy\" voor een betere paginasnelheid.\n\n<iframe src=\"https://www.youtube.com/embed/FB4bL9Ti8Yk\"\n        title=\"Lesvideo\" loading=\"lazy\"></iframe>", o: "2.3 Externe content met iframe" },
  { v: "Wat doet het attribuut allowfullscreen bij een YouTube-iframe?", a: "Het laat toe dat de ingesloten video volledig scherm gaat.\n\n<iframe src=\"https://www.youtube.com/embed/FB4bL9Ti8Yk\" title=\"Lesvideo\" allowfullscreen></iframe>", o: "2.3 Externe content met iframe" },
  { v: "Hoe zorg je dat een Google Maps-iframe zich aanpast aan de breedte van je website?", a: "Gebruik width=\"100%\" in plaats van een vaste breedte zoals 600.\n\n<iframe src=\"https://www.google.com/maps/embed?...\" title=\"Kaart\"\n        width=\"100%\" height=\"450\" loading=\"lazy\"></iframe>", o: "2.3 Externe content met iframe" },
  { v: "Welke url gebruik je voor een YouTube-iframe: de gewone watch-url of een andere?", a: "De embed-url, bv. https://www.youtube.com/embed/FB4bL9Ti8Yk\n\n<iframe src=\"https://www.youtube.com/embed/FB4bL9Ti8Yk\" title=\"Lesvideo\"></iframe>", o: "2.3 Externe content met iframe" },

  // ===== 3. Gouden regel voor tabellen (3) =====
  { v: "Wat is de gouden regel voor HTML-tabellen?", a: "Tabellen gebruik je uitsluitend voor gestructureerde, tabulaire data. Gebruik ze nooit om de layout van een pagina op te bouwen.\n\n<table>\n  <tr>\n    <th>Vak</th>\n    <th>Uren</th>\n  </tr>\n  <tr>\n    <td>Web Essentials</td>\n    <td>4</td>\n  </tr>\n</table>", o: "3. Gouden regel voor tabellen" },

  // ===== 3.1 Basiselementen van een tabel (3.1) =====
  { v: "Hoe wordt een tabel opgebouwd?", a: "Rij per rij: <table> bevat rijen <tr>, en in elke rij plaats je cellen (<th> of <td>).", o: "3.1 Basiselementen van een tabel" },
  { v: "Waar staan tr, th en td voor?", a: "tr = table row (rij)\nth = table header (kopcel)\ntd = table data (gewone gegevenscel)\n\n<table>\n  <tr>\n    <th>Naam</th>\n  </tr>\n  <tr>\n    <td>Anicée</td>\n  </tr>\n</table>", o: "3.1 Basiselementen van een tabel" },
  { v: "Wat is het verschil tussen <th> en <td>?", a: "<th> is een kopcel die de inhoud van een kolom of rij beschrijft; <td> bevat gewone gegevens.", o: "3.1 Basiselementen van een tabel" },
  { v: "Waarom gebruik je waar mogelijk <th> voor tabelkoppen?", a: "Zo begrijpen bezoekers én hulptechnologieën (screenreaders) beter hoe de gegevens bij elkaar horen.\n\n<tr>\n  <th>Vak</th>\n  <th>Uren</th>\n</tr>", o: "3.1 Basiselementen van een tabel" },
  { v: "Waarvoor dient <caption> in een tabel?", a: "Een duidelijke titel of uitleg bij de tabel, wanneer die extra context nodig heeft.\n\n<table>\n  <caption>Lessenrooster semester 1</caption>\n  ...\n</table>", o: "3.1 Basiselementen van een tabel" },
  { v: "Zet in de juiste volgorde van buiten naar binnen: <td> – <table> – <tr>", a: "<table> → <tr> → <td>", o: "3.1 Basiselementen van een tabel" },

  // ===== 3.2 Cellen samenvoegen (3.2) =====
  { v: "Met welk attribuut laat je een cel over meerdere kolommen lopen?", a: "colspan, bv. <td colspan=\"2\">.", o: "3.2 Cellen samenvoegen" },
  { v: "Met welk attribuut laat je een cel over meerdere rijen lopen?", a: "rowspan, bv. <td rowspan=\"2\">.", o: "3.2 Cellen samenvoegen" },
  { v: "Met welk attribuut is de cel \"Netwerken & Hardware (Dubbelblok)\" gemaakt?", a: "colspan=\"2\": de cel beslaat 2 kolommen.\n\n<td colspan=\"2\">Netwerken &amp; Hardware (Dubbelblok)</td>", o: "3.2 Cellen samenvoegen", img: "afbeeldingen/WEBles2_htmlmedia/we2_colspan.png",
    uitleg: "<td colspan=\"2\">Netwerken & Hardware (Dubbelblok)</td>" },
  { v: "Met welk attribuut is de cel \"Praktijkexamen Project\" gemaakt?", a: "rowspan=\"2\": de cel beslaat 2 opeenvolgende rijen.\n\n<td rowspan=\"2\">Praktijkexamen Project</td>", o: "3.2 Cellen samenvoegen", img: "afbeeldingen/WEBles2_htmlmedia/we2_rowspan.png",
    uitleg: "In de tweede rij schrijf je die cel dan niet meer: de tweede <tr> bevat alleen <th>11:00 - 13:00</th> en <td>Lokaal A.102</td>." },
  { v: "colspan voegt … samen, rowspan voegt … samen.", a: "Kolommen (horizontaal); rijen (verticaal).\n\n<td colspan=\"2\">2 kolommen breed</td>\n<td rowspan=\"2\">2 rijen hoog</td>", o: "3.2 Cellen samenvoegen" },

  // ===== 3.3 thead, tbody, tfoot (3.3) =====
  { v: "Geef de 3 semantische tabelsecties.", a: "<thead>, <tbody> en <tfoot>.", o: "3.3 thead, tbody, tfoot" },
  { v: "Wat hoort in <thead>?", a: "De kolomkoppen.\n\n<thead>\n  <tr>\n    <th>Product</th>\n    <th>Prijs</th>\n  </tr>\n</thead>", o: "3.3 thead, tbody, tfoot" },
  { v: "Wat hoort in <tbody>?", a: "De gegevensrijen.\n\n<tbody>\n  <tr>\n    <td>Laptop</td>\n    <td>899</td>\n  </tr>\n</tbody>", o: "3.3 thead, tbody, tfoot" },
  { v: "Wat hoort in <tfoot>?", a: "Een totaal- of samenvattingsrij.\n\n<tfoot>\n  <tr>\n    <td>Totaal</td>\n    <td>899</td>\n  </tr>\n</tfoot>", o: "3.3 thead, tbody, tfoot",
    uitleg: "Voorbeeld uit de cursus: een kwartaaloverzicht met kolomkoppen Kwartaal, Inkomsten en Uitgaven in thead, Q1 en Q2 in tbody en het totaal in tfoot." },

  // ===== 3.4 Tabel-toegankelijkheid (scope) (3.4) =====
  { v: "Waarvoor dient het scope-attribuut op <th>?", a: "Om aan te geven of de kop geldt voor de hele kolom (scope=\"col\") of de hele rij (scope=\"row\"). Zo lezen screenreaders de juiste context voor.\n\n<th scope=\"col\">Inkomsten</th>\n<th scope=\"row\">Q1</th>", o: "3.4 Tabel-toegankelijkheid (scope)" },

  // ===== 3.5 colgroup en col (3.5) =====
  { v: "Waarvoor gebruik je <colgroup> en <col>?", a: "Om een specifieke kolom te stylen (bv. een grijze achtergrond voor de eerste kolom), zonder op elke <td> een class te zetten.", o: "3.5 colgroup en col" },
  { v: "Waar plaats je <colgroup> in een tabel?", a: "Bovenaan in de <table>, direct na de <caption> en vóór de <thead>.", o: "3.5 colgroup en col" },
  { v: "Wat betekent <col span=\"2\">?", a: "Deze col-regel geldt voor 2 kolommen tegelijk.\n\n<colgroup>\n  <col span=\"2\">\n  <col>\n</colgroup>", o: "3.5 colgroup en col" },

  // ===== 4.1 Werking van een formulier (4.1) =====
  { v: "Waarvoor dienen formulieren?", a: "Om gegevens van gebruikers te verzamelen (inloggen, registreren, contact).\n\n<form action=\"verwerk.php\" method=\"post\">\n  <label for=\"naam\">Naam</label>\n  <input type=\"text\" id=\"naam\" name=\"naam\">\n  <button type=\"submit\">Verzenden</button>\n</form>", o: "4.1 Werking van een formulier" },
  { v: "Geef de 3 stappen van de werking van een formulier.", a: "1. De gebruiker vult de velden in en klikt op verzenden (submit).\n2. De browser verzamelt de gegevens in naam=waarde-paren (bv. gebruikersnaam=Jan).\n3. De browser stuurt dit naar de server die in het action-attribuut staat.\n\n<form action=\"verwerk.php\" method=\"post\">\n  <input type=\"text\" name=\"gebruikersnaam\">\n  <button type=\"submit\">Verzenden</button>\n</form>\n<!-- verstuurd als: gebruikersnaam=Jan -->", o: "4.1 Werking van een formulier" },
  { v: "In welke vorm verzamelt de browser de formuliergegevens?", a: "In naam=waarde-paren (name=value), bv. gebruikersnaam=Jan.\n\n<input type=\"text\" name=\"gebruikersnaam\">\n<!-- verstuurd als: gebruikersnaam=Jan -->", o: "4.1 Werking van een formulier" },

  // ===== 4.2 Het form-element (4.2) =====
  { v: "Wat doet het action-attribuut van <form>?", a: "Het geeft de URL of het server-script dat de gegevens moet verwerken.\n\n<form action=\"verwerk.php\" method=\"post\">", o: "4.2 Het form-element" },
  { v: "Wat doet het method-attribuut van <form>?", a: "Het bepaalt met welke HTTP-methode de gegevens verstuurd worden: GET of POST.\n\n<form action=\"verwerk.php\" method=\"post\">", o: "4.2 Het form-element" },
  { v: "Hoe verstuurt GET de formuliergegevens, en wanneer gebruik je het?", a: "De gegevens worden achter de URL geplakt (bv. search.php?query=html). Voor zoekopdrachten. Niet veilig voor wachtwoorden of privacygevoelige data!\n\n<form action=\"search.php\" method=\"get\">\n  <input type=\"search\" name=\"query\">\n</form>\n<!-- url: search.php?query=html -->", o: "4.2 Het form-element" },
  { v: "Hoe verstuurt POST de formuliergegevens, en wanneer gebruik je het?", a: "Onzichtbaar in de body van het HTTP-request. Voor formulieren met wachtwoorden, bestanden of veel data.\n\n<form action=\"login.php\" method=\"post\">\n  <input type=\"password\" name=\"wachtwoord\">\n</form>", o: "4.2 Het form-element",
    uitleg: "Let op: alleen POST gebruiken maakt het nog niet helemaal veilig." },
  { v: "Welke methode gebruik je voor een zoekformulier, en welke voor een loginformulier?", a: "Zoekformulier: GET. Loginformulier (wachtwoord): POST.\n\n<form action=\"search.php\" method=\"get\">   <!-- zoeken -->\n<form action=\"login.php\" method=\"post\">   <!-- inloggen -->", o: "4.2 Het form-element" },
  { v: "Wanneer is enctype=\"multipart/form-data\" verplicht?", a: "Wanneer het formulier een bestandsupload (<input type=\"file\">) bevat.", o: "4.2 Het form-element" },

  // ===== 4.3 Labels & toegankelijkheid (4.3) =====
  { v: "Waarom moet elk invoerveld een <label> hebben?", a: "Dan is de tekst aanklikbaar en weten screenreaders welk veld beschreven wordt.\n\n<label for=\"email\">E-mail</label>\n<input type=\"email\" id=\"email\" name=\"email\">", o: "4.3 Labels & toegankelijkheid" },
  { v: "Geef de 2 manieren om een label aan een veld te koppelen.", a: "1. Expliciet: via for op het label en hetzelfde id op het veld (aanbevolen).\n2. Impliciet: het veld binnen het <label> nesten.", o: "4.3 Labels & toegankelijkheid" },
  { v: "Hoe koppel je expliciet een label aan een e-mailveld?", a: "<label for=\"emailadres\">E-mailadres:</label>\n<input type=\"email\" id=\"emailadres\" name=\"user_email\">", o: "4.3 Labels & toegankelijkheid",
    uitleg: "De waarde van for moet exact gelijk zijn aan het id van het veld." },
  { v: "Welke labelmethode is aanbevolen, en waarom?", a: "De expliciete koppeling via for en id: die geeft de meeste vrijheid wanneer je het formulier met CSS gaat stijlen.\n\n<label for=\"naam\">Naam</label>\n<input type=\"text\" id=\"naam\" name=\"naam\">", o: "4.3 Labels & toegankelijkheid" },

  // ===== 4.4 fieldset en legend (4.4) =====
  { v: "Waarvoor dient <fieldset>?", a: "Om gerelateerde formuliervelden visueel en semantisch te groeperen.\n\n<fieldset>\n  <legend>Contactgegevens</legend>\n  <label for=\"naam\">Naam</label>\n  <input type=\"text\" id=\"naam\" name=\"naam\">\n</fieldset>", o: "4.4 fieldset en legend" },
  { v: "Waarvoor dient <legend>?", a: "Het geeft een titel aan de groep in een <fieldset>.", o: "4.4 fieldset en legend" },

  // ===== 4.5 Tekstinvoer & wachtwoorden (4.5) =====
  { v: "Hoe maak je een standaard tekstveld?", a: "<input type=\"text\" id=\"username\" name=\"username\">", o: "4.5 Tekstinvoer & wachtwoorden" },
  { v: "Wat doen size en maxlength bij <input type=\"text\" size=\"20\" maxlength=\"30\">?", a: "size = de zichtbare breedte van het veld (20 tekens).\nmaxlength = het maximum aantal tekens dat je mag typen (30).\n\n<input type=\"text\" name=\"naam\" size=\"20\" maxlength=\"30\">", o: "4.5 Tekstinvoer & wachtwoorden" },
  { v: "Wat doet <input type=\"password\">?", a: "Het maskeert de ingevoerde tekens met bolletjes of sterretjes.\n\n<input type=\"password\" id=\"wachtwoord\" name=\"wachtwoord\">", o: "4.5 Tekstinvoer & wachtwoorden" },
  { v: "Wat gebruik je voor tekst over meerdere regels (berichten, reviews)?", a: "<textarea>.", o: "4.5 Tekstinvoer & wachtwoorden" },
  { v: "Is <textarea> een leeg element?", a: "Nee, het is een container-element met een sluitingstag: <textarea></textarea>.", o: "4.5 Tekstinvoer & wachtwoorden" },
  { v: "Wat bepalen rows en cols bij <textarea>?", a: "rows = het aantal zichtbare regels, cols = de breedte in tekens.\n\n<textarea id=\"bericht\" name=\"bericht\" rows=\"5\" cols=\"40\"></textarea>", o: "4.5 Tekstinvoer & wachtwoorden" },

  // ===== 4.6 Radio buttons & checkboxes (4.6) =====
  { v: "Wanneer gebruik je radio buttons?", a: "Als de gebruiker slechts één optie uit een groep mag kiezen.\n\n<input type=\"radio\" id=\"dag\" name=\"traject\" value=\"dagstudent\">\n<label for=\"dag\">Dagstudent</label>\n<input type=\"radio\" id=\"avond\" name=\"traject\" value=\"avondstudent\">\n<label for=\"avond\">Avondstudent</label>", o: "4.6 Radio buttons & checkboxes" },
  { v: "Welke regel geldt voor radio buttons in dezelfde groep?", a: "Ze moeten allemaal dezelfde name hebben.\n\n<input type=\"radio\" name=\"traject\" value=\"dagstudent\">\n<input type=\"radio\" name=\"traject\" value=\"avondstudent\">", o: "4.6 Radio buttons & checkboxes" },
  { v: "Wanneer gebruik je checkboxes?", a: "Als de gebruiker nul, één of meerdere opties mag selecteren.\n\n<input type=\"checkbox\" id=\"html\" name=\"talen\" value=\"html\">\n<label for=\"html\">HTML</label>\n<input type=\"checkbox\" id=\"css\" name=\"talen\" value=\"css\">\n<label for=\"css\">CSS</label>", o: "4.6 Radio buttons & checkboxes" },
  { v: "Hoe zet je een radio button of checkbox standaard aangevinkt?", a: "Met het attribuut checked.\n\n<input type=\"radio\" name=\"traject\" value=\"dagstudent\" checked>\n<input type=\"checkbox\" name=\"nieuwsbrief\" checked>", o: "4.6 Radio buttons & checkboxes" },
  { v: "Wat stuurt het attribuut value van een radio button naar de server?", a: "De waarde van de gekozen optie, bv. name=\"traject\" value=\"dagstudent\" → traject=dagstudent.\n\n<input type=\"radio\" name=\"traject\" value=\"dagstudent\">\n<!-- verstuurd als: traject=dagstudent -->", o: "4.6 Radio buttons & checkboxes" },
  { v: "Welk type input zie je hier, en hoe herken je dat meerdere keuzes mogelijk zijn?", a: "Checkboxes (type=\"checkbox\") in een <fieldset> met <legend> \"Interesses (Meerdere keuzes mogelijk)\". Webdevelopment is standaard aangevinkt met checked.", o: "4.6 Radio buttons & checkboxes", img: "afbeeldingen/WEBles2_htmlmedia/we2_checkboxes.png" },
  { v: "Wat is het verschil tussen radio buttons en checkboxes?", a: "Radio buttons: precies één keuze uit een groep (zelfde name).\nCheckboxes: nul, één of meerdere keuzes.\n\n<input type=\"radio\" name=\"traject\" value=\"dag\">   <!-- één keuze -->\n<input type=\"checkbox\" name=\"talen\" value=\"html\"> <!-- meerdere -->", o: "4.6 Radio buttons & checkboxes" },

  // ===== 4.7 select, option en optgroup (4.7) =====
  { v: "Hoe maak je een drop-downmenu (klapmenu)?", a: "Met <select> en daarin <option>-elementen.", o: "4.7 select, option en optgroup" },
  { v: "Welke HTML-elementen maken deze keuzelijst?", a: "Een <select> met 3 <option>-elementen (Campus Kaai, Campus Bloemenhof, Online / Afstand), gekoppeld aan het <label> \"Kies je campus\".", o: "4.7 select, option en optgroup", img: "afbeeldingen/WEBles2_htmlmedia/we2_select.png" },
  { v: "Welke waarde wordt verstuurd bij een <option> zonder value-attribuut?", a: "De tekst tussen de tags, bv. \"Campus Kaai (Anderlecht)\".\n\n<option>Campus Kaai (Anderlecht)</option>\n<!-- verstuurd: Campus Kaai (Anderlecht) -->", o: "4.7 select, option en optgroup" },
  { v: "Waarom gebruik je meestal toch een value-attribuut bij <option>?", a: "Zo stuur je een korte, vaste en betekenisvolle waarde naar de server, terwijl je een duidelijke tekst toont. Handig bij meerdere talen: overal value=\"blauw\", maar \"Blauw\" voor Nederlandstaligen en \"Bleu\" voor Franstaligen.\n\n<option value=\"kaai\">Campus Kaai (Anderlecht)</option>\n<!-- verstuurd: kaai -->", o: "4.7 select, option en optgroup" },
  { v: "Waarvoor dient <optgroup>?", a: "Om opties in een langere lijst (optioneel) te groeperen, met een label, bv. <optgroup label=\"Brussel\">.", o: "4.7 select, option en optgroup" },
  { v: "Hoe maak je een <option> standaard geselecteerd?", a: "Met het attribuut selected.\n\n<select name=\"campus\">\n  <option value=\"kaai\" selected>Campus Kaai</option>\n  <option value=\"bloemenhof\">Campus Bloemenhof</option>\n</select>", o: "4.7 select, option en optgroup" },

  // ===== 4.8 datalist (4.8) =====
  { v: "Wat doet <datalist>?", a: "Het geeft een lijst met aanbevolen auto-complete-opties terwijl je in een gewoon <input> typt.", o: "4.8 datalist" },
  { v: "Hoe koppel je een <input> aan een <datalist>?", a: "Met het list-attribuut op de input, gelijk aan het id van de datalist:\n<input type=\"text\" list=\"browser-lijst\">\n<datalist id=\"browser-lijst\">…</datalist>", o: "4.8 datalist" },

  // ===== 4.9 HTML5 input types (4.9) =====
  { v: "Wat is het voordeel van de HTML5-input-types op smartphones?", a: "Het virtuele toetsenbord past zich automatisch aan (bv. een numeriek toetsenbord voor number, een @-toets voor email).\n\n<input type=\"email\" name=\"email\">   <!-- toetsenbord met @ -->\n<input type=\"number\" name=\"leeftijd\"> <!-- numeriek toetsenbord -->", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"email\"?", a: "Een veld voor een e-mailadres; het controleert de syntaxis (@ en domein).\n\n<input type=\"email\" id=\"email\" name=\"email\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"url\"?", a: "Een veld voor een webadres; het vereist http:// of https://.\n\n<input type=\"url\" id=\"website\" name=\"website\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"tel\"?", a: "Een veld voor een telefoonnummer; het opent een numeriek toetsenbord op mobiel.\n\n<input type=\"tel\" id=\"telefoon\" name=\"telefoon\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"number\", en met welke attributen stel je grenzen in?", a: "Een veld voor een getal; met min, max en step (bv. min=\"16\" max=\"99\" step=\"1\").\n\n<input type=\"number\" name=\"leeftijd\" min=\"16\" max=\"99\" step=\"1\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"range\"?", a: "Een schuifbalk, bv. min=\"0\" max=\"100\" value=\"50\".\n\n<input type=\"range\" name=\"volume\" min=\"0\" max=\"100\" value=\"50\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"date\"?", a: "Een datumkiezer.\n\n<input type=\"date\" name=\"geboortedatum\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"color\"?", a: "Een kleurkiezer (color picker), bv. value=\"#0056b3\".\n\n<input type=\"color\" name=\"kleur\" value=\"#0056b3\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"search\"?", a: "Een zoekveld, met een kruisje om snel te wissen.\n\n<input type=\"search\" name=\"zoek\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"file\", en wat doet accept?", a: "Een veld om een bestand te uploaden. accept beperkt de toegelaten bestanden, bv. accept=\".pdf,.docx\".\n\n<input type=\"file\" name=\"cv\" accept=\".pdf,.docx\">", o: "4.9 HTML5 input types" },
  { v: "Wat doet type=\"hidden\"?", a: "Een onzichtbaar veld, bv. voor tracking of verborgen ID's (name=\"course_id\" value=\"WE-2026\").\n\n<input type=\"hidden\" name=\"course_id\" value=\"WE-2026\">", o: "4.9 HTML5 input types" },
  { v: "Geef 10 HTML5-input-types uit de cursus.", a: "email, url, tel, number, range, date, color, search, file en hidden.", o: "4.9 HTML5 input types" },
  { v: "Welk input-type gebruik je voor: 1. leeftijd, 2. volume, 3. geboortedatum, 4. favoriete kleur, 5. een cv uploaden?", a: "1. number\n2. range\n3. date\n4. color\n5. file\n\n<input type=\"number\" name=\"leeftijd\">\n<input type=\"range\" name=\"volume\">\n<input type=\"date\" name=\"geboortedatum\">\n<input type=\"color\" name=\"kleur\">\n<input type=\"file\" name=\"cv\">", o: "4.9 HTML5 input types" },

  // ===== 4.10 button vs input (4.10) =====
  { v: "Wat is het voordeel van <button> boven <input type=\"submit\">?", a: "Een <button> kan tekst én afbeeldingen of HTML-elementen (bv. een SVG) bevatten. Een <input> kan geen inhoud bevatten.", o: "4.10 button vs input" },
  { v: "Geef de 3 types van <button>.", a: "type=\"submit\": verstuurt het formulier\ntype=\"reset\": zet alle velden terug naar hun beginwaarden\ntype=\"button\": een gewone knop, voor JavaScript-interactie\n\n<button type=\"submit\">Verzenden</button>\n<button type=\"reset\">Wissen</button>\n<button type=\"button\">Klik</button>", o: "4.10 button vs input" },
  { v: "Hoe bepaal je de tekst op een knop met <input type=\"submit\">?", a: "Met het value-attribuut, bv. <input type=\"submit\" value=\"Verstuur\">.", o: "4.10 button vs input" },
  { v: "Welk knopelement is aanbevolen: <button> of <input>?", a: "<button>, omdat je dan meer controle hebt over de inhoud en vormgeving.", o: "4.10 button vs input" },

  // ===== 5.1 Validatie-attributen (5.1) =====
  { v: "Wat doet het attribuut required?", a: "Het veld mag niet leeg blijven.\n\n<input type=\"text\" name=\"naam\" required>", o: "5.1 Validatie-attributen" },
  { v: "Wat doen minlength en maxlength?", a: "Ze bepalen het minimum en maximum aantal tekens.\n\n<input type=\"password\" name=\"wachtwoord\" minlength=\"8\" maxlength=\"20\">", o: "5.1 Validatie-attributen" },
  { v: "Waarvoor dienen min, max en step?", a: "Numerieke en datumgrenzen (en de stapgrootte).\n\n<input type=\"number\" name=\"aantal\" min=\"1\" max=\"10\" step=\"1\">", o: "5.1 Validatie-attributen" },
  { v: "Wat doet het attribuut pattern?", a: "Validatie via een reguliere expressie (regex), bv. pattern=\"[0-9]{4}\" voor een Belgische postcode.", o: "5.1 Validatie-attributen" },
  { v: "Wat betekent pattern=\"[0-9]{4}\"?", a: "Precies 4 cijfers (bv. een Belgische postcode).\n\n<input type=\"text\" name=\"postcode\" pattern=\"[0-9]{4}\">", o: "5.1 Validatie-attributen" },
  { v: "Waarom zet je een title-attribuut bij een veld met pattern?", a: "Om de gebruiker uit te leggen wat er verwacht wordt, bv. title=\"Voer exact 4 cijfers in\".\n\n<input type=\"text\" name=\"postcode\" pattern=\"[0-9]{4}\" title=\"Voer exact 4 cijfers in\">", o: "5.1 Validatie-attributen" },
  { v: "Geef de 4 (groepen) validatie-attributen uit de cursus.", a: "required; minlength & maxlength; min, max & step; pattern.\n\n<input type=\"text\" name=\"postcode\" required minlength=\"4\" maxlength=\"4\" pattern=\"[0-9]{4}\">\n<input type=\"number\" name=\"aantal\" min=\"1\" max=\"10\" step=\"1\">", o: "5.1 Validatie-attributen" },

  // ===== 5.2 Gebruikersgemak-attributen (5.2) =====
  { v: "Wat doet placeholder, en waarvoor mag je het niet gebruiken?", a: "Een tijdelijke hinttekst die verdwijnt zodra je begint te typen. Het is geen vervanger van een label.\n\n<label for=\"zoek\">Zoeken</label>\n<input type=\"search\" id=\"zoek\" name=\"zoek\" placeholder=\"bv. HTML\">", o: "5.2 Gebruikersgemak-attributen" },
  { v: "Wat doet autofocus?", a: "Het plaatst de cursor meteen in het veld bij het laden van de pagina.\n\n<input type=\"text\" name=\"naam\" autofocus>", o: "5.2 Gebruikersgemak-attributen" },
  { v: "Wat is het verschil tussen disabled en readonly?", a: "disabled: het veld is uitgeschakeld en wordt niet meegestuurd.\nreadonly: het veld kan niet bewerkt worden, maar wordt wel meegestuurd.\n\n<input type=\"text\" name=\"code\" value=\"WE1\" disabled>   <!-- niet verstuurd -->\n<input type=\"text\" name=\"code\" value=\"WE1\" readonly>   <!-- wel verstuurd -->", o: "5.2 Gebruikersgemak-attributen" },
  { v: "Een veld dat je niet kan bewerken maar dat wél meegestuurd wordt, krijgt het attribuut …", a: "readonly\n\n<input type=\"text\" name=\"studentnr\" value=\"12345\" readonly>", o: "5.2 Gebruikersgemak-attributen" },

  // ===== 6.2 Veelgemaakte fouten (6.2) =====
  { v: "Geef de 5 veelgemaakte fouten uit les 2.", a: "1. Radio buttons met verschillende name-attributen.\n2. action of method vergeten bij <form>.\n3. Labels vergeten.\n4. Labels niet gekoppeld via for en id.\n5. Geen alt-attribuut op <img>.", o: "6.2 Veelgemaakte fouten" },
  { v: "Wat gebeurt er als radio buttons van dezelfde vraag een verschillende name hebben?", a: "De gebruiker kan dan meerdere radio buttons tegelijk selecteren.\n\n<!-- fout -->\n<input type=\"radio\" name=\"ja\" value=\"ja\">\n<input type=\"radio\" name=\"nee\" value=\"nee\">\n<!-- juist -->\n<input type=\"radio\" name=\"antwoord\" value=\"ja\">\n<input type=\"radio\" name=\"antwoord\" value=\"nee\">", o: "6.2 Veelgemaakte fouten" },
  { v: "Wat gebeurt er als je action of method vergeet bij <form>?", a: "Het formulier weet niet waar de data naartoe moet.\n\n<form action=\"verwerk.php\" method=\"post\">", o: "6.2 Veelgemaakte fouten",
    uitleg: "Denk er ook aan dat alle velden die je wil versturen binnen de form-tag moeten staan." },
  { v: "Wat is het probleem als labels niet gekoppeld zijn via for en id?", a: "Screenreaders kunnen het veld niet identificeren en het label is niet aanklikbaar.\n\n<label for=\"naam\">Naam</label>\n<input type=\"text\" id=\"naam\" name=\"naam\">", o: "6.2 Veelgemaakte fouten" },
  { v: "Waarom is een ontbrekend alt-attribuut op <img> een probleem?", a: "Het is slecht voor toegankelijkheid en SEO.\n\n<img src=\"laptop.jpg\" alt=\"Laptop op een bureau\">", o: "6.2 Veelgemaakte fouten" },

  // ===== Oefening: afbeeldingen (Oef. 1) =====
  { v: "Wat is er fout aan deze afbeeldingen?\n<p>\n  <img src=\"laptop.jpg\">\n  <img src=\"ster-icoon.png\" title=\"\"><!-- decoratief -->\n</p>", a: "1. laptop.jpg heeft geen alt-attribuut: ongeldig volgens HTML5 (alt is verplicht).\n2. Beide missen width en height, waardoor de pagina verspringt (Cumulative Layout Shift).\n3. Het decoratieve sterretje moet alt=\"\" krijgen (niet title=\"\"), zodat screenreaders het overslaan.", o: "Oefening: afbeeldingen", oefening: true,
    uitleg: "alt = de tekst die een screenreader voorleest (of die verschijnt als de foto niet laadt). width en height = de browser houdt meteen plaats vrij, zodat de tekst niet verspringt. alt=\"\" (leeg) = 'deze afbeelding is versiering, sla ze over'; title is een tooltip en geen vervanging voor alt." },

  // ===== Oefening: video & iframe (Oef. 2) =====
  { v: "Schrijf een video van 640×360 met afspeelknoppen, poster images/poster.jpg en de bronnen media/edc.webm en media/edc.mp4.", a: "<video width=\"640\" height=\"360\" controls poster=\"images/poster.jpg\">\n  <source src=\"media/edc.webm\" type=\"video/webm\">\n  <source src=\"media/edc.mp4\" type=\"video/mp4\">\n  <p>Je browser ondersteunt geen HTML5 video.</p>\n</video>", o: "Oefening: video & iframe", oefening: true,
    uitleg: "<video> = het videovak. width/height = de grootte. controls = de afspeelknoppen tonen. poster = het beeld vóór je op play drukt. <source> = een videobestand; de browser neemt het eerste dat hij kan afspelen (eerst webm, anders mp4). De <p> verschijnt alleen als de browser geen video kan tonen." },
  { v: "Je zet een YouTube-video op je pagina met een <iframe>. Welke 3 attributen moet het iframe volgens de oefening zeker hebben?", a: "title=\"Lesvideo Toegepaste Informatica\", allowfullscreen en loading=\"lazy\".\n\n<iframe src=\"https://www.youtube.com/embed/...\" title=\"Lesvideo Toegepaste Informatica\"\n        allowfullscreen loading=\"lazy\"></iframe>", o: "Oefening: video & iframe", oefening: true,
    uitleg: "<iframe> = een andere webpagina in je pagina. src = het adres van de YouTube-video (embed). title = beschrijving voor screenreaders. allowfullscreen = volledig scherm mag. loading=\"lazy\" = pas laden als je ernaartoe scrolt. Om de YouTube-video te laten werken moet je de pagina via Live Server bekijken." },

  // ===== Oefening: tabellen (Oef. 3 & 5) =====
  { v: "In het maaltijdticket (Product / QTY / Price) staat onderaan \"Total | | 14.60\". Hoe schrijf je die rij?", a: "In een <tfoot>: <tr><td colspan=\"2\">Total</td><td>14.60</td></tr>", o: "Oefening: tabellen", oefening: true,
    uitleg: "<tfoot> = het voetstuk van de tabel (totalen). <tr> = een rij. <td> = een cel. colspan=\"2\" = deze cel is 2 kolommen breed, zodat 'Total' over Product en QTY loopt. De kolomkoppen komen in <thead>, de producten in <tbody>." },
  { v: "Mag je border=\"1\" op een <table> gebruiken?", a: "Alleen tijdens het oefenen, om de cellen te zien. Nooit in echte projecten of op een examen: visuele opmaak hoort in CSS.", o: "Oefening: tabellen", oefening: true,
    uitleg: "border=\"1\" is een oud HTML-attribuut dat lijnen rond de cellen tekent. HTML zegt wát iets is, CSS zegt hoe het eruitziet: lijnen maak je dus met CSS (border)." },
  { v: "In het lesrooster duurt Programming Essentials op dinsdag 2 tijdsblokken. Hoe schrijf je dat, en wat verandert er in de volgende rij?", a: "<td rowspan=\"2\">Programming Essentials</td> in de eerste rij. In de volgende rij laat je de dinsdagcel weg (die rij heeft dan een cel minder).", o: "Oefening: tabellen", oefening: true,
    uitleg: "rowspan=\"2\" = deze cel is 2 rijen hoog. Omdat ze ook de plaats in de volgende rij inneemt, laat je die cel daar weg; anders heeft die rij een cel te veel en schuift alles op." },
  { v: "In het lesrooster is er om 11:30 een hoorcollege op alle 3 de dagen, en onderaan een opmerking over de hele breedte. Hoe schrijf je die cellen?", a: "Hoorcollege: <td colspan=\"3\">Hoorcollege Alle Vakken</td> (na de <th scope=\"row\">11:30 - 12:30</th>).\nOpmerking in de <tfoot>: <td colspan=\"4\">Opmerking: …</td>", o: "Oefening: tabellen", oefening: true,
    uitleg: "colspan=\"3\" = de cel is 3 kolommen breed (maandag tot woensdag). <th scope=\"row\"> = kopcel voor deze rij (het uur). In de <tfoot> is colspan=\"4\" de volle breedte: de uurkolom + de 3 dagen." },

  // ===== Oefening: formulier debuggen (Oef. 4) =====
  { v: "Zoek de fouten (minstens 5):\n<form method=\"get\" action=\"/register\">\n<fieldset>\n  <label>Voornaam:</label>\n  <input type=\"text\" name=\"voornaam\">\n  <label for=\"email_veld\">E-mailadres:</label>\n  <input type=\"text\" id=\"emailadres\" name=\"email\">\n  <label for=\"leeftijd\">Leeftijd:</label>\n  <input type=\"number\" id=\"leeftijd\">\n  <input type=\"radio\" id=\"s1\" value=\"web\">\n  <input type=\"radio\" id=\"s2\" value=\"mobile\">\n  <input type=\"textarea\" id=\"opm\" name=\"opmerking\">\n  <input type=\"button\" value=\"Versturen\">\n</fieldset>\n</form>", a: "1. Geen <legend> in de fieldset.\n2. Voornaam: label zonder for, input zonder id.\n3. E-mail: for=\"email_veld\" komt niet overeen met id=\"emailadres\".\n4. Leeftijd mist een name.\n5. De radio buttons missen een gemeenschappelijke name (bv. name=\"sessie\").\n6. <input type=\"textarea\"> bestaat niet: gebruik <textarea>.\n7. <input type=\"button\"> verstuurt niets: gebruik <button type=\"submit\">.\n8. Gebruik POST voor persoonsgegevens, en voeg validatie toe (required, type=\"email\").", o: "Oefening: formulier debuggen", oefening: true,
    uitleg: "Waarom fout: <legend> = de titel van een <fieldset>. for bij een label en id bij een input moeten hetzelfde zijn, anders zijn ze niet gekoppeld. name = de naam waaronder de waarde verstuurd wordt; velden zonder name worden niet meegestuurd. Radio buttons met dezelfde name horen bij elkaar (je kan er maar één kiezen). textarea is een eigen element, geen type. Een knop met type=\"submit\" verstuurt het formulier. POST stuurt de gegevens niet zichtbaar in de adresbalk mee." },
  { v: "Waarom wordt een veld zonder name-attribuut niet goed verstuurd?", a: "De browser stuurt naam=waarde-paren; zonder name heeft de waarde geen naam en wordt het veld niet meegestuurd.\n\n<input type=\"text\" id=\"naam\">               <!-- fout: niet verstuurd -->\n<input type=\"text\" id=\"naam\" name=\"naam\">   <!-- juist -->", o: "Oefening: formulier debuggen", oefening: true,
    uitleg: "id = de naam binnen de pagina (voor het label en CSS). name = de naam die naar de server gaat. Je hebt ze vaak allebei nodig." },

  // ===== Oefening: HTML5-formulier (Oef. 6) =====
  { v: "Schrijf het naamveld: tekst, verplicht, met autofocus, placeholder \"bijv. Jan Janssens\", gekoppeld aan zijn label.", a: "<label for=\"naam\">Volledige Naam *:</label>\n<input type=\"text\" id=\"naam\" name=\"full_name\" required autofocus placeholder=\"bijv. Jan Janssens\">", o: "Oefening: HTML5-formulier", oefening: true,
    uitleg: "<label for=\"naam\"> = het label, gekoppeld aan het veld met id=\"naam\". type=\"text\" = een tekstveld. name = de naam waaronder het verstuurd wordt. required = verplicht invullen. autofocus = de cursor staat er meteen in. placeholder = grijze voorbeeldtekst in het lege veld." },
  { v: "Schrijf de twee radio buttons \"Ik kom 's morgens\" (standaard gekozen, value am) en \"Ik kom 's namiddags\" (value pm).", a: "<input type=\"radio\" id=\"voormiddag\" name=\"tijdstip\" value=\"am\" checked>\n<label for=\"voormiddag\">Ik kom 's morgens</label>\n<input type=\"radio\" id=\"namiddag\" name=\"tijdstip\" value=\"pm\">\n<label for=\"namiddag\">Ik kom 's namiddags</label>", o: "Oefening: HTML5-formulier", oefening: true,
    uitleg: "type=\"radio\" = een rondje om te kiezen. Dezelfde name=\"tijdstip\" = ze horen bij elkaar, dus je kan er maar één kiezen. value = wat verstuurd wordt (am of pm). checked = standaard gekozen. Elk label is met for gekoppeld aan de id van zijn rondje." },
  { v: "Schrijf een numeriek veld \"Aantal Personen\" met minimum 1, maximum 5 en standaardwaarde 1.", a: "<input type=\"number\" id=\"aantal\" name=\"party_size\" min=\"1\" max=\"5\" value=\"1\">", o: "Oefening: HTML5-formulier", oefening: true,
    uitleg: "type=\"number\" = een veld voor getallen, met pijltjes. min en max = het kleinste en grootste toegelaten getal. value=\"1\" = de standaardwaarde. name = de naam waaronder het verstuurd wordt." },
  { v: "Je stuurt een formulier naar de testpagina van w3schools (action=\"https://www.w3schools.com/action_page.php\"). Waarom gebruik je daar method=\"get\"?", a: "Omdat die testpagina (action_page.php) de gegevens via GET nodig heeft om ze te tonen.\n\n<form action=\"https://www.w3schools.com/action_page.php\" method=\"get\">", o: "Oefening: HTML5-formulier", oefening: true,
    uitleg: "action = waar het formulier naartoe gestuurd wordt. method=\"get\" = de gegevens gaan mee in het webadres (zichtbaar na het ?), zo kan de testpagina ze lezen en tonen." },

];

kaarten_WEB_les2.structuur = [
  { kop: "Module 1: Afbeeldingen in HTML", slide: "M1" },
  { o: "1.1 Basissyntaxis & attributen van img", slide: "1.1", sub: true },
  { o: "1.2 Het attribuut alt, accessibility & SEO", slide: "1.2", sub: true },
  { o: "1.3 Afbeeldingsformaten op het web", slide: "1.3", sub: true },
  { o: "1.4 figure en figcaption", slide: "1.4", sub: true },
  { o: "1.5 Afbeeldingen vinden & copyright", slide: "1.5", sub: true },
  { o: "1.7 SVG insluiten", slide: "1.7", sub: true },
  { kop: "Module 2: Audio, video & embeds", slide: "M2" },
  { o: "2.1 HTML5 audio", slide: "2.1", sub: true },
  { o: "2.2 HTML5 video", slide: "2.2", sub: true },
  { o: "2.3 Externe content met iframe", slide: "2.3", sub: true },
  { kop: "Module 3: HTML-tabellen", slide: "M3" },
  { o: "3. Gouden regel voor tabellen", slide: "3", sub: true },
  { o: "3.1 Basiselementen van een tabel", slide: "3.1", sub: true },
  { o: "3.2 Cellen samenvoegen", slide: "3.2", sub: true },
  { o: "3.3 thead, tbody, tfoot", slide: "3.3", sub: true },
  { o: "3.4 Tabel-toegankelijkheid (scope)", slide: "3.4", sub: true },
  { o: "3.5 colgroup en col", slide: "3.5", sub: true },
  { kop: "Module 4: HTML-formulieren", slide: "M4" },
  { o: "4.1 Werking van een formulier", slide: "4.1", sub: true },
  { o: "4.2 Het form-element", slide: "4.2", sub: true },
  { o: "4.3 Labels & toegankelijkheid", slide: "4.3", sub: true },
  { o: "4.4 fieldset en legend", slide: "4.4", sub: true },
  { o: "4.5 Tekstinvoer & wachtwoorden", slide: "4.5", sub: true },
  { o: "4.6 Radio buttons & checkboxes", slide: "4.6", sub: true },
  { o: "4.7 select, option en optgroup", slide: "4.7", sub: true },
  { o: "4.8 datalist", slide: "4.8", sub: true },
  { o: "4.9 HTML5 input types", slide: "4.9", sub: true },
  { o: "4.10 button vs input", slide: "4.10", sub: true },
  { kop: "Module 5: Formuliervalidatie & veldattributen", slide: "M5" },
  { o: "5.1 Validatie-attributen", slide: "5.1", sub: true },
  { o: "5.2 Gebruikersgemak-attributen", slide: "5.2", sub: true },
  { kop: "Module 6: Veelgemaakte fouten", slide: "M6" },
  { o: "6.2 Veelgemaakte fouten", slide: "6.2", sub: true },
  { kop: "Oefeningen les 2", slide: "Oef." },
  { o: "Oefening: afbeeldingen", slide: "Oef. 1", sub: true },
  { o: "Oefening: video & iframe", slide: "Oef. 2", sub: true },
  { o: "Oefening: tabellen", slide: "Oef. 3 & 5", sub: true },
  { o: "Oefening: formulier debuggen", slide: "Oef. 4", sub: true },
  { o: "Oefening: HTML5-formulier", slide: "Oef. 6", sub: true },
];
