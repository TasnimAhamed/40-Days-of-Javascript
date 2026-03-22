const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const taskList = document.getElementById("taskList");

let editElem = null;

function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
        return;
    }
    const task = { id: Date.now(), text: text, isCompleted: false };
    renderTask(task);
    taskInput.value = "";
    searchInput.value = "";
    const liElems = taskList.querySelectorAll("li");
    liElems.forEach(function(li) {
        li.classList.remove("hidden");
    });    
}

function renderTask(task) {
    const liElem = document.createElement("li");
    liElem.dataset.id = task.id;
    
    const cbElem = document.createElement("input");
    cbElem.type = "checkbox";
    cbElem.addEventListener("change", function() {
        task.done = cbElem.checked;
        liElem.classList.toggle("done", task.done);
    });

    const spanElem = document.createElement("span");
    spanElem.innerText = task.text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("del-btn");
    delBtn.addEventListener("click", () => {
        liElem.remove();
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        editTask(liElem);
    });

    liElem.append(cbElem, spanElem, editBtn, delBtn);
    taskList.appendChild(liElem)
}
function editTask(liElem) {
    const spanElem = liElem.querySelector("span");
    const text = spanElem.innerText;
    taskInput.value = text;
    addBtn.innerText = "Update Task";
    editElem = liElem;
}
function updateTask(updateElem) {
    const spanElem = updateElem.querySelector("span");
    spanElem.innerText = taskInput.value.trim();
    taskInput.value = "";
    editElem = null;
    addBtn.innerHTML = "Add Task"
}
function searchTask() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const liElems = taskList.querySelectorAll("li");
    liElems.forEach(function(li) {
        const text = li.querySelector("span").innerText.toLowerCase();
        li.classList.toggle("hidden", searchTerm && !text.includes(searchTerm));
    });
}   

addBtn.addEventListener("click", function(){
    if (editElem) {
        updateTask(editElem);
    }
    else {
        addTask();
    }
});
taskInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (editElem) {
            updateTask(editElem);
        }
        else {
            addTask();
        }
    }
})

searchBtn.addEventListener("click", searchTask);
searchInput.addEventListener("input", searchTask);
searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        searchTask();
    }
})