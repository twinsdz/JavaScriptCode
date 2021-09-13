function solve(input) {
    let capacity = Number(input.shift());
    let line = input.shift();
    let users = {};

    while (line != "Statistics") {
        let [command, x, a, b] = line.split('=');

        if (command == 'Add') {
            if (!users.hasOwnProperty(x)) {
                users[x] = {
                    sent: Number(a),
                    recieved: Number(b)
                };
            }
        } else if (command == 'Message') {

            if (users.hasOwnProperty(x) && users.hasOwnProperty(a)) {
                users[x].sent += 1;
                users[a].recieved += 1;

                //  ако надвишава капацитета
                if (users[x].sent + users[x].recieved >= capacity) {
                    delete users[x];
                    console.log(`${x} reached the capacity!`);
                }

                if (users[a].sent + users[a].recieved >= capacity) {
                    delete users[a];
                    console.log(`${a} reached the capacity!`);
                }

            }
        } else if (command == 'Empty') {

            if (users.hasOwnProperty(x)) {
                delete users[x];
            }
            // триене на всичко в обекта
            if (x == "All") {
                users = {};
            }

        }
        line = input.shift();
    }

    // дължина на обект. Колко елемента има в обекта.
    let usersCount = Object.keys(users).length;
    console.log(`Users count: ${usersCount}`);

    let sorted = Object.entries(users).sort((a, b) => Number(b[1].recieved) - Number(a[1].recieved) || a[0].localeCompare(b[0]));

    // print
    for (let user of sorted) {
        console.log(`${user[0]} - ${Number(user[1].sent) + Number(user[1].recieved)}`);
    }
}

// Amy reached the capacity!
// Users count: 4
// Mark - 12
// Michael - 13
// Blake - 13
// Clark - 4



// solve([
// "10",
// "Add=Berg=9=0",
// "Add=Kevin=0=0",
// "Message=Berg=Kevin",
// "Add=Mark=5=4",
// "Statistics"
// ]);

solve([
    "20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"
]);

// solve([
// "12",
// "Add=Bonnie=3=5",
// "Add=Johny=4=4",
// "Empty=All",
// "Add=Bonnie=3=3",
// "Statistics"
// ])