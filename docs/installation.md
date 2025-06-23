# Installation

## Dependencies

### ROS 2 Jazzy

You can refer to the official documentation at https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html

### DQ Robotics Development Version

```{seealso}
More information at http://doi.org/10.1109/MRA.2020.2997920.
```

```commandline
sudo add-apt-repository ppa:dqrobotics-dev/development
sudo apt-get update
sudo apt-get install libdqrobotics libdqrobotics-interface-json11 libdqrobotics-interface-coppeliasim libdqrobotics-interface-coppeliasim-zmq
```

### Set up PPA

This will add the `SAS` repository to your `apt` sources.

```commandline
curl -s --compressed "https://smartarmstack.github.io/smart_arm_stack_ROS2/KEY.gpg" | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/smartarmstack_lgpl.gpg >/dev/null
sudo curl -s --compressed -o /etc/apt/sources.list.d/smartarmstack_lgpl.list "https://smartarmstack.github.io/smart_arm_stack_ROS2/smartarmstack_lgpl.list"
sudo apt update
```

### Installation

```{important} 
  At this stage, `ROS2` must be installed otherwise dependencies might not be found correctly.
```

The command below will install all `SAS` packages. 

```commandline
sudo apt-get install ros-jazzy-sas-*
```

### Update

The `SAS` packages will update together with your other `apt` packages.

```commandline
sudo apt-get update
```