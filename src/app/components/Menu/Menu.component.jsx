import React from 'react';
import s from './Menu.module.css';
import { SoundButton } from '../Utils/SoundButton/SoundButton.component';
import gwerhIcon from '../../../assets/images/png/logo.png';
import configIcon from '../../../assets/images/png/config-icon.png';
import langIcon from '../../../assets/images/png/lang-icon.png';
import backIcon from '../../../assets/images/png/back-icon.png';
import { menuButton } from './Menu.functions';
import { useState } from 'react';
import sndBtnHover from '../../../assets/sounds/btn-hover.mp3';
import sndBtn from '../../../assets/sounds/btn.mp3';
import { CONFIGURATION, ENTER } from '../Utils/Constants/const';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../middleware/redux/actions';

export const Menu = (props) => {
  const { soundBtnOff, soundBtnOn, mediaTheme, setMediaTheme, mainTheme, playState } = props;
  const [url, setUrl] = useState('');
  const currentPage = useSelector(state=> state.currentPage)
  const dispatch = useDispatch()

  return (
    <div className={s.menuContainer}>
      <div>
        <div className={s.icon}>
          <SoundButton 
            soundBtnOff={soundBtnOff} 
            soundBtnOn={soundBtnOn} 
            mediaTheme={mediaTheme} 
            setMediaTheme={setMediaTheme} 
            mainTheme={mainTheme} 
            playState={playState} />
        </div>
        <div className={s.icon}>
          <img 
            className="icon" 
            onMouseEnter={() => setUrl(sndBtnHover)}
            src={langIcon} alt="" />
        </div>
        <div className={s.icon}>
          <img 
            className="icon"
            onMouseEnter={() => setUrl(sndBtnHover)}
            onClick={() => menuButton(setUrl, sndBtn, dispatch, setCurrentPage, CONFIGURATION)} 
            src={configIcon} alt="" />
        </div>
        <div className="icon">
        <img 
          className="icon" 
          onMouseEnter={() => setUrl(sndBtnHover)}
          src={gwerhIcon} alt="" />
        </div>
      </div>
        <div className={s.iconBack} id='iconBack'>
        {
          currentPage === ENTER ? null :
          <img 
            className="icon" 
            onMouseEnter={() => setUrl(sndBtnHover)}
            onClick={() => menuButton(setUrl, sndBtn, dispatch, setCurrentPage, ENTER)} 
            src={backIcon}alt="" />
          }
        </div>
      <div className='sounds'>
        <AudioPlayer
          src={url}
          onEnded={e => setUrl('')} 
        />
      </div>
    </div>
  )
}
