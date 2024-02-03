const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function() {
  console.log("Button clicked"); // Add this line for debugging
  const newTask = newTaskInput.value;
  if (newTask) {
    const li = document.createElement("li");
    li.textContent = newTask;
    // Add a button to mark as completed
    const completeButton = document.createElement("button");
    completeButton.textContent = "Mark as Completed";
    completeButton.addEventListener("click", function() {
      li.style.textDecoration = "line-through";
    });
    li.appendChild(completeButton);
    // Add a button to delete the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(li);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    newTaskInput.value = "";
  }
});
