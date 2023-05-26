import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import install_sas    from '!!raw-loader!./install_sas.mdx';
import add_sas    from '!!raw-loader!./add_sas.mdx';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.always_dark)}>
      <div className="container">

      <section className={styles.always_dark}>  
          <>
          <Container>
          <Row  className="justify-content-md-center">
          <Col>
          <div style={{textAlign: 'center', fontSize: '11px'}}>  
                <img alt="" src={useBaseUrl('https://img.shields.io/github/license/SmartArmStack/smart_arm_stack_lgpl')} />     
                <img alt="" src={useBaseUrl('https://img.shields.io/badge/%2B-Research%20Only%20packages-red ')} />              
                <img alt="" src={useBaseUrl('https://img.shields.io/badge/ROS-Noetic%20Ninjemys-ff69b4')} />
                <img alt="" src={useBaseUrl('https://img.shields.io/badge/ROS-Humble%20Hawksbill-success')} />
                <img alt="" src={useBaseUrl('https://img.shields.io/badge/C%2B%2B-11-blue')} />
                <img alt="" src={useBaseUrl('https://img.shields.io/badge/Python-3-blue')} />
                <img alt="" src={useBaseUrl('https://img.shields.io/badge/Ubuntu LTS-orange')} />                                      
          </div> 
          </Col>

          </Row> 


          
          <Row  className="justify-content-md-center">
            <Col>
                <h1 className="hero__title" style= {{color:'#FFFFFF'}} >{siteConfig.title}</h1>
                <p className="hero__subtitle" style= {{color:'#61dafb'}}>{siteConfig.tagline}</p>
                <div>&nbsp;&nbsp;</div>




                <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Get started
                  </Link>
                </div> 
            </Col>
          </Row>  

          </Container>
          </>

        </section>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
