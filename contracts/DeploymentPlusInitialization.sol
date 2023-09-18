// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract HelloWorldWithInitialize {
    bool initialized = false;
    string theMessage = "";

    function initialize(string memory _message) public {
        theMessage = _message;
        initialized = true;
    }

    function message() public view returns (string memory) {
        require(initialized, "Message not initialized");
        return theMessage;
    }
}
