export default class Edit{

    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.completed = document.getElementById('modal-completed');
        this.save = document.getElementById('modal-btn');
        this.alert = document.getElementById('modal-alert'); 
    }

    getValues(todo){
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;
    }

    clickSave(todo){
        if (!this.title.value || !this.description.value){
            this.alert.classList.remove('d-none');
        }
        else{
            const btnDelete = document.getElementsByClassName(`id_of_${todo.id}_delete`)[0];
            const btnDeleteParent = btnDelete.parentElement.parentElement;
            btnDeleteParent.children[0].innerHTML = this.title.value
            btnDeleteParent.children[1].innerHTML = this.description.value
            btnDeleteParent.children[2].firstChild.checked = this.completed.checked;

            const todos = JSON.parse(localStorage.getItem('todos'));
            const selectedTodo = todo.id;
            console.log('Todo id', selectedTodo);
            const positionSelectedTodo = todos.findIndex((todo) => todo.id === selectedTodo);
            console.log('Todo position in the Array', positionSelectedTodo);
            const todoInArray = todos[positionSelectedTodo];
            todoInArray.title = this.title.value;
            todoInArray.description = this.description.value;
            todoInArray.completed = this.completed.checked;
            console.log('Titulo:', todoInArray.title, 'Descripcion:', todoInArray.description, 'Completed:', todoInArray.completed);

            localStorage.setItem('todos', JSON.stringify(todos));

            $('#modal').modal('toggle'); //Close the form on save
            location.reload();
        }
        
    }

}

