document.getElementById("addTaskForm").addEventListener("submit",event =>{
const taskText = document.getElementById("taskText").value;

  if (taskText === '') {
    alert("Вы должны что-то написать!");
    event.preventDefault();
  }});