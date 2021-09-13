/* function solve(str) {
            let lastLine = str.lastIndexOf('\\');
            let pointIndex = str.lastIndexOf('.');
            let fileName = str.substring(lastLine+1, pointIndex);
            ext = str.substring(pointIndex+1);
            console.log(`File name: ${fileName}\nFile extension: ${ext}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
// solve('C:\\Projects\\Data-Structures\\LinkedList.cs'); */

function solve(str) {
    let words = str.split('\\');
    for (let el of words) {
        if (el.includes('.')) {
            let pointIndex = el.lastIndexOf('.');
            let fileName = el.substring(0, pointIndex);
            let extension = el.substring(pointIndex+1);
            console.log(`File name: ${fileName}\nFile extension: ${extension}`);
        }
    }
}

solve('C:\\Internal\\training-internal\\Template.pptx');
// solve('C:\\Projects\\Data-Structures\\LinkedList.cs');