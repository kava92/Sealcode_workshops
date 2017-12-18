document.addEventListener("DOMContentLoaded", function(event) {
    var allLiElement = document.querySelectorAll("li");
    for(var i = 0; i<allLiElement.length; i++)
    {
        var removeElement = document.querySelector("li");
        var parentElement = removeElement.parentNode;
        parentElement.removeChild(removeElement);
    }
  });