function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case "Monday":
                console.log("open");
                break;
            case "Tuesday":
                console.log("open");
                break;
            case "Wednesday":
                console.log("open");
                break;
            case "Thursday":
                console.log("open");
                break;
            case "Friday":
                console.log("open");
                break;
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
                console.log("closed");
                break;
            default:
                console.log("Error");
                break;
        }
    } else {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
            case "Sunday":
                console.log("closed");
                break;
            default:
                console.log("Error");
                break;
        }

    }
}

workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);