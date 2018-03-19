loadScript("Password.js")
loadScript("Alias.js")
personal.unlockAccount(ContractOwner,ContractOwnerPassword)
loadScript("OcfCms.js")

var OcfCmsContract = web3.eth.contract(JSON.parse(OcfCmsOutput.contracts["OcfCms.sol:OcfCms"].abi));

var OcfCms = OcfCmsContract.new({ from: ContractOwner, data: "0x" + OcfCmsOutput.contracts["OcfCms.sol:OcfCms"].bin, gas: 4700000});

while (true)
{
  Status = eth.pendingTransactions;
  if (Status.length == 0)
    break;
  admin.sleep(10);
}
console.log ('{"Address":"'+eth.getTransactionReceipt(OcfCms.transactionHash).contractAddress+'"}');
