#!/bin/bash

geth --exec 'loadScript("AutoRun.js")' attach ipc:../ComplianceBlockchain/GethData/geth.ipc --datadir ../ComplainceBlockchain/GethData >> Output.txt

