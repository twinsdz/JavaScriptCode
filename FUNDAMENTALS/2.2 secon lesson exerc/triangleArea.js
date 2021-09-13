function triangleAria(a, b, c) {
    let p = (a + b + c) / 2;
    let herosFormel = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));

    console.log(herosFormel);
}

triangleAria(2, 3.5, 4);