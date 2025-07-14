var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ========================
// GLOBAL VARIABLES & DOM ELEMENTS
// ========================
let root = document.querySelector("#root");
let storedDataString = localStorage.getItem("storedData");
let storedData = storedDataString ? JSON.parse(storedDataString) : { tasks: [] };
let instructionsElement = document.createElement('em');
// User name initialization
let name = localStorage.getItem("name");
if (!name) {
    name = prompt("Please enter your name:");
    while (!name || name.trim() === "") {
        name = prompt("Name cannot be empty. Please enter your name:");
    }
    localStorage.setItem("name", name);
}
// Create header and footer elements
let header = document.createElement("header");
let footer = document.createElement("footer");
header.innerHTML = `
                   <strong>Hello, ${name} welcome to    Your Todo App!</strong>`;
footer.innerHTML = `  <p>&copy; ${new Date().getFullYear()} daryldev. All Rights Reserved.</p>
        <div class="social-links">
            <a href="https://www.linkedin.com/in/nfoye-djomo-daryl-dewilde-0ba897311/" target="_blank" class="linkedin">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/237699255753" target="_blank" class="whatsapp">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://youtube.com/@daryldev" target="_blank" class="youtube" >
                <i class="fab fa-youtube"></i>
            </a>
            <a href="https://github.com/daryldewilde" target="_blank" class="github">
                <i class="fab fa-github"></i>
            </a>
        </div>`;
// ========================
// DATA MANAGEMENT
// ========================
/**
 * Simulates an asynchronous data fetch operation
 * @returns {Promise} Promise that resolves with storedData or rejects if no data
 */
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (!storedData) {
                reject("No data available");
            }
            else {
                // Simulate network delay
                setTimeout(function () {
                    resolve(storedData);
                }, 500);
            }
        });
    });
}
// ========================
// UTILITY FUNCTIONS
// ========================
/**
 * Refreshes the todo list display by removing the old list and creating a new one
 */
function refreshTodoDisplay() {
    var _a;
    // Remove existing todo list if it exists
    (_a = document.querySelector(".todo-list")) === null || _a === void 0 ? void 0 : _a.remove();
    // Display updated todos
    if (storedData.tasks.length === 0) {
        instructionsElement.textContent = "No tasks available. Please add a task.";
        console.warn("No tasks available.");
        alert("No tasks available.");
    }
    else {
        instructionsElement.textContent = "Double tap on the Title of a task to edit";
        displayTodos(storedData.tasks);
    }
}
// ========================
// UI RENDERING FUNCTIONS
// ========================
/**
 * Creates and displays the todo list in the DOM
 * @param {Array} todos - Array of todo objects to display
 */
function displayTodos(todos) {
    // Create the main ul container
    let ul = document.createElement("ul");
    ul.className = "todo-list";
    // Map each todo to a list item element
    let todoList = todos.map(todo => {
        let li = document.createElement("li");
        li.setAttribute("id", todo.id.toString());
        li.innerHTML = `<strong class="title"> ${todo.title} </strong> 
                        <select class="status-select ${todo.completed ? "done" : "not-done"}" data-task-id="${todo.id}"> 
                            <option value="not-done" ${!todo.completed ? "selected" : ""}>Not Completed</option>
                            <option value="done" ${todo.completed ? "selected" : ""}>Completed</option>
                        </select>
                        <button class="delete">Delete</button>`;
        return li;
    });
    // Append all list items to the ul container
    todoList.forEach(li => ul.appendChild(li));
    // Add event listeners to title elements for editing
    let titleElements = ul === null || ul === void 0 ? void 0 : ul.querySelectorAll(".title");
    titleElements.forEach(titleElement => {
        titleElement.addEventListener("dblclick", handleEdit);
    });
    // Add the complete list to the root element
    root === null || root === void 0 ? void 0 : root.insertBefore(ul, footer);
}
/**
 * Creates and sets up the main UI elements
 */
function setupUI() {
    root === null || root === void 0 ? void 0 : root.appendChild(header);
    // Create add task button
    let addTask = document.createElement("button");
    addTask.textContent = "Add Task";
    addTask.className = "add-task";
    if (storedData.tasks.length === 0) {
        instructionsElement.textContent = "No tasks available. Please add a task.";
    }
    else {
        instructionsElement.textContent = "Double tap on the Title of a task to edit";
    }
    root === null || root === void 0 ? void 0 : root.appendChild(instructionsElement);
    root === null || root === void 0 ? void 0 : root.appendChild(addTask);
    root === null || root === void 0 ? void 0 : root.appendChild(footer);
    // Setup event listeners after elements are created
    setupEventListeners(addTask);
}
/**
 * Handles Task edit
 */
