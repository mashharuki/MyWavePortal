
const main = async () => {
      const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
      const waveContract = await waveContractFactory.deploy();
      const wavePortal = await waveContract.deployed();
    
      console.log("WavePortal address: ", wavePortal.address);
};

const runMain = async () => {
      try {
            // mainメソッドの呼び出し
            await main();
            process.exit(0);
      } catch (error) {
            console.log(error);
            process.exit(1);
      }
};

runMain();