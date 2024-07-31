import { useState } from 'react'
import MyComponentVite from './components/Demo/MyComponentVite';
import './App.css'
import RequestAllPage from './pages/api-all-in-one';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="demo-container">
      </div>
      <MyComponentVite />
      <RequestAllPage />
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
