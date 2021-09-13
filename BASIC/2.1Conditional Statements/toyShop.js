function totalWinning(input) {
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPrice = puzzles * 2.60 + dolls * 3 + minions * 8.20 + bears * 4.10 + trucks * 2;
    let countAllToys = puzzles + dolls + bears + minions + trucks;

    if (countAllToys >= 50) {
        totalPrice = totalPrice * 0.75;
    }
    totalPrice = totalPrice * 0.90;

    if (totalPrice >= excursionPrice) {
        console.log(`Yes! ${(totalPrice - excursionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursionPrice - totalPrice).toFixed(2)} lv needed.`);
    }
}

totalWinning(["320", "8", "2", "5", "5", "1"]);