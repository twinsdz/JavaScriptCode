function digitSum(n) {
    let num = n.toString();
    let sum = 0;
    
    for (let el of num) {
        let number = Number(el);
        sum += number;
    }
    return sum;
}

console.log(digitSum(543));