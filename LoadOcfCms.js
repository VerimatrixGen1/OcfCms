loadScript("Password.js")
loadScript("OcfCmsAddress.js")
loadScript("Alias.js")
loadScript("OcfCms.js")
var OcfCmsContract = web3.eth.contract(JSON.parse(OcfCmsOutput.contracts["OcfCms.sol:OcfCms"].abi));
var OcfCms = eth.contract(OcfCmsContract.abi).at(OcfCmsAddress);

