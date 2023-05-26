import React, { useState, useEffect, useDebugValue } from "react";
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function RenderGithubMarkdown(url) {
  
  const [content, setContent] = useState("");
  
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const parsed = await response.text();
      setContent(parsed);
      
    })();
  }, []);

  return (
    <div className="container">
      <div style={{textAlign: 'left', fontSize: '15px'}}>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}/>
      </div>
    </div>
  );
}



