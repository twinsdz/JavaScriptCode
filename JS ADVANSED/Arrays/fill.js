let arr = [1, 2, 3, 4];

// fill with What? (0) from position startIndex (2) until endIndex excl (4)
console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0]

// fill with 5 from position 1 till the end
console.log(arr.fill(5, 1)); // [1, 5, 5, 5] 

// fill with 6 the whole array
console.log(arr.fill(6)); // [6, 6, 6, 6]
