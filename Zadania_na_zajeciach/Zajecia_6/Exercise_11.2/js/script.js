document.addEventListener("DOMContentLoaded", function(event) {
    for(var i = 1; i < 5; i++){
        var li = document.getElementById("li-"+i).innerHTML;
        console.log(li);
    }
        var example = document.getElementsByClassName("example");
        requireElement = example[1].innerHTML;
        console.log(requireElement);
    
    var li2 = document.getElementById("li-2");
    console.log(li2.previousElementSibling.innerHTML);
    console.log(li2.nextElementSibling.innerHTML);
   
   
  });