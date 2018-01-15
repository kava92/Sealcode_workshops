document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    //zadanie1
    var h1 = document.querySelector('h1');
    h1.classList.remove('example');
    //zadanie2
    function reverseStr(str){
        return str.split("").reverse().join("");
    }
    var reverseh1Id = "rotakifytnedi-ywon";
    var h1Id = reverseStr(reverseh1Id);
    h1.id = h1Id;
    //zadanie3
    var elementWrapper = document.querySelector('div.wrapper');
    var link = document.createElement('a');
    link.setAttribute('href','www.sealcode.org');
    link.setAttribute('target','blank');
    link.classList.add('new-calss');
    var text = document.createTextNode('link do sealcode');
    link.appendChild(text);
    elementWrapper.append(link);
    //zadanie4
    var numberOfLi = document.querySelectorAll('li').length;
    for(var i = 0; i < numberOfLi; i++){
        var li = document.querySelector('li');
        li.parentNode.removeChild(li);
    }
    for(var j = 1; j <= 30; j++){
        var liId = 'new';
        newj = j.toString();
        liId = liId+j;
        var text = document.createTextNode("Nowa tresc "+newj);
        var ul = document.querySelector('ul');
        var newLi = document.createElement('li');
        newLi.id = liId;
        newLi.appendChild(text);
        ul.appendChild(newLi);
    }
    //zadanie5
    var p = document.querySelector("p.example");
    text = "Zmienioa tresc akapitu";
    p.textContent = text;
});