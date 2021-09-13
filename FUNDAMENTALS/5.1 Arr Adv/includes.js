function incl(input) {
    let myArray = ["Peter", "George", "Mary"];

    let result = myArray.includes("George"); // true
    // result = myArray.includes("John"); // false
    // result = myArray.indexOf("Mary");
    // result = myArray.indexOf("Nik");
    return result;
}

console.log(incl());