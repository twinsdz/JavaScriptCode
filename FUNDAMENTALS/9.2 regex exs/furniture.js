function furniture(input) {
    let pattern = new RegExp (">>(?<name>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<qty>[\\d]+)");
    let total = 0;
    let furniture = [];

    for (let str of input) {
        let match = pattern.exec(str);
        if (match !== null) {
            let name = match.groups['name'];
            let price = Number(match.groups['price']);
            let qty = Number(match.groups['qty']);
            furniture.push(name);
            total += price * qty;
        } 
    }

    console.log(`Bought furniture:`);

    if (furniture.length > 0) {
        console.log(furniture.join('\n'));
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"
]);


/* function furniture(data) {
    let pattern = new RegExp(">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)");
    let command = data.shift();
    let furniture = [];
    let currMoney = 0;
    let moneyTotal = 0;
    let quantity = 0;

    while (command !== 'Purchase') {
        let match = pattern.exec(command);

        if (match !== null) {
            furniture.push(match.groups['furniture']);
            currMoney = Number(match.groups['price']);
            quantity = Number(match.groups['quantity']);
            moneyTotal += currMoney * quantity;
        }

        command = data.shift();
    }

    console.log('Bought furniture:');

    if (furniture.length > 0) {
        console.log(furniture.join('\n'));
    }

    console.log(`Total money spend: ${moneyTotal.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"
]); */