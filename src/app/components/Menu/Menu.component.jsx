import React, { useRef } from 'react';
import s from './Menu.module.css';
import gwerhIcon from '../../../assets/images/png/logo.png';
import configIcon from '../../../assets/images/png/config-icon.png';
import langIcon from '../../../assets/images/png/lang-icon.png';
import backIcon from '../../../assets/images/png/back-icon.png';
import { menuButton } from './Menu.functions';
import { useState } from 'react';
import sndBtnHover from '../../../assets/sounds/btn-hover.mp3';
import sndBtn from '../../../assets/sounds/btn.mp3';
import { CONFIGURATION, ENTER, SELECTION } from '../Utils/Constants/const';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../middleware/redux/actions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Menu = () => {
  const [url, setUrl] = useState('');
  const { showMenu } = useSelector(state => state.menu);
  const currentPage = useSelector(state => state.currentPage);
  const dispatch = useDispatch();
  const history = useHistory();
  const { volume } = useSelector(state => state.sound.buttons);
  const player = useRef();

  return (
    <div className={s.menuContainer} style={{ opacity: showMenu ? '1' : '0', transitionDuration: '.4s' }}>
      <div>
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
            onClick={() => { return currentPage === SELECTION ? (history.push('/')) : menuButton(setUrl, sndBtn, dispatch, setCurrentPage, CONFIGURATION) }}
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
              onClick={() => { return currentPage === SELECTION ? (history.push('/'), dispatch(setCurrentPage(ENTER))) : menuButton(setUrl, sndBtn, dispatch, setCurrentPage, ENTER) }}
              src={backIcon} alt="" />
        }
      </div>
      <div className='sounds'>
        <AudioPlayer
          ref={player}
          src={url}
          volume={volume / 100}
          onListen={() => {
            player.current.audio.current.volume = volume / 100;
          }}
          onEnded={() => setUrl('')}
        />
      </div>
    </div>
  )
}
