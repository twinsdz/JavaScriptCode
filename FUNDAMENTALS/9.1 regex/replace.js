
let text = 'Peter: 123 Mark: 456';
let replacement = '999';
let regex = /\d{3}/g;
let result = text.replace(regex, replacement);

console.log(result);

text = 'Peter: 123 Mark: 456 Desi: 123';
result = text.replace(/123/g, '999'); // регекса си е направо в replace метода и заменя всички съвпадения на цифри 123, защото е глобален

console.log(result);