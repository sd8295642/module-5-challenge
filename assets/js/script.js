// Retrieve tasks and nextId from localStorage
let nextId = JSON.parse(localStorage.getItem("nextId"));

const taskTitle = $('#task-title');
const taskDueDate = $('#datepicker');
const taskDescription = $('#task-description');
const addTaskBtn = $('#add-task');

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const taskId = {
        title: taskTitle.val(),
        date: taskDueDate.val(),
        description: taskDescription.val().trim(),
     };

     let taskList = JSON.parse(localStorage.getItem("taskId"));
     if (taskList){
        taskList.push(taskId);
     }
     else {
        taskList = [taskId];
     }
    
     console.log('added array item', taskList);

     localStorage.setItem('taskId', JSON.stringify(taskList));
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    htmlCard.remove();
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskData = `
    <style>
    .draggable { width: 90px; height: 80px; padding: 5px; float: left; margin: 0 10px 10px 0; font-size: .9em; }
    .ui-widget-header p, .ui-widget-content p { margin: 0; }
    </style>

    <div id="draggable5" class="draggable ui-widget-content card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${taskTitle.val()}</h5>
      <p class="card-date">${taskDueDate.val()}</p>
      <p class="card-text">${taskDescription.val()}</p>
      <button onclick="handleDeleteTask()">Delete</button>
    </div>
  </div>
 
  <script>
    $( function() {
        $( "#draggable5" ).draggable({ grid: [ 80, 80 ] });
    } );
  </script>
    `;
    const htmlCard = $('<section>');
    htmlCard.html(taskData);
    $('#todo-cards').append(htmlCard);
};

addTaskBtn.on('click', function(event) {
    event.preventDefault();
    generateTaskId();
    createTaskCard();

    taskTitle.val() = "";
    taskDueDate.val() = "";
    taskDescription.val() = "";
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
