function movieRating(input) {

    let moviesCount = Number(input[0]);
    let ratingSum = 0;

    let highestRating = 1;
    let highestMovie = "";

    let lowestRating = 10;
    let lowestMovie = "";

    for (let index = 1; index <= moviesCount; index++){
        let movieName = input[index];
        let currentMovie = input.shift();
        let currentRating = Number(input[index]);
            
        if (currentRating > highestRating){
                highestRating = currentRating;
                highestMovie = movieName;
            }

            if (currentRating < lowestRating){
                lowestRating = currentRating;
                lowestMovie = movieName;
            }
            ratingSum += currentRating;
    }

    averageRating = ratingSum / moviesCount;

    console.log(`${highestMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

 /* movieRating ([
    '5',   'A Star is Born',
    '7.8', 'Creed 2',
    '7.3', 'Mary Poppins',
    '7.2', 'Vice',
    '7.2', 'Captain Marvel',
    '7.1'
  ]);  */
  
  movieRating ([ '3', 'Interstellar', '8.5', 'Dangal', '8.3', 'Green Book', '8.2' ]);