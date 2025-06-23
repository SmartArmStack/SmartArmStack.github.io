# Installation

## Dependencies

### ROS 2 Jazzy

You can refer to the official documentation at https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html

### DQ Robotics Development Version

```commandline
sudo add-apt-repository ppa:dqrobotics-dev/development
sudo apt-get update
sudo apt-get install libdqrobotics libdqrobotics-interface-json11 libdqrobotics-interface-coppeliasim libdqrobotics-interface-coppeliasim-zmq
```

## Installation details

We begin by setting up sources. This wll tell `apt` where to find the debian packages. They are currently being deployed
in GitHub.

```commandline
curl -s --compressed "https://smartarmstack.github.io/smart_arm_stack_ROS2/KEY.gpg" \
| gpg --dearmor \
| sudo tee /etc/apt/trusted.gpg.d/smartarmstack_lgpl.gpg >/dev/null
sudo curl -s --compressed -o /etc/apt/sources.list.d/smartarmstack_lgpl.list \
"https://smartarmstack.github.io/smart_arm_stack_ROS2/smartarmstack_lgpl.list"
```

We then update `apt` once to get the new information, as shown below.

```commandline
sudo apt update
```

Lastly, we install all available packages.

```commandline
sudo apt-get install ros-jazzy-sas-*
```
