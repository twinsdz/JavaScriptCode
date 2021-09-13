function clothes(input) {
    let degree = Number(input[0]);
    let dayType = input[1];
    let outfit = "";
    let shoes = "";

    if (degree >= 10 && degree <= 18) {
        switch (dayType) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (degree >= 18 && degree <= 24) {
        switch (dayType) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (degree >= 25) {
        switch (dayType) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}

clothes(["16", "Morning"]);

clothes(["22", "Afternoon"]);

clothes(["28", "Evening"]);