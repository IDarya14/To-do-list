let but = document.querySelector('.but');

let todo = document.querySelector('.todo');

let taskList = [];

let newTask = function(id) { 
    
    taskList.map(elem=>{
        let div = document.createElement('div');
        div.classList.add('list');
        todo.append(div);
        div.setAttribute('data-id', id);
        
        let onCheck = () => {
            chkbox(checkboxElem, div, deleteButton);
        }
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.addEventListener('click', onCheck);
        checkboxElem.checked = elem.checked;
        div.append(checkboxElem);
        
        let text = document.createElement('span');
        text.innerHTML=elem.text;
        div.append(text);
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML='x';
        deleteButton.addEventListener('click', deleteTask);
        div.append(deleteButton);
        
    })
};


let createTask = () => {
    let business = document.querySelector('.business');
    let id = Math.random();
    taskList.push({text: business.value, checked: false, id: id } );
    todo.innerHTML='';
    newTask();
};


let chkbox = (checkboxElem, div, deleteButton) => {    
    if (checkboxElem.checked){
        div.classList.add('chbtrue');
        deleteButton.classList.add('deleteButton1');
    }else{
        console.log(div);
        div.classList.remove('chbtrue');
        div.classList.add('list');
        deleteButton.classList.remove('deleteButton1');
        deleteButton.classList.add('deleteButton');
    }
};


let deleteTask = taskList.find((elem) => elem.id == id);




but.addEventListener('click', createTask);

