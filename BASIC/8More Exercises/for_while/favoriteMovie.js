function favoritFilm (input){
    let index = 0;
    let inputLine = input[index++];
    let maxPoinds = Number.MIN_SAFE_INTEGER;
    let maxMovieName = "";
    let movieCount = 1;

    while (inputLine !== 'STOP'){

        if( movieCount > 7){
            console.log("The limit is reached.");
            break;
        }

        let movieName = inputLine;
        let currentPointsSum = 0;

            for (let i = 0; i < movieName.length; i++){
                // let currentMovieChar = movieName.charAt(i);
                let charValue = movieName.charCodeAt(i);

                currentPointsSum += charValue; 

                if (charValue >= 65 && charValue <= 90){
                    currentPointsSum -= movieName.length;
                } else if (charValue >= 97 && charValue <= 122){
                    currentPointsSum -= 2 * movieName.length;
                }
            }

                if (currentPointsSum > maxPoinds){
                    maxPoinds = currentPointsSum;
                    maxMovieName = movieName;
                }

        inputLine = input[index++];
        movieCount++;
    }

    console.log(`The best movie for you is ${maxMovieName} with ${maxPoinds} ASCII sum.`);
}

/* favoritFilm(['Matrix', "Breaking bad", "Legend", "STOP"]); */
favoritFilm (["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"]);