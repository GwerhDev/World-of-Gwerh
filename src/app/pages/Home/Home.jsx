import React, { useRef, useState } from "react";
import Aventuras from "./Aventuras";
import Entrar from './Entrar';
import Opciones from './Opciones';
import soundBtnOn from '../../../assets/images/png/soundbtn-on.png';
import soundBtnOff from '../../../assets/images/png/soundbtn-off.png';
import mainTheme from '../../../assets/sounds/main-theme.mp3';
import AudioPlayer from 'react-h5-audio-player';
import Preloader from '../../components/utils/Preloader/Preloader';
import logo from '../../../assets/images/png/WoG-Icon.png';
import { GlobalStates } from "../../../functions/GlobalStates";
import { useSelector } from 'react-redux';

function Home() {
    const player = useRef()
    const [mediaTheme, setMediaTheme] = useState('')
    const _preloader_ = useSelector(state=>state.preloader)
    const _server_ = useSelector(state=>state.aventuras)
    const [playState, setPlayState] = useState(false)

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
            autoPlay={playState}
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
                <button className="soundBtn" style={{backgroundImage:`url(${soundBtnOff})`}} 
                onClick={()=>{
                    if(mediaTheme==='' && !playState){
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
        <div style={{
                position:'fixed', 
                borderRadius:'15px', 
                boxShadow:'0px 0px 100px black', 
                left:'10vw', 
                top:'10vh', 
                width:'80vw', 
                backgroundColor:'#171717ee',
                
                }}
                id='soundAlert'>
            <p style={{padding:'50px'}}>Para disfrutar de la experiencia completa, por favor activa el sonido en tu dispositivo. ¿Quieres activarlo ahora?</p>
            <button style={{marginBottom:'50px', marginRight: '5px'}} onClick={()=> {
                document.querySelector('.soundBtn').style.backgroundImage=`url(${soundBtnOn})`
                setMediaTheme(mainTheme)
                setPlayState(true)
                document.querySelector('#soundAlert').style.display='none'
            }}>
                Sí
            </button>
            <button style={{marginBottom:'50px', marginLeft: '5px'}} onClick={()=> {
                document.querySelector('.soundBtn').style.backgroundImage=`url(${soundBtnOff})`
                setMediaTheme('')
                setPlayState(false)
                document.querySelector('#soundAlert').style.display='none'
            }}>
                No
            </button>
        </div>

        </div>
    )
}

export default Home