function garden(arg) {
        arg = Number(arg);
        let squeareArea = arg;
        let price = squeareArea * 7.61;
        let discount = 0.18 * price;
        let endsum = price - discount;
        console.log(`The final price is: ${endsum} lv. The discount is: ${discount} lv.`)

}

garden("150")