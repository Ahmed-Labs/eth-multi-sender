// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract MultiSend {

    function sendEther(address[] memory _addresses, uint256[] memory _values) external payable {
        require(_addresses.length == _values.length);
        for (uint256 i = 0; i < _addresses.length; i++){
            payable(_addresses[i]).transfer(_values[i]);
        }
        uint256 balance = address(this).balance;
        if (balance > 0) payable(msg.sender).transfer(balance);
    }

   
}