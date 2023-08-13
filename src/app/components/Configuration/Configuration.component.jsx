import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import s from './Configuration.module.css'

export const Configuration = () => {
    const [url, setUrl] = useState('')
    const [volume, setVolume] = useState(100)

    return (
        <main className='options-container'>
            <div className="form-container config-container">
                <p>Configuraciones</p>
                <ul className={s.configContainer}>
                    <span>Volumen</span>
                    <input type="range" min="0" max="100" value={volume} onChange={e => setVolume(e.target.value)} />
                    <span>{volume}</span>
                </ul>
            </div>
            <div className='sounds'>
                <AudioPlayer 
                src={url}
                onEnded={e => setUrl('')}
                />
            </div>
        </main>
  )
}
