/* let names = ["Peter","George","Mary"];
names.sort(); // Default behaviour – alphabetical order
console.log(names); // ["George","Mary","Peter"] */

// Сортираща функция receiving two parameters, e.g. a and b и ги сравнява 
//Returns either a positive number, a negative number, or zero
//(a < b 2 - 3 = -1) ако резилтата е по малък от (-1) < 0, a идва преди b
//(a > b 3 - 2 = 1) ако резилтата е (1) > 0, a отива след b
//(a = b 3 - 3 = 0) ако резилтата е = 0, a and b са еднакви и нищо не се променя (no change)

let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a - b); // Compare elements as numbers Трябва в скобите да има сравняваща функция
console.log(nums.join('|')); // 5|10|20|30|40|100

// Когато се използва само sort(), масивът се сортира с главни букви сенситив, например 'B' ще отиде пред 'a'. Когато се използва localeCompare, масивът се сортира case-insensitive, демек ще постави 'a' пред 'B'.
