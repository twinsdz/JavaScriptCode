/* function convert(input) {
    let toConvert = Number(input[0]);
    let firstUnit = input[1];
    let secondUnit = input[2];
    let result = 0;

    if (firstUnit === "mm") {
        if (secondUnit === "m") {
            result = toConvert / 1000;
        } else if (secondUnit === "cm") {
            result = toConvert / 10;
        } else {
            result = toConvert;
        }
    } else if (firstUnit === "cm") {
        if (secondUnit === "m") {
            result = toConvert / 100;
        } else if (secondUnit === "mm") {
            result = toConvert * 10;
        } else {
            result = toConvert;
        }
    } else {
        if (secondUnit === "cm") {
            result = toConvert * 100;
        } else if (secondUnit === "mm") {
            result = toConvert * 1000;
        } else {
            result = toConvert;
        }
    }
    console.log(result.toFixed(3));
} */

function convert(input) {
    let toConvert = Number(input[0]);
    let firstUnit = input[1];
    let secondUnit = input[2];

    // превръщаме всичко в метри
    if (firstUnit === "mm") {
        toConvert = toConvert / 1000;
    } else if (firstUnit === "cm") {
        toConvert = toConvert / 100;
    } else {
        toConvert = toConvert;
    }

    // превръщаме метрите в съответната мерна единица
    if (secondUnit === "mm") {
        console.log((toConvert * 1000).toFixed(3));
    } else if (secondUnit === "cm") {
        console.log((toConvert * 100).toFixed(3));
    } else {
        console.log(toConvert.toFixed(3));
    }
}


convert(["12", "mm", "m"]);

convert(["150", "m", "cm"]);
convert(["45", "cm", "mm"]);