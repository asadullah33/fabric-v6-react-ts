// import { Canvas, Rect } from 'fabric';
import { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'
import './App.css'

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasInitialized = useRef<boolean>(false);


  useEffect(()=>{

    if(canvasInitialized.current) return;

    canvasInitialized.current = true;

    const app = new PIXI.Application();
    app.init({ width: 640, height: 360 }).then(()=>{
      document.body.appendChild(app.view);
      PIXI.Assets.load('sample.png').then(()=>{
        const sprite = PIXI.Sprite.from('sample.png');
        app.stage.addChild(sprite);

        // writing an update loop
        // Add a variable to count up the seconds our demo has been running
        let elapsed = 0.0;
        // Tell our application's ticker to run a new callback every frame, passing
        // in the amount of time that has passed since the last tick
        app.ticker.add((ticker) => {
          // Add the time to our total elapsed time
          elapsed += ticker.deltaTime;
          // Update the sprite's X position based on the cosine of our elapsed time.  We divide
          // by 50 to slow the animation down a bit...
          sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
        });
      
      })
    });

  },[])

  // useEffect(() => {
  //   if(!canvasRef.current || canvasInitialized.current) return;

  //   const canvas = new Canvas(canvasRef.current, {height: 800, width: 1000, backgroundColor: 'white'});
  //   canvas.renderAll();
  //   const rect = new Rect({left: 100, top: 100, fill: 'red', width: 100, height: 100});
  //   canvas.add(rect);
  //   console.log(canvas);
  //   canvasInitialized.current = true;
  //   //@ts-expect-error-2339
  //   window.fabCanvas = canvas;
  // }, []);

  return (
    <div className={'flex'}>
      <h1 className=''>Fabric v6</h1>

      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default App
