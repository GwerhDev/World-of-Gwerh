import React, { useState } from 'react';
import s from './Options.module.css';
import AudioPlayer from 'react-h5-audio-player';

const Options = () => {
    const [url, setUrl] = useState('')
    return (
        <div className='div_opt'>
            <p>Opciones</p>
            <button 
                className={s.opt} 
                onMouseEnter={()=>setUrl("sound/btn-hover.mp3")} 
                onClick={()=>
                    {
                        setUrl("sound/btn.mp3")
                        document.querySelector('.enter_body').style.transitionDuration="2.5s"
                        document.querySelector('.enter_body').style.transform="translate(0vw)"
                        document.querySelector('.aventuras_body').style.transitionDuration="2s"
                        document.querySelector('.aventuras_body').style.transform="translate(0vw)"
                        document.querySelector('.div_opt').style.transitionDuration="2s"
                        document.querySelector('.div_opt').style.transform="translateY(-100vh)"
                        document.querySelector('.div_opt').style.opacity="0"
                    }   
                }>
                Salir
            </button>
            <div className='sounds'>
                <AudioPlayer 
                src={url}
                onPlay={e => console.log({url})}
                onEnded={e => setUrl('')}
                />
            </div>
        </div>
  )
}
export default Options;
