
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

A.
na obiekcie ponizej wykonuje metode from() ktora informuje zrob tablice z tego co */
const imgs = Array.from(document.images)

//B ... operator rest, []
const imgs1 = [...document.write]

/*
3. dwie metody pobierajace 1 element
document powoluje sie do calej strtony ale my chcemy odwolac sie do konkretnego
A. Metoda querySelector                                                         */
document.querySelector("li:nth-child(3")

//B metoda getElementById
const firstElement = document.getElementById('first')
//gdybym chcial w js za pomoca qutrySelector() pobrac to co mam w nawiasach to nie moge wpisac ("first"), ale musialbyum zapisac ("#first")

const firstElement = document.querySelector("#first")

//jesli nie znajde jakiegos elementru do dostane null i nei ma bledu
document.querySelector("li:nth-child(6")

/*
4. METODY POBIERAJACE WSZYSTKIE PASUJACE ELEMENTRY A NIE TYLKO JEDEN
- praca z jednym elementem jest latwiejsza - bo ma pewne metody i wlasciwosci
- jak pobieerzemy wielee elementow to sa one umieszczone w obiekcie tablico podobnym ktora musimy zmienic na tablice w tedy jednak bedziemy musieli wykonac albo petle albo jakas metode aby do kazdego elementu sie dostac
WNIOSEK inaczej pracuje kiedy mamy 1 element pobrany a inaczej jak mam wiele elementow - tak jak ponizej

querySelector() - metoda do pobrania 1 elementu 

querySelectorAll() - do wielu elementow

*/
const  list = document.quetySelectorAll("ul>li");
/*
pobieram wszytkie li ktore sa dzieckiem ul
zwrocona zostanie tu NodeList - czyli lista wezlow obiekt tablico podobny
ktory ma dlugosc length i metody tablicy, ale mniej niz tablica

II. ------------------Modyfikowanie elementow na stronie internetowej------------------
Mam duzo metod i wlasciowosci, ktore umozliwiaja mi modyfikacje tego co widze na stronie internetoej 

III. -----------------zdarzenia akcje nasluchiwanie ------------------
mozemy nasluchiwac wyczekiwac na jakies zdarzenie czyli jak wystopi zdarzenie 
to zaprogramujemy jakas akcje np na click

IV ------------------Tworzenie i dodawanie elementow ------------------
na poczatku musze cos stoworzyc aby potem zmodyfikowac




*/
