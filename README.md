# 📚 Anicée's Flashcards

**Gratis flashcards om te studeren voor Toegepaste Informatica aan de Erasmushogeschool Brussel (EhB).**

Meer dan **3.000 kaarten** voor IT Essentials, Desktop OS en Web Essentials. Kies een vak en de hoofdstukken die je wil oefenen, en ga meteen aan de slag. Je hoeft niets te installeren en geen account te maken. Het werkt op je laptop, tablet en gsm.

### [Start met oefenen](https://sobacassou.github.io/AniceesFlashcards_ehb_toegespaste_informatica/)

> Ik ben zelf student. Controleer de info met je cursus, en laat het weten als je een fout ziet !

---

## 📖 Welke vakken zitten erin?

| Vak | Hoofdstukken |
|-|-|
| **IT Essentials** | I.1 Talstelsels · I.2 Logische poorten · I.3 Rekenschakelingen · II.1 Computerarchitectuur · II.2 Werkgeheugen · II.3 Processoren · II.4 Chipsets en bussen · II.5 Magnetische opslag |
| **Desktop OS** | I.0 Linux: introductie · I.1–I.3 Linux: werkcolleges 1–3 · II Windows *(nog aan te vullen)* |
| **Web Essentials** | 1 Introductie & HTML-basis · 2 HTML media, tabellen & formulieren · 3 CSS-basis, kleuren & typografie · 4 CSS media, tabellen, formulieren & box model |

## Wat kan je ermee?

- **Vak en hoofdstukken kiezen**: oefen alles tegelijk of alleen wat je nodig hebt
- **Slim filteren**: oefen alleen kaarten die je nog niet beantwoord hebt, die je eerder fout had, of die moeilijk waren
- **Figuren en schema's** op de kaarten (schakelingen, tabellen, Linux-uitvoer…), met genummerde vakjes op de voorkant
- **Extra uitleg** bij veel antwoorden
- **Kaarten schudden** voor een willekeurige volgorde
- **Foute kaarten opnieuw oefenen** als je klaar bent
- **Ongedaan maken** als je per ongeluk verkeerd klikt
- **Kaarten weggooien** die je uit de code wilt verwijderen (je kan ze terugzetten als je per ongeluk verkeerd klikt)
- **Je voortgang wordt onthouden** in je browser (elk toestel heeft zijn eigen voortgang)

📱 **Tip:** open de app op je gsm en kies *Toevoegen aan startscherm*. Dan heb je hem altijd bij de hand.

## Sneltoetsen op laptop of pc

| `Spatie` | Kaart omdraaien |
| `→` / `←` | Wist ik / Wist ik niet |
| `W` | Kaart weggooien |
| `Z` | Ongedaan maken |
| `G` | Figuur vergroten (`Esc` sluit) |

Op je gsm tik je gewoon op de knoppen.

## Fout gevonden of idee?

Zie je een fout in een kaart, of wil je een vak toevoegen? [Open een issue](https://github.com/sobacassou/AniceesFlashcards_ehb_toegespaste_informatica/issues) of stuur een pull request. **Feel free to contribute!**

Vond je het handig? Geef het project een ⭐ zodat andere studenten het ook vinden, en deel de link met je klasgenoten!

---

## Voor wie wil meewerken

### Lokaal starten

* **Op de pc:** open de map in VS Code en start `index.html` met **Live Server**.
* **Online:** de app draait via GitHub Pages. Na het vervangen van bestanden: **Ctrl+F5** om de nieuwe versie te laden.

### Bestanden

* `index.html`, `app.js`, `style.css`: de app zelf
* `flashcards_*.js`: de kaarten, één bestand per hoofdstuk
* `afbeeldingen/`: figuren voor de kaarten (`_vraag` = versie met genummerde vakjes voor de voorkant)

Een kaart ziet er zo uit:

```js
{ v: "Vraag", a: "Antwoord", o: "Onderwerp", uitleg: "Extra uitleg",
  img: "afbeeldingen/…_vraag.jpg", imgAntwoord: "afbeeldingen/….jpg" }
```

`img`, `imgAntwoord` en `uitleg` zijn optioneel. De `.structuur` onderaan elk bestand bepaalt het overzicht rechts.

Weggegooide kaarten kan je als lijst kopiëren (*Lijst kopiëren*) om ze daarna uit de js-bestanden te halen.

## Licentie

Zie [LICENSE](LICENSE).
