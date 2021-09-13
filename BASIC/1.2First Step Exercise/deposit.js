function interestSum(input){
        let deposit = Number (input[0]);
        let month = Number (input[1]);
        let yearsPercentNum = Number (input[2])
        let yearsPercent = (yearsPercentNum / 100);
        let interest = deposit * yearsPercent;
        let monthInterest = interest / 12;
        let result = (deposit) + (month * monthInterest);
    console.log(result);
}

interestSum (["200", "3", "5.7"]);
