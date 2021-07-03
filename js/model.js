export default class Model { //Only one import default per file and allows you to use whatever name you want when importing

    constructor(){
        this.view = null;
        this.localstorage = null;
        this.todos = []; //This is our "Database"
        this.id = 0;
    }

    setView(view){
        this.view = view;
    }

    getTodos(){
        return this.todos;
    }

    addTodo(title, description){
        const todo = {
            id: this.id++,
            title,
            description,
            completed: false,
        }

        this.todos.push(todo);
        this.localstorage.save(); //Add the todo to the localstorage after we add the todo the the array.
        console.log(this.todos);
        return{...todo}; //Creating another todo exactly the same but we make sure the (const todo) one is kinda encapsulated.
    }

    removeTodo(row){ //This method receives the HTML element (button clicked)
        const index = row.classList.item(2);
        const find = this.todos.findIndex((todo) => `id_of_${todo.id}_delete` === index); //Returns the position of the element in the array
        this.todos.splice(find, 1); //Where it starts and how many to remove after that
        this.localstorage.save();
        console.log(this.todos);
    }

    toggleCompleted(toggle){
        const index = toggle.classList[0];
        const find = this.todos.findIndex((todo) => `id_of_${todo.id}_check` === index);
        if (toggle.checked){
            this.todos[find].completed = true;
            this.localstorage.save();
        }
        else{
            this.todos[find].completed = false;
            this.localstorage.save();
        }
        console.log(this.todos);
    }

    getLocalStorage(localstorage){
        this.localstorage = localstorage;
    }

}