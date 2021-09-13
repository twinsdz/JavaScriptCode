function solve (input){
    let num = 0;

    while (num <= 10){

        if (num % 2 === 0){
            num++;
            continue;  // връща се от началото на цикъла без да изпълнява кода след себе си 
        }
        console.log(num);
        num++;
    }
}

solve();