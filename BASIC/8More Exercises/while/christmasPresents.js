function xmasPresents (input){
    let index = 0;
    let inputLine = input[index++];
    let adults = 0;
    let kids = 0;
    let toysPrice = 0;
    let sweatersPrice = 0;


    while (inputLine !== 'Christmas'){
        let age = Number (inputLine);

        if (age <= 16){
            kids++;
            toysPrice += 5;
        } else {
            adults++;
            sweatersPrice += 15;
        }
        inputLine = input[index++];
    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toysPrice}`);
    console.log(`Money for sweaters: ${sweatersPrice}`);
}

// xmasPresents (["16", "20", "46", "12", "8", "20", "49", "Christmas"]);

// xmasPresents (["16", "16", "16", "16", "16", "Christmas"]);

xmasPresents (["18", "20", "48", "45", "56", "37", "12", "14", "Christmas"]);