function slicingArr() {
    let myArray = ["one", "two", "three", "four", "five"];
    // let sliced = myArray.slice(2);
   // sliced = myArray.slice(-3);  // взима елементите от края към началото

    sliced = myArray.slice(1, -2); // взима началния елемент, започва да брои от зад напред и вади съответния брой елементи и взима следващия

    // console.log(myArray); //["one","two","three","four","five"]

    console.log(sliced); // ["three","four","five"]

    // Gets a range of elements from selected start to end (exclusive) 
    // console.log(myArray.slice(2, 4)); // ["three","four"]
}

slicingArr();