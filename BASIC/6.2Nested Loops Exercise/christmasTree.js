function christmasTree(n){

    for(let i = 0; i <= n; i++){
        let stars = "*".repeat(i);
        let spases =" ".repeat(n - i);
        let body = " | ";

        let row = spases + stars + body + stars + spases;

        console.log(`${row}`);
    }
}

christmasTree (4);