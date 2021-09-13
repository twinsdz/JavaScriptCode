function welcome(input) {
    let arg = input[0];

    if (arg === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else if (arg !== "s3cr3t!P@ssw0rd") {
        console.log("Wrong password!");
    }
}

welcome(["s3cr3t!p@ss!P@ssw0r"]);