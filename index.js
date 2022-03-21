const but = document.querySelector('.but');
const todo = document.querySelector('.todo');

const taskList = [];

const newTask = () => {
  todo.innerHTML = '';

  taskList.map((elem) => {
    const div = document.createElement('div');
    div.classList.add('list');
    todo.append(div);
    div.setAttribute('data-id', elem.id);

    const onCheck = () => {
      chkbox(checkboxElem, div, deleteButton);
    };

    const item = document.createElement('div');
    item.classList.add('item');
    div.append(item);

    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.addEventListener('click', onCheck);
    checkboxElem.checked = elem.checked;
    div.append(checkboxElem);

    const text = document.createElement('div');
    text.classList.add('text');
    text.innerHTML = elem.text;
    div.append(text);

    item.append(checkboxElem);
    item.append(text);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = 'x';
    deleteButton.addEventListener('click', () => deleteTask(elem.id));
    div.append(deleteButton);
  });
};

const createTask = () => {
  let business = document.querySelector('.business');
  let id = Math.random();
  taskList.push({ text: business.value, checked: false, id: id });
  business.value = '';
  newTask();
};
but.addEventListener('click', createTask);

const chkbox = (checkboxElem, div, deleteButton) => {
  if (checkboxElem.checked) {
    div.classList.add('chbtrue');
    deleteButton.classList.add('deleteButton1');
  } else {
    div.classList.remove('chbtrue');
    div.classList.add('list');
    deleteButton.classList.remove('deleteButton1');
    deleteButton.classList.add('deleteButton');
  }
};

const deleteTask = (id) => {
  const item = taskList.find((elem) => {
    return elem.id === id;
  });
  const index = taskList.findIndex((elem) => {
    return +elem.id === +item.id;
  });
  taskList.splice(index, 1);
  console.log(taskList);
  newTask();
};
