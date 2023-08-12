import React, { useState } from 'react';
import s from './Enter.module.css';
import AudioPlayer from 'react-h5-audio-player';
import sndBtnHover from '../../../assets/sounds/btn-hover.mp3';
import sndBtn from '../../../assets/sounds/btn.mp3';
import { enterButton } from './Enter.functions';
import { LOGIN } from '../Utils/Constants/const';
import { Logo } from '../Utils/Logo/Logo.component';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../middleware/redux/actions';

export const Enter = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();

    return (
        <div className={s.enterContainer}>
            <Logo/>
            <ul>
                <li>
                    <button
                        className={s.enterButton}
                        onMouseEnter={() => setUrl(sndBtnHover)}
                        onClick={() => enterButton(setUrl, sndBtn, dispatch, setCurrentPage, LOGIN)}>
                        Entrar
                    </button>
                </li>
{/*                 <li>
                    <button
                        className={s.optionButton}
                        onMouseEnter={() => setUrl(sndBtnHover)}
                        onClick={() => enterButton(setUrl, sndBtn, CONFIGURATION)}>
                        Opciones
                    </button>
                </li> */}
            </ul>
            <div className='sounds'>
                <AudioPlayer
                    src={url}
                    onEnded={e => setUrl('')} 
                />
            </div>
        </div>
    )
}
