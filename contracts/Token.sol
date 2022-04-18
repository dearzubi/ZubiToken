// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract ZubiToken is ERC20Capped, Ownable{

    constructor(uint cap) ERC20("ZubiToken", "ZT") ERC20Capped(cap * (10 ** decimals())){ }

    function issueToken(uint supply) public onlyOwner{
        _mint(msg.sender, supply * (10 ** decimals()));
    }
}