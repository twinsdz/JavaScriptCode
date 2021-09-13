function solve(input) {
    let tabs = Number(input[0]);
    let salery = Number(input[1]);

    for (let index = 2; index < input.length; index++) {
        currentTab = input[index];

        if (currentTab === "Facebook") {
            salery -= 150;
        } else if (currentTab === "Instagram") {
            salery -= 100;
        } else if (currentTab === "Reddit") {
            salery -= 50;
        }

    }
    if (salery <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salery);
    }
}

solve(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);