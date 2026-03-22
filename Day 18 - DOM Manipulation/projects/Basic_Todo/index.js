const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const taskList = document.getElementById("taskList");

const tasks = [];

function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
        return;
    }
    const task = { id: Date.now(), text: text, isCompleted: false };
    tasks.push(task);
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

    liElem.append(cbElem, spanElem, delBtn);
    taskList.appendChild(liElem)
}

function searchTask() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const liElems = taskList.querySelectorAll("li");
    liElems.forEach(function(li) {
        const text = li.querySelector("span").innerText.toLowerCase();
        li.classList.toggle("hidden", searchTerm && !text.includes(searchTerm));
    });
}   

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
})

searchBtn.addEventListener("click", searchTask);
searchInput.addEventListener("input", searchTask);
searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        searchTask();
    }
})