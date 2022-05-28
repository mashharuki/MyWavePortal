// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {

      struct Wave {
            address waver;
            string message;
            uint256 timestamp;
      }

      event NewWave(address indexed from, uint256 timestamp, string message);

      uint256 totalWaves;
      uint256 private seed;
      Wave[] waves;

      mapping(address => uint256) public lastWavedAt;

      constructor() payable {
            console.log("WavePortal - Smart Contract!");
            seed = (block.timestamp + block.difficulty) % 100;
      }

      function wave(string memory _message) public {
            require(lastWavedAt[msg.sender] + 30 seconds < block.timestamp, "Wait 30s");

            lastWavedAt[msg.sender] = block.timestamp;

            totalWaves += 1;
            console.log("%s waved w/ message %s", msg.sender, _message);

            seed = (block.difficulty + block.timestamp + seed) % 100;
            console.log("Random # generated: %d", seed);

            waves.push(Wave(msg.sender, _message, block.timestamp));
            
            if (seed <= 50) {
                  uint256 prizeAmount = 0.00001 ether;
                  require(
                        prizeAmount <= address(this).balance,
                        "Trying to withdraw more money than the contract has."
                  );
                  // send ether
                  (bool success, ) = (msg.sender).call{value: prizeAmount}("");
                  require(success, "Failed to withdraw money from contract.");
            } else {
                  console.log("%s did not win.", msg.sender);
		}
            emit NewWave(msg.sender, block.timestamp, _message);
      }

      function getAllWaves() public view returns (Wave[] memory) {
            return waves;
      }

      function getTotalWaves() public view returns (uint256) {
            return totalWaves;
      }
}