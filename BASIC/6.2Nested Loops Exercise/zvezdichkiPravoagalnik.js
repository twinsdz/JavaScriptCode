function drawSquare(n) {

    for (let i = 1; i <= n; i++) {  // row
        let stars = "";

        for (let j = 1; j <= n; j++) {   // coll
            stars += "*"; 
        }
        console.log(stars);
    }
}

drawSquare([4]);