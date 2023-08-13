import React from 'react';
import s from './SoundAlert.module.css'
import { SoundFunction } from './SoundAlert.functions';
import { useDispatch } from 'react-redux';
import { setMenuStates, setSoundPlayer } from '../../../../middleware/redux/actions';
import mainTheme from '../../../../assets/sounds/main-theme.mp3';
import soundBtnOn from '../../../../assets/images/png/soundbtn-on.png';
import soundBtnOff from '../../../../assets/images/png/soundbtn-off.png';

export const SoundAlert = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.alertBackground} id='soundAlert'>
      <div className={s.alertContainer}>
        <p>Para disfrutar de la experiencia completa, por favor activa el sonido en tu dispositivo.</p>
        <p style={{fontSize: '1.5rem'}}>¿Quieres activarlo ahora?</p>
        <div>
          <button className={s.btn} onClick={() => { return (SoundFunction(soundBtnOn), dispatch(setSoundPlayer(true, mainTheme)), dispatch(setMenuStates(true, 'home'))) }}>
            Sí
          </button>
          <button className={s.btn} onClick={() => { return (SoundFunction(soundBtnOff), dispatch(setSoundPlayer(false, '')), dispatch(setMenuStates(true, 'home'))) }}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}
