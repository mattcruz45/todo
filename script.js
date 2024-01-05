const inputBox = document.getElementById("input-box");
const listItems = document.getElementById("list-items");

function add(){
    if(inputBox.value === ''){
        alert("You gotta write sumn bud");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listItems.appendChild(li);
        let x = document.createElement("x");
        x.innerHTML = "\u00d7";
        li.appendChild(x);
    }

    inputBox.value = '';
    saveData();
}

listItems.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "X"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("tasks", listItems.innerHTML);
}

function showItems(){
    listItems.innerHTML = localStorage.getItem("tasks");
}

showItems();