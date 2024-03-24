// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const taskTitle = document.querySelector('#task-title');
const taskDueDate = document.querySelector('#datepicker');
const taskDescription = document.querySelector('#task-description');
const addTaskBtn = document.querySelector('#add-task');

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const taskId = {
        title: taskTitle.value.trim(),
        date: taskDueDate.value.trim(),
        description: taskDescription.value.trim(),
     };
     localStorage.setItem('taskId', JSON.stringify(taskId));
   
    // if (nextId === null){
    //     nextId = 1;
    // }
    // else {
    //     nextId++;
    // }
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskData = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${taskTitle.value}</h5>
      <p class="card-date">${taskDueDate.value}</p>
      <p class="card-text">${taskDescription.value}</p>
      <button onclick="handleDeleteTask()">Delete</button>
    </div>
  </div>
    `;
    const htmlCard = $('<section>');
    htmlCard.html(taskData);
    $('#todo-cards').append(htmlCard);
};

addTaskBtn.addEventListener('click', function(event) {
    event.preventDefault();
    generateTaskId();
    createTaskCard();

    taskTitle.value = "";
    taskDueDate.value = "";
    taskDescription.value = "";
});


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(){
    // const task = {
    //     id: generateTaskId(),
    //     title: $('#task-title').val(),
    //     date: $('#datepicker').val(),
    //     description: $('description').val(),
    //     status: "to-do"
    // }
    // taskList.push(task);
    // localStorage.setItem('tasks', JSON.stringify(taskList));
    // //call renderTaskList()
    // $('#task-title').val(""); 
    // $('#datepicker').val(""); 
    // $('description').val("");
};

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    task.remove();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    $("#formModal").modal('show');
 
    // Close modal on button click
    $(".btn").click(function() {
        $("#formModal").modal('hide');
    });

});
