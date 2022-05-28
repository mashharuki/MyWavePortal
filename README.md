# MyWavePortal
掲示板機能を実装したdapp用のプロジェクトリポジトリです。

### ローカル環境でイーサリアムネットワークを立ち上げるコマンド
 `npx hardhat node`

### ローカル環境でデプロイ用のスクリプトファイルを実行するコマンド
 `npx hardhat run scripts/deploy.js --network localhost`

 デプロイ結果の例
 ```cmd
      Deploying contracts with account:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
      Account balance:  10000000000000000000000
      Contract deployed to:  0x5FbDB2315678afecb367f032d93F642f64180aa3
      Contract deployed by:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
 ```
### goerliネットワークにデプロイした時のコマンド
 `npx hardhat run scripts/deploy.js --network goerli`

 デプロイ結果の例
 ```cmd
      Deploying contracts with account:  0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
      Account balance:  73965199586919580365
      Contract deployed to:  0xd09dFE5025FB25000aA22021F7355656cd10EB17
      Contract deployed by:  0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
 ```

 etherscanは<a href="https://goerli.etherscan.io/address/0x3b3eDEC2866B0b165d9dC5Fb09d9AD1B743FbeBF">こちら</a>！！

 ### gitのリモートファイルを削除するコマンド
  `git rm --cached hardhat.config.js`

