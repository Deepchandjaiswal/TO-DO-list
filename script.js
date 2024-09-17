document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Add task event
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="complete-task">Complete</button>
            <button class="remove-task">Remove</button>
        `;

        // Complete task event
        li.querySelector('.complete-task').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Remove task event
        li.querySelector('.remove-task').addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    });

    // Optional: Allow pressing Enter to add tasks
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});