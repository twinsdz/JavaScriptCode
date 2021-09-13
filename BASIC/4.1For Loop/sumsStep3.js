function sumStepThree(input) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    let count1 = 1;
    let count2 = 2;
    let count3 = 3;

    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);

        if (i == count1) {
            sum1 += num;
            count1 +=3;
        }

        if (i == count2) {
            sum2 += num;
            count2 += 3;
        }

        if (i == count3) {
            sum3 += num;
            count3 += 3;
        }

    }

    console.log('sum1 = ' + `${sum1}`);
    console.log('sum2 = ' + `${sum2}`);
    console.log('sum3 = ' + `${sum3}`);

}

/* sumStepThree (['2', '3', '5']); */

/* sumStepThree(['5', '3', '5', '2', '7', '8']); */

sumStepThree ([ '4', '7', '-2', '6', '12' ]);