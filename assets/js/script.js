// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const taskTitle = document.querySelector('#task-title');
const taskDueDate = document.querySelector('#datepicker');
const taskDescription = document.querySelector('#task-description');
const addTaskBtn = document.querySelector('#add-task');

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const taskId ={
        title: taskTitle.value.trim(),
        date: taskDueDate.value.trim(),
        description: taskDescription.value.trim(),
    };
    localStorage.setItem('taskId', JSON.stringify(taskId));
}

addTaskBtn.addEventListener('click', function(event) {
    event.preventDefault();
    generateTaskId();

    taskTitle.value = "";
    taskDueDate.value = "";
    taskDescription.value = "";

});


// Todo: create a function to create a task card
function createTaskCard(task) {
    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

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
