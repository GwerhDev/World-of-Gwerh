import React, { useState } from 'react';
import s from './Login.module.css'
import AudioPlayer from 'react-h5-audio-player';
import sndBtnHover from '../../../assets/sounds/btn-hover.mp3';
import sndBtn from '../../../assets/sounds/btn.mp3';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { handleInnerLogin } from '../../../handlers/forms';

export const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const player = useRef();
    const { volume } = useSelector(state => state.sound.buttons);
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login-container'>    
            <div className="form-container">
                <p>Iniciar Sesión</p>
                <ul>
                    <li><input className={s.inputLogin} onChange={(e) => setUsername(e.target.value)} type="email" name="login-email" placeholder="Nombre de usuario"/></li>
                    <li><input className={s.inputLogin} onChange={(e) => setPassword(e.target.value)} type="password" name="login-password" placeholder="Contraseña"/></li>
                    <li>
                        <button 
                            className={s.btn}
                            onMouseEnter={()=> setUrl(sndBtnHover)}
                            onClick={()=>{ 
                                setUrl(sndBtn)
                                handleInnerLogin(username, password, history, dispatch)
                        }}>
                            Iniciar sesión
                        </button>
                    </li>
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