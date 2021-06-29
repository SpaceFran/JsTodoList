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

}