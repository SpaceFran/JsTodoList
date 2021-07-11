export default class LocalStorage{

    getModel(model){
        this.model = model
    }

    save(){
        const todos = this.model.getTodos()
        localStorage.setItem('todos', JSON.stringify(todos)); //Convert the Array to string so it can be saved in the LocalStorage
    }

    retrieve(){
        return JSON.parse(localStorage.getItem('todos')); //Convert the String to Object so it can be used again as Array
    }

}