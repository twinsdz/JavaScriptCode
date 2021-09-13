 /*function readArr (arr){
    let index = 0;

    while (true){
        if (arr[index] == "Stop"){
            break;
        } else {
            console.log(arr[index]);
            index++;
        }
    } 
} */
 
/* function readArr(arr) {
     let index = 0;
    
     while (true) {
         let str = arr[index];
         index++;
         if (str === "Stop") {
             break;
         }
         console.log(str);
     }
 }
 */

 function readArr(input){
    let index = 0;
    let text = input[index++];

    while (text !== "Stop"){
        console.log(text);
        text = input[index++];
    }
 }

 readArr(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);