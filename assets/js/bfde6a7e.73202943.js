"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[147],{5084:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(7294),r=(a(3935),a(7961)),l=a(4996),c=a(1207);function i(e){var t=new Array;return e?.map(((e,a)=>{t[a]=e.name})),t}const s=()=>{const[e,t]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch("https://api.semanticscholar.org/graph/v1/paper/d431619c141c531dd6620c112af51b4663b7f08b?fields=venue,year,title,authors.name,citationCount,citations.title,citations.authors,citations.year,citations.publicationTypes,citations.venue,citations.url,citations.openAccessPdf,citations.externalIds").then((e=>e.json())).then((e=>{t(e)}))}),[]),n.createElement(r.Z,null,n.createElement("div",{className:"container"},n.createElement("section",{className:c.Z.always_light},n.createElement("h1",{style:{color:"#000000",textAlign:"center",fontSize:"20px"}},n.createElement("a",{href:"https://onlinelibrary.wiley.com/doi/10.1002/rcs.2053",style:{color:"#1777bc",fontWeight:"bold",textAlign:"center",fontSize:"35px"}},e.title),n.createElement("p",{style:{color:"#000000",textAlign:"center",fontSize:"20px"}},e.venue,", ",e.year),n.createElement("p",{style:{color:"#000000",textAlign:"center",fontSize:"15px"}},i(e.authors)[0],",",i(e.authors)[1],",",i(e.authors)[2],",",i(e.authors)[3])),n.createElement("hr",null),n.createElement("h1",{style:{color:"#000000",textAlign:"center",fontSize:"25px"}},n.createElement("p",{style:{color:"#000000",textAlign:"center",fontSize:"15px"}},"Data provided by "),n.createElement("a",{href:"https://api.semanticscholar.org/d431619c141c531dd6620c112af51b4663b7f08b"},n.createElement("img",{alt:"",width:"300",height:"45",src:(0,l.Z)("img/semantic_scholar2.svg")})),n.createElement("p",{style:{color:"#000000",textAlign:"center",fontSize:"15px"}}," Citations: ",e.citationCount)),n.createElement("hr",null))))}},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",always_dark:"always_dark_jnaj",always_light:"always_light_ONII",always_gray:"always_gray_caEi",always_gray_darker:"always_gray_darker_IQV7"}}}]);