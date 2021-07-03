export default class LocalStorage{

    getModel(model){
        this.model = model
    }

    save(){
        const todos = this.model.getTodos()
        localStorage.setItem('todos', JSON.stringify(todos));
    }

}