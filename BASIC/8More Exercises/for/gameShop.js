function gameShop (input){
    let index = 0;
    let soldGames = Number (input[index++]);
    let hearthstoneCat = 0;
    let forniteCat = 0;
    let overwatchCat = 0;
    let otherCat = 0;

    let hearthstonePercent = 0;
    let fornitePercent = 0;
    let overwatchPercent = 0;
    let otherPercent = 0;
    

    for (let i = 1; i <= soldGames; i++){
        let gameName = input[index++];

        if (gameName === 'Hearthstone'){
            hearthstoneCat++;
        } else if (gameName === 'Fornite'){
            forniteCat++;
        } else if (gameName === 'Overwatch'){
            overwatchCat++;
        } else {
            otherCat++;
        }       
    }
    hearthstonePercent = (hearthstoneCat / soldGames) * 100;
    fornitePercent = (forniteCat / soldGames) *100;
    overwatchPercent = (overwatchCat / soldGames) * 100;
    otherPercent = (otherCat / soldGames) * 100;

    console.log(`Hearthstone - ${hearthstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${otherPercent.toFixed(2)}%`);
}

/* gameShop(['4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike']); */

gameShop (['3', 'Hearthstone', 'Diablo 2', 'Star Craft 2']);