function daysOfWeek(num) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday", "Sunday"];

    let index = num - 1;

    if (isValid(days, index)) {
        console.log(days[index]);
    } else {
        console.log('Invalid day!');
    }

    function isValid(arr, index) {
        if (index < 0 || index >= arr.length) {
            return false;
        } else {
            return true;
        }
    }
}

daysOfWeek(6);