function figur(input) {
    let type = input[0];
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);

    if (type === "square") {
        let side = Number(num1);
        let area = side * side;
        console.log(area.toFixed(3));
    } else if (type === "rectangle") {
        let sideA = Number(num1);
        let sideB = Number(num2);
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if (type === "circle") {
        let radius = Number(num1);
        let area = Math.PI * (radius * radius);
        console.log(area.toFixed(3));
    } else if (type === "triangle") {
        let sideA = Number(num1);
        let sideB = Number(num2);
        let area = sideA * sideB / 2;
        console.log(area.toFixed(3));
    }
}

figur(["rectangle", "7", "2.5"]);