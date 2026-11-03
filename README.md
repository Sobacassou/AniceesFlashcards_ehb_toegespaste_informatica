# Anicée's Flashcards !

Een eenvoudige flashcard-app in HTML, CSS en JavaScript om toegepaste informatica te studeren (Erasmushogeschool Brussel).

## Starten

* **Op de pc:** open de map in VS Code en start `index.html` met **Live Server**.
* **Online / tablet:** zet de map op GitHub Pages of Netlify en open het adres in de browser ("Toevoegen aan startscherm").

Na het vervangen van bestanden: **Ctrl+F5** om de nieuwe versie te laden.

## Inhoud

|Vak|Hoofdstukken|
|-|-|
|💻 IT Essentials|I.1 Talstelsels · I.2 Logische poorten · I.3 Rekenschakelingen · II.1 Computerarchitectuur · II.2 Werkgeheugen · II.3 Processoren · II.4 Chipsets en bussen|
|🖥️ Desktop OS|I.0 Linux: introductie · I.1–I.3 Linux: werkcolleges 1–3 · II Windows (nog aan te vullen)|

## Bestanden

* `index.html`, `app.js`, `style.css`: de app zelf
* `flashcards\_\*.js`: de kaarten, één bestand per hoofdstuk
* `afbeeldingen/`: figuren voor de kaarten (`\_vraag` = versie met genummerde vakjes voor de voorkant)

Een kaart ziet er zo uit:

```js
{ v: "Vraag", a: "Antwoord", o: "Onderwerp", uitleg: "Extra uitleg",
  img: "afbeeldingen/…\_vraag.jpg", imgAntwoord: "afbeeldingen/….jpg" }
```

`img`, `imgAntwoord` en `uitleg` zijn optioneel. De `.structuur` onderaan elk bestand bepaalt het overzicht rechts.

## Sneltoetsen

|Toets|Actie|
|-|-|
|Spatie|Kaart omdraaien|
|→ / ←|Wist ik / Wist ik niet|
|W|Kaart weggooien|
|Z|Ongedaan maken|
|G|Figuur vergroten (Esc sluit)|

## Goed om te weten

* Je voortgang (juist/fout, weggegooide kaarten, waar je gebleven was) wordt **in de browser** bewaard. Elk toestel heeft dus zijn eigen voortgang.
* Weggegooide kaarten kan je als lijst kopiëren ("📋 Lijst kopiëren") om ze definitief uit de js-bestanden te laten halen.
* Ontbreekt er een kaartenbestand, dan toont de startpagina in het oranje welk bestand niet gevonden is.

