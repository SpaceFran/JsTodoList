import Edit from './edit.js';

export default class View { //Only one import default per file and allows you to use whatever name you want when importing

    constructor(){
        this.model = null;
        this.localstorage = null;
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        //Onlick add
        this.btnAdd = document.getElementById('add');
        this.btnAdd.onclick = () => this.addTodo(this.title.value, this.description.value);
        
        this.edit = new Edit();
    }

    setModel(model){
        this.model = model;
    }

    getLocalStorage(localstorage){
        this.localstorage = localstorage;
    }

    render(){
        const todos = this.model.getTodos();
        todos.forEach(todo => this.createRow(todo));
    }

    addTodo(title, description){
        const alert = document.getElementById('alert');
        if (title === '' || description === ''){
            alert.classList.remove('d-none');
            alert.innerText = 'Both Title and Description are required';
        }
        else{
            alert.classList.add('d-none');
            
            //Calling the addTodo method of model.js
            const todo = this.model.addTodo(title, description);
            this.createRow(todo);
            
            //Set them to "" after adding a todo
            this.title.value = '';
            this.description.value = '';
        }
    }

    createRow(todo){
        const table = document.getElementById('table'); 
        const row = table.children[1]; //Get the tbody
        const rowBody = row.insertRow(); //Insert row into body
        rowBody.innerHTML = `
        <td>
            ${todo.title}
        </td>
        <td>
            ${todo.description}
        </td>
        <td class="text-center"><input class="id_of_${todo.id}_check" type="checkbox"></td>
        <td class="text-right">
            <button class="btn btn-primary id_of_${todo.id}_edit mb-1">
                <i class="fa fa-pencil"></i>
            </button>
            <button class="btn btn-danger id_of_${todo.id}_delete mb-1 ml-1">
                <i class="fa fa-trash"></i>
            </button>
        </td>
        `;

        //Onclick Remove
        const btnDelete = document.getElementsByClassName(`id_of_${todo.id}_delete`)[0];
        btnDelete.onclick = () => this.removeTodo(btnDelete);

        //Checkbox mark as completed or not
        const toggle = document.getElementsByClassName(`id_of_${todo.id}_check`)[0];
        toggle.checked = todo.completed;
        toggle.onclick = () => this.toggleCompleted(toggle);

        //Onclick Edit
        const btnEdit = document.getElementsByClassName(`id_of_${todo.id}_edit`)[0];
        btnEdit.onclick = () => {
            const modalTitle = document.getElementsByClassName('modal-title')[0];
            modalTitle.innerHTML = `<p>Edit todo: ${todo.title}</p>`;
            btnEdit.setAttribute('data-toggle', 'modal');
            btnEdit.setAttribute('data-target', '#modal');
            const save = document.getElementById('modal-btn');
            this.edit.getValues({
                id: todo.id,
                title: rowBody.children[0].innerText,
                description: rowBody.children[1].innerText,
                completed: rowBody.children[2].children[0].checked,
            }); //Get the todo values and paste it in the edit form fields.
            save.onclick = () => {
                this.edit.clickSave(todo); //Get the form values and paste it in the row
            };
        }   
        
    }
    
    removeTodo(row){
        this.model.removeTodo(row);
        row.parentElement.parentElement.remove();
    }

    toggleCompleted(toggle){
        this.model.toggleCompleted(toggle);
    }
    
}