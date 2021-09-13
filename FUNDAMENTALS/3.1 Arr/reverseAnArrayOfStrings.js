function solve(el) {
    for (let i = 0; i < el.length / 2; i++) {
        swapElements(el, i, el.length - 1 - i);
    }
    console.log(el.join(' '));

    // размяна на елементи в масив
    function swapElements(arr, i, j){
        let firstEl = arr[i];
        // let lastEl = arr[j];
        arr[i] = arr[j];
        arr[j] = firstEl;
    }
}

solve(['a', 'b', 'c', 'd', 'e']);

/* function swap(input) {
    
    for (let i = 0; i < input.length / 2; i++) {
        let firstElement = input[i];
        let lastElement = input.length - 1 - i;
        input[i] = input[lastElement];
        input[lastElement] = firstElement;
    }
    console.log(input.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']); */