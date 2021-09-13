 /* function traveling(arr) {
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] == "End") {
             break;
         }
         if (Number.isNaN(Number(arr[i]))) {
             console.log(`Going to ${arr[i]}!`);
         }
     }
 } */


 /* function traveling(input) {
     let index = 0;
     let inputLine = input[index++];

     while (inputLine !== "End") {
         let minBudgetNeeded = Number(input[index++]);
         let savedSum = 0;

         for (let i = index; i < minBudgetNeeded; i++) {
             let currentSavedSum = Number(input[index++]);
             savedSum += currentSavedSum;

             if (savedSum >= minBudgetNeeded) {
                 console.log(`Going to ${inputLine}!`);
                 break;
             } else {
             }
         }
         inputLine = input[index++];
     }
 } */

 function traveling(input) {
     let index = 0;
     let inputLine = input[index++];

     while (inputLine !== "End") {
         let minBudgetNeeded = Number(input[index++]);
         let savedSum = 0;

         while (savedSum <= minBudgetNeeded) {
             let currentSavedSum = Number(input[index++]);
             savedSum += currentSavedSum;
             if (savedSum >= minBudgetNeeded) {
                 console.log(`Going to ${inputLine}!`);
                 break;
             } else {}
         }
         inputLine = input[index++];
     }
 }

 /* function traveling(input) {
     let index = 0;
     let inputLine = input[index++];

     while (inputLine !== "End") {
         let minBudgetNeeded = Number(input[index++]);
         let savedSum = 0;

         for (let i = index; i < input.length; i++) {
             let currentSavedSum = Number(input[i]);
             index = i;
             if (Number.isNaN(currentSavedSum)) {
                 break;
             }
             savedSum += currentSavedSum;
         }
         if (savedSum >= minBudgetNeeded) {
             console.log(`Going to ${inputLine}!`);
         }
         inputLine = input[index++];
     }
 } */


 traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);

 //  traveling(['Greece', '1000', '200', '200', '300', '100', '150', '240', 'Spain', '1200', '300', '500', '193', '423', 'End', '']);