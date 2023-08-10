import { useEffect } from "react";
import React from 'react' 
import alanBtn from "@alan-ai/alan-sdk-web";
// API-KEY:
const alanKey='67c5abb7018cb50fe87c24802909e32a2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
  useEffect(() => 
  {
      alanBtn({
        key: alanKey,
        onCommand: ({ command }) => {
          if (command === 'testCommand') {
            alert('This code was executed');
          }
        }
      })
  },[]);
  return (
    <div>
      <h1>
        INSIGHTFUL READS
      </h1>
    </div>
  )
}

export default App