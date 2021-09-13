function solve(input) {
    let text = input.shift();
    // групи регекс и повторение на група (\1 единицата е номера на групата).
    let pattern = /(#|\|)(?<itemName>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<call>\d+)\1/g;

    let total = 0;
    // regex.exec(text) връща масив с групите като обекти
    let arr = pattern.exec(text);
    let array = [];

    // console.log(arr);
    // [
    //     '#Bread#19/03/21#4000#',
    //     '#',
    //     'Bread',
    //     '19/03/21',
    //     '4000',
    //     index: 0,
    //     input: '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
    //     groups: [Object: null prototype] {
    //       itemName: 'Bread',
    //       date: '19/03/21',
    //       call: '4000'
    //     }
    //   ]


    while (arr !== null) {
        let callories = Number(arr.groups.call);
        total += callories;
        let match = arr[0];

        if (match[0] === match[match.length - 1]) {
            array.push(arr);
        }
        arr = pattern.exec(text);
    }

    // let days = Math.floor(total / 2000);
    let days = Math.trunc(total / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    if (days > 0 && array.length > 0) {
        for (let el of array) {
            let item = el.groups.itemName;
            let dateExp = el.groups.date;
            let calor = el.groups.call;
            console.log(`Item: ${item}, Best before: ${dateExp}, Nutrition: ${calor}`);
        }
    }
}

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

// solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);

// solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);