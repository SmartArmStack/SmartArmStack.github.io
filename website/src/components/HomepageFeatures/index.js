import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SmartArmStack',
    Svg: require('@site/static/img/computer_capi.svg').default,
    description: (
      <>
        SmartArmStack is a framework for C++11 (with bindings for Python)
        to enable fast prototyping on ROS and ROS 2.
      </>
    ),
  },
  {
    title: 'Enable Fast Implementation on ROS',
    Svg: require('@site/static/img/computer_ros2.svg').default,
    description: (
      <>
        Focus on your application. Smart Arm Stack implements for you all 
        ROS/ROS 2 topics and nodes you need to work with your robot, sensor, or actuator. 
      </>
    ),
  },
  {
    title: 'Powered by Open Software Technologies',
    Svg: require('@site/static/img/computer_capi_open_tech.svg').default,
    description: (
      <>
         Available low level controllers on Python and C++ (including ROS packages) 
        for the robots, sensors, actuators, and grippers. 
        The robot modeling and control is implemented using the 
        <a href="https://dqrobotics.github.io/" style= {{color:'#277148', fontWeight:'bold' }}> DQ Robotics</a> library.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
