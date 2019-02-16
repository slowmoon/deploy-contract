pragma solidity ^0.4.24;

contract Message{
    
    string message;
    
    constructor(string _msg)public{
        message = _msg;
    }
    
    function setMessage(string _msg) payable public{
        message = _msg;
    }
    
    function getMessage()public view returns(string){
        return message;
    }
    
    function () payable public{
        
    }
    
    function getBalance()public view returns(uint256){
        return address(this).balance;
    }
}