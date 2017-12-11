document.addEventListener("DOMContentLoaded", function(event) {
    var sentence = " Home sweet home ";
    var dlugosc = sentence.length;
    var duzeZnaki = sentence.toUpperCase();
    var dziesiatyZnak = sentence.charAt(10);
    var indexEE = sentence.indexOf('ee');
    var ostatniIndexE = sentence.lastIndexOf('e');
    var znakiOd8Do10 = sentence.substring(8,14);
    var bezSpacji = sentence.trim();
    var zamianaZnakow = sentence.replace("me","w");
    var p1 = document.getElementById("paragraph-one");
    p1.innerHTML = "Nasz ciąg ma długość: "+dlugosc+
    "</br>Jeśli zmienimy wszystkie znaki na wielkie ciąg będzie wyglądać tak: "+duzeZnaki+
    "</br>Na 10. pozycji znajduje się znak: "+dziesiatyZnak+
    "</br>Ciąg 'ee' znajduje się na miejscu: "+indexEE+
    "</br>Ostatni indeks znaku 'e' to: "+ostatniIndexE+
    "</br>Znaki od 8 do 14 to: "+znakiOd8Do10+
    "</br>Po usunięciu niepotrzebnych spacji nasz ciąg wygląda tak: "+bezSpacji+
    "</br>Po zmianie 'me' na 'w' nasz ciąg wygląda tak: "+zamianaZnakow
  });