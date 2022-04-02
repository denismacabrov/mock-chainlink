pragma solidity ^0.8.10;

import "@chainlink/contracts/src/v0.8/mocks/VRFCoordinatorMock.sol";

contract MockVRFCoordinator is VRFCoordinatorMock {

        constructor(address _linkAddress) VRFCoordinatorMock(_linkAddress) {}

}

