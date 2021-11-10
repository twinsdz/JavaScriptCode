let array = [1, 2, 3, 4, 5];

let isEven = function (element) {
    // checks whether an element is even
    return element % 2 === 0;
};

console.log(array.some(isEven)); // return boolian true