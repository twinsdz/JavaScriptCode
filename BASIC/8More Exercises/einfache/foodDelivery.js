function food(chickenMenu, fishMenu, vegiMenu) {
    chickenMenu = Number(chickenMenu);
    fishMenu = Number(fishMenu);
    vegiMenu = Number(vegiMenu);

    let currentSum = (chickenMenu * 10.35) + (fishMenu * 12.40) + (vegiMenu * 8.15);

    let dessert = currentSum * 0.20;
    let totalSum = currentSum + dessert + 2.50;

    console.log(`Total: ${totalSum.toFixed(2)}`);
}

food("2", "4", "3");