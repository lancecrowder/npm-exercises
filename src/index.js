const $ = require('jquery');

const sayHello = name => 'Hello';
console.log(sayHello);

// const orale = require('../src/say-hello.js');
// console.log(orale);

const test = require('../src/say-hello.js');
console.log(test);

$('body').css('background-color', 'papayawhip');
