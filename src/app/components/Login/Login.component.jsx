import React, { useState } from 'react';
import s from './Login.module.css'
import AudioPlayer from 'react-h5-audio-player';
import sndBtnHover from '../../../assets/sounds/btn-hover.mp3';
import sndBtn from '../../../assets/sounds/btn.mp3';
import { LoginFunction } from './Login.functions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

export const Login = () => {
    const [url, setUrl] = useState('');
    const history = useHistory();
    const { volume } = useSelector(state => state.sound.buttons);
    const player = useRef();

    return (
        <div className='login-container'>    
            <div className="form-container">
                <p>Iniciar Sesión</p>
                <ul>
                    <li><input className={s.inputLogin} type="email" name="login-email" id="login-username" placeholder="Nombre de usuario"/></li>
                    <li><input className={s.inputLogin} type="password" name="login-password" id="login-password" placeholder="Contraseña"/></li>
                    <li><button 
                            className={s.btn}
                            onMouseEnter={()=> setUrl(sndBtnHover)}
                            onClick={()=>{ 
                                setUrl(sndBtn)
                                if(LoginFunction()){
                                    history.push('/account/1')
                        }}}>
                            Iniciar sesión
                    </button></li>
                </ul>
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
        </div>
        
    )
}