// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LiquidityPool {
    // ERC20 token state variables
    IERC20 public immutable token1;
    IERC20 public immutable token2;
    // State variables for token reserves
    uint256 public reserve1;
    uint256 public reserve2;
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

    constructor(address _token1, address _token2) {
        token1 = IERC20(_token1);
        token2 = IERC20(_token2);
    }

    // Function to get reserves
    function getReserves()
    public
    view
    returns (uint256 _reserve1, uint256 _reserve2)
    {
        _reserve1 = reserve1;
        _reserve2 = reserve2;
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

    // Internal function to update liquidity pool reserves
    function _update(uint256 _reserve1) private {
        reserve1 = _reserve1;
    }




    // Function for user to add liquidity
    function addLiquidity(uint256 _tokenAmount)
    external
    returns (uint256 _liquidityShares)
    {
        // User sends both tokens to liquidity pool
        require(
            token1.transferFrom(msg.sender, address(this), _tokenAmount),
            "Token Transfer Failed"
        );

        uint256 _totalLiquidity = totalLiquidity;
        _liquidityShares = _tokenAmount;
        require(_liquidityShares > 0, "No Liquidity Shares Minted");
        // Mint shares to user
        _mint(msg.sender, _liquidityShares);

        // Update the reserves
        _update(
            token1.balanceOf(address(this)),
        );

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
        // Get balance of both tokens
        uint256 token1Balance = token1.balanceOf(address(this));

        uint256 _totalLiquidity = totalLiquidity;

        _amountToken1 = (_liquidityShares * token1Balance) / _totalLiquidity;

        require(
            _amountToken1 > 0,
            "Insufficient transfer amounts"
        );

        // Burn user liquidity shares
        _burn(msg.sender, _liquidityShares);

        // Update reserves
        _update(token1Balance - _amountToken1);

        // Transfer tokens to user
        token1.transfer(msg.sender, _amountToken1);


        // TODO: Update flow back to user

        emit BurnLpToken(msg.sender, _liquidityShares);
    }

    // Internal function to square root a value from Uniswap V2
    function sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }

    // Internal function to find minimum value from Uniswap V2
    function min(uint256 x, uint256 y) internal pure returns (uint256 z) {
        z = x < y ? x : y;
    }
}