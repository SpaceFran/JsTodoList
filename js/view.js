export default class View { //Only one import default per file and allows you to use whatever name you want when importing

    constructor(){
        this.model = null;
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        //Onlick add
        this.btnAdd = document.getElementById('add');
        this.btnAdd.onclick = () => this.addTodo(this.title.value, this.description.value);  
    }

    setModel(model){
        this.model = model;
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
        <td class="text-center"><input type="checkbox"></td>
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
    }
    
    removeTodo(row){
        this.model.removeTodo(row);
        row.parentElement.parentElement.remove();
    }
    
}