function passwordGen(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let passNum = Number(input[2]);
    let result = "";
    let string = "";
    let resultCount = 0;
    let isOver = false;
    let s1 = 35;
    let s2 = 64;

    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {

            let s1Str = String.fromCharCode(s1);
            let s2Str = String.fromCharCode(s2);

            if (resultCount >= passNum) {
                isOver = true;
                break;
            }

            result = s1Str + s2Str + x + y + s2Str + s1Str;
            string += result + "|";
            
            s1++;
            s2++;
            resultCount++;

            if (s1 > 55) {
                s1 = 35;
            }
            if (s2 > 96) {
                s2 = 64;
            }
        }
    }
    console.log(`${string}`);
}

// passwordGen(['2', '3', '10']);

passwordGen(['20', '50', '10']);