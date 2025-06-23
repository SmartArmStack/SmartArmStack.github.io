#!/bin/bash

# While 2.0 is not stable
python -m pip install jupyter-book --pre

# Otherwise the links will not be correctly set up for th webpage
export BASE_URL="https://smartarmstack.github.io"

# Build page
python -m jupyter book build --html

