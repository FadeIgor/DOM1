
/*
DOM czyli reprezentacja dokumentow html w przegladarce z ktora pracujemy tworzac kod js
elementy strony(tag, atrybuty) sa wezlami ktore moga byc:
- pobierane
- modyfikowane
- usuniete
- tworzone 
Nasluchujemy

STRUKTURA DOM przypomina Drzewo, na szczycie ktorego jest obiekt: document
DOM nie jest czescia js, ale js umozliwia prace z domem, jest interface sposobem na orace ze strona internetowa, ktrory mozemy obslugiwac za pomoca js

I. ------------------pobieranioe elementow ze strony internetowej------------------
Aby w przyszlosci zmodyfikowac element najpierw nalezy go pobrac
1. pobieranie wlasciwosci obiektu document
przykladowe wlasciwosci
document - cala strona internetowa
document.documentElement - odnosi sie do HTML do pierwszego znacznika
document.body
document.body.h1 - z h1 nie zadziala bo ten element musimy sobie wyszukac
document.images - zbiera nam wszystkie obrazki

HTMLCollection(2) - [img#car, img, car: img#car]
HTMLCollection - jest to obiekt tablico podobny, ma dlugosc do jego elementow mozna dostac sie za pomoca notacji tablicy, problemem jest to ze ma mniej metod niz tablica

2. dwie metody zrobienia tablcy z podanych elementow, ktore sa obiektem tablicopodobnym
na obiekcie ponizej wykonuje metode from() ktora informuje zrob tablice z tego co */
const imgs = Array.from(document.images)

/*
II. ------------------Modyfikowanie elementow na stronie internetowej------------------
Mam duzo metod i wlasciowosci, ktore umozliwiaja mi modyfikacje tego co widze na stronie internetoej 

III. -----------------zdarzenia akcje nasluchiwanie ------------------
mozemy nasluchiwac wyczekiwac na jakies zdarzenie czyli jak wystopi zdarzenie 
to zaprogramujemy jakas akcje np na click

IV ------------------Tworzenie i dodawanie elementow ------------------
na poczatku musze cos stoworzyc aby potem zmodyfikowac




*/
