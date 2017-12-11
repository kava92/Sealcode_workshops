document.addEventListener("DOMContentLoaded", function(event) {
    var h1 = document.getElementById("heading-one");
    h1.innerText = "Zmieniona zawartosc";

    var zadania ={
        iloscZadan: 10,
        nazwaPrzedmiotu: 'Przyrka',
        ileZrobioych: 2,
        ileZostalo: function(){
            return this.iloscZadan - this.ileZrobioych;
        }
    }

    var span1 = document.getElementById("span-one");
    span1.innerText = zadania.nazwaPrzedmiotu;
    var span2 = document.getElementById("span-two");
    span2.innerText = zadania.ileZostalo();
  });