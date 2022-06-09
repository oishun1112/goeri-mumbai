//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.0;

import "@maticnetwork/pos-portal/contracts/child/ChildToken/ChildERC20.sol";

contract L2Token is ChildERC20 {
    string public message;

    constructor(address childChainManager)
        public
        ChildERC20("OishunToken", "OT", 18, childChainManager)
    {
        message = "Sometimes you gotta run before you can walk";
    }
}
