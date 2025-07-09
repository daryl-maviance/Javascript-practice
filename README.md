## 🌐 Live Demo

🚀 **[View Live Application](https://daryl-todo-list.netlify.app/)**

Try out the Todo List application directly in your browser! The live demo is hosted on Netlify and includes all the features described below.

# DOM Practice - Todo List PWA

A modern, interactive Todo List Progressive Web Application (PWA) built with vanilla JavaScript, HTML, and CSS. This project demonstrates DOM manipulation, event handling, local storage, service workers, and asynchronous JavaScript concepts.

## 📷 Preview

### Desktop View
![Todo List Application Preview](images/preview.png)

### Mobile View
![Todo List Mobile Preview](images/preview_mobile.png)

The application features a fully responsive design that adapts seamlessly between desktop and mobile devices, with optimized layouts for each screen size.

## 🚀 Features

- **Add New Tasks**: Create new todo items with custom titles
- **Status Management**: Toggle task completion status via dropdown menu
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Data Persistence**: All tasks are saved to localStorage for session persistence
- **Responsive Design**: Clean, modern UI that works across devices
- **Asynchronous Data Loading**: Simulates API calls with Promise-based data fetching
- **Event Delegation**: Efficient event handling for dynamic content
- **Progressive Web App (PWA)**: Installable app with offline functionality
- **Service Worker**: Enables offline caching and improved performance
- **Mobile-First Design**: Optimized for both desktop and mobile devices

## 📁 Project Structure

```
javascript_dom_practice/
├── index.html          # Main HTML file
├── script.js           # Main JavaScript application logic
├── style.css          # Styling and responsive design
├── service-worker.js   # Service worker for PWA functionality
├── manifest.json       # Web app manifest for PWA
├── mockData.js        # Sample data structure
├── README.md          # Project documentation
└── images/            # Static assets
    ├── favicon128.ico
    ├── favicon256.ico
    └── preview.png
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling, flexbox, and responsive design
- **Vanilla JavaScript (ES6+)**: 
  - DOM manipulation
  - Event delegation
  - Local Storage API
  - Promises and async/await
  - ES6 modules
  - Array methods (map, filter, find)
- **Progressive Web App (PWA)**:
  - Service Worker for offline functionality
  - Web App Manifest for installability
  - Cache API for resource caching
  - Background sync capabilities

## 🏃‍♂️ Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code with Live Server extension (recommended for development)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daryl-maviance/Javascript-practice.git
   cd  javascript_dom_practice
   ```

2. **Open the application using Live Server:**
   
   **Install Live Server Extension (VS Code)**
   1. Open VS Code
   2. Go to Extensions (Ctrl+Shift+X)
   3. Search for "Live Server" by Ritwick Dey
   4. Click "Install"
   
   **Launch the Application**
   1. Right-click on `index.html` in VS Code
   2. Select "Open with Live Server"
   3. The application will automatically open in your default browser
   4. Live Server provides hot reload - changes are reflected instantly

3. **Access the application:**
   - Live Server URL: `http://127.0.0.1:5500/index.html` (or similar)
   - The server will automatically reload when you make changes to any file

## 💡 Usage

### Adding Tasks
1. Click the **"Add Task"** button
2. Enter a task title in the prompt
3. Click **"OK"** to add the task to your list

### Managing Task Status
- Use the dropdown menu next to each task to change its status
- Options: **"Not Completed"** or **"Completed"**
- Changes are automatically saved to localStorage

### Deleting Tasks
1. Click the **"Delete"** button next to any task
2. Confirm deletion in the dialog prompt
3. Task will be permanently removed from your list

### Installing as PWA
1. **On Desktop**: Look for the install icon in your browser's address bar
2. **On Mobile**: Use "Add to Home Screen" option in browser menu
3. **Offline Usage**: Once installed, the app works without internet connection

## 📱 Progressive Web App Features

### **Service Worker Implementation**
- **Offline Functionality**: App works without internet connection
- **Caching Strategy**: Static resources cached for instant loading
- **Background Sync**: Future updates can sync when connection returns
- **Performance**: Faster loading through intelligent caching

### **Web App Manifest**
- **Installable**: Add to home screen on mobile/desktop
- **App-like Experience**: Runs in standalone mode
- **Custom Branding**: App name, icons, and theme colors
- **Responsive Icons**: Multiple icon sizes for different devices

### **Mobile Optimization**
- **Responsive Design**: Adapts to all screen sizes
- **Touch-Friendly**: Optimized button sizes and spacing
- **Mobile-First**: Designed primarily for mobile experience
- **Portrait Orientation**: Optimized for vertical screen usage

## 🏗️ Code Architecture

### Main Components

#### **Data Management**
- `mockData`: Global data store for tasks
- `fetchData()`: Simulates asynchronous data fetching
- localStorage integration for data persistence

#### **UI Rendering**
- `displayTodos()`: Renders todo list in the DOM
- `setupUI()`: Creates and initializes main UI elements
- `refreshTodoDisplay()`: Updates display after data changes

#### **Event Handling**
- `handleAddTask()`: Processes new task creation
- `handleDeleteTask()`: Manages task deletion with confirmation
- `handleStatusChange()`: Updates task completion status
- Event delegation for dynamic content handling

#### **Application Flow**
```
initializeApp() → setupUI() → fetchData() → displayTodos()
                     ↓
              setupEventListeners()
                     ↓
              User Interactions → Update Data → Refresh Display
```



## 📊 Data Structure

### Task Object
```javascript
{
    id: number,           // Unique identifier
    title: string,        // Task description
    completed: boolean    // Completion status
}
```

### Storage Format
```javascript
{
    tasks: [
        { id: 1, title: "Sample Task", completed: false },
        { id: 2, title: "Another Task", completed: true }
    ]
}
```

## 🔧 Technical Highlights

### ES6 Features Used
- **Modules**: Import/export statements
- **Arrow Functions**: Concise function syntax
- **Template Literals**: String interpolation
- **Destructuring**: Object and array destructuring
- **Const/Let**: Block-scoped variables
- **Promises**: Asynchronous operations

### DOM Manipulation Techniques
- **Dynamic Element Creation**: `createElement()`, `appendChild()`
- **Event Delegation**: Single event listener for multiple elements
- **Query Selectors**: Modern DOM selection methods
- **classList API**: Dynamic CSS class management
- **innerHTML**: Dynamic HTML content generation

### Best Practices Implemented
- **Modular Code Structure**: Organized into logical sections
- **Error Handling**: Try-catch blocks and validation
- **User Experience**: Confirmation dialogs and user feedback
- **Performance**: Event delegation and efficient DOM updates
- **Maintainability**: Clear function names and comprehensive comments

## 🐛 Troubleshooting

### Common Issues

**"Cannot use import statement outside a module"**
- Ensure `<script type="module">` is used in HTML
- Use Live Server extension instead of opening files directly

**Live Server not working**
- Make sure Live Server extension is installed in VS Code
- Try restarting VS Code and launching Live Server again
- Check if port 5500 is available or use a different port

**Tasks not persisting**
- Check if localStorage is enabled in your browser
- Verify browser developer tools for storage data

**Dropdown not working**
- Ensure event delegation is properly set up
- Check console for JavaScript errors


## 📝 Learning Objectives

This project demonstrates:
- ✅ DOM manipulation and traversal
- ✅ Event handling and delegation
- ✅ Local storage implementation
- ✅ Asynchronous JavaScript with Promises
- ✅ ES6+ modern JavaScript features
- ✅ Modular code organization
- ✅ Data persistence strategies
- ✅ Progressive Web App development
- ✅ Service Worker implementation
- ✅ Offline-first application design
- ✅ Web App Manifest configuration
- ✅ Mobile-responsive design patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request



## 👨‍💻 Author

Built as a learning project to demonstrate DOM manipulation and vanilla JavaScript concepts.

---

**Happy Coding! 🎉**
