// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract HelloWorld {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }
}

contract WrappedHelloWorld {
    HelloWorld public inner;

    constructor(HelloWorld _inner) {
        inner = _inner;
    }

    function message() public view returns (string memory) {
        return inner.message();
    }
}
