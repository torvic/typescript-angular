#!/bin/bash

echo Hello World!
pwd
cp ./src/index.ts ./src/examples
mv ./src/examples/index.ts ./src/examples/$1.ts

