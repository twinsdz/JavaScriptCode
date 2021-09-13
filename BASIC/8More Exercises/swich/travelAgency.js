function travelAgency(town, packageType, vipDiscount, stayDays) {
    stayDays = Number(stayDays);
    let totalPrice = 0;

    if (stayDays <= 0 || stayDays == undefined) {
        console.log("Days must be positive number!");
    }

    if (stayDays > 7){
        stayDays--;
    }

    if (town === "Bansko" || town === "Borovets") {
        switch (packageType) {
            case "noEquipment":
                totalPrice = stayDays * 80;

                if (vipDiscount === "yes") {
                    totalPrice *= 0.95;
                }
                break;
            case "withEquipment":
                totalPrice = stayDays * 100;

                if (vipDiscount === "yes") {
                    totalPrice *= 0.90;
                }
                break;
            default:
                console.log("Invalid input!");
                break;
        }
    } else if (town === "Varna" || town === "Burgas") {
        switch (packageType) {
            case "noBreakfast":
                totalPrice = stayDays * 100;

                if (vipDiscount === "yes") {
                    totalPrice *= 0.93;
                }
                break;
            case "withBreakfast":
                totalPrice = stayDays * 130;

                if (vipDiscount === "yes") {
                    totalPrice *= 0.88;
                }
                break;
            default:
                console.log("Invalid input!");
                break;
        }
    } else {
        console.log("Invalid input!");
    }
    if (totalPrice > 0) {
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    }
}

travelAgency("Borovets", "noEquipment", "yes", "6");

travelAgency("Bansko", "withEquipment", "no", "2");

travelAgency("Varna", "withBreakfast", "no", "0");

travelAgency("Gabrovo", "noBreakfast", "no", "3");

travelAgency("Varna", "withEquipment", "no", "3");