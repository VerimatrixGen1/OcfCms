#!/bin/bash

echo "var OcfCmsOutput=`solc --optimize --combined-json abi,bin,interface OcfCms.sol`" > OcfCms.js
