let arr = [[4, 5, 6],
           [6, 5, 4],
           [5, 5, 5]];

arr.forEach(printRow);

function printRow(row){
    console.log(row);
    row.forEach(printNum);
}

function printNum(num){
    console.log(num);
}