# Pre requisites

## ROS 2 Jazzy

You can refer to the official documentation at https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html

A softer explanation is available in https://ros2-tutorial.readthedocs.io/en/latest/installation.html.

## DQ Robotics Development Version

### C++

```{important}
The `development` version is needed.
```

```commandline
sudo add-apt-repository ppa:dqrobotics-dev/development
sudo apt-get update
sudo apt-get install libdqrobotics libdqrobotics-interface-json11 libdqrobotics-interface-coppeliasim libdqrobotics-interface-coppeliasim-zmq
```

### Python

```{important}
Because ROS2 does not currently support `venv`, it is recommended
to install this system-wide.
```

```commandline
python3 -m pip install dqrobotics --pre --break-system-packages
```
