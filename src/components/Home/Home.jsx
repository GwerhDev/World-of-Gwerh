import React from "react";
import Aventuras from "./Aventuras";
import Entrar from './Entrar';
import Opciones from './Opciones';
import soundBtnOn from '../../design/soundbtn-on.png';
import soundBtnOff from '../../design/soundbtn-off.png';
import mainTheme from '../../sounds/main-theme.mp3';
import AudioPlayer from 'react-h5-audio-player';
import Preloader from '../Utils/Preloader';
import logo from '../../design/WoG-Icon.png';
import { useRef } from "react";
import { useState } from "react";
import { GlobalStates } from "../../functions/GlobalStates";
import { useSelector } from 'react-redux';

function Home() {
    const player = useRef()
    const [mediaTheme, setMediaTheme] = useState(mainTheme)
    const _preloader_ = useSelector(state=>state.preloader)
    const _server_ = useSelector(state=>state.aventuras)

    GlobalStates('home')

    return (
        <div className="home">
        <div id="preload-images"></div>
            <AudioPlayer 
            ref={player} id='main-theme' 
            showJumpControls={false}
            showDownloadProgress={false}
            showFilledProgress={false}
            hasDefaultKeyBindings={false}
            src={mediaTheme}
            autoPlay={true}
            style={{display:'none'}}
            onListen={()=>{
                if (player.current.audio.current.currentTime>=164.55){
                    return player.current.audio.current.currentTime=89.55
                }
            }}
            type='audio/mp3'
            preload='auto' 
            />
            <div className="div_home">
                <div className="opciones_body">
                    <div className="aventuras_body">
                        <div className="enter_body"> 
                            <Entrar />
                        </div>
                        <Aventuras />
                    </div>
                    <Opciones />
                </div> 
            {
            (_server_)?
                ( <><Preloader img={logo} /></> )
                :
            (_preloader_ ) ?
                ( <><Preloader img={logo} /></> )
                :
                ( null )
            }
            </div>
                <button className="soundBtn" style={{backgroundImage:`url(${soundBtnOn})`}} 
                onClick={()=>{
                    if(mediaTheme===''){
                        document.querySelector('.soundBtn').style.backgroundImage=`url(${soundBtnOn})`
                        setMediaTheme(mainTheme)
                    }
                    else{
                    document.querySelector('.soundBtn').style.backgroundImage=`url(${soundBtnOff})`
                    setMediaTheme('')
                }}}
                onMouseEnter={()=>{
                    document.querySelector('.soundBtn').style.opacity='1'
                }}
                ></button>
        </div>
    )
}

export default Home