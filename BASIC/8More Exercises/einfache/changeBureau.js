function changeBureau (bitcoin, yuan, commission){
    bitcoin = Number (bitcoin);
    yuan = Number (yuan);
    commission = Number (commission);

    let bitcoinInBglv = bitcoin * 1168;
    let yuanInUsDollar = yuan * 0.15;
    let usDollerInBgLv = yuanInUsDollar * 1.76;
    let sumLv = bitcoinInBglv + usDollerInBgLv;
    let sumEu = sumLv / 1.95;
   
    console.log(`${(sumEu - ((sumEu*commission)/100)).toFixed(2)}`);

}

changeBureau("1","5", "5");