/**
 * 
 * @param {*} el 
 * @param {*} match 
 * @param {*} replacer 
 */

/* function editElement(el, match, replacer) {
    const text = el.textContent;
    el.textContent = text.split(match).join(replacer);
} */

// el е референция към елемента

function editElement(el, match, replacer) {
    const text = el.textContent;
    const matcher = new RegExp(match, 'g');
    el.textContent = text.replace(matcher, replacer);
}