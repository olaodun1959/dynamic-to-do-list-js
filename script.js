function addTask() {
    let taskInput = document.getElementById("taskInput"); 
    let taskText = taskInput.value.trim(); // Trim the input value

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear the input field after adding the task
}
