#!/bin/bash
python AutoRun.py --icontract LaunchOcfCms.js --ocontract OcfCmsAddress.js
python AutoRun.py --ifile TestAdminList1.js --ofile ResultAdminList1.txt
python AutoRun.py --ifile TestAdminList2.js --ofile ResultAdminList2.txt
python AutoRun.py --ifile TestMediation1.js --ofile ResultMediation1.txt
python AutoRun.py --ifile TestMediation2.js --ofile ResultMediation2.txt
python AutoRun.py --ifile TestMediation3.js --ofile ResultMediation3.txt
python AutoRun.py --ifile TestCompliance1.js --ofile ResultCompliance1.txt
python AutoRun.py --ifile TestCompliance2.js --ofile ResultCompliance2.txt
python AutoRun.py --ifile TestCompliance3.js --ofile ResultCompliance3.txt
python AutoRun.py --ifile TestCompliance4.js --ofile ResultCompliance4.txt
python AutoRun.py --ifile TestCompliance5.js --ofile ResultCompliance5.txt
python AutoRun.py --ifile TestFamily1.js --ofile ResultFamily1.txt
python AutoRun.py --ifile TestFamily2.js --ofile ResultFamily2.txt
python AutoRun.py --ifile TestFamily3.js --ofile ResultFamily3.txt
python AutoRun.py --ifile TestFamily4.js --ofile ResultFamily4.txt

