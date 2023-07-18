import React, { useState, useEffect, useDebugValue } from "react";
import ReactDOM from "react-dom";
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://api.semanticscholar.org/graph/v1/paper/d431619c141c531dd6620c112af51b4663b7f08b?fields=venue,year,title,authors.name,citationCount,citations.title,citations.authors,citations.year,citations.publicationTypes,citations.venue,citations.url,citations.openAccessPdf,citations.externalIds")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
      <Layout> 
      <div className="container">
      <section className={styles.always_light}> 
            <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '20px'}}>
            <a href="https://onlinelibrary.wiley.com/doi/10.1002/rcs.2053" style= {{color:'#1777bc', fontWeight:'bold', textAlign: 'center', fontSize: '35px'}}>{users.title}</a>
            
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '20px'}}>{users.venue}, {users.year}</p>
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '15px'}}>{GetPaperAuthors(users.authors)[0]}, 
                                                                                 {GetPaperAuthors(users.authors)[1]},
                                                                                 {GetPaperAuthors(users.authors)[2]},
                                                                                 {GetPaperAuthors(users.authors)[3]}</p>
            </h1>
            <hr />

            <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}>
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '15px'}}>Data provided by </p>
            <a href="https://api.semanticscholar.org/d431619c141c531dd6620c112af51b4663b7f08b">
            <img alt=""  width="300" height="45" src={useBaseUrl('img/semantic_scholar2.svg')} />
            </a>
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '15px'}}> Citations: {users.citationCount}</p>
            </h1>

            <hr />
   

           


       </section>      

      </div>

      </Layout>
  )
}

function GetPaperAuthors(data){
  var authors = new Array();
  { data?.map((value, index) => {( authors[index] = value.name);})}
  return authors;
}

function GetPaperDoi(data)
{
  var doi = new Array();
  { data?.map((value, index) => {( doi[index] = value.DOI);})}
  return doi;
}



export default UsingFetch
