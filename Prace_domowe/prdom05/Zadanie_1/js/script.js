document.addEventListener("DOMContentLoaded", function(event) {
    var h1 = document.getElementById("heading");
    var p1 = document.getElementById("paragraph-one");
    var p2 = document.getElementById("paragraph-two");
    var p3 = document.getElementById("paragraph-three");
    var p4 = document.getElementById("paragraph-four")

    var sentence = "Podstawą szczęścia jest wolność, a podstawą wolności odwaga.";
    h1.innerText = "Pawel Kawczynski";
    
    var daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    var months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'października', 'listopada', 'grudnia'];
    
    var d = new Date();
    var day = daysOfWeek[d.getDay()];
    var month = months[d.getMonth()];
    p1.innerText = "Data, która pojawi się przy otwarciu tej strony to: " + day + ", " + d.getDay()+ ", " + month + ", " + d.getFullYear();
    p1.innerHTML += "</br>Godzina w momencie otwarcia strony: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" +d.getMilliseconds();
    p2.innerText = "Trzynastym znakiem w zdaniu jest: " +sentence.charAt(13);
    p2.innerHTML += "</br>Znaki pomiędzy 7. a 12. pozycją to: " +sentence.substring("7","12");
    p2.innerHTML += "</br>Pierwszy raz znak 'ą' pojawia się na miejscu: " +sentence.indexOf("ą");
    p2.innerHTML += "</br>Ten ciąg ma "+sentence.length+" znakow";
    p2.innerHTML += "</br>Po zamianie 'podstawą' na 'fundamentem' mamy: " +sentence.replace("podstawą","fundamentem").length;
    p2.innerHTML += "</br>Część zdania przed przecinkiem to: " +sentence.substring("0","31");
    p2.innerHTML += "</br>Druga część zdania po odwróceniu to: "+sentence.substring("32","59").split("").reverse().join("");
    p3.innerText = "Zadanie 1. Mam funkcję kwadratową: ";
    p3.innerHTML += "</br>f(x) = x^2 + 5x + 6";
    p3.innerHTML += "</br>";
    var a = 1;
    var b = 5;
    var c = 6;
    var delta = (b*b) - (4*a*c);
    var pierwiastekKwadratowyDelta = Math.sqrt(delta);
    var x1 = (-b+pierwiastekKwadratowyDelta)/(2*a);
    var x2 = (-b-pierwiastekKwadratowyDelta)/(2*a);
    p3.innerHTML += "</br>Wyróżnik tego trójmianu to: " +delta;
    p3.innerHTML += "</br>Pierwiastek kwadratowy tego wyróżnika to: " +Math.sqrt(delta);
    p3.innerHTML += "</br>Miejscami zerowymi tej funkcji są: " +x1+ " " +x2 ;
    p4.innerText = "Zadanie 2. Obliczam wartość funkcji: ";
    p4.innerHTML += "</br>f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||) dla x = pi/6 ";
    var x = (Math.PI/6);
    var xFor6 = Math.sqrt(Math.abs(Math.sin(Math.log(Math.pow(2,x)))+Math.max(0,x)+Math.abs(-Math.exp(2*x)+Math.min(-1,x))));
    p4.innerHTML += "</br>Mój wynik to: "+ xFor6;
    p4.innerHTML += "</br>Wynik w notacji wykładniczej to: "+ xFor6.toExponential();
    p4.innerHTML += "</br>Po zaokrąleniu wyniku w górę mam: "+ Math.ceil(xFor6);
  });