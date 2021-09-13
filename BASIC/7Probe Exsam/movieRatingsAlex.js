function movieRating(input) {

    let movies = Number(input[0]);
    let moviesCount = movies - 1;
    let index = 2;
    

    let lowestRating = Number (input[2]);
    let lowestMovie = input[1];

    let highestRating = Number (input[2]);
    let highestMovie = input[1];

    let ratingSum = highestRating;
    let averageRating = 0;

    while(moviesCount > 0){
        let movie = input[++index];
        let rating = Number (input[++index]);
        ratingSum += rating;

        if (rating > highestRating){
            highestRating = rating;
            highestMovie = movie;
        }

        if (rating < lowestRating){
            lowestRating = rating;
            lowestMovie = movie;
        }
        moviesCount--;
    }

    averageRating = ratingSum / movies;

    console.log(`${highestMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

movieRating ([ '5', 'A Star is Born', '7.8', 'Creed 2', '7.3', 'Mary Poppins', '7.2', 'Vice', '7.2', 'Captain Marvel', '7.1']);

    /* movieRating ([ '3', 'Interstellar', '8.5', 'Dangal', '8.3', 'Green Book', '8.2' ]); */