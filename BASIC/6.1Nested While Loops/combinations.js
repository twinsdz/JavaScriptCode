function combinations(input) {
    let n = Number(input[0]);
    let combination = 0;
    let flag = false;

    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            for (let c = 0; c <= n; c++) {
                combination++;
                //  if( a + b + c == n){
                //     console.log(`Combination N:${combination} (${a} + ${b} + ${c}= ${n})`);
                // }
                if (a + b + c == n) {
                    flag = true;
                    break;
                }
            }
        }
        if (flag) {
            break;
        }
    }
    console.log(`${combination}`);
}

combinations(["25"]);