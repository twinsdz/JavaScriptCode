function cinema(...input) {
    let index = 0;
    let places = Number(input[index++]);
    let inputLine = input[index++];
    let tiketSum = 0;
    let gastsSum = 0;

    while (inputLine !== "Movie time!") {
        let gasts = Number(inputLine);
        gastsSum += gasts;

        if (gasts > places) {
            console.log("The cinema is full.");
            console.log(`Cinema income - ${tiketSum} lv.`);
            break;
        }

        if (gasts % 3 == 0) {
            tiketSum += (gasts * 5) - 5;
        } else {
            tiketSum += gasts * 5;
        }

        places -= gasts;
        inputLine = input[index++];
    }

    if (inputLine === "Movie time!") {
        console.log(`There are ${places} seats left in the cinema.`);
        console.log(`Cinema income - ${tiketSum} lv.`);
    }
}

cinema("60", "10", "6", "3", "20", "15", "Movie time!");

/* cinema("50", "15", "10", "10", "15", "5"); */

/* cinema("100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"); */

/* cinema("140", "15", "15", "10", "5", "6", "7", "8", "9", "Movie time!"); */

/* cinema ("150", "15", "15", "15", "15", "15", "10", "10", "10", "Movie time!"); */

/* cinema("50","10","15","15","10","9"); */

/* cinema("100", "15", "15", "15", "15", "15", "15", "15"); */