/* function arrayRotation (arr, num){
    
    for (let i = 0; i < num; i++){
       const element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(' '));
}

arrayRotation ([51, 47, 32, 61, 21], 2); */

/* function arrayRotation(arr, num) {
    let newArray = [];

    for (let i = 0; i < num; i++) {
        const firstElement = arr[i];
        arr[arr.length] = firstElement;
        arr[i] = '';
    }
    //  ['', '', '', '', '', '', '', '', '', '', 4, 15, 22, 4]
    // Резултатът след пъврия for цикъл
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            newArray[count] = arr[i];
            count++;
        }
    }
    //  Във втория цикъл правим филтрация на елементите различни от празен стринг и ги добавяме към нов масив, 
    // като за тази цел ни е необходима допълнителна променлива за да добавяме елементите на правилния индекс в новия масив

    console.log(newArray.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);

arrayRotation([32, 21, 61, 1], 4);

arrayRotation([2, 4, 15, 31], 5);

arrayRotation([22, 4, 4, 15], 10); */

function arrayRotation(arr, num) {
    for (let i = 0; i < num; i++) {
        let firstEl = arr[0];

        for (let j = 0; j < arr.length - 1; j++){
            arr[j] = arr[j + 1];
        }
        
        let lastIndex = arr.length - 1;
        arr[lastIndex] = firstEl;
    }
   
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);

arrayRotation([32, 21, 61, 1], 4);

arrayRotation([2, 4, 15, 31], 5);

arrayRotation([22, 4, 4, 15], 10);