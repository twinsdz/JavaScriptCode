/* function solve(input) {
    let index = 0;
    let cakeWigth = Number(input[index++]);
    let cakeHigth = Number(input[index++]);
    let cakePieces = cakeWigth * cakeHigth;
    let currentPieces = input[index++];

    while (currentPieces !== "STOP" && cakePieces >= 0) {
        cakePieces -= Number(currentPieces);
        currentPieces = input[index++];

    }

    if (cakePieces < 0) {
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
    } else {
        console.log(`${cakePieces} pieces are left.`);
    }
}

solve(["10", "2", "2", "4", "6", "STOP"]); */

/* function solve(input) {
    let index = 0;
    let w = Number (input[index++]);
    let l = Number (input[index++]);
    let cakePieces = w * l;

    let command = input[index++];
    
    while (command !== "STOP"){
        command = Number (command);
        cakePieces -= command;

        if (cakePieces < 0){
            break;
        }

        command = input[index++];
    }

    if (cakePieces > 0){
        console.log(`${cakePieces} pieces are left.`);
    } else {
        let piecesNeeded = Math.abs(cakePieces); 
        console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
    }

} */

function solve(input) {
    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let cakeAria = width * length;
    let cakePieces = input[index];

    for (let i = index; i < input.length; i++) {
        cakePieces = input[i];

        if (cakePieces === "STOP") {
            break;
        } else {
            cakePieces = Number(cakePieces);
            cakeAria -= cakePieces;
        }
    }
    if (cakeAria > 0) {
        console.log(`${cakeAria} pieces are left.`);
    } else {
        let piecesNeeded = Math.abs(cakeAria);
        console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
    }
}


// solve(["10", "2", "2", "4", "6", "STOP"]);

solve(["10", "10", "20", "20", "20", "20", "21"]);