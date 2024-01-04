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
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

listItems.addEventListener("click", function(e){
    if(e.target.tagname = "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagname === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listItems.innerHTML);
}

function showItems(){
    listItems.innerHTML = localStorage.getItem("data");
}

showItems();