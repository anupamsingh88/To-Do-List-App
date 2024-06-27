let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');
let datePicker = document.getElementById('date-picker');

function enterApp() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('todo-app').style.display = 'block';
}

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter the task');
    } else if (datePicker.value === '') {
        alert('Please select a date');
    } else {
        const task = document.createElement('li');
        const taskDate = document.createElement('div');
        taskDate.className = 'task-date';
        taskDate.textContent = `Due: ${datePicker.value}`;
        task.textContent = inputBox.value;
        task.appendChild(taskDate);
        listContainer.appendChild(task);
        let span = document.createElement('span');
        span.textContent = "\u00d7";
        task.appendChild(span);
        span.style.right = '0px';
    }
    inputBox.value = '';
    datePicker.value = '';
    saveData();
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

