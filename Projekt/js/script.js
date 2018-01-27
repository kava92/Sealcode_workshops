document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    let tasks = [];
    var url='http://sealcode.org:8082/api/v1/resources/task';

    // function parseTaskToAPI(){
    //     var task = document.querySelector('.new-task').value;
    // }
    // function addEventsToDeleteButtons(){
    //     var deleteButtons = document.getElementsByClassName('delete-button');
    //         console.log(deleteButtons);
    //         for(var i = 0; i < deleteButtons.length; i++){
    //             console.log(`dodano-event-pod-button-${i}`);
    //             deleteButtons[i].addEventListener('click', function(e){
    //                 console.log('sdasdsadasd');
    //             })
    //         }
    // }

    function createTask(element){
        var ul = document.querySelector('ul');
        var newLi = document.createElement("li");
        newLi.classList.add('container');
        newLi.setAttribute('data-id', element.id);
        var newInput = document.createElement("input");
        var newCheckMark = document.createElement("span");
        var newSpan = document.createElement("span");
        var newButton = document.createElement("button");
        var newDeleteButtonText = document.createTextNode("x");
        newButton.appendChild(newDeleteButtonText);
        var newTaskText = document.createTextNode(element.body.title);
        newInput.setAttribute('type', 'checkbox');
        newCheckMark.classList.add("checkmark");
        if(element.body.is_done === true){
            newInput.setAttribute('checked', ''); 
        }
        newButton.setAttribute('class', 'delete-button');
        newButton.addEventListener('click',function(e){ 
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            countLi = document.querySelectorAll('li');
            var id = e.target.parentElement.getAttribute("data-id");
            qwest.delete(url+'/'+ id, null, {cache: true}).then(function(xhr, response) { // usuwamy zadanie o danym identyfikatorze (tym razem nie musimy przesyłać ciała takiego zadania)
            });
        })
        newSpan.appendChild(newTaskText);
        newLi.appendChild(newInput);
        newLi.appendChild(newCheckMark)
        newLi.appendChild(newSpan);
        newLi.appendChild(newButton);
        ul.appendChild(newLi);
    }
    function getTasks() { // pobieramy listę zadań po wystąpieniu odpowiedniego zdarzenia
        qwest.get(url, {}, {cache: true}).then(
            function(xhr, response) {
                response.forEach(function(element) { // wywołujemy dla każdego pobranego zasobu
                createTask(element);                     
        })});
    }

    function addTaskServer(task) { // wysyłamy nowe zadanie po wciśnięciu klawisza ENTER lub kliknięciu przycisku
        qwest.post(url, {title: task.title, is_done: task.is_done}, {cache: true}).then(function(xhr, response){
        refresh();   
        });

    }


    // function deleteTask() { // usuwanie wybranego zadania pod wpływem wystąpienia pewnego zdarzenia
    //     qwest.delete(url+'/'+tasks[this.id].id, null, {cache: true}).then(function(xhr, response) { // usuwamy zadanie o danym identyfikatorze (tym razem nie musimy przesyłać ciała takiego zadania)
    //     });
    // }

    getTasks();

    var addTask = document.querySelector('#addTask'); 

   

    addTask.addEventListener('click', function(e){
        e.preventDefault();
        var taskTitle = document.querySelector('.new-task').value;
        var task = {body:{title: taskTitle, is_done: false}};
        addTaskServer(task.body);
        createTask(task);
    })
    document.addEventListener('keyup', function(e){
        e.preventDefault();
        var key = e.which || e.keyCode;
        if(key === 13){
            var newTask = document.querySelector('.new-task').value;
            var task = {body:{title: newTask, is_done: false}}
            addTaskServer(task.body);
            createTask(task);
        }
    })
    


  })

