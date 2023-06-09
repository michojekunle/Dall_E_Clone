import { useRef } from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils'

const Card = ({ _id, name, prompt, photo }) => {
  const canvasRef = useRef(null);
  
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card overflow-hidden'>
      <img
        src={photo}
        alt={prompt}
        className='w-full h-auto object-cover rounded-xl'
      />
      <canvas width={100} height={100} className="hidden" id="MyCanvas" ref={canvasRef} >MyCanvas</canvas>
      <div className='group-hover:bottom-0 bottom-[-100%] flex flex-col max-h-[94.5%] absolute transition-all duration-300 delay-150 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
          <p className='text-white text-md overflow-y-auto prompt'>{prompt}</p>
          <div className='mt-5 flex justify-between items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white font-bold text-xs uppercase'>{name[0]}</div>
              <p className='text-white text-sm capitalize'>{name}</p>
            </div>
            <button
              type='button'
              onClick={() => downloadImage(_id, photo, canvasRef)}
              className='outline-none bg-transparent border-none'
            >
              <img
                src={download}
                alt="download"
                className='w-6 h-6 object-contain invert'
              />
            </button>
          </div>
      </div>
    </div>
  )
}

export default Card
