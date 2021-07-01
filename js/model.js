export default class Model { //Only one import default per file and allows you to use whatever name you want when importing

    constructor(){
        this.view = null;
        this.todos = [];
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
        console.log(this.todos);
        return{...todo}; //Creating another todo exactly the same but we make sure the (const todo) one is kinda encapsulated.
    }

    removeTodo(row){ //This method receives the HTML element (button clicked)
        const index = row.classList.item(2);
        const find = this.todos.findIndex((todo) => `id_of_${todo.id}_delete` === index); //Returns the index of the element in the array
        this.todos.splice(find, 1); //Where it starts and how many to remove after that
        console.log(this.todos);
    }
}