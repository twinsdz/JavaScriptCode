/* function projectsDuration(name, projects) {
    archName = name;
    projects = Number (projects);
    let result = projects * 3;

    console.log(`The architect ${archName} will need ${projects} hours to complete ${result} project/s.`);
} */

function projectsDuration(input) {
    let archName = input[0];
    let projects = Number (input[1]);
    let result = projects * 3;

    console.log(`The architect ${archName} will need ${result} hours to complete ${projects} project/s.`);
}

projectsDuration (["George", "4"]);

projectsDuration(["Sanya", "9"]);