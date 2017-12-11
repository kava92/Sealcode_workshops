document.addEventListener("DOMContentLoaded", function(event) {
    var daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
    
    var d = new Date();
    
    var day = daysOfWeek[d.getDay()];
    var month = months[d.getMonth()];
    var dateOfBirth = new Date(1992, 9, 20, 15, 30, 22); // ustawiamy datę z przeszłości w formacie: YYYY, MM, DD, HH, MM, SS
    var difference = d.getTime() - dateOfBirth.getTime(); // wynik jest w milisekundach
    var age = Math.round(difference / 31556900000); // dzielone całkowicie przez liczbę milisekund w roku (przy założeniu, że to nie jest rok przestępny)
    var date = d.toTimeString();
    
    var el = document.getElementById('paragraph-three');
    el.innerHTML = 'Dzisiaj jest: ' + day + '.' + '<br />' + 'Aktualny miesiąc: ' + month + '.' + '<br />' + 'Mój wiek w latach to: ' + age + '.' + '<br />' + 'Data wyświetlona w momencie wywołania metody: ' + date + '.';
    
  });
