import { useState,useEffect } from 'react'

import './App.css'
import Editor from './Editor'
function App() {
const [html,setHtml]=useState('')
const [js,setJs]=useState('')
const [css,setCss]=useState('')
const [srcDoc,setSrcDoc]=useState('')
useEffect(()=>{
const timeout=setTimeout(()=>{
setSrcDoc(` 
<html>
<body>${html}</body>
<style>${css}</style>
<script>${js}</script>
</html>
`)
return ()=>clearTimeout(timeout)
},250)
},[html,js,css])

  return (
    
     <>
    <div className='pane top-pane'>
     <Editor language='xml' displayName='HTML' value={html} onChange={setHtml} />
     <Editor language='javascript' displayName='JAVASCRIPT' value={js} onChange={setJs}/>
     <Editor language='css' displayName='CSS' value={css} onChange={setCss}/>
    </div>
    <div className='pane'>
      <iframe 
      title='op'
      sandbox='allow-scripts'
      frameBorder={0}
      width={100}
      height={100}
      srcDoc={srcDoc}
      />
    </div>
    </>
   
  )
}

export default App
