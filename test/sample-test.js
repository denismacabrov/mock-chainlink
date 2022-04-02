const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mock Link Set", function() {

  let MockLinkToken, mockLinkToken, owner, acc1;

  beforeEach(async () => {
    [owner, acc1] = await ethers.getSigners();
    
    MockLinkToken = await ethers.getContractFactory("MockLinkToken");
    mockLinkToken = await MockLinkToken.deploy();
    await mockLinkToken.deployed();
  });

  describe("Mock Link Token", function() {
    it("Should return correct name and symbol", async () => {  
      expect(await mockLinkToken.name()).to.equal("ChainLink Token");    
      expect(await mockLinkToken.symbol()).to.equal("LINK");
      expect(await mockLinkToken.balanceOf(owner.address)).to.equal("1000000000000000000000000000");
    });

    it ("Should transfer 1000 tokens", async () => {
      const TX = await mockLinkToken.transfer(acc1.address, 1000);
      await TX.wait();
      expect(await mockLinkToken.balanceOf(acc1.address)).to.equal("1000");
      expect(await mockLinkToken.balanceOf(owner.address)).to.equal("999999999999999999999999000");
    });
  });
});

/*describe("Mock Link Token", function () {

  beforeEach(async () => {
    const MockLinkToken = await ethers.getContractFactory("MockLinkToken");
    const mockLinkToken = await MockLinkToken.deploy();
    await mockLinkToken.deployed();
  });

  it("Should return correct name and symbol", async function () {

    expect(await mockLinkToken.name()).to.equal("ChainLink Token");    
    expect(await mockLinkToken.symbol()).to.equal("LINK");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});*/
