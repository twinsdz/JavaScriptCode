function solve(input) {

    let command = input.shift();
    let pattern = /^%(?<customer>[A-Z][a-z]*)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.*\d*)\$$/;
    let income = 0;

    while (command !== 'end of shift') {
        let match = pattern.exec(command); // .exec return array
        if (match !== null) { // if match is different than null
            let {
                customer,
                product,
                count,
                price
            } = match.groups;
            let totalPrice = Number(count) * Number(price);
            income += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        command = input.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

// solve(["%George%<Croissant>|2|10.3$",
//     "%Peter%<Gum>|1|1.3$",
//     "%Maria%<Cola>|1|2.4$",
//     "end of shift"
// ]);

solve(["%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"
]);