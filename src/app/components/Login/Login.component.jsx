import React, { useState } from 'react';
import s from './Login.module.css'
import AudioPlayer from 'react-h5-audio-player';
import sndBtnHover from '../../../assets/sounds/btn-hover.mp3';
import sndBtn from '../../../assets/sounds/btn.mp3';

export const Login = () => {
    const [url, setUrl] = useState('')

    return (
        <div className='login-container'>    
            <div className="form-container">
                <p>Iniciar Sesión</p>
                <ul>
                    <li><input className={s.inputLogin} type="email" name="login-email" id="login-email" placeholder="Correo electrónico"/></li>
                    <li><input className={s.inputLogin} type="password" name="login-password" id="login-password" placeholder="Contraseña"/></li>
                    <li><button 
                        className={s.btn}
                        onMouseEnter={()=> setUrl(sndBtnHover)}
                        onClick={()=> setUrl(sndBtn)}>
                            Iniciar sesión
                    </button></li>
                </ul>
                <div className='sounds'>
                    <AudioPlayer 
                        src={url}
                        onEnded={() => setUrl('')}
                    />
                </div>
            </div>            
        </div>
        
    )
}