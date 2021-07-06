export default class Edit{

    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.completed = document.getElementById('modal-completed');
        this.save = document.getElementById('modal-btn');
        this.alert = document.getElementById('modal-alert'); 
    }

    clickSave(todo){
        if (this.title.value === '' || this.description.value === ''){
            this.alert.classList.remove('d-none');
        }
        else{
            this.alert.classList.add('d-none');
        }
        todo.title = this.title.value;
        todo.description = this.title.description;
    }

    getValues(todo){
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;
    }

}

