// This is the 'landing page' where the functions are imported and called

// Importing the functions
const { getInspiration } = require('./getInspiration.js');
const { getInsult } = require('./getInsult.js');

// call a random number, if number is odd, run getInsult, if even, run getInspiration

let randomNum = Math.floor(Math.random()*100);

if (randomNum % 2 === 0) {
    getInspiration();
} else {
    getInsult();
}


