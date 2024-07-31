import { useState } from 'react'
import MyComponentVite from './components/Demo/MyComponentVite';
import { ChatBoxButton } from './components/ChainGPTChat/ChatBoxButton';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {DotTyping} from './components/ChainGPTChat/components/DotTyping';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="demo-container">
        <DotTyping loading={true}/>
        <div className="chainGPT-container">
          <ChatBoxButton
            // apiUri="/api/demos/chaingpt"
            apiUri="http://localhost:5200/api/chaingpt"
            historyLimit={10}
          />
        </div>
      </div>
      <MyComponentVite />
      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
