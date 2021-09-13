function multiplication() {
    for (let n = 1; n <= 10; n++) {
        for (let x = 1; x <= 10; x++) {
            let product = n * x;
            console.log(`${n} * ${x} = ${product}`);
        }
    }
}
multiplication();