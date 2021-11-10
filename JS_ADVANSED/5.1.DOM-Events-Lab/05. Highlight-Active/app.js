function focused() {
    Array.from(document.getElementsByTagName('input')).forEach(f => {
        f.addEventListener('focus', onFocus);
        f.addEventListener('blur', onBlur);
    });

    function onFocus(ev) {
        ev.target.parentNode.classList.add('focused');
    }

    function onBlur(ev) {
        ev.target.parentNode.classList.remove('focused');
    }
}

/* function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for (let field of fields){
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);

    }

    function onFocus(ev){
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev){
        ev.target.parentNode.className = 'blured';
    }
} */

/* function focused() {
    Array.from(document.getElementsByTagName('input')).forEach(f => {
        f.addEventListener('focus', onFocus);
        f.addEventListener('blur', onBlur);
    });

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentNode.className = 'blured';
    }
} */

/* function focused() {
    Array.from(document.getElementsByTagName('input')).forEach(f => {
        f.addEventListener('focus', ({target: {parentNode}}) => parentNode.classList.add('focused'));
        f.addEventListener('blur', ({target: {parentNode}}) => parentNode.classList.remove('focused'));
    });
} */