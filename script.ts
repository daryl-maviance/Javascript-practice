// ========================
// DATA MANAGEMENT
// ========================

/**
 * Load existing data from localStorage or initialize as null
 * This allows the app to persist data between sessions
 */

interface Todo{
    id: number;
    title:string;
    completed:boolean
}

interface MockData{
    tasks: Todo[];
}

let root = document.querySelector("#root");
let mockDataString: string | null =  localStorage.getItem("mockData");
let mockData: MockData = mockDataString ? JSON.parse(mockDataString) : { tasks: [] };

/**
 * Simulates an asynchronous data fetch operation
 * @returns {Promise} Promise that resolves with mockData or rejects if no data
 */
async function fetchData(): Promise<MockData> {
    return new Promise((resolve, reject) => {
        if (!mockData) {
            reject("No data available");
        } else {
            // Simulate network delay
            setTimeout(function() {
                resolve(mockData);
            }, 1000);
        }
    });
}

// ========================
// UI RENDERING FUNCTIONS
// ========================

/**
 * Creates and displays the todo list in the DOM
 * @param {Array} todos - Array of todo objects to display
 */
function displayTodos(todos:Todo[]) {
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

    let titleElements = ul?.querySelectorAll(".title");
    titleElements.forEach(titleElement => {
        titleElement.addEventListener("dblclick", handleEdit)
    })
    // Add the complete list to the root element
    root?.appendChild(ul);

}

/**
 * Handles Task edit
 */
function handleEdit(event:Event){
    console.log("title  button double clicked");

    let titleElement = event.target as HTMLElement;
    let listItem = titleElement.closest("li");
    // Create input field for editing
    let editInpuField = document.createElement("input");
    editInpuField.className = "edit-input";
    editInpuField.type = "text";
    editInpuField.value = titleElement.textContent?.trim() || ""; // Use empty string if null

    // Create a cancel edit button
    let saveEdit = document.createElement("button");
    saveEdit.textContent = "Save Edit";
    saveEdit.className = "save-edit";

    let saveEditFunc = () => {
        let newTitle = editInpuField.value.trim();
            if (newTitle) {
                // Update the title in the list item
                titleElement!.textContent = newTitle;
                
                // Update the todo data in localStorage
                let taskId = parseInt(listItem!.id);
                let mostRecentDataString:string | null = localStorage.getItem("mockData")
                let mostRecentData: MockData  = mostRecentDataString? JSON.parse(mostRecentDataString) : {tasks:[]};
                 mostRecentData.tasks = mostRecentData.tasks.map(task => {
                    if (task.id === taskId) {
                        return { ...task, title: newTitle };
                    }
                    return task;
                 });
                localStorage.setItem("mockData", JSON.stringify(mostRecentData));
                mockData = mostRecentData; // Update local reference
                refreshTodoDisplay();
                
            }else{
                alert("Title cannot be empty!");
            }
        }
    saveEdit.addEventListener("click", () => {
        editInpuField.replaceWith(titleElement!);
        saveEdit.remove();
        saveEditFunc();

        
    });

    //Handles the saving of an edited task

    editInpuField.addEventListener("keydown", (event) => {
        if(event.key === "Enter") {
            saveEditFunc();
        }
    })

    editInpuField.addEventListener("blur", (event) => {
            saveEditFunc();
    })

    titleElement?.replaceWith(editInpuField);
    editInpuField.focus();
}

/**
 * Creates and sets up the main UI elements
 */
function setupUI() {
    // Create heading
    let heading = document.createElement("h1");
    heading.textContent = "Todo List";

    let instructions = document.createElement('em')
    instructions.textContent ="Double tap on the  Ttle  to edit "
    
    // Create add task button
    let addTask = document.createElement("button");
    addTask.textContent = "Add Task";
    addTask.className = "add-task";


    
    // Append main elements to the DOM
    root?.appendChild(heading);
    root?.appendChild(instructions)
    root?.appendChild(addTask);
    
    // Setup event listeners after elements are created
    setupEventListeners(addTask);
}

// ========================
// EVENT HANDLING
// ========================

/**
 * Sets up all event listeners for the application
 * @param {HTMLElement} addTaskButton - The add task button element
 */
function setupEventListeners(addTaskButton:HTMLButtonElement) {
    // Add task button click handler
    addTaskButton.addEventListener("click", handleAddTask);
    
    // Delete button click handler (using event delegation)
    document.addEventListener("click", handleDeleteTask);
    
    // Status change handler (using event delegation)
    document.addEventListener("change", handleStatusChange);
    console.log("settting  up event listeners")
}

/**
 * Handles adding a new task
 */
function handleAddTask() {
    let newTask:string | null = prompt("Enter new task title:");
    
    if (newTask) {
        // Create new todo object
        let newTodo: Todo = {
            id: mockData.tasks.length + 1,
            title: newTask,
            completed: false
        };
        
        // Add to data and save to localStorage
        mockData.tasks.push(newTodo);
        localStorage.setItem("mockData", JSON.stringify(mockData));
        
        // Refresh the display
        refreshTodoDisplay();
    } else {
        alert("Task title cannot be empty!");
    }
}

/**
 * Handles deleting a task (using event delegation)
 * @param {Event} event - The click event
 */
function handleDeleteTask(event:Event) {
    const target = event.target as HTMLElement;
    // Only handle clicks on delete buttons
    if (target.classList.contains("delete")) {
        let confirmDelete = confirm("Are you sure you want to delete this task?");
        if (!confirmDelete) return; // Exit if user cancels
        let taskId = target.closest("li")!.id;
        let mostRecentDataString:string | null = localStorage.getItem("mockData")
        let mostRecentData: MockData  = mostRecentDataString? JSON.parse(mostRecentDataString) : {tasks:[]};
        
        // Filter out the task to be deleted
        mostRecentData.tasks = mostRecentData.tasks.filter(task => task.id.toString() != taskId);
        
        // Save updated data and refresh display
        localStorage.setItem("mockData", JSON.stringify(mostRecentData));
        mockData = mostRecentData; // Update local reference
        refreshTodoDisplay();
    }
}

/**
 * Handles changing the status of a task (using event delegation)
 * @param {Event} event - The change event from the select dropdown
 */
function handleStatusChange(event:Event) {

    const target = event.target as HTMLSelectElement;
    // Only handle changes on status select dropdowns
    if (target.classList.contains("status-select")) {
        let taskId = parseInt(target.dataset.taskId!);
        let newStatus = target.value === "done"; // "done" = true, "not-done" = false
        
        // Get current data from localStorage
        let mostRecentDataString:string | null = localStorage.getItem("mockData")
        let mostRecentData: MockData  = mostRecentDataString? JSON.parse(mostRecentDataString) : {tasks:[]};
        
        // Find and update the task
        let taskToUpdate = mostRecentData.tasks.find(task => task.id === taskId);
        if (taskToUpdate) {
            taskToUpdate.completed = newStatus;
            
            // Save updated data and refresh display
            localStorage.setItem("mockData", JSON.stringify(mostRecentData));
            mockData = mostRecentData; // Update local reference
            refreshTodoDisplay();
        }
    }
}

// ========================
// UTILITY FUNCTIONS
// ========================

/**
 * Refreshes the todo list display by removing the old list and creating a new one
 */
function refreshTodoDisplay() {
    // Remove existing todo list if it exists
    document.querySelector(".todo-list")?.remove();
    
// Display updated todos
    if (mockData.tasks.length === 0) {
        console.warn("No tasks available.");
        alert("No tasks available.");
    
    }else{
        displayTodos(mockData.tasks);
    }
}

// ========================
// APPLICATION INITIALIZATION
// ========================

/**
 * Initialize the application
 */
function initializeApp() {
    //register  the  service worker

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
        .then(()=> console.log("service  worker registered"))
        .catch(error => console.error("Service worker registration failed:", error));
    }

    // Setup the main UI elements
    setupUI();
    
    // Attempt to fetch and display existing data
    fetchData().then(
        data => {
        if (!data || !data.tasks || data.tasks.length === 0) {
                console.warn("No tasks available.");
                
        }else{
             console.log("Data fetched successfully:", data);
            displayTodos(data.tasks);
        }
           
        },
        error => {
            console.error("Error fetching data:", error);
            alert(error);
        }
    );
}

// Start the application when the script loads
initializeApp();