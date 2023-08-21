import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import s from './Configuration.module.css';
import mainTheme from '../../../assets/sounds/main-theme.mp3';
import { setSoundButtonsVolume, setSoundMusic, setSoundMusicVolume } from '../../../middleware/redux/actions';

export const Configuration = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const { music, buttons } = useSelector(state => state.sound);

    return (
        <main className='options-container'>
            <div className="form-container config-container">
                <p>Configuraciones</p>
                <ol className={s.configContainer}>
                    <div className='flex-row justify-content-center w-100 mb-1'>
                        <span className='subtitle'>Sonido</span>
                    </div>
                    <li>
                        <span className={s.optionName}>General</span>
                        <input type="checkbox" value={music.playState} checked={music.playState} onChange={() => dispatch(setSoundMusic(!music.playState, !music.playState? mainTheme : ''))} />
                        <div className={s.volumenNumber}>
                            <span>{music.playState? 'Activado' : 'Desactivado'}</span>
                        </div>
                    </li>
                    <li>
                        <span className={s.optionName}>Música</span>
                        <input type="range" min="0" max="100" value={music.volume} onChange={e => dispatch(setSoundMusicVolume(e.target.value))} />
                        <div className={s.volumenNumber}>
                            <span>{music.volume}%</span>
                        </div>
                    </li>
                    <li>
                        <span className={s.optionName}>Botones</span>
                        <input type="range" min="0" max="100" value={buttons.volume} onChange={e => dispatch(setSoundButtonsVolume(e.target.value))} />
                        <div className={s.volumenNumber}>
                            <span>{buttons.volume}%</span>
                        </div>
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