function handleEdit(event) {
    var _a;
    console.log("title button double clicked");
    let titleElement = event.target;
    let listItem = titleElement.closest("li");
    // Create input field for editing
    let editInputField = document.createElement("input");
    editInputField.className = "edit-input";
    editInputField.type = "text";
    editInputField.value = ((_a = titleElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ""; // Use empty string if null
    let saveEditFunc = () => {
        let newTitle = editInputField.value.trim();
        if (newTitle) {
            // Update the title in the list item
            titleElement.textContent = newTitle;
            // Update the todo data in localStorage
            let taskId = parseInt(listItem.id);
            let mostRecentDataString = localStorage.getItem("storedData");
            let mostRecentData = mostRecentDataString ? JSON.parse(mostRecentDataString) : { tasks: [] };
            mostRecentData.tasks = mostRecentData.tasks.map(task => {
                if (task.id === taskId) {
                    return Object.assign(Object.assign({}, task), { title: newTitle });
                }
                return task;
            });
            localStorage.setItem("storedData", JSON.stringify(mostRecentData));
            storedData = mostRecentData; // Update local reference
            refreshTodoDisplay();
        }
        else {
            alert("Title cannot be empty!");
        }
    };
    // Handle saving with Enter key
    editInputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            saveEditFunc();
        }
    });
    // Handle saving when input loses focus
    editInputField.addEventListener("blur", () => {
        saveEditFunc();
    });
    titleElement === null || titleElement === void 0 ? void 0 : titleElement.replaceWith(editInputField);
    editInputField.focus();
}
// ========================
// EVENT HANDLING
// ========================
/**
 * Sets up all event listeners for the application
 * @param {HTMLElement} addTaskButton - The add task button element
 */
function setupEventListeners(addTaskButton) {
    // Add task button click handler
    addTaskButton.addEventListener("click", handleAddTask);
    // Delete button click handler (using event delegation)
    document.addEventListener("click", handleDeleteTask);
    // Status change handler (using event delegation)
    document.addEventListener("change", handleStatusChange);
    console.log("setting up event listeners");
}
/**
 * Handles adding a new task
 */
function handleAddTask() {
    let newTask = prompt("Enter new task title:");
    if (newTask) {
        // Create new todo object
        let newTodo = {
            id: storedData.tasks.length + 1,
            title: newTask,
            completed: false
        };
        // Add to data and save to localStorage
        storedData.tasks.push(newTodo);
        localStorage.setItem("storedData", JSON.stringify(storedData));
        // Refresh the display
        refreshTodoDisplay();
    }
    else {
        alert("Task title cannot be empty!");
    }
}
/**
 * Handles deleting a task (using event delegation)
 * @param {Event} event - The click event
 */
function handleDeleteTask(event) {
    const target = event.target;
    // Only handle clicks on delete buttons
    if (target.classList.contains("delete")) {
        let confirmDelete = confirm("Are you sure you want to delete this task?");
        if (!confirmDelete)
            return; // Exit if user cancels
        let taskId = target.closest("li").id;
        let mostRecentDataString = localStorage.getItem("storedData");
        let mostRecentData = mostRecentDataString ? JSON.parse(mostRecentDataString) : { tasks: [] };
        // Filter out the task to be deleted
        mostRecentData.tasks = mostRecentData.tasks.filter(task => task.id.toString() != taskId);
        // Save updated data and refresh display
        localStorage.setItem("storedData", JSON.stringify(mostRecentData));
        storedData = mostRecentData; // Update local reference
        refreshTodoDisplay();
    }
}
/**
 * Handles changing the status of a task (using event delegation)
 * @param {Event} event - The change event from the select dropdown
 */
function handleStatusChange(event) {
    const target = event.target;
    // Only handle changes on status select dropdowns
    if (target.classList.contains("status-select")) {
        let taskId = parseInt(target.dataset.taskId);
        let newStatus = target.value === "done"; // "done" = true, "not-done" = false
        // Get current data from localStorage
        let mostRecentDataString = localStorage.getItem("storedData");
        let mostRecentData = mostRecentDataString ? JSON.parse(mostRecentDataString) : { tasks: [] };
        // Find and update the task
        let taskToUpdate = mostRecentData.tasks.find(task => task.id === taskId);
        if (taskToUpdate) {
            taskToUpdate.completed = newStatus;
            // Save updated data and refresh display
            localStorage.setItem("storedData", JSON.stringify(mostRecentData));
            storedData = mostRecentData; // Update local reference
            refreshTodoDisplay();
        }
    }
}
// ========================
// APPLICATION INITIALIZATION
// ========================
/**
 * Initialize the application
 */
function initializeApp() {
    // Register the service worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log("service worker registered"))
            .catch(error => console.error("Service worker registration failed:", error));
    }
    // Setup the main UI elements
    setupUI();
    // Attempt to fetch and display existing data
    fetchData().then(data => {
        if (!data || !data.tasks || data.tasks.length === 0) {
            console.warn("No tasks available.");
        }
        else {
            console.log("Data fetched successfully:", data);
            displayTodos(data.tasks);
        }
    }, error => {
        console.error("Error fetching data:", error);
        alert(error);
    });
}
// Start the application when the script loads
initializeApp();
export {};
//# sourceMappingURL=script.js.map