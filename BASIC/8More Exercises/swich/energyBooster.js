function energyBooster(fruit, setSize, setCount){
     setCount= Number (setCount);
     let pricePerCount = 0;
     let totalPrice = 0;

     switch (fruit){
         case "Watermelon":
         if (setSize == "small"){
            pricePerCount = 2 * 56;
         } else if (setSize == "big"){
             pricePerCount = 5 * 28.70;
         } break;

         case "Mango":
         if (setSize == "small"){
            pricePerCount = 2 * 36.66;
         } else if (setSize == "big") {
             pricePerCount = 5 * 19.60;
         } break;

         case "Pineapple":
         if (setSize == "small"){
            pricePerCount = 2 * 42.10;
         } else if (setSize == "big") {
             pricePerCount = 5 * 24.80;
         } break;

         case "Raspberry":
         if (setSize == "small"){
            pricePerCount = 2 * 20;
         } else if (setSize == "big") {
             pricePerCount = 5 * 15.20;
         } break;
     }

     totalPrice = setCount * pricePerCount;
     if (totalPrice >=400 && totalPrice <= 1000){
         totalPrice = totalPrice - (totalPrice * 0.15);
     } else if (totalPrice > 1000){
         totalPrice = totalPrice - (totalPrice * 0.5);
     }
     console.log(`${totalPrice.toFixed(2)} lv.`);
}


energyBooster ("Watermelon", "big", "4");
