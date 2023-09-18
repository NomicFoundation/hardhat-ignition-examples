// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

library BasicLibrary {
    function addTwo(uint self) public pure returns (uint) {
        return self + 2;
    }
}

contract ContractWithLibrary {
    using BasicLibrary for uint;

    function readonlyFunction(uint num) public pure returns (uint) {
        return num.addTwo();
    }
}
