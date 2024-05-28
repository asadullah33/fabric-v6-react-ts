import { Canvas, Rect } from 'fabric';
import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasInitialized = useRef<boolean>(false);

  

  useEffect(() => {
    if(!canvasRef.current || canvasInitialized.current) return;

    const canvas = new Canvas(canvasRef.current, {height: 800, width: 1000, backgroundColor: 'white'});
    canvas.renderAll();
    const rect = new Rect({left: 100, top: 100, fill: 'red', width: 100, height: 100});
    canvas.add(rect);
    console.log(canvas);
    canvasInitialized.current = true;
    //@ts-expect-error-2339
    window.fabCanvas = canvas;
  }, []);

  return (
    <div className={'flex'}>
      <h1 className=''>Fabric v6</h1>

      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default App
