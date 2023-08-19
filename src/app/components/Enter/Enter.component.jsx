import React, { useState } from 'react';
import s from './Enter.module.css';
import AudioPlayer from 'react-h5-audio-player';
import sndBtnHover from '../../../assets/sounds/btn-hover.mp3';
import sndBtn from '../../../assets/sounds/btn.mp3';
import { enterButton } from './Enter.functions';
import { LOGIN, OPACITY_ACTIVE, OPACITY_INACTIVE, TRANSITION_DURATION_DEFAULT } from '../Utils/Constants/const';
import { Logo } from '../Utils/Logo/Logo.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../middleware/redux/actions';
import { useRef } from 'react';

export const Enter = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const { showSoundAlert } = useSelector(state => state.soundAlert);
    const { volume } = useSelector(state => state.sound.buttons);
    const player = useRef();

    return (
        <div className={s.enterContainer}>
            <div style={{ opacity: !showSoundAlert ? OPACITY_ACTIVE : OPACITY_INACTIVE, transitionDuration: TRANSITION_DURATION_DEFAULT }}>
                <Logo />
            </div>
            <button
                style={{ opacity: !showSoundAlert ? OPACITY_ACTIVE : OPACITY_INACTIVE }}
                className={s.enterButton}
                onMouseEnter={() => setUrl(sndBtnHover)}
                onClick={() => enterButton(setUrl, sndBtn, dispatch, setCurrentPage, LOGIN)}>
                Entrar
            </button>
            <div className='sounds'>
                <AudioPlayer
                    ref={player}
                    src={url}
                    volume={volume / 100}
                    onListen={() => {
                        player.current.audio.current.volume = volume / 100;
                    }}
                    onEnded={() => setUrl('')}
                />
            </div>
        </div>
    )
}
