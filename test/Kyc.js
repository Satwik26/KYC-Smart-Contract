const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");

describe("KYC", function () {
  it("Deployment should assign admin address", async function () {
    const [owner] = await ethers.getSigners();
  });
});