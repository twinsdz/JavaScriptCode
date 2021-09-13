function solve(input) {
    let stops = input.shift();
    let line = input.shift();

    while (line !== 'Travel') {
        let [command, ...data] = line.split(':');

        if (command === 'Add Stop') {
            let [index, str] = data;
            index = Number(index);

            if (isValidIndex(stops, index)) {
                stops = stops.substring(0, index) + str + stops.substring(index);
            }
            console.log(stops);

        } else if (command === 'Remove Stop') {
            let [start, end] = data;
            start = Number(start);
            end = Number(end);

            if (isValidIndexDouble(stops, start, end)) {
                let endIndex = end + 1;
                stops = stops.substring(0, start) + stops.substring(endIndex);

            }
            console.log(stops);

        } else if (command === 'Switch') {
            let [oldStr, newStr] = data;

            if (stops.includes(oldStr)) {
                stops = stops.split(oldStr).join(newStr);

            }
            console.log(stops);
            
        }
        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

    // проверка за валидност на индекс
    function isValidIndex(str, index) {
        let isValid = index < str.length && index >= 0 ? true : false;
        return isValid;
    }

    // проверка за валидност на два индекса
    function isValidIndexDouble(str, start, end) {
        let isValid = start < str.length && end < str.length && start >= 0 && end >= 0 ? true : false;
        return isValid;
    }
}

solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);