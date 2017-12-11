document.addEventListener("DOMContentLoaded", function(event) {
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    
    var el = document.getElementById('paragraph-two');
    el.innerHTML = 'Losowo wygenerowana liczba to ' + randomNumber;
  });
