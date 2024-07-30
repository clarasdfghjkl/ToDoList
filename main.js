const taskInput = document.querySelector('input')
const taskSubmit = document.querySelector('button')
const taskList = document.querySelector('ul')
taskSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li')
        li.textContent = taskText;
        li.style.paddingLeft = '10px';
        li.style.paddingTop = '5px';
        taskList.appendChild(li);
        taskInput.value = ''
        const btn = document.createElement('button')
        btn.textContent = 'Completada'
        li.appendChild(deleteTask());
        const p = document.getElementsByClassName('p')

        const tareas = document.querySelector('li')
        const message = document.querySelector('p')
        message.style.display = 'none'
    }
})
const taskArray = []

function deleteTask() {
    const deleteBtn = document.createElement('button');
    deleteBtn.className += 'btn-delete'
    deleteBtn.textContent = 'X';
    deleteBtn.style.padding = '3px'
    deleteBtn.style.width = '20%'
    deleteBtn.style.zIndex = '1'
    deleteBtn.style.borderRadius = '40%'
    deleteBtn.style.marginBottom = '5px'
    deleteBtn.style.marginRight = '5px'
    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        taskList.removeChild(item)
        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            const message = document.querySelector('p')
            message.style.display = 'block'
        }

        taskArray.splice(items.textContent)
    })

    return deleteBtn
}

function addElementsArr() {
    const taskItems = document.querySelectorAll('li');
    for (let i = 0; i < taskItems.length; i++) {
        taskArray.push(taskItems[i].textContent)
    }
}

