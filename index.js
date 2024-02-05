// Import dependencies
const Filter = require("bad-words");

// Make a new filter
const filter = new Filter();

// https://www.cs.cmu.edu/~biglou/resources/
// Add extra words to the bad words list
const words = require("./extra_bad.json");
filter.addWords(...words);

// Test the bad words filter
console.log(filter.clean("Don't be an FuckoFF"));