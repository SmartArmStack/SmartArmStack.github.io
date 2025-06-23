# SAS

## Quickstart

```commandline
TODO
```

## A quick note

If being read on GitHub, please note that this page is better seen at https://smartarmstack.github.io.

## Overview

```{image} img/computer_ros2.svg
:width: 300px
:align: left
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

## Installation instructions and Tutorials

Please refer to https://ros2-tutorial.readthedocs.io/en/latest/sas/index.html.

## Dependencies

```{image} img/computer_capi_open_tech.svg
:width: 300px
:align: left
```

The main dependencies to note are [ros2](https://www.ros.org), [dqrobotics](https://dqrobotics.github.io), [eigen3](https://eigen.tuxfamily.org/index.php?title=Main_Page), and [pybind11](https://pybind11.readthedocs.io/en/stable/).

