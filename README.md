Task Management System Backend
==============================

This project is a To-Do List/Task Management System Backend built with Node.js, Express.js, and MongoDB. It provides an interface for managing tasks, including features like creating tasks, viewing tasks, editing task details, marking tasks as completed, categorizing tasks, and deleting tasks. The application includes both an API and a simple frontend interface for testing and interacting with the endpoints.

* * * * *

Requirements
------------

The project satisfies the following requirements:

1.  Task Management Features:

    -   Create tasks with a title, description, due date, and category.
    -   Fetch and view all tasks.
    -   Edit task details (excluding the "Mark as Complete" status).
    -   Mark tasks as completed.
    -   Delete tasks.
    -   Categorize tasks using predefined categories.
2.  Validation:

    -   Ensures the title is not empty.
    -   Prevents marking a task as complete if already completed.
3.  Data Persistence:

    -   Tasks are stored and retrieved using MongoDB.
4.  Frontend Interface:

    -   A user-friendly UI available at the default route (`/`) for interacting with the backend.

* * * * *

Hosted Application
------------------

You can directly use/test the application without setting it up locally at the hosted URL:
[Task Management System on Vercel](https://task-management-system-backend-dw7t.vercel.app/)

![image](https://github.com/user-attachments/assets/ab874b89-b733-436a-8512-9d80b0e80a35)


* * * * *

Key Features
------------

-   Interactive frontend UI for testing the backend.
-   Easy-to-use API with proper validation and error handling.
-   Hosted on Vercel for quick access without local setup.
-   Supports task categorization and validation.

---

## Technologies Used
- **Node.js** - Backend runtime
- **HTML/CSS/JS** - For the UI
- **Express.js** - Web framework for Node.js
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Postman** - For API testing
- **Vercel** - For Deployment

---

## Prerequisites
Ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (running locally or use MongoDB Atlas)

---

Local Setup Instructions
------------------------

To set up the project locally, follow these steps:

### 1. Clone the repository:
```
git clone https://github.com/sobhik-sawdagar/task-management-system-backend.git
cd task-management-system-backend
```

### 2. Install dependencies:
```
npm install
```

### 3. Create a `.env` file in the root directory and set up the following environment variables:
```
MONGO_URI=your-mongodb-connection-string - Ex. MONGODB_URL=mongodb://localhost:27017/todo_db
PORT=your-preferred-port (default: 3000)
```

### 4. Start the server:
```
npm start || npm server.js
```

### 5. Access the application:
```
- Backend endpoints: http://localhost:3000
- Frontend UI: http://localhost:3000/
```

* * * * *

Endpoints
---------

Below are the available endpoints and their functionalities:

### 1. Create a Task
  **POST** `/tasks/create`
  - Description: Create a new task.
  - Request Body (JSON):
```
    {
      "title": "Task title",
      "description": "Task description",
      "dueDate": "YYYY-MM-DD",
      "category": "Work"
    }
```

### 2. Fetch All Tasks
  **GET** `/tasks/gettasks`
  - Description: Retrieve all tasks stored in the database.

### 3. Mark Task as Completed
  **PUT** `/tasks/edit/:id`
  - Description: Mark a task as completed.
  - Request Body: JSON
```
{
  "isCompleted": true
}
```

### 4. Edit Task Details
  **PUT** `/tasks/edit/:id`
  - Description: Update the title, description, due date, or category of a task.
  Request Body (JSON):
```
    {
      "title": "Updated title",
      "description": "Updated description",
      "dueDate": "YYYY-MM-DD",
      "category": "Updated category"
    }
```

### 5. Delete a Task
  **DELETE** `/tasks/delete/:id`
  - Description: Delete a task from the database.

* * * * *

Testing the Endpoints
---------------------

### Using Postman or any API Testing Tool:

1.  Import the endpoints into your API testing tool.
2.  Use the base URL:
    -   Local: `http://localhost:3000`
    -   Hosted: `https://task-management-system-backend-dw7t.vercel.app`
3.  Send requests to the endpoints and verify the responses.
#### Example Usage:
- Create a Task:

  ![image](https://github.com/user-attachments/assets/29a2bd40-64e4-4e41-a5e6-9de424224873)


- Update Details:

  ![image](https://github.com/user-attachments/assets/66db13eb-82d2-40e6-8244-68dffa3cdd38)


- Mark as Complete:

  ![image](https://github.com/user-attachments/assets/b35d6fbd-f925-4751-bf3b-098436a09ccc)


- Delete a Task:
  
  ![image](https://github.com/user-attachments/assets/20cd73e2-276d-40b5-b927-87a1d2283bfa)


- View/Fetch all Tasks

  ![image](https://github.com/user-attachments/assets/bced858b-fca4-4215-a54a-c7bd9b77ebea)



### Using the User Interface:

1.  Access the frontend interface at the default route (`/`):
    -   Local: `http://localhost:3000`
    -   Hosted: `https://task-management-system-backend-dw7t.vercel.app`
2.  Perform actions like creating, fetching, editing, marking as complete, and deleting tasks interactively.

* * * * *
