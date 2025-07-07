# SAS

> [!NOTE]
> If being read on GitHub, please note that this page is better seen at https://smartarmstack.github.io.

## Quickstart

### Docker 
![Docker Pulls](https://img.shields.io/docker/pulls/murilomarinho/sas)

You can explore a readily-made image as follows

```commandline
docker run -it murilomarinho/sas:latest
```

### Installation 
[![SAS Debian Builder](https://github.com/SmartArmStack/smart_arm_stack_ROS2/actions/workflows/sas_debian_builder.yml/badge.svg?branch=jazzy)](https://github.com/SmartArmStack/smart_arm_stack_ROS2/actions/workflows/sas_debian_builder.yml)


```{important}
See pre-requisites at [](installation.md).
```
 
The command below will add and install the `sas` packages via `apt-get`.

```bash
curl -s --compressed "https://smartarmstack.github.io/smart_arm_stack_ROS2/KEY.gpg" \
| gpg --dearmor \
| sudo tee /etc/apt/trusted.gpg.d/smartarmstack_lgpl.gpg >/dev/null
sudo curl -s --compressed -o /etc/apt/sources.list.d/smartarmstack_lgpl.list \
"https://smartarmstack.github.io/smart_arm_stack_ROS2/smartarmstack_lgpl.list"
sudo apt update
sudo apt-get install ros-jazzy-sas-*
```

### Update

After installing, you'll be able to update normally with `apt-get`.

```commandline
sudo apt-get update
```

## Overview

```{figure} img/computer_ros2.png
:label: sas_and_ros2
:width: 300px
:align: left

SAS and ROS2
```

The SmartArmStack has been developed in support of the SmartArm robot described in http://doi.org/10.1002/rcs.2053. 
It has then been used in dozens of publications and updated in http://doi.org/10.1109/MRA.2023.3336472. Please cite one
of these references if you use `SAS` in your own work.

The current version of `SAS` supports `ROS 2`. 

## About

`SAS` is a C++ framework with Python bindings to enable fast prototyping on ROS 2. Focus on your application. 
The concept of `SAS` is to split away `ROS 2` code into `client` and `server` classes, allowing your code to use
`ROS 2` interfaces without any need to create `publishers` or `subscribers` manually.

## License

Most of the library is licensed in LGPLv3. Some packages are licensed as Research Only, with no commercial use allowed.

## Package Summary

*Research only* packages cannot be used for commercial use.

| Package                  | License | Description                                                                                                              |
|--------------------------|---------|--------------------------------------------------------------------------------------------------------------------------|
| `sas_core`               | LGPL    | The part of the library that does not depend on `ROS2`.                                                                  |
| `sas_common`             | LGPL    | Generic `ROS2` code used throughout the packages.                                                                        |
| `sas_msgs`               | LGPL    | A wrapper for `ROS` messages that were made redundant in `ROS2`.                                                         |
| `sas_conversions`        | LGPL    | Convert `ROS2` messages into `float`, `int`, or `dqrobotics` elements.                                                   |
| `sas_robot_driver`       | LGPL    | `ROS2` nodes and libraries for creating servers and clients for robot configuration-space monitoring and control.        |
| `sas_robot_kinematics`   | LGPL    | `ROS2` nodes and libraries for creating servers and clients for kinematic-level robot task-space monitoring and control. |
| `sas_robot_driver_denso` | LGPL    | A `sas_robot_driver` implementation for DensoWave's bCap controlled robots                                               |
| `sas_robot_driver_kuka`  | LGPL    | A `sas_robot_driver` implementation for Kuka (Sunrise cabinet, FRI)                                                      |
| `sas_robot_driver_ur`    | LGPL    | A `sas_robot_driver` implementation for UR                                                                               |

## Tutorials

Please refer to https://ros2-tutorial.readthedocs.io/en/latest/sas/index.html.

## Packaging

### LGPL

The PPA for the LGPL version is available at https://smartarmstack.github.io/smart_arm_stack_ROS2/. The archive is available at https://github.com/SmartArmStack/smart_arm_stack_ROS2/releases in case you need to rely on older versions.

## Older versions

Older (and unsupported) versions are available at:
- https://github.com/SmartArmStack/smart_arm_stack
- https://github.com/SmartArmStack/smart_arm_stack_lgpl
- https://github.com/SmartArmStack/smart_arm_stack_researchonly

## Acknowledgements

```{figure} img/computer_capi_open_tech.png
:label: sas_dependencies
:width: 300px
:align: left

SAS Dependencies
```

The main dependencies to note are [ros2](https://www.ros.org), [dqrobotics](https://dqrobotics.github.io), [eigen3](https://eigen.tuxfamily.org/index.php?title=Main_Page), and [pybind11](https://pybind11.readthedocs.io/en/stable/).

Packaging was made possible by intructive resources such as [Hosting your own PPA repository on GitHub](https://assafmo.github.io/2019/05/02/ppa-repo-hosted-on-github.html).
