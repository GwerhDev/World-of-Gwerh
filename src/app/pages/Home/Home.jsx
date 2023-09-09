import React from "react";
import { useSelector } from 'react-redux';
import { Enter } from '../../components/Enter/Enter.component';
import { Login } from "../../components/Login/Login.component";
import { SoundAlert } from "../../components/Utils/SoundAlert/SoundAlert.component";
import { Configuration } from "../../components/Configuration/Configuration.component";
import { ServerConnection } from "../../../functions/ServerConnection";
import { HOME } from "../../components/Utils/Constants/const";
import logo from '../../../assets/images/png/WoG-Icon.png';
import Preloader from '../../components/Utils/Preloader/Preloader.component';

function Home() {
    const _preloader_ = useSelector(state => state.preloader);
    const { showSoundAlert } = useSelector(state => state.soundAlert);

    ServerConnection(HOME);

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
                <div>
                    { 
                        showSoundAlert
                        ? <SoundAlert/> 
                        : null 
                    } 
                </div>
            </div>
                {
                    _preloader_
                    ? <Preloader img={logo} /> 
                    : null
                }
        </div>
    )
}

export default Home