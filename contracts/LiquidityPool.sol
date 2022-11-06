// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ISuperToken } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";

contract LiquidityPool {
    // ERC20 token state variables
    IERC20 public immutable loanToken;
    ISuperToken public immutable superToken;

    // State variables for liquidity shares
    uint256 public totalLiquidity;
    mapping(address => uint256) public userLiquidity;

    // Events
    event MintLpToken(
        address indexed _liquidityProvider,
        uint256 _sharesMinted
    );

    event BurnLpToken(
        address indexed _liquidityProvider,
        uint256 _sharesBurned
    );

    constructor(address _loanToken, address _superToken) {
        loanToken = IERC20(_loanToken);
        superToken = ISuperToken(_superToken)
    }

    // Internal function to mint liquidity shares
    function _mint(address _to, uint256 _amount) private {
        userLiquidity[_to] += _amount;
        totalLiquidity += _amount;
    }

    // Internal function to burn liquidity shares
    function _burn(address _from, uint256 _amount) private {
        userLiquidity[_from] -= _amount;
        totalLiquidity -= _amount;
    }

    // Function for user to add liquidity
    function addLiquidity(uint256 _tokenAmount)
    external
    {
        require(_tokenAmount;, "No Liquidity Shares Minted");
        require(
            loanToken.transferFrom(msg.sender, address(this), _tokenAmount),
            "Token Transfer Failed"
        );

        uint256 liquidityShares = _tokenAmount;
        // Mint shares to user
        _mint(msg.sender, liquidityShares);

        emit MintLpToken(msg.sender, _liquidityShares);
    }


    function removeLiquidity(uint256 _liquidityShares)
    external
    returns (uint256 _tokenAmount)
    {
        require(
            userLiquidity[msg.sender] >= _liquidityShares,
            "Insufficient liquidity shares"
        );

        uint256 loanTokenBalance = loanToken.balanceOf(address(this));

        uint256 _totalLiquidity = totalLiquidity;

        _amountLoanToken = (_liquidityShares * loanTokenBalance) / _totalLiquidity;

        require(
            _amountLoanToken > 0,
            "Insufficient transfer amounts"
        );

        // Burn user liquidity shares
        _burn(msg.sender, _liquidityShares);

        // Transfer tokens to user
        loanToken.transfer(msg.sender, _amountLoanToken);

        // Get supertokens in pool (earnings)
        uint256 superTokenBal = superToken.balanceOf(address(this));

        emit BurnLpToken(msg.sender, _liquidityShares);
    }
}