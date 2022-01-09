console.log('The Farm Problem');

function numberOfLegs() {
    const chickens = 30;
    const cows = 8;
    const pigs = 5;
    let allLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
    return `The animals on the farm have total of ${allLegs} legs !`;
}

console.log(numberOfLegs());