/* function oldBooks(arr) {
    let index = 1;
    let favoriteBook = arr[0];
    let bookIsFound = false;
    let nextBook = arr[index];

    while (nextBook !== "No More Books") {
        if (nextBook === favoriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBook = arr[index];
    }

    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index -1} books.`)
    } else
        console.log(`You checked ${index -1} books and found it.`);
}

oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]); */

function oldBooks(input) {
    let index = 0;
    let favoritBook = input[index++];
    let nexstBook = input[index];
    let isFound = false;
    let booksCount = 0;

    while (nexstBook !== 'No More Books') {       
        
        if (favoritBook === nexstBook) {
            isFound = true;
            break;
        }
        /* if (index >= input.length - 1) {
            break;
        } */
        index++;
        booksCount++; 
        nexstBook = input[index];
    }

    if (isFound === true) {
        console.log(`You checked ${booksCount} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCount} books.`);
    }
}

oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);

// oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);

// oldBooks (["Troy", "Stronger", "Life Style", "Troy"]);
