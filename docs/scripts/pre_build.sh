#!/bin/bash
set -e

clone_and_rename_readme(){
# $1 must be the repository name
# $2 must be the branch

FOLDER_NAME=$(basename "$1" .git)

git clone "$1" -b "$2" --single-branch --depth=1
cd "$FOLDER_NAME"
mv README.md "${FOLDER_NAME}"_README.md
cd ..
}

# Submodules
cd .. # This script is meant to be called in its own directory
mkdir -p submodules
cd submodules

clone_and_rename_readme https://github.com/SmartArmStack/docker-coppeliasim.git main
clone_and_rename_readme https://github.com/MarinhoLab/sas_ur_control_template.git main
clone_and_rename_readme https://github.com/MarinhoLab/sas_kuka_control_template.git main
