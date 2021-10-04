// DOM Event Delegation няма да работи в Judge  
document.getElementById('items').addEventListener('click', removeEl);

function removeEl(ev) {
    if(ev.target.tagName === 'A'){
        const parent = ev.target.parentNode;
        parent.remove();
    }
}

function addItem() {
    const input = document.getElementById("newItemText");

    const liElement = document.createElement("li");
    liElement.textContent = input.value;

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeEl);

    liElement.appendChild(button);

    document.getElementById("items").appendChild(liElement);
    input.value = '';
}