let rootNode = document.getElementById('root');
let maxLength = 0;

const title = document.createElement('h2');
title.classList.add('title');
title.textContent = 'TODO Cat List';

const form = document.createElement('form');
form.classList.add('form');

const formBlockInput = document.createElement('div');
formBlockInput.classList.add('formBlockInput');

const input = document.createElement('input');
input.id = 'addAction';
input.placeholder = 'Add new action';

const button = document.createElement('button');
button.classList.add('button_add');

const icon = document.createElement('i');
icon.classList.add('material-icons');
icon.textContent = 'add_box';
button.append(icon);
formBlockInput.append(input, button);

const formResultInput = document.createElement('div');
formResultInput.classList.add('formResultInput');

form.append(formBlockInput, formResultInput);

const list = document.createElement('ul');
list.classList.add('list_action');
formResultInput.append(list);

rootNode.append(title, form);

const getForm = document.querySelector('.form');
getForm.addEventListener('click', handleEvent);

const getListAction = document.querySelector('.list_action');

function handleEvent(event) {
    event.preventDefault();
    let validValue = event.target.parentNode.classList.value;

    if (event.target.nodeName === 'I' && validValue === 'button_add' && getListAction.children.length <= 9) {
        const createTask = createListItem(input.value);
        list.append(createTask);
        input.value = '';
    } else if (getListAction.children.length > 9) {
        const notification = document.createElement('p');
        notification.classList.add('notification');
        notification.textContent = 'Maximum item per list are created';
        title.insertAdjacentElement('afterend', notification);
        // const btnDisabled = document.querySelector('.button_add');
        // btnDisabled.disabled = false;
    }

    if (event.target.nodeName === 'I' && event.target.parentNode.classList.value === 'buttonDelete') {
        const parent = document.querySelector('.listInput');
        parent.remove();
        parent.removeChild();
    }


    if (event.target.nodeName === 'I' && event.target.parentNode.classList.value === 'buttonCreate') {
        const blockInput = document.createElement('div');
        const inputAdit = document.createElement('input');
        inputAdit.classList.add('adit');
        inputAdit.placeholder = 'Adit action';

        const saveIcon = document.createElement('i');
        saveIcon.classList.add('material-icons');
        saveIcon.classList.add('save');
        saveIcon.textContent = 'save';

        blockInput.append(inputAdit, saveIcon);
        event.target.parentNode.parentNode.insertAdjacentElement('afterend', blockInput);
    }

    console.log(event.target.parentNode.classList.value);

}

function createListItem(text) {
    const li = document.createElement('li');
    li.classList.add('listInput');

    const blockInput = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.classList.add('listCheck');
    checkbox.setAttribute('type', 'checkbox');

    const label = document.createElement('label');
    label.id = 'label';
    label.textContent = text;

    const buttonCreate = document.createElement('button');
    buttonCreate.classList.add('buttonCreate');

    const inputIcon = document.createElement('i');
    inputIcon.classList.add('material-icons');
    inputIcon.classList.add('create');
    inputIcon.textContent = 'create';
    buttonCreate.append(inputIcon);

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('buttonDelete');

    const deleteEvent = document.createElement('i');
    deleteEvent.classList.add('material-icons');
    deleteEvent.classList.add('delete');
    deleteEvent.textContent = 'delete';
    buttonDelete.append(deleteEvent);

    li.append(blockInput);
    blockInput.append(checkbox, label, buttonCreate, buttonDelete);
    return li;
}