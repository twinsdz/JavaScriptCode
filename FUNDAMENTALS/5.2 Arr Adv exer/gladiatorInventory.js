/* function inventoryGladiator(input) {
    let inventory = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');

        if (commands[0] === "Buy") {
            if (!inventory.includes(commands[1])) {
                inventory.push(commands[1]);
            }
        } else if (commands[0] === "Trash") {
            if (inventory.includes(commands[1])) {
                let index = inventory.indexOf(commands[1]);
                inventory.splice(index, 1);
            }
        } else if (commands[0] === "Repair") {
            if (inventory.includes(commands[1])) {
                let index = inventory.indexOf(commands[1]);
                inventory.splice(index, 1);
                inventory.push(commands[1]);
            }
        } else if (commands[0] === "Upgrade") {
            let upgadeElement = commands[1].split('-');
            if (inventory.includes(upgadeElement[0])) {
                let index = inventory.indexOf(upgadeElement[0]);
                inventory.splice(index + 1, 0, `${upgadeElement[0]}:${upgadeElement[1]}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

inventoryGladiator(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);

inventoryGladiator(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']); */

function gladiatorInventory(array) {
 
    let inventory = array.shift().split(' '); 
    
    for (let i = 0; i < array.length; i++) {
 
        let currentAction = array[i].split(' ');
 
        let action = currentAction[0];
        let item = currentAction[1];
 
        switch(action) {
            case 'Buy': buyItem(item); break; 
            case 'Trash': trashItem(item); break;
            case 'Repair': repairItem(item); break; 
            case 'Upgrade': upgradeItem(item);break;  
        }
    }
 
    function buyItem(item) {
        if (!inventory.includes(item)) {
            inventory.push(item); 
        }
    }
 
    function trashItem(item) {
        if (inventory.includes(item)) {
            inventory.splice(inventory.indexOf(item), 1);
        }
    }
 
    function repairItem(item) {
        if (inventory.includes(item)) {
            inventory.push(inventory.splice(inventory.indexOf(item), 1));
        }
    }
 
    function upgradeItem(item) {
        let itemToUpgrade = item.split('-'); 
 
        if (inventory.includes(itemToUpgrade[0])) {
            let addedItem = `${itemToUpgrade[0]}:${itemToUpgrade[1]}`
            // вмъкване на елемент в масив splice(index, 0 брой елементи за триене, елемента за добавяме) вмъква след дадения индекс елемент
            inventory.splice(inventory.indexOf(itemToUpgrade[0]) + 1, 0, addedItem);
        }
    }
 
    return inventory.join(' ');
 
}

console.log(gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']));

console.log(gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']));