
import { useRef } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef(null);

  return (
    <>
      <h1>Vite + React + FabricV6 with help of Yarn</h1>

      <canvas ref={canvasRef}></canvas>
    </>
  )
}

export default App
