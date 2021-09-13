function money(input) {
        let dogs = Number(input[0]);
        let dogs1 = Number(input[1]);
        let a = Number(2.50);
        let b = Number(4);
        let sum = (dogs * a) + (dogs1 * b);
        console.log(sum);
}

money (["5", "4"]);

money(["13", "9"]);