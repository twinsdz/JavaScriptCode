function eggsBattle (...input){
    let index = 0;
    let eggsCountFirst = Number (input[index++]);
    let eggsCountSecond = Number (input[index++]);
    let inputLine = input[index++];


    while (inputLine !== "End of battle"){

        if (inputLine === "one"){
            eggsCountSecond--;
        } else if (inputLine === "two"){
            eggsCountFirst--;
        } 

        inputLine = input[index++];

        if (eggsCountFirst == 0 || eggsCountSecond == 0){
            break;
        }
        
    }
    if (eggsCountFirst == 0){
        console.log(`Player one is out of eggs. Player two has ${eggsCountSecond} eggs left.`);
    } else if (eggsCountSecond == 0){
        console.log(`Player two is out of eggs. Player one has ${eggsCountFirst} eggs left.`);
    } else {
        console.log(`Player one has ${eggsCountFirst} eggs left.`);
        console.log(`Player two has ${eggsCountSecond} eggs left.`);
    }
}

eggsBattle ("5", "4", "one", "two", "one", "two", "two", "End of battle");

 /* eggsBattle ("2", "6", "one", "two", "two"); */