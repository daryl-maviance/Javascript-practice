## 🌐 Live Demo

🚀 **[View Live Application](https://daryl-todo-list.netlify.app/)**

Try out the Todo List application directly in your browser! The live demo is hosted on Netlify and includes all the features described below.

# DOM Practice - Todo List PWA

A modern, interactive Todo List Progressive Web Application (PWA) built with **TypeScript**, HTML, and CSS. This project demonstrates DOM manipulation, event handling, local storage, service workers, and asynchronous programming concepts with full type safety.

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
- **TypeScript**: Full type safety and enhanced developer experience
- **Modern Build Process**: TypeScript compilation with proper type checking

## 📁 Project Structure

```
javascript_dom_practice/
├── index.html          # Main HTML file
├── script.ts           # Main TypeScript application logic
├── script.js           # Compiled JavaScript (generated)
├── style.css          # Styling and responsive design
├── service-worker.js   # Service worker for PWA functionality
├── manifest.json       # Web app manifest for PWA
├── mockData.js        # Sample data structure
├── mockData.ts        # TypeScript mock data (ignored)
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── .gitignore         # Git ignore rules
├── README.md          # Project documentation
└── images/            # Static assets
    ├── app_icon256.png
    ├── favicon.ico
    ├── preview_mobile.png
    └── preview.png
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling, flexbox, and responsive design
- **TypeScript**: 
  - Strong typing and interfaces
  - DOM manipulation with type safety
  - Event delegation with proper type casting
  - Local Storage API with null safety
  - Promises and async/await with return types
  - ES6+ features compiled to ES2016
  - Array methods with generic types
- **Progressive Web App (PWA)**:
  - Service Worker for offline functionality
  - Web App Manifest for installability
  - Cache API for resource caching
  - Background sync capabilities

## 🏃‍♂️ Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- **Node.js** (version 14 or higher)
- **npm** package manager
- VS Code with Live Server extension (recommended for development)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daryl-maviance/Javascript-practice.git
   cd javascript_dom_practice
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Development Setup:**
   
   **Compile TypeScript**
   ```bash
   npx tsc
   ```
   
   **Launch with Live Server (VS Code):**
   1. Install Live Server Extension in VS Code
   2. Right-click on `index.html`
   3. Select "Open with Live Server"
   4. TypeScript will auto-compile when files change



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
- **Interfaces**: `Todo` and `MockData` for type safety
- `mockData`: Typed global data store for tasks
- `fetchData()`: Promise-based async function with return types
- localStorage integration with null safety checks

#### **UI Rendering**
- `displayTodos(todos: Todo[])`: Type-safe todo list rendering
- `setupUI()`: Creates and initializes main UI elements
- `refreshTodoDisplay()`: Updates display after data changes
- Null safety checks for DOM operations

#### **Event Handling**
- `handleAddTask()`: Processes new task creation
- `handleDeleteTask(event: Event)`: Type-safe event handling
- `handleStatusChange(event: Event)`: Status updates with type casting
- `setupEventListeners(addTaskButton: HTMLButtonElement)`: Typed parameters
- Event delegation with proper type guards

#### **Application Flow**
```
initializeApp() → setupUI() → fetchData() → displayTodos()
                     ↓
              setupEventListeners()
                     ↓
              User Interactions → Update Data → Refresh Display
```



## 📊 Data Structure

### Task Object (TypeScript Interface)
```typescript
interface Todo {
    id: number;           // Unique identifier
    title: string;        // Task description
    completed: boolean;   // Completion status
}
```

### Mock Data Structure
```typescript
interface MockData {
    tasks: Todo[];
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

### TypeScript Features Used
- **Interfaces**: Type definitions for data structures
- **Type Annotations**: Function parameters and return types
- **Type Casting**: Safe DOM element type conversion
- **Null Safety**: Optional chaining and null checks
- **Generic Types**: Array methods with proper typing
- **Union Types**: Handling multiple possible types
- **Non-null Assertion**: `!` operator where values are guaranteed

### DOM Manipulation Techniques
- **Type-Safe Element Creation**: `createElement()` with proper typing
- **Event Delegation**: Single event listener with type guards
- **Query Selectors**: Modern DOM selection with null checks
- **classList API**: Dynamic CSS class management
- **innerHTML**: Dynamic HTML content generation with safety

### Best Practices Implemented
- **Strong Typing**: All functions have proper type annotations
- **Error Handling**: Try-catch blocks and validation
- **User Experience**: Confirmation dialogs and user feedback
- **Performance**: Event delegation and efficient DOM updates
- **Maintainability**: Clear interfaces and comprehensive comments
- **Build Process**: TypeScript compilation with watch mode

## 🐛 Troubleshooting

### Common Issues

**TypeScript Compilation Errors**
- Ensure all interfaces are properly defined
- Check for null safety issues with `!` or optional chaining `?.`
- Verify proper type casting for DOM elements (`as HTMLElement`)
- Run `tsc --noEmit` to check for type errors without compiling

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
- Verify TypeScript compilation completed successfully


## 📝 Learning Objectives

This project demonstrates:
- ✅ TypeScript fundamentals and best practices
- ✅ DOM manipulation with type safety
- ✅ Event handling and delegation with proper typing
- ✅ Local storage implementation with null safety
- ✅ Asynchronous JavaScript with typed Promises
- ✅ Interface design and type definitions
- ✅ Modern build processes (TypeScript compilation)
- ✅ Data persistence strategies
- ✅ Progressive Web App development
- ✅ Service Worker implementation
- ✅ Offline-first application design
- ✅ Web App Manifest configuration
- ✅ Mobile-responsive design patterns
- ✅ Type-safe error handling

## 🔗 Development Files

### Ignored Files (`.gitignore`)
The following files are excluded from version control:
- `/node_modules` - Package dependencies
- `package-lock.json` - Lock file (team uses yarn.lock)
- `mockData.ts` - Generated TypeScript mock data file


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request



## 👨‍💻 Author

Built as a learning project to demonstrate DOM manipulation, TypeScript development, and modern web application concepts with full type safety.

---

**Happy Coding with TypeScript! 🎉✨**
