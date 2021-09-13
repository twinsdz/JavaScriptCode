function filmPremiere(filmName, bookingType, tiketCount) {
    tiketCount = Number(tiketCount);
    let tiketPrice = 0;
    let totalPrice = 0;

    if (filmName === "John Wick") {
        switch (bookingType) {
            case "Drink":
                tiketPrice = tiketCount * 12;
                break;
            case "Popcorn":
                tiketPrice = tiketCount * 15;
                break;
            case "Menu":
                tiketPrice = tiketCount * 19;
                break;
        }
    } else if (filmName === "Star Wars"){
        switch (bookingType) {
            case "Drink":
                tiketPrice = tiketCount * 18;
                break;
            case "Popcorn":
                tiketPrice = tiketCount * 25;
                break;
            case "Menu":
                tiketPrice = tiketCount * 30;
                break;
        }
    }  else if (filmName === "Jumanji"){
        switch (bookingType) {
            case "Drink":
                tiketPrice = tiketCount * 9;
                break;
            case "Popcorn":
                tiketPrice = tiketCount * 11;
                break;
            case "Menu":
                tiketPrice = tiketCount * 14;
                break;
        }
    }
  if (filmName === "Star Wars" && tiketCount >= 4){
      tiketPrice *= 0.70;
  }

  if (filmName === "Jumanji" && tiketCount == 2){
      tiketPrice *= 0.85;
  }
  console.log(`Your bill is ${tiketPrice.toFixed(2)} leva.`);
}

/* filmPremiere("John Wick", "Drink", "6"); */
/* filmPremiere ("Star Wars", "Popcorn", "4"); */

/* filmPremiere ("Jumanji", "Menu", "2"); */

/* filmPremiere ("John Wick", "Drink", "23"); */

filmPremiere ("John Wick", "Popcorn", "11");