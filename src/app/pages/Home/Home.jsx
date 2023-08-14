import React from "react";
import { useSelector } from 'react-redux';
import { Enter } from '../../components/Enter/Enter.component';
import { Login } from "../../components/Login/Login.component";
import { SoundAlert } from "../../components/Utils/SoundAlert/SoundAlert.component";
import { Configuration } from "../../components/Configuration/Configuration.component";
import { GlobalStates } from "../../../functions/GlobalStates";
import { HOME } from "../../components/Utils/Constants/const";
import logo from '../../../assets/images/png/WoG-Icon.png';
import Preloader from '../../components/Utils/Preloader/Preloader.component';

function Home() {
    const _preloader_ = useSelector(state => state.preloader);
    const _server_ = useSelector(state => state.aventuras);
    const { showSoundAlert } = useSelector(state => state.soundAlert);

    GlobalStates(HOME);

    return (
        <div className="home-body">
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
                <div> { showSoundAlert? <SoundAlert/> : null } </div>
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
        </div>
    )
}

export default Home