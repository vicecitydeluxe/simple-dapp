//https://remix.ethereum.org/

// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract StorageContract {
    struct Person {
        string name;
        uint age;
    }

mapping(address => Person) public people;
address[] public peopleAddresses;

function setData(string memory  _name, uint _age) public {
    Person memory newPerson = Person ({
        name: _name,
        age: _age
    });

    people[msg.sender] = newPerson;
    peopleAddresses.push(msg.sender);
}

function getPersonData(address _adress) public view returns(string memory, uint) {
    return(
        people[_adress].name,
        people[_adress].age
    );
}

function getPeopleAddresses() public view returns(address[] memory) {
    return peopleAddresses;
}

}

