// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.

const coffeeMenu = require("./coffee_data.js");
// d. Connect the coffee_data.js file to the index.js file.

// Promt 2:
// Print an array of all the drinks on the menu.
const printDrinks = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(printDrinks));

// Promt 3:
// Print an array of drinks that cost 5 and under.
const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.table(itemsUnderFive);

// Promt 4
// Print an array of drinks that are priced at an even number.
const evenPrice = (item) => {
    return item.price % 2 === 0;
}
const evenPricedItems = coffeeMenu.filter(evenPrice);
console.table(evenPricedItems);

// Promt 5:
// Print the total if you were to order one of every drink.
const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue.price;
};

const totalPrice = coffeeMenu.reduce(sumTotalCost, 0);
console.log(totalPrice);

// Promt 6:
// Print an array with all the drinks that are seasonal.
const isSeasonal = (item) => {
    return item.seasonal === true;
}
const seasonalItems = coffeeMenu.filter(isSeasonal);
console.table(seasonalItems);

// Promt 7:
// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const imported = (item) => {
    return item.seasonal === true;
};

const importedBeans = coffeeMenu.filter(imported);

for (const item of importedBeans) {
    item.name += " with imported beans";
}

console.table(importedBeans);