const columnOne = ['artless', 'bawdy', 'beslubbering', 'bootless', 'churlish', 'cockered', 'clouted', 'craven', 'currish', 'dankish'];
const columnTwo = ['base-court', 'bat-fowling', 'beef-witted ', 'beetle-headed', 'boil-brained ', 'clapper-clawed', 'clay-brained ', 'common-kissing', 'crook-pated', 'dismal-dreaming'];
const columnThree = ['apple-john', 'baggage', 'barnacle', 'bladder', 'boar-pig', 'bugbear', 'bum-bailey', 'canker-blossom', 'clack-dish', 'clotpole'];

function randomColumnOne() {
    return columnOne[Math.floor(Math.random() * columnOne.length)];
}

function randomColumnTwo() {
    return columnTwo[Math.floor(Math.random() * columnOne.length)];
}

function randomColumnThree() {
    return columnThree[Math.floor(Math.random() * columnOne.length)];
}

function createInsult() {
    return `Thou ${randomColumnOne()}, ${randomColumnTwo()} ${randomColumnThree()}!`;
}

module.exports = { createInsult };