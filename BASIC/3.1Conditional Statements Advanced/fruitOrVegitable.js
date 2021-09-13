function solve(input) {
    let fruitVegitable = input[0];

    switch (fruitVegitable) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}

solve(["java"]);
solve(["banana"]);