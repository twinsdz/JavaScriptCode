function cToF (cel){
    cel = Number (cel);

    let fahrenheit = cel * 1.8 + 32;

    console.log(fahrenheit.toFixed(2));
}

cToF("25");