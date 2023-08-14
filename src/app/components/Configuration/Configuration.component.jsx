import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import s from './Configuration.module.css'

export const Configuration = () => {
    const [url, setUrl] = useState('');
    const [volumeMusic, setVolumeMusic] = useState(100);
    const [volumeSound, setVolumeSound] = useState(100);

    return (
        <main className='options-container'>
            <div className="form-container config-container">
                <p>Configuraciones</p>
                <ol className={s.configContainer}>
                    <li>
                        <span>Volumen</span>
                    </li>
                    <li>
                        <span>Música</span>
                        <input type="range" min="0" max="100" value={volumeMusic} onChange={e => setVolumeMusic(e.target.value)} />
                        <span>{volumeMusic}</span>
                    </li>
                    <li>
                        <span>Sonidos</span>
                        <input type="range" min="0" max="100" value={volumeSound} onChange={e => setVolumeSound(e.target.value)} />
                        <span>{volumeSound}</span>
                    </li>
                </ol>
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
