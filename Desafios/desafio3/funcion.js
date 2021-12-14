const random = require('random')

function randomProd() {
    const numRandom = random.int(0, 2);
    return numRandom;
}

module.exports = randomProd;


