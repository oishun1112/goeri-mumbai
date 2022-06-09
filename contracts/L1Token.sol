//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract L1Token is ERC20 {
    uint256 public mintAmount = 10000 * 1e18;

    constructor() public ERC20("OishunToken", "OT") {
        _mint(msg.sender, mintAmount);
    }

    function mint() public {
        _mint(msg.sender, mintAmount);
    }
}
