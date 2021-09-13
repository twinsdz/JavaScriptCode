function gymnastics(country, device) {
    let valuation = 0;

    if (device == "ribbon") {
        
        switch (country) {
            case "Russia":
                valuation = 9.100 + 9.400;
                break;

            case "Bulgaria":
                valuation = 9.600 + 9.400;
                break;

            case "Italy":
                valuation = 9.200 + 9.500;
                break;
        }
    } else if (device == "hoop") {
        switch (country) {
            case "Russia":
                valuation = 9.300 + 9.800;
                break;
            case "Bulgaria":
                valuation = 9.550 + 9.750;
                break;
            case "Italy":
                valuation = 9.450 + 9.350;
                break;
        }
    } else if (device == "rope") {
        switch (country) {
            case "Russia":
                valuation = 9.600 + 9.000;
                break;
            case "Bulgaria":
                valuation = 9.500 + 9.400;
                break;

            case "Italy":
                valuation = 9.700 + 9.150;
                break;
        }
        
    }
let percentNeeded = ((20 - valuation)/20) * 100;

    console.log(`The team of ${country} get ${(valuation).toFixed(3)} on ${device}.`);
    console.log(`${(percentNeeded).toFixed(2)}%`);
}

gymnastics("Italy", "hoop");