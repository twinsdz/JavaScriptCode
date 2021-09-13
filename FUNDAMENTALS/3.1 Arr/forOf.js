
let numbers = [1, 5, 14, 18, 45];

/* for (let i = 0; i < numbers.length; i++){
    console.log(`${i} -> ${numbers[i]}`);
} */

for (let widgets of numbers){
    if (widgets === 14){
        break;
    } else {
        console.log(widgets);
    }
}

/* for (let i = 0; i < numbers.length; i++){
    let widgets = numbers[i];
    console.log(`${widgets}`);
} */