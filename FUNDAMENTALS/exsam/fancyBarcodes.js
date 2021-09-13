function solve(input) {
    let countOfBarcodes = Number(input.shift());
    // регекс групи
    let pattern = /(@#+)(?<productName>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/g;
    let groupPattern = /\d/g; // търси цифри в стринга

    for (let i = 0; i < countOfBarcodes; i++) {
        let text = input[i];
        let isValid = text.match(pattern);
        // ако масива isValid не е null(празен)
        if (isValid) {
            let groupNum = groupN(text);
            console.log(`Product group: ${groupNum}`);
        } else {
            console.log('Invalid barcode');
        }
    }

    // получава стринг и проверява дали в него има цифри и ги залепва една за друга
    function groupN(str) {
        let num = str.match(groupPattern);

        // if (num !== null) {
        //     return num.join('');
        // } else {
        //     num = '00';
        //     return num;
        // }
        
        return num !== null ? num.join('') : '00';
    }
}

solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##",
]);

solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);

/* function solve(a) {
    let n = Number(a.shift());
    let barCodePattern = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/g;
    let digits = /\d/g;

    for (let i = 0; i < n; i++) {
        let group = '';
        let barCode = a[i];
        let valid = barCode.match(barCodePattern);
        let match = barCode.match(digits);

        if (match !== null) {
            group = match.join('');
        } else {
            group = '00';
        }

        if (valid) {
            console.log(`Product group: ${group}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}

solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##",
]);

solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]); */