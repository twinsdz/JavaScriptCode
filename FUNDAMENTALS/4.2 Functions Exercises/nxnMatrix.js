/* function nxnMatrix (n){

    for (let row = 1; row <= n; row++){
        let printLine = '';

        for (let col = 1; col <= n; col++){
            printLine += n + ' ';
        }
        console.log(printLine);
    } 
}

nxnMatrix(3); */

function nxnMatrix(n) {

    function constructRow(n) {
        let printLine = '';
        for (let col = 1; col <= n; col++) {
            printLine += n + ' ';
        }
        return `${printLine}\n`;
    }

    let result = '';
    for (let row = 1; row <= n; row++) {

        result += constructRow(n);
    }
    return result;
}

console.log(nxnMatrix(3));;