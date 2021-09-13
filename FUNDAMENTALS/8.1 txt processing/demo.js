function solve(text){
    let currentIndex = text.indexOf('Java');

   while(currentIndex !== -1){
       console.log(currentIndex);
       currentIndex = text.indexOf('Java', currentIndex + 1);
   }

   let str = text.substring(7, 17);
   let js = text.slice(7, -5); // тръгва от 7ми индекс и трие отзад напред 5 индекса
   let secondJs = text.substring(7, -5); // тръгва от 7ми индекс прави -5 на 0 и вижда, че endIndex е по-малък от startIndex и ги разменя
   let jsSubStr = text.substr(2, 4); // startIndex and count

   console.log(str);
   console.log(js);
   console.log(secondJs);
   console.log(jsSubStr);
}

solve('I like JavaScript and Java Java Java');