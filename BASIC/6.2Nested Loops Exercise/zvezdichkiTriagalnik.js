function drawTriangle(n) {
    for (let i = 1; i <= n; i++) {  //row
        let stars = "";

        for (let j = 1; j < i; j++) { // coll
            stars += "*";
        }

        console.log(stars);
    }
}

drawTriangle([9]);