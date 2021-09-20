function fromJSONToHTMLTable(json) {
    let students = JSON.parse(json);
    let first = students[0];

    let html = '<table>';

    html += `<tr>${Object.keys(first).map(x => `<th>${x}</th>`).join('')}</tr>`;
    students.forEach(student => {
        html += '<tr>';
        html += Object.values(student).map(x => `<td>${x}</td>`).join('');
        html += '</tr>';
    });
    html += '</table>';
    return html;
}

console.log(fromJSONToHTMLTable('[{"Name": "Stamat", "Score": 5.5}, {"Name": "Rumen", "Score": 6}]'));

// console.log(fromJSONToHTMLTable('[{"Name": "Pesho", "Score": 4,"Grade": 8}, {"Name": "Gosho", "Score": 5, "Grade": 8 }, {"Name": "Angel","Score": 5.50,"Grade": 10}]'));