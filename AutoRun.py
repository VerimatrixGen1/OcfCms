import socket
import sys
import json
from pprint import pprint
import os
import argparse

def main(argv):
  parser = argparse.ArgumentParser()
  parser.add_argument("--ifile", help="Test Mode")
  parser.add_argument("--ofile", help="Test Mode")
  parser.add_argument("--icontract", help="Test Mode")
  parser.add_argument("--ocontract", help="Test Mode")
  args = parser.parse_args()
  if args.ifile:
    
    # Remove output results
    OutFileCopy = "rm " + args.ofile;
    os.system (OutFileCopy);
    
    # Remove Autorun.js    
    os.system ("rm AutoRun.js")
    
    #Copy new AutoRun
    TestFileCopy = "cp " + args.ifile + " AutoRun.js"
    os.system (TestFileCopy);
    
    # Remove Output.txt file
    os.system("rm Output.txt")
    
    #Run Script
    os.system("./RunAutoRun.sh")
    
    # Save output file
    OutFileCopy = "cp Output.txt " + args.ofile;
    os.system (OutFileCopy);

  if args.icontract:
    print "ContractFile"
    TestFileCopy = "cp " + args.icontract + " AutoRun.js"
    print TestFileCopy
    os.system ("rm AutoRun.js")
    os.system (TestFileCopy);
    
    os.system("rm Output.txt")
    os.system("./RunAutoRun.sh")
    
    file = open("Output.txt","r")
    Data = file.readline()
    file.close()
    ParsedData = json.loads(Data)
    print ParsedData["Address"]
    
    File = open(args.ocontract,"w")
    File.write ("var "+args.ocontract[:args.ocontract.find('.')]+ " = '"+ParsedData["Address"]+"'")
    File.close()
    
    
    
  
if __name__ == "__main__":
  main(sys.argv)
