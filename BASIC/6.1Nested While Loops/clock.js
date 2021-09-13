function clock() {

    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            console.log(`${i}:${j}`);
        }
    }
}

clock();

/* function clock() {

    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            if (i < 10) {
                if (j < 10) {
                    console.log(`0${i}:0${j}`);
                } else {
                    console.log(`0${i}:${j}`);
                }
            } else {
                if (j < 10) {
                    console.log(`${i}:0${j}`);
                } else {
                    console.log(`${i}:${j}`);
                }
            }

        }
    }
}
clock(); */