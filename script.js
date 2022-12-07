window.addEventListener('load', ()=> {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');
    
    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener ('change', e =>{
        localStorage.setItem('useername', e.target.value);
    })
    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();
    })

    const todo = {
        content: e.target.elements.content.value

    }
})

