function jumpHigh(input) {
    let index = 0;
    let goal = Number(input[index++]);

    let startHighLath = goal - 30;
    let allJumps = 0;
    let failJumpCount = 0;
    let highestJump = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < input.length; i++) {
        let jumpTry = Number(input[i]);

        if (jumpTry == 0) {
            break;
        }

        allJumps++;

        if (startHighLath < jumpTry) {
            highestJump = jumpTry;

            if (startHighLath >= goal) {
                console.log(`Tihomir succeeded, he jumped over ${startHighLath}cm after ${allJumps} jumps.`);
                break;
            }

            startHighLath += 5;
            failJumpCount = 0;
        } else {
            failJumpCount++;
            if (failJumpCount == 3) {
                console.log(`Tihomir failed at ${startHighLath}cm after ${allJumps} jumps.`);
                break;
            }
        }
    }
}

/* jumpHigh(['231', '205', '212', '213', '228', '229', '230', '235', '']); */

jumpHigh([
    '250', '225', '224',
    '225', '228', '231',
    '235', '234', '235',
    '']);