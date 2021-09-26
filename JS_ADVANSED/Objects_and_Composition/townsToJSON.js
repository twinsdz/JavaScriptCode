function solve(array) {
    let arr = [];

    let tableHead = array.shift().match(/[A-Za-z]+/g);
    let [town, latit, longit] = tableHead;

    for (let row of array) {
        let obj = {}; // при всяко завъртане правя нов обект
        let lineArr = row.match(/([^|]+)/g); // regex който реже всичко между дадени символи
        let [townName, latitNum, longitNum] = lineArr;

        townName = townName.trim();
        latitNum = Number(latitNum);
        longitNum = Number(longitNum);
        latitNum = Number(latitNum.toFixed(2));
        longitNum = Number(longitNum.toFixed(2));

        obj[town] = townName;
        obj[latit] = latitNum;
        obj[longit] = longitNum;
        arr.push(obj);
    }
    return JSON.stringify(arr);
}

// console.log(solve(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
// ]));

console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));


/* function solve(array) {
    let arr = [];

    let tableHead = array.shift().split('|').filter(x => x !== '').map(x => x.trim());
    let [town, latit, longit] = tableHead;

    for (let row of array) {
        let obj = {}; // при всяко завъртане правя нов обект
        let lineArr = row.split('|').filter(x => x !== '').map(x => x.trim());
        let [townName, latitNum, longitNum] = lineArr;

        latitNum = Number(latitNum);
        longitNum = Number(longitNum);
        latitNum = Number(latitNum.toFixed(2));
        longitNum = Number(longitNum.toFixed(2));

        obj[town] = townName;
        obj[latit] = latitNum;
        obj[longit] = longitNum;
        arr.push(obj);
    }   
    return JSON.stringify(arr);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));
 */

/* function solve(array) {
    let arr = [];

    let tableHead = array.shift().split('|').filter(x => x !== '').map(x => x.trim());
    let [town, latit, longit] = tableHead;

    let obj = {};
    obj[town] = '';
    obj[latit] = 0;
    obj[longit] = 0;


    for (let row of array) {
        let lineArr = row.split('|').filter(x => x !== '').map(x => x.trim());
        let [townName, latitNum, longitNum] = lineArr;
        latitNum = Number(latitNum);
        longitNum = Number(longitNum);
        latitNum = Number(latitNum.toFixed(2));
        longitNum = Number(longitNum.toFixed(2));
        obj[town] = townName;
        obj[latit] = latitNum;
        obj[longit] = longitNum;
        arr.push(deepCopy(obj));
    }

    function deepCopy(target) {
        if(Array.isArray(target)){
            return target.map(deepCopy);
        } else if(typeof target == 'object'){
            return [...Object.entries(target)].reduce((acc, [key, value]) => Object.assign(acc, {[key]: deepCopy(value)}), {});
        } else{
            return target;
        }
    }
    return JSON.stringify(arr);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])); */