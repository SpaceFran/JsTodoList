document.addEventListener('DOMContentLoaded', function () { //Will not execute JS till the whole HTML document(DOM) is loaded.

    //Add Todos
    
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const btnAdd = document.getElementById('add');
    const alert = document.getElementById('alert');

    function addTodo() {

        if (title.value === '' || description.value === ''){
            alert.classList.remove('d-none');
            alert.innerText = 'Both Title and Description are required';
            return;
        }

        alert.classList.add('d-none');
        const row = table.children[1].insertRow();
        row.innerHTML = `
        <td>
            ${title.value}
        </td>
        <td>
            ${description.value}
        </td>
        <td class="text-center"><input type="checkbox"></td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
            <button class="btn btn-danger mb-1 ml-1">
                <i class="fa fa-trash"></i>
            </button>
        </td>
        `

        title.value = '';
        description.value = '';
    
        const btnEdit = document.getElementsByClassName('btn-primary');
        const btnDelete = document.getElementsByClassName('btn-danger');

        for (let keyEdit = 0; keyEdit < btnEdit.length; keyEdit++){
            btnEdit[keyEdit].setAttribute('key', keyEdit);
            btnEdit[keyEdit].onclick = function(e){
                console.log(this.getAttribute('key'))
            }
        }

        for (let keyDelete = 0; keyDelete < btnDelete.length; keyDelete++){
            btnDelete[keyDelete].setAttribute('key', keyDelete);
            btnDelete[keyDelete].onclick = function(e){
                this.parentElement.parentElement.remove()
            }
        }

    }

    btnAdd.onclick = addTodo;


})