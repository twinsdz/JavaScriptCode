function readText(input1, input2, input3, input4) {
    let firstName = input1;
    let lastName = input2;
    let age = Number(input3);
    let town = input4;
    console.log("Hello, " + firstName + " " + lastName + "!" + " " + "You are" + " " + age + " " + "years old" + " " + "and you are from" + " " + town + ".");
}
readText("Desi", "Zapryanova", 30, "Plovdiv");