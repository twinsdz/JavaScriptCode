function trapezAria (b1, b2, h){
    b1 = Number (b1);
    b2 = Number (b2);
    h = Number (h)

    let aria = (b1 + b2) * h / 2;

    console.log(aria.toFixed(2));
}

trapezAria ("8", "13", "7");