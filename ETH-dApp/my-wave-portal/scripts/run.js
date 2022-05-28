
const main = async () => {
      const [owner, randomPerson1, randomPerson2] = await hre.ethers.getSigners();
      const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
      const waveContract = await waveContractFactory.deploy({
            value: hre.ethers.utils.parseEther("0.1"),
      });
      const wavePortal = await waveContract.deployed();
    
      console.log("WavePortal address: ", wavePortal.address);
      console.log("Contract deployed by:", owner.address);

      let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
      // wei単位の残高をETH単位に変換して出力する。
      console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance));

      let waveCount;
      waveCount = await waveContract.getTotalWaves();
      console.log(waveCount.toNumber());

      let waveTxn = await waveContract.wave("A message!");
      await waveTxn.wait();

      contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
      console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance));

      /*
      const [_, randomPerson] = await hre.ethers.getSigners();
      // 別のアカウントから実行
      waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
      await waveTxn.wait();
      */

      // 全てのウェーブを取得する。
      let allWaves = await waveContract.getAllWaves();
      console.log(allWaves);
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