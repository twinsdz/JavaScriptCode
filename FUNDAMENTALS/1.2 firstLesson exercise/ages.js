function ages(ageNum) {
    ageNum = Number(ageNum);
    let string = '';

    if (ageNum >= 0 && ageNum <= 2) {
        string = 'baby';
    } else if (ageNum > 2 && ageNum <= 13) {
        string = 'child';
    } else if (ageNum > 13 && ageNum <= 19) {
        string = 'teenager';
    } else if (ageNum > 19 && ageNum <= 65) {
        string = 'adult';
    } else if (ageNum >= 66) {
        string = 'elder';
    } else {
        string = 'out of bounds';
    }

    console.log(`${string}`);
}

ages('67');