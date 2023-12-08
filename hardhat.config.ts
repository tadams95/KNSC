import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    base_goerli: {
      url: "https://goerli.base.org",
      accounts: {
        mnemonic: process.env.MNEMONIC ?? "",
      },
    },
    base_sepolia: {
      url: "https://sepolia.base.org",
      accounts: {
        mnemonic: process.env.MNEMONIC ?? "",
      },
    },
  },
};

export default config;
