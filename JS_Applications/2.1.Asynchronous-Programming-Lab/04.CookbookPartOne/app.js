window.addEventListener('DOMContentLoaded', start);

async function start() {
    const main = document.querySelector('main');

    const recipies = await getRecipies(); // await превръща функцията от промис в данни. Само функцията връща промис, като кажем await вадим данните от промиса.
    main.replaceChildren();

    recipies.map(createPreview).forEach(e => main.appendChild(e));
}

function createPreview(recipe) {
    const element = document.createElement('article');

    element.className = 'preview';
    element.innerHTML = `<div class="title">
    <h2>${recipe.name}</h2>
</div>
<div class="small">
    <img src="${recipe.img}">
</div>`;

    element.addEventListener('click', () => {
        element.querySelector('h2').textContent = 'Loading...';
        togglePreview(recipe._id, element);
    });
    return element;
}

async function togglePreview(id, preview) {
    const recipe = await getRecipiesById(id);

    const element = document.createElement('article');
    element.innerHTML = `<h2>${recipe.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="${recipe.img}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
            ${recipe.ingredients.map(ingr => `<li>${ingr}</li>`).join('')}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipe.steps.map(step => `<p>${step}</p>`).join('')}
    </div>`;

    preview.replaceWith(element);
}

async function getRecipies() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data);
}

async function getRecipiesById(id) {
    const url = 'http://localhost:3030/jsonstore/cookbook/details/' + id;

    const res = await fetch(url);
    const data = await res.json();

    return data;

}