const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let toDoData = [];

const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
    toDoData.forEach(function (item) {
        const li = document.createElement('li');
        localStorage.setItem(toDoData, JSON.stringify(toDoData));
        toDoData = JSON.parse(localStorage.getItem('toDoData'))
        li.classList.add('todo-item');

        li.innerHTML = `<span class="text-todo">${item.text}</span>
<div class="todo-buttons">
<button class="todo-remove"></button>
<button class="todo-complete"></button>
</div>`;
        li.querySelector('.todo-remove').addEventListener('click', function () {
            li.remove();
        });

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        });




    })
}

todoControl.addEventListener('submit', function (event) {
    event.preventDefault();


    if (headerInput.value !== '') {
        const newTodo = {
            text: headerInput.value,
            completed: false
        }

        toDoData.push(newTodo);
        headerInput.value = '';
        render()
    }


})