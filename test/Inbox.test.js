const assert = require('assert'); // node.js core module for assertions
const ganache = require('ganache-cli'); // ganache-cli is a local test network
const Web3 = require('web3'); // web3 is a library for interacting with the Ethereum network. ** Web3 is capilized because it is a constructor function. Creates a new instance of web3.

const web3 = new Web3(ganache.provider()); // our instance of Web3

// class Car {
//   park() {
//     return 'stopped';
//   }
//   drive() {
//     return 'vroom';
//   }
// }

// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe('Car', () => {
//   it('can park', () => {
//     assert.equal(car.park(), 'stopped'); //assert.equal compares two values and throws an error if they are not equal..ex is car.park() == 'stopped'
//   });

//   it('can drive', () => {
//     assert.equal(car.drive(), 'vroom');
//   });
// });
