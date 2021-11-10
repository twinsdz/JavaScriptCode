function calc() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = Number(num1) + Number(num2);

    document.getElementById("sum").value = sum;
}

/* function calc() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = num1 + num2;

    if (Number.isNaN(sum)) {
        sum = Number(num1) + Number(num2);
    }

    // if(Number.isNaN(sum)){
    //     document.getElementById("sum").value = 'Error! Please enter only numbers!'
    // } else {
    //     document.getElementById("sum").value = sum;
    // }

    document.getElementById("sum").value = sum;
} */