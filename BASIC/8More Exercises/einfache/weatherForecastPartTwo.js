function weather (degree){
    degree = Number (degree);
    
        if (degree >= 26 && degree <= 35){
            console.log ("Hot");
        } else if (degree >= 20.10 && degree <= 25.90){
            console.log ("Warm"); 
        } else if (degree >= 15 && degree <= 20){
            console.log ("Mild");
        } else if (degree >= 12.00 && degree <= 14.90){
            console.log ("Cool");
        } else if (degree >= 5.00 && degree <= 11.90){
            console.log ("Cold");
        } else {
            console.log ("unknown");
        }
}

weather ("0");