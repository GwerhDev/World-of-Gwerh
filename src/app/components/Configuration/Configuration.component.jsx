import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

export const Configuration = () => {
    const [url, setUrl] = useState('')

    return (
        <div className='options-container'>
            <div className="form-container">
                <p>Configuraciones</p>
            </div>
            <div className='sounds'>
                <AudioPlayer 
                src={url}
                onEnded={e => setUrl('')}
                />
            </div>
        </div>
  )
}
