function fromJSONToHTMLTable(input) {
    let students = JSON.parse(input);
    console.log('<table>');
    let keys = Object.keys(students[0]);
    console.log(keyRow(keys));
    
    for (student of students) {
        let values = Object.values(student);
        console.log(valueRow(values));
    }
    console.log('</table>');
// html проверка срещу въвеждане на вреден html код.
    function escapeHTML(htmlCode) {
        const entryMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return htmlCode
            .toString()
            .replace(/[&<>"']/g, (char) => entryMap[char]);
    }

    function keyRow(arr) {
        let result = `   <tr>`;
        arr.forEach(element => {
            result += `<th>${escapeHTML(element)}</th>`;
        });
        result += `</tr>`;
        return result;
    }

    function valueRow(arr) {
        let result = `   <tr>`;
        arr.forEach(el => {
            result += `<td>${escapeHTML(el)}</td>`;
        });
        result += `</tr>`;
        return result;
    }
}


// fromJSONToHTMLTable('[{"Name": "Stamat", "Score": 5.5}, {"Name": "Rumen", "Score": 6}]');

console.log(fromJSONToHTMLTable('[{"Name": "Pesho", "Score": 4,"Grade": 8}, {"Name": "Gosho", "Score": 5, "Grade": 8 }, {"Name": "Angel","Score": 5.50,"Grade": 10}]'));