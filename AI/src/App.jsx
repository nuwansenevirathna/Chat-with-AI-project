import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  async function generateAnswer(){

    setAnswer("Loading...")
  const response = await axios({

  url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_GcedrCFFmW01EUPLqbTS_Q90woE7N-c',
  method: 'post',
  data: {
    contents:[
      {parts:[{text:question}]}
    ]
        }
    });

  setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  return (
    <>
    <h2>Created By Nuwan Senevirathna</h2>
    <h1>Chat With - AI</h1>
    <textarea
    className="border rounded w-full"
    value={question}
    onChange={(e)=> setQuestion(e.target.value)}
    cols="70"
    rows="10"
    placeholder='Ask Anything To Me..?'>

      </textarea><br/><br />
    <button onClick={generateAnswer}>Generate Answer</button>

    <div className="answer-container">
  {answer.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ))}
</div>



    </>
  )
}

export default App
