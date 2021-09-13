/* function triangle(n) {
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += `${i} `;
        }
        console.log(`${str}`);
    }
} */

function triangle(n) {
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        let str = i + " ";
        console.log(str.repeat(i));
    }
}

triangle("5");