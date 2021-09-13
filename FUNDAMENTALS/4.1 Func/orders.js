function orders(item, quantity) {
    let prise = getPrise(item);
    let total = prise * quantity;

        function getPrise(item) {
            switch (item) {
                case "coffee":
                    return 1.50;
                case "coke":
                    return 1.40;
                case "water":
                    return 1;
                case "snacks":
                    return 2;
            }
        }
    console.log(`${total.toFixed(2)}`);
}

orders ("water", 5);

orders("coffee", 2);