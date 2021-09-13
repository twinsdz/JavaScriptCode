function wordOccurr(input) {
    let myMap = new Map();

    for (let el of input) {
        if (!myMap.has(el)) {
            myMap.set(el, 1);
        } else {
            let currentValue = myMap.get(el);
            myMap.set(el, currentValue + 1);
        }
    }

    let sorted = Array.from(myMap).sort((a, b) => b[1] - a[1]);
    for (let key of sorted) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }
}

wordOccurr(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);