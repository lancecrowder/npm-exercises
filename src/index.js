const $ = require('jquery');

const sayHello = name => 'Hello';

console.log(sayHello);

const orale = require('../src/say-hello.js');

console.log(orale);

$('body').css('background-color', 'papayawhip');