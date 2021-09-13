/* function moving(arr){
    let wight = Number (arr[0]);
    let depth = Number (arr[1]);
    let height = Number (arr[2]);
    let space = wight * depth * height;
    
    let index = 3;
    
    while(arr[index] != "Done" && index < arr.length){
        arr[index] = Number(arr[index]);
        space -= arr[index];
        index++;
    }

    if(space < 0){
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
    } else {
        console.log(`${space} Cubic meters left.`);
    }
}

moving(["10", "1", "2", "4", "6", "Done"]); */ 


function moving (input){
    let index = 0;
    let wight = Number (input[index++]);
    let depth = Number (input[index++]);
    let high = Number (input[index++]);
    let inputLine = input[index++];

    let space = wight * depth * high;

    while (inputLine !== "Done"){
        inputLine = Number (inputLine);
        space -= inputLine;

         if (space <= 0){
            let spaceNeeded = Math.abs(space);
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
            break;
        }
        inputLine = input[index++];
    }

    if (space > 0){
        console.log(`${space} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);

// moving(["10", "1", "2", "4", "6", "Done"]);