/* function combinations(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let combination = 0;
    let isFound = false;

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            combination++;
            if (i + j == c) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${c})`);
                isFound = true;
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combination} combinations - neither equals ${c}`);
    }
}

combinations(["1", "10", "5"]);
//combinations (["23","24", "20"]); */

function combinations(input) {
    let start = Number (input[0]);
    let end = Number (input[1]);
    let magicNum = Number (input[2]);
    let combination = 0;
    let isFound = false;


    for (let i = start; i <= end; i++){
        for (let j = start; j <= end; j++){
            combination++;
            if (i + j === magicNum){
                isFound = true;
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if (!isFound){
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    } 
}

// combinations(["1", "10", "5"]);
combinations (["23","24", "20"]);