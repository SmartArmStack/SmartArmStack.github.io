#!/bin/bash

python -m pip install mystmd==1.3.28
export BASE_URL="https://smartarmstack.github.io"
myst build --html

