function solve (input){
    let index = 0;
    let num = Number (input[index++]);
    let numDivTwoCount = 0;
    let numDivThreeCount = 0;
    let numDivFourCount = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i < input.length; i++){
        let currentNum = Number (input[index++]);

        if (currentNum % 4 == 0 )  {
            numDivFourCount++;
        } 
        
        if (currentNum % 2 == 0){
            numDivTwoCount++;
        } 
        
        if (currentNum % 3 == 0)  {
            numDivThreeCount++;
        }

        p1 = (numDivTwoCount / num) * 100;
        p2 = (numDivThreeCount / num) * 100;
        p3 = (numDivFourCount / num) * 100;
    }

    
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);

}

solve (['10',  '680', '2', '600', '200', '800', '799', '199', '46', '128', '65']);

/* solve(["3", "3", "6", "9"]);
 */
