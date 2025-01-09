import { useState } from 'react'

import './App.css'
import Editor from './Editor'
function App() {
const [html,setHtml]=useState('')
const [js,setJs]=useState('')
const [css,setCss]=useState('')
  return (
    
      <div >
    <div className='pane top-pane'>
     <Editor language='xml' displayName='HTML' value={html} onChange={setHtml} />
     <Editor language='javascript' displayName='javascript' value={js} onChange={setJs}/>
     <Editor language='css' displayName='css' value={css} onChange={setCss}/>
    </div>
    <div className='pane'>
      <iframe 
      title='op'
      sandbox='allow-scripts'
      frameBorder={0}
      width="100"
      height="100"
      />
    </div>
      </div>
   
  )
}

export default App
