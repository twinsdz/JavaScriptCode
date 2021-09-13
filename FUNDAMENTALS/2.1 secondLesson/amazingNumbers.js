function amazingNumbers(num) {
    let numString = num.toString();
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    // превръщане в стринг
    let sumString = sum.toString();

    if (sumString.includes("9")) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(1233);

// amazingNumbers (999);