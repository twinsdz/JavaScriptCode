function triplesLatinLetter(n) {
    n = Number(n);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let l = 0; l < n; l++) {
                let firstLetter = String.fromCharCode(i + 97);
                let secondLetter = String.fromCharCode(j + 97);
                let tirthLetter = String.fromCharCode(l + 97);
                console.log(`${firstLetter}${secondLetter}${tirthLetter}`);
            }
        }
    }
}

triplesLatinLetter("3");