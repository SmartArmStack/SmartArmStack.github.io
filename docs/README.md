# SAS

The SmartArmStack (`sas`) has been developed (with this name) in support of the [SmartArm robot](https://www.youtube.com/watch?v=dayuW47PKKc&list=PLwlAbCcz-l4th0eD8DCTSjyUo3rKeTY16&index=12) described in http://doi.org/10.1002/rcs.2053,
at the University of Tokyo. 
It has then been used in dozens of projects and updated in http://doi.org/10.1109/MRA.2023.3336472 for the [AI Science Platform](https://www.youtube.com/watch?v=3JPSywPAdj4). Please cite one
of these references if you use `sas` in your own work.

::::{grid} 1 1 2 3

:::{card}
:header: Focus on your application🔍
`sas` is a C++ framework with Python bindings to enable fast prototyping using `ROS 2`
toolchain. 
:::

:::{card}
:header: `ROS 2` where it shines✨
Split away `ROS 2` code into `client` and `server` classes, communicate via `ROS 2` 
without `ROS 2` code.
:::

:::{card}
:header: Multiple robots🤖
Enjoy drivers for `DensoWave`, `UR`, and `KUKA`. With ongoing developments for `Franka Emika`
and `Unitree` robots.
:::
::::

Please note that `sas` is originally based on developments [circa 2013](https://github.com/rosilo) by Murilo M. Marinho.
Affiliation with the University of Tokyo has ceased on December 2023 and this project is currently affiliated with
the University of Manchester.

## Quickstart

### Docker 
[![Docker Pulls](https://img.shields.io/docker/pulls/murilomarinho/sas)](https://hub.docker.com/r/murilomarinho/sas)

```commandline
docker run -it murilomarinho/sas:jazzy
```

### Installation 
[![SAS Debian Builder](https://github.com/SmartArmStack/smart_arm_stack_ROS2/actions/workflows/sas_debian_builder.yml/badge.svg?branch=jazzy)](https://github.com/SmartArmStack/smart_arm_stack_ROS2/actions/workflows/sas_debian_builder.yml)

```{tip}
:class: dropdown
#### Click here for the pre-requisites

#### ROS 2 Jazzy

- You can refer to the official documentation at https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html
- A softer explanation is available in https://ros2-tutorial.readthedocs.io/en/latest/installation.html.

#### DQ Robotics Development Version

##### C++

:::{important}
The `development` version is needed.
:::

:::commandline
sudo add-apt-repository ppa:dqrobotics-dev/development
sudo apt-get update
sudo apt-get install libdqrobotics libdqrobotics-interface-json11 libdqrobotics-interface-coppeliasim libdqrobotics-interface-coppeliasim-zmq
:::

##### Python

:::{important}
Because `ROS 2` does not currently support `venv`, it is recommended
to install this system-wide.
:::

:::commandline
python3 -m pip install dqrobotics --pre --break-system-packages
:::

```
The command below will add and install the `sas` LGPL packages via `apt-get`.

```bash
curl -s --compressed "https://smartarmstack.github.io/smart_arm_stack_ROS2/KEY.gpg" \
| gpg --dearmor \
| sudo tee /etc/apt/trusted.gpg.d/smartarmstack_lgpl.gpg >/dev/null
sudo curl -s --compressed -o /etc/apt/sources.list.d/smartarmstack_lgpl.list \
"https://smartarmstack.github.io/smart_arm_stack_ROS2/smartarmstack_lgpl.list"
sudo apt update
sudo apt-get install ros-jazzy-sas-*
```

The command below will add and install the `sas` CC-BY-NC packages via `apt-get`. Please note that they depend on `sas` LGPL packages.

```bash
curl -s --compressed "https://marinholab.github.io/sas_debian_builder_noncommercial/KEY.gpg" \
| gpg --dearmor \
| sudo tee /etc/apt/trusted.gpg.d/smartarmstack_lgpl.gpg >/dev/null
sudo curl -s --compressed -o /etc/apt/sources.list.d/smartarmstack_cc_by_nc.list \
"https://marinholab.github.io/sas_debian_builder_noncommercial/smartarmstack_cc_by_nc.list"
sudo apt update
sudo apt-get install ros-jazzy-sas-*
```


```{note}
:class: dropdown
# Click here for update instructions.
After installing the packages with the command above, you can update them with
:::bash
sudo apt-get update && sudo apt-get upgrade ros-jazzy-sas-*
:::
```

## License

```{figure} img/computer_ros2.png
:label: sas_and_ros2
:width: 300px
:align: left

SAS and ROS2
```

`sas` has worked in a dual-licensing scheme, described in the dropdown boxes below.

```{important}
:class: dropdown
### Click here for the LGPL packages information

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
```

```{tip}
:class: dropdown
### Click here for the Noncommercial packages information

Copyright (C) 2025 Murilo M. Marinho. Licensed under CC BY-NC 4.0 for noncommercial use.
Commercial licensing available by contacting contact@uominnovationfactory.com.

| Package                                     | License  | Description                                                                           |
|---------------------------------------------|----------|---------------------------------------------------------------------------------------|
| `sas_operator_side_receiver`                | CC-BY-NC | Receive messages from master devices and expose them as topics in `ROS2`.             |
| `sas_patient_side_manager`                  | CC-BY-NC | Manage master devices controlling `sas_robot_kinematics` and clutch state space.      |
| `sas_robot_kinematics_constrained_multiarm` | CC-BY-NC | A centralised solver for multiple robots with configurable vector-field inequalities. |
```

## Tutorials

Please refer to https://ros2-tutorial.readthedocs.io/en/latest/sas/index.html.

## Packaging

### LGPL

The PPA for the LGPL version is available at https://smartarmstack.github.io/smart_arm_stack_ROS2/. 

The archive is available at https://github.com/SmartArmStack/smart_arm_stack_ROS2/releases in case you need to rely on older versions.

### CC-BY-NC

The PPA for the CC-BY-NC version is available at https://marinholab.github.io/sas_debian_builder_noncommercial/

The archive is currently private. 

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
