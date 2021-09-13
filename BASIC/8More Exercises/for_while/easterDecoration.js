function easterDeco(input) {
    let index = 0;
    let customerCount = Number(input[index++]);

    let basketPrice = 1.50;
    let wreathPrice = 3.80;
    let chocolateBunnyPrice = 7;

    let productCount = 0;
    let totalBill = 0;
    let averageBill =0; 
    let currentBill = 0;


    for (let i = 1; i <= customerCount; i++) {
        let productName = input[index++];
        

        while (productName !== "Finish") {
            productCount++;

            if (productName === 'basket') {
                currentBill += basketPrice;
            } else if (productName === "wreath") {
                currentBill += wreathPrice;
            } else if (productName === "chocolate bunny") {
                currentBill += chocolateBunnyPrice;
            }

            productName = input[index++];

        }

        if (productCount % 2 == 0) {
            currentBill *= 0.80;
        }

        console.log(`You purchased ${productCount} items for ${currentBill.toFixed(2)} leva.`);
        
        totalBill += currentBill;
        averageBill = totalBill / customerCount;
        currentBill = 0;
        productCount = 0;
    }

    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}


easterDeco(['2', 'basket', 'wreath', 'chocolate bunny', 'Finish', 'wreath', 'chocolate bunny', 'Finish']);

/* easterDeco (['1', 'basket', 'wreath', 'chocolate bunny', 'wreath', 'basket', 'chocolate bunny', 'Finish']); */ 