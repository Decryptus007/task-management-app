# Task Management App

A modern, creative, and fully responsive Task Management application built with **React.js** and **TypeScript**. This app allows users to manage their tasks by adding, editing, deleting, and viewing tasks, along with features such as task categorization, drag-and-drop task reordering, and more.

---

## Features

- **Task Management**:
  - Add, edit, delete, and view tasks.
  - Assign tasks to categories (e.g., Work, Personal, Urgent).
  - Search and filter tasks by category or keyword.
- **Drag-and-Drop Task Reordering**:

  - Reorder tasks easily via drag-and-drop functionality.

- **Unique Features**:
  - **Random Task Generation**: Tasks are added with random titles and categories for variety.
  - **Task Completion Progress Bar**: Displays a progress bar based on task completion (in development).
  - **Dark Mode Toggle**: A button to toggle between light and dark themes (in development).

---

## Technologies Used

- **React.js** - JavaScript library for building user interfaces.
- **TypeScript** - Typed superset of JavaScript for type safety.
- **Tailwind CSS** - Utility-first CSS framework for styling the frontend.
- **React Context** - For managing global state across components.
- **React Beautiful DND** - For implementing drag-and-drop functionality.
- **Vite** - Build tool that aims to provide a faster and leaner development experience.
- **pnpm** - Fast, disk space-efficient package manager.

---

## Installation and Setup

Follow these steps to set up the app locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/decryptus07/task-management-app.git
   cd task-management-app
   ```

2. **Install Dependencies**:
   We use pnpm as the package manager. If you don't have it installed, you can install it globally:

   ```bash
   npm install -g pnpm
   ```

   Then, install the project dependencies:

   ```bash
   pnpm install
   ```

3. **Start the Mock Backend**:
   The app uses JSON Server to simulate a backend. To start the mock backend:

   ```bash
     pnpm run backend
   ```

   This will start the backend at http://localhost:5000.

4. **Start the Development Server**:
   After starting the backend, run the app locally:
   ```bash
   pnpm dev
   ```
   This will run the app at http://localhost:5173.
