import React, { useEffect, useRef, useState } from "react";
import { Enter } from '../../components/Enter/Enter.component';
import { Login } from "../../components/Login/Login.component";
import { Configuration } from "../../components/Configuration/Configuration.component";
import soundBtnOn from '../../../assets/images/png/soundbtn-on.png';
import soundBtnOff from '../../../assets/images/png/soundbtn-off.png';
import mainTheme from '../../../assets/sounds/main-theme.mp3';
import AudioPlayer from 'react-h5-audio-player';
import Preloader from '../../components/Utils/Preloader/Preloader.component';
import logo from '../../../assets/images/png/WoG-Icon.png';
import { GlobalStates } from "../../../functions/GlobalStates";
import { useSelector } from 'react-redux';
import { SoundAlert } from "../../components/Utils/SoundAlert/SoundAlert.component";
import { HOME } from "../../components/Utils/Constants/const";
import { Menu } from "../../components/Menu/Menu.component";

function Home() {
    const player = useRef();
    const sound = false;
    const theme = sound ? mainTheme : '';
    const [playState, setPlayState] = useState(sound);
    const [mediaTheme, setMediaTheme] = useState(theme);
    const [showMenu, setShowMenu] = useState(false)
    const _preloader_ = useSelector(state => state.preloader)
    const _server_ = useSelector(state => state.aventuras);
    useEffect(() => {
        setMediaTheme(theme)
        setPlayState(sound)
    }, [theme, sound])

    GlobalStates(HOME);
    return (
        <div className="home-body">
            <AudioPlayer
                ref={player} id='main-theme'
                showJumpControls={false}
                showDownloadProgress={false}
                showFilledProgress={false}
                hasDefaultKeyBindings={false}
                src={mediaTheme}
                autoPlay={playState}
                type='audio/mp3'
                preload='auto'
                style={{ display: 'none' }}
                onListen={() => {
                    if (player.current.audio.current.currentTime >= 164.55) {
                        return player.current.audio.current.currentTime = 89.55
                    }
                }} />
            <div>
                <div className="options-body">
                    <div className="login-body">
                        <div className="enter-body">
                            <Enter/>
                        </div>
                        <Login/>
                    </div>
                    <Configuration/>
                </div>
                {
                    (_server_) ?
                        (<><Preloader img={logo} /></>)
                        :
                        (_preloader_) ?
                            (<><Preloader img={logo} /></>)
                            :
                            (null)
                }
            </div>
            <div style={{opacity: showMenu? '1':'0', transitionDuration: '.4s'}}>
                <Menu 
                    soundBtnOff={soundBtnOff} 
                    soundBtnOn={soundBtnOn} 
                    mediaTheme={mediaTheme} 
                    setMediaTheme={setMediaTheme}
                    setPlayState={setPlayState}
                    mainTheme={mainTheme} 
                    playState={playState} />
            </div>
            {
                !sound ?
                    <SoundAlert 
                        mainTheme={mainTheme} 
                        setMediaTheme={setMediaTheme} 
                        setPlayState={setPlayState} 
                        setShowMenu={setShowMenu}
                        soundBtnOn={soundBtnOn} 
                        soundBtnOff={soundBtnOff} />
                    : null
            }
        </div>
    )
}

export default Home