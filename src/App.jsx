import { useState } from 'react';

function App() {
  let [color, setColor] = useState("white"); //TODO Still not working Work on later
  

  return (
    <>
      <div className="w-full h-screen duration-200 text-white" style={{ backgroundColor: color }}>
        <div className='w-screen flex flex-wrap justify-center bottom-10 inset-x-0 px-10'>
          <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-2 rounded-2xl'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'red' }}>Red</button>
            <button
              onClick={() => setColor("orange")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'orange' }}>Orange</button>
            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'green' }}>Green</button>
            <button
              onClick={() => setColor("olive")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'olive' }}>Olive</button>
            <button
              onClick={() => setColor("blue")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'blue' }}>Blue</button>
            <button
              onClick={() => setColor("BlueViolet")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'BlueViolet' }}>BlueViolet</button>
            <button
              onClick={() => setColor("teal")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'teal' }}>Teal</button>
            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'black' }}>Black</button>
            <button
              onClick={() => setColor("silver")}
              className='outline-none px-4 py-1 rounded-3xl shadow-xl'
              style={{ backgroundColor: 'silver' }}>Silver</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
