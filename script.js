const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("tasks");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }  
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "✖";
        li.appendChild(span);
    }
    inputBox.value = '';
}


listContainer.addEventListener("click", function(element){
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("checked");
    }
    else if (element.target.tagName === "SPAN") {
        element.target.parentElement.remove();
    }
}, false);