// на фактори функцията подаваме части и те композират обект и ни го връщат 

function factory(library, orders) {
    let result = [];

    for (let order of orders) {
        // assign - къде пълним(присвояваме)? какво? (от масива orders, който обхождаме взимаме елемента ордер, който е обект и в него достъпваме template)
        const composed = Object.assign({}, order.template);

        for (let part of order.parts) {
            composed[part] = library[part];
        }
        result.push(composed);
    }

    return result;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [{
        template: {
            name: 'ACME Printer'
        },
        parts: ['print']
    },
    {
        template: {
            name: 'Initech Scanner'
        },
        parts: ['scan']
    },
    {
        template: {
            name: 'ComTron Copier'
        },
        parts: ['scan', 'print']
    },
    {
        template: {
            name: 'BoomBox Stereo'
        },
        parts: ['play']
    },
];

const products = factory(library, orders);
console.log(products);

const player = products[3];

player.play('Desi', 'Morning breeze bossa Nova');