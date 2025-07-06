#!/bin/bash
set -e

# Submodules
cd .. # This script is meant to be called in its own directory
mkdir -p submodules
cd submodules

git clone https://github.com/SmartArmStack/docker-coppeliasim.git --single-branch --depth=1
git clone https://github.com/MarinhoLab/sas_ur_control_template.git --single-branch --depth=1
git clone https://github.com/MarinhoLab/sas_kuka_control_template.git --single-branch --depth=1
