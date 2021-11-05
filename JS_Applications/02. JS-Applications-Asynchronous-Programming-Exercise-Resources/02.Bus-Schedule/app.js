function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stop = {
        next: 'depot'
    };

   async function depart() {
       departBtn.disabled = true; // изключвам бутона

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        const res = await fetch(url); // заявка
        stop = await res.json(); // присъиденява резултата от отговора на променливата стоп

        label.textContent = `Next stop ${stop.name}`;
        arriveBtn.disabled = false; // включвам другия бутон
    }

    function arrive() {
        label.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();