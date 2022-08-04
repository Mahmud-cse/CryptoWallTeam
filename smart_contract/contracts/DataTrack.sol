pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

/**
 * @title DataTrack
 * @dev follow validated data
 */
contract DataTrack {
    
    struct Data {
        address firstName;
        address lastName;
        address reach;
        uint id;
    }


    Data[] private contracts;

    /**
     * @dev Set data to be validated creation
     * @param creator document address and data contract address
     */
    function documentCreation(address firstName, address lastName, address reach, uint id) public {
        contracts.push(Data({
          owner = string.concat(firstName,lastName);
          dataContract: reach,
          number:id
        }));
    }

    /**
     * @dev Return contracts list 
     * @return Data array
     */
    function getContracts() external view returns (Data[] memory) {
        return contracts;
    }
}