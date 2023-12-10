document.addEventListener("DOMContentLoaded", function () {
    // This code runs when the DOM (document) is fully loaded and ready.

    // Get references to important elements in your HTML.
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add a click event listener to the "Add" button.
    addTaskBtn.addEventListener("click", function () {
        // Get the value of the task input and trim any extra spaces.
        const taskText = taskInput.value.trim();
        
        // Check if the task text is empty. If it's empty, do nothing.
        if (taskText === "") return;

        // Create a new list item (li) to represent the task.
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;

        // Add the new task item to the task list (ul).
        taskList.appendChild(taskItem);

        // Clear the task input field.
        taskInput.value = "";

        // Add a click event listener to the "Complete" button within the task item.
        taskItem.querySelector(".complete").addEventListener("click", function () {
            // Toggle the "completed" class on the task item to mark it as completed or uncompleted.
            taskItem.classList.toggle("completed");
        });

        // Add a click event listener to the "Delete" button within the task item.
        taskItem.querySelector(".delete").addEventListener("click", function () {
            // Remove the task item from the task list when the "Delete" button is clicked.
            taskItem.remove();
        });
    });
});
