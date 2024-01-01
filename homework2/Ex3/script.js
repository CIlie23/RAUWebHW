document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = taskInput.value.trim();
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
        saveTasks();
    }
}

function editTask(button) {
    const taskText = button.previousElementSibling;
    const newText = prompt('Edit task:', taskText.textContent);
  
    if (newText !== null) {
      taskText.textContent = newText;
      saveTasks();
    }
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
    saveTasks();
  }
  
  function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
  
    for (const taskItem of taskList.children) {
      const taskText = taskItem.querySelector('span').textContent;
      tasks.push(taskText);
    }
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const taskList = document.getElementById('taskList');
    const storedTasks = localStorage.getItem('tasks');
  
    if (storedTasks !== null) {
      const tasks = JSON.parse(storedTasks);
  
      for (const taskText of tasks) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
      }
    }
  }

//I am shaking and crying rn