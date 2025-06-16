document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage on page load
    loadTasks();

    addButton.addEventListener("click", () => addTask());

    // Allow adding tasks via the "Enter" key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        let taskText = taskInput.value.trim(); // Trim input value

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create task item and remove button
        let taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.onclick = () => removeTask(taskItem, taskText);

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        saveTask(taskText);
        taskInput.value = ""; // Clear input field
    }

    function saveTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    function loadTasks() {
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => {
            let taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";
            removeButton.onclick = () => removeTask(taskItem, taskText);

            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
        });
    }

    function removeTask(taskItem, taskText) {
        taskList.removeChild(taskItem);
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
});
