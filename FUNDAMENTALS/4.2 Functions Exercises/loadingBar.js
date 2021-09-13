function loadingBar(n) {
    let printLine = '';
    let countPercentChars = n / 10;
    let countPointChars = 10 - countPercentChars;

    function addPercentChars(char) {
        let sumPercentChars = '';
        for (let i = 0; i < countPercentChars; i++) {
            sumPercentChars += '%';
        }
        return sumPercentChars;
    }

    function addPointChars(points) {
        let sumPointChars = '';
        for (let i = 0; i < countPointChars; i++) {
            sumPointChars += '.';
        }
        return sumPointChars;
    }
    let loading = addPercentChars() + addPointChars();

    printLine = `${n}% [${loading}]\nStill loading...`;
    let finished = `100% Complete!\n[${loading}]`;
    return n < 100 ? printLine : finished;
}

console.log(loadingBar(90));

/* function loading(num) {
    let loadingBar = '';
    let symbol = '';
    for (let i = 0; i < 100; i += 10) {
        if (i < num) {
            symbol = '%';
        } else {
            symbol = '.';
        }
        loadingBar += symbol;
    }
    if (num < 100) {
        console.log(`${num}% [${loadingBar}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${loadingBar}]`);
    }
}

loading(90);
 */

/* function loadingBar(theBar) {
    let procentString = [];
    let pointString = [];

    if (theBar === 100) {
        console.log('100% Complete!\n[%%%%%%%%%%]');
    } else {
        let addElements = theBar / 10;
        for (let i = 0; i < addElements; i++) {
            procentString.push('%');
        }
        let addPoint = theBar / 10;
        for (let i = addPoint; i < 10; i++) {
            pointString.push('.');
        }
        console.log(`${theBar+'%'+' '+'['+procentString.join('')+pointString.join('')+']\nStill loading...'}`);
    }
}

loadingBar(90); */