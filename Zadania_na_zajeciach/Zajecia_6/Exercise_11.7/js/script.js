document.addEventListener("DOMContentLoaded", function(event) {
    var newLiElement = document.createElement('li');
    var newLiText = document.createTextNode('To jest nowy element LI');
    newLiElement.appendChild(newLiText);
    newLiElement.setAttribute("id", "li-5");
    var ul = document.querySelector('ul');
    ul.appendChild(newLiElement);
  });