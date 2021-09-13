function convertToObj(objAsStr) {
    let parsedObj = JSON.parse(objAsStr);
    let result = '';

    let entries = Object.keys(parsedObj);
    for (let key of entries) {
        result += `${key}: ${parsedObj[key]}\n`;
    }
    return result;
}

/* function convertToObj(json) {
    let person = JSON.parse(json);
    let result = '';
    let entries = Object.entries(person);

    for (let [key, value] of entries) {
        // console.log(`${key}: ${value}`);
        result += `${key}: ${value}\n`;
    }
    return result;
} */

console.log(convertToObj('{"name": "George", "age": 40, "town": "Sofia"}'));