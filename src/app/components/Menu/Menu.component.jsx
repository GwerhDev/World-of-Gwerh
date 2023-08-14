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
import { ACCOUNT, CONFIGURATION, ENTER } from '../Utils/Constants/const';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../middleware/redux/actions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Menu = () => {
  const [url, setUrl] = useState('');
  const { showMenu } = useSelector(state => state.menu);
  const currentPage = useSelector(state=> state.currentPage);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={s.menuContainer} style={{ opacity: showMenu? '1':'0', transitionDuration: '.4s' }}>
      <div>
        <div className={s.icon}>
          <SoundButton/>
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
            onClick={() =>{ return currentPage === ACCOUNT? (history.push('/')) : menuButton(setUrl, sndBtn, dispatch, setCurrentPage, CONFIGURATION)} }
            src={configIcon} alt="" />
        </div>
        <div className={s.icon}>
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
            onClick={() =>{ return currentPage === ACCOUNT? (history.push('/'),dispatch(setCurrentPage(ENTER))) : menuButton(setUrl, sndBtn, dispatch, setCurrentPage, ENTER)} }
            src={backIcon}alt="" />
          }
        </div>
      <div className='sounds'>
        <AudioPlayer src={url} onEnded={e => setUrl('')} />
      </div>
    </div>
  )
}
