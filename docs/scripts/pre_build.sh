#!/bin/bash
set -e
# This script should be run in its own folder.
sudo apt-get install tree

clone_and_rename_readme(){
# $1 must be the repository name
# $2 must be the branch
# $3 must be the author or empty

FOLDER_NAME=$(basename "$1" .git)

git clone "$1" -b "$2" --single-branch --depth=1
cd "$FOLDER_NAME"

FILE_NAME="${FOLDER_NAME}"_README.md
mv README.md FILE_NAME
# Add author info if needed
if [[ $3 ]]; then
  sed -i "$(printf "---\n author: ${3}\n ---")" FILE_NAME
fi

cd ..
}

# Submodules
cd .. # Go to docs
mkdir -p submodules
cd submodules

clone_and_rename_readme https://github.com/SmartArmStack/docker-coppeliasim.git main
clone_and_rename_readme https://github.com/MarinhoLab/sas_ur_control_template.git main
clone_and_rename_readme https://github.com/MarinhoLab/sas_kuka_control_template.git main

# Content from other authors
# JJQO
clone_and_rename_readme https://github.com/Adorno-Lab/sas_unitree_b1z1_control_template main "Juan Jose Quiroz Omana"

# Print all contents.
tree .

cd .. # Get out of submodules
cd scripts # Go back to `scripts`

# Download videos from github
cd .. # Go do docs

# sas_ur_control_template
curl -Lo submodules/sas_ur_control_template/sas_urct_simulation.mp4 https://github.com/user-attachments/assets/bfee1148-bfe3-4425-80da-04fcd65d2b18
curl -Lo submodules/sas_ur_control_template/sas_urct_realrobot.mp4 https://github.com/user-attachments/assets/62ac7ccd-d7c8-41f7-8af8-1b17919d90f2
# sas_kuka_control_template
curl -Lo submodules/sas_kuka_control_template/sas_kct_simulation.mp4 https://github.com/user-attachments/assets/d0c00b59-8b45-4c11-9c85-6ec9807eda97
curl -Lo submodules/sas_kuka_control_template/sas_kct_realrobot.mp4 https://github.com/user-attachments/assets/8340a929-487e-4ed7-b256-809f769bc446