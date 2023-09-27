Öppna sidan genom att starta index.html (alla sidor renderas härifrån)
* Individuell-sida.html måste laddas ifrån index.html för att fungera korrekt. Man ska inte kunna öppna den individuellt då den hämtar data ifrån en JSON fil
* Varje anställds enskilda projekt laddas också ifrån JSON filer därav kan man inte öppna i Individuell-sida.html direkt.


Index.html - huvudsida och startsida
varor.html - för att boka resa
individuell-sida.html - sida för att se information om varje enskild anställd. öppnas bara när man trycker på en enskild guid på startsidan. Laddas med objekt ifån JSON filer

script.js - javascript för alla sidor
indi-scrips.js - javascript för den personliga sidan
slideshow.js - javascript för bildspelet

app.js - vue för alla sidor

style.css - generell css för hela webbplatsen
stylecontact.css - css för kontaktformuläret. för modalen kontakt (Frågetecknet nere i hörnet)
stylevaror.css - css för Boka resa sidan
varukorg.css - css för varukorgen som hänger med på alla sidor som en div i navbaren
individuell.css - css för de personliga sidorna.