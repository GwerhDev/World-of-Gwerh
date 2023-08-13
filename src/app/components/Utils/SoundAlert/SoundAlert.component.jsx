import React from 'react';
import s from './SoundAlert.module.css'
import { SoundFunction } from './SoundAlert.functions';

export const SoundAlert = (props) => {
  const { mainTheme, setMediaTheme, setPlayState, setShowMenu, soundBtnOn, soundBtnOff } = props
  return (
    <div className={s.alertBackground} id='soundAlert'>
      <div className={s.alertContainer}>
        <p>Para disfrutar de la experiencia completa, por favor activa el sonido en tu dispositivo.</p>
        <p style={{fontSize: '1.5rem'}}>¿Quieres activarlo ahora?</p>
        <div>
          <button className={s.btn} onClick={() => { return (SoundFunction(soundBtnOn), setMediaTheme(mainTheme), setPlayState(true), setShowMenu(true)) }}>
            Sí
          </button>
          <button className={s.btn} onClick={() => { return (SoundFunction(soundBtnOff), setMediaTheme(''), setPlayState(false), setShowMenu(true)) }}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}
