pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

contract Inbox { // contract named Inbox
    string public message; // storage variable (instance variable) exist for life of contract

    function Inbox(string initialMessage) public { // The contructor if function has SAME syntax as contract name
        message = initialMessage;
    }

    function setMessage(string newMessage) public { //funcs that we can call, ON the contract...
        message = newMessage;                      // after it's been deployed to the blockchain
    }

}
