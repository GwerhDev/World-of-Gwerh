import React from 'react';
import s from './SoundAlert.module.css'

export const SoundAlert = (props) => {
  const { mainTheme, setMediaTheme, setPlayState, soundBtnOn, soundBtnOff } = props
  return (
    <div className={s.alertBackground} id='soundAlert'>
      <div className={s.alertContainer}>
        <p>Para disfrutar de la experiencia completa, por favor activa el sonido en tu dispositivo. ¿Quieres activarlo ahora?</p>
        <div>
          <button className={s.btn} onClick={() => {
            localStorage.setItem('sound', true)
            document.querySelector('.soundBtn').style.backgroundImage = `url(${soundBtnOn})`
            setMediaTheme(mainTheme)
            setPlayState(true)
            document.querySelector('#soundAlert').style.display = 'none'
          }}>
            Sí
          </button>
          <button className={s.btn} onClick={() => {
            localStorage.setItem('sound', false)
            document.querySelector('.soundBtn').style.backgroundImage = `url(${soundBtnOff})`
            setMediaTheme('')
            setPlayState(false)
            document.querySelector('#soundAlert').style.display = 'none'
          }}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}
