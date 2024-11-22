// Create Task
document.getElementById('create-task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const category = document.getElementById('category').value;

    try {
        const response = await fetch('/tasks/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, dueDate, category }),
        });
        if (response.ok) alert('Task Created Successfully!');
    } catch (error) {
        alert('Error creating task');
    }
});

// Fetch Tasks
document.getElementById('fetch-tasks-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('/tasks/gettasks');
        const tasks = await response.json();
        renderTasks(tasks);
    } catch (error) {
        alert('Error fetching tasks');
    }
});

// Render Tasks
function renderTasks(tasks) {
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = tasks.map(task => `
        <div class="task-item ${task.isCompleted ? 'completed' : ''}">
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p><strong>Due Date:</strong> ${task.dueDate}</p>
                <p><strong>Category:</strong> ${task.category}</p>
                <p class="completed-status">${task.isCompleted ? '✔ Completed' : ''}</p>
            </div>
            <div class="task-buttons">
                ${!task.isCompleted ? `<button onclick="markAsComplete('${task._id}')">Mark as Complete</button>` : ''}
                <button onclick="deleteTask('${task._id}')">Delete Task</button>
            </div>
        </div>
    `).join('');
}

// Mark Task as Complete
async function markAsComplete(taskId) {
    try {
        const response = await fetch(`/tasks/edit/${taskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isCompleted: true }),
        });
        if (response.ok) {
            alert('Task marked as complete!');
            document.getElementById('fetch-tasks-btn').click();
        }
    } catch (error) {
        alert('Error marking task as complete');
    }
}

// Delete Task
async function deleteTask(taskId) {
    try {
        const response = await fetch(`/tasks/delete/${taskId}`, { method: 'DELETE' });
        if (response.ok) {
            alert('Task deleted successfully!');
            document.getElementById('fetch-tasks-btn').click();
        }
    } catch (error) {
        alert('Error deleting task');
    }
}


// Fetch and populate tasks for editing
async function populateTasksForEditing() {
    try {
        const response = await fetch('/tasks/gettasks');
        const tasks = await response.json();

        const taskSelect = document.getElementById('taskSelect');
        taskSelect.innerHTML = ''; // Clear existing options

        tasks.forEach((task) => {
            const option = document.createElement('option');
            option.value = task._id;
            option.textContent = task.title;
            taskSelect.appendChild(option);
        });

        taskSelect.addEventListener('change', () => {
            const selectedTask = tasks.find(task => task._id === taskSelect.value);
            if (selectedTask) {
                document.getElementById('editTitle').value = selectedTask.title;
                document.getElementById('editDescription').value = selectedTask.description;
                document.getElementById('editDueDate').value = selectedTask.dueDate.split('T')[0]; // Format date
                document.getElementById('editCategory').value = selectedTask.category;
            }
        });

        // Trigger the change event to prefill fields for the first task
        if (tasks.length > 0) {
            taskSelect.dispatchEvent(new Event('change'));
        }
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Update task
async function updateTask() {
    const taskId = document.getElementById('taskSelect').value;
    const updatedTask = {
        title: document.getElementById('editTitle').value,
        description: document.getElementById('editDescription').value,
        dueDate: document.getElementById('editDueDate').value,
        category: document.getElementById('editCategory').value
    };

    try {
        const response = await fetch(`/tasks/edit/${taskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask)
        });

        console.log(response);

        const result = await response.json();
        if (response.ok) {
            alert('Task updated successfully!');
            populateTasksForEditing(); // Refresh the dropdown
        } else {
            alert(`Failed to update task: ${result.message}`);
        }
    } catch (error) {
        console.error('Error updating task:', error);
    }
}

// Event listeners
document.getElementById('updateTaskBtn').addEventListener('click', updateTask);

// Initialize
populateTasksForEditing();
