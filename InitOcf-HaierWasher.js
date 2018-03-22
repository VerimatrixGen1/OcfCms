//***********************************************************************************
// Copyright 2018 Verimatrix
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of 
// this software and associated documentation files (the "Software"), to deal in the 
// Software without restriction, including without limitation the rights to use, copy, 
// modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
// and to permit persons to whom the Software is furnished to do so, subject to 
// the following conditions:
//
// The above copyright notice and this permission notice shall be included in all 
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//***********************************************************************************
loadScript("Password.js")
loadScript("OcfCmsAddress.js")
loadScript("Alias.js")
loadScript("OcfCms.js")
var OcfCmsContract = web3.eth.contract(JSON.parse(OcfCmsOutput.contracts["OcfCms.sol:OcfCms"].abi));
var OcfCms = eth.contract(OcfCmsContract.abi).at(OcfCmsAddress);

var PassCount = 0;
var ErrorCount = 0;
var MaxTimeOut = 200;
var StartBlock = eth.blockNumber;

var Message = "";
Message = Message + "*****************************************************************************\n";
Message = Message + "*****************************************************************************\n";
Message = Message + "**        InitDemoData.js version: 0.5                                        **\n";
Message = Message + "*****************************************************************************\n"
Message = Message + "*****************************************************************************\n"
Message = Message + "\n\n";

FamilyCNM = '{"Cert":"OCF","Name":"Haier Group","DeviceName":"Haier Washer"}'
FamilyCN = '{"Cert":"OCF","Name":"Haier Group"}'
FamilyC = '{"Cert":"OCF"}'
DeviceContainer = '{"Name":"Haier Group","PEN":"","DeviceName":"Haier Washer","OcfDeviceType":"","OcfVertical":"Smart Home","CRSL":"4.1","CertId":"C20180800013","CertData":"01/24/2018","SecurityProfile":"","OcfResourceType",""}'
SwContainer = '{"SwName":"","SwVer":"2.1.1","OsVersion":"Linux 4.9.59"}'
HwContainer = '{"Model":"MS100-BD896U1","HwVer":"1.1","FwVer":"1.0","PlatformId":"","PlatformAttribute":""}'

var ComplianceId = OcfCms.CalcComplianceId(FamilyCNM);

personal.unlockAccount(ContractOwner,ContractOwnerPassword);

Message = Message + "\n*****************************************************************************\n"
Message = Message + "Test: 2\n";
Message = Message + "Write Family Tree\n";
Message = Message + "*****************************************************************************\n"
Message = Message + "OcfCms.WriteFamilyTree(FamilyC, FamilyCN, FamilyCNM, ComplianceId, {from:ContractOwner,gas:4700000});\n\n";
var Trans = OcfCms.WriteFamilyTree(FamilyC, FamilyCN, FamilyCNM, ComplianceId, {from:ContractOwner,gas:4700000});
Message = Message + "TransId: " + Trans + "\n";

Message = Message + "\n*****************************************************************************\n"
Message = Message + "Test: 3\n";
Message = Message + "Write Device Container\n";
Message = Message + "*****************************************************************************\n"
Message = Message + "OcfCms.Write(ComplianceId, ComplianceId, 1/1/2020, DeviceContainer, 0, {from:ContractOwner,gas:4700000});\n\n";
var Trans = OcfCms.Write(ComplianceId, ComplianceId, "", DeviceContainer, 0, {from:ContractOwner,gas:4700000});
Message = Message + "TransId: " + Trans + "\n";

Message = Message + "\n*****************************************************************************\n"
Message = Message + "Test: 4\n";
Message = Message + "Write Hw Container\n";
Message = Message + "*****************************************************************************\n"
Message = Message + "OcfCms.WriteHwContainer(ComplianceId, HwContainer, {from:ContractOwner,gas:4700000});\n\n";
var Trans = OcfCms.WriteHwContainer(ComplianceId, HwContainer, {from:ContractOwner,gas:4700000});
Message = Message + "TransId: " + Trans + "\n";

Message = Message + "\n*****************************************************************************\n"
Message = Message + "Test: 6\n";
Message = Message + "Write Sw Container\n";
Message = Message + "*****************************************************************************\n"
Message = Message + "OcfCms.WriteSwContainer(ComplianceId, SwContainer, {from:ContractOwner,gas:4700000});\n\n";
var Trans = OcfCms.WriteSwContainer(ComplianceId, SwContainer, {from:ContractOwner,gas:4700000});
Message = Message + "TransId: " + Trans + "\n";

var TimeOut = 0;
while (TimeOut < MaxTimeOut)
{
  var BlockNumber = eth.getTransaction(Trans).blockNumber;
  if (BlockNumber != null)
    break;
  admin.sleep(1);
  TimeOut = TimeOut + 1;
  
}

if (BlockNumber != null)
{
  Message = Message + "BlockNumber: " + BlockNumber + " GasUsed: " + eth.getBlock(BlockNumber).gasUsed + " TransId: " + Trans + "\n"
  Message = Message + "PASS\n";
  PassCount = PassCount + 1;
}
else
{
  Message = Message + "FAIL\n";
  ErrorCount = ErrorCount + 1;
}


var StopBlock = eth.blockNumber;


Message = Message + "\n*****************************************************************************\n"
Message = Message + "*****************************************************************************\n"
Message = Message + "StartBlock = " + StartBlock + "\n";
Message = Message + "StopBlock = " + StopBlock + "\n";
Message = Message + "PassCount = " + PassCount + "\n";
Message = Message + "ErrorCount = " + ErrorCount + "\n";
Message = Message + "*****************************************************************************\n"
Message = Message + "*****************************************************************************\n"

console.log(Message);
