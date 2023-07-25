import React, { useState } from 'react';
import logo from '../../../assets/images/png/title.png';
import lotr from '../../../assets/images/png/lotr-ring.png'
import estilos from './css/Entrar.module.css';
import AudioPlayer from 'react-h5-audio-player';
import { handlerBtnOnClick } from '../../../handlers/handlers';

const Entrar = () => {
    const btnHover = "sound/btn-hover.mp3"
    const btnClick = "sound/btn.mp3"
    const [url, setUrl] = useState('')

    return (
        <div>
            <div className={estilos.div_title}>
                    <img className={estilos.title} src={logo} alt="" />
            </div>
            <div className={estilos.div_lotr}>
                <img className={estilos.lotr} src={lotr} alt="" />
            </div>
                <ul>
                    <li>
                        <button 
                        className={estilos.in} 
                        onMouseEnter={()=>setUrl(btnHover)} 
                        onClick={()=> handlerBtnOnClick(setUrl, btnClick, 'Aventuras')}>
                        Aventuras
                        </button>
                    </li>
                    <li>
                        <button 
                        className={estilos.opt} 
                        onMouseEnter={()=>setUrl(btnHover)} 
                        onClick={()=> handlerBtnOnClick(setUrl, btnClick, 'Opciones')}>
                        Opciones
                        </button>
                    </li>
                </ul>
                <div className='sounds'>
                    <AudioPlayer 
                        src={url}
                        onEnded={e => setUrl('')}/>
                </div>
        </div>
    )
}

export default Entrar