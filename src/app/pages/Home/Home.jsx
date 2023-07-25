import React, { useEffect, useRef, useState } from "react";
import Enter from '../../components/Enter/Enter.component';
import soundBtnOn from '../../../assets/images/png/soundbtn-on.png';
import soundBtnOff from '../../../assets/images/png/soundbtn-off.png';
import mainTheme from '../../../assets/sounds/main-theme.mp3';
import AudioPlayer from 'react-h5-audio-player';
import Preloader from '../../components/Utils/Preloader/Preloader.component';
import logo from '../../../assets/images/png/WoG-Icon.png';
import { GlobalStates } from "../../../functions/GlobalStates";
import { useSelector } from 'react-redux';
import Adventures from "../../components/Adventures/Adventures.component";
import Options from "../../components/Options/Options.component";
import { SoundAlert } from "../../components/Utils/SoundAlert/SoundAlert.component";

function Home() {
    const player = useRef()
    const sound = Boolean(localStorage.getItem('sound'));
    const theme = sound? mainTheme : '';
    const [playState, setPlayState] = useState(sound);
    const [mediaTheme, setMediaTheme] = useState(theme);
    const _preloader_ = useSelector(state=>state.preloader)
    const _server_ = useSelector(state=>state.aventuras);

    useEffect(() => {
        setMediaTheme(theme)
        setPlayState(sound)
    }, [theme, sound])
    
    GlobalStates('home');
    
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
                                <Enter />
                            </div>
                            <Adventures />
                        </div>
                        <Options />
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
            {
                !sound?
                    <SoundAlert mainTheme={mainTheme} setMediaTheme={setMediaTheme} setPlayState={setPlayState} soundBtnOn={soundBtnOn} soundBtnOff={soundBtnOff} />
                :   null
            }
        </div>
    )
}

export default Home