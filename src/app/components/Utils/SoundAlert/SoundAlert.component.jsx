import React from 'react';
import s from './SoundAlert.module.css'
import { SoundFunction } from './SoundAlert.functions';
import { useDispatch } from 'react-redux';
import { setMenuStates, setSoundALertStates, setSoundMusic } from '../../../../middleware/redux/actions';
import mainTheme from '../../../../assets/sounds/main-theme.mp3';

export const SoundAlert = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.alertBackground} id='soundAlert'>
      <div className={s.alertContainer}>
        <p>Para disfrutar de la experiencia completa, por favor activa el sonido en tu dispositivo.</p>
        <p style={{fontSize: '1.5rem'}}>¿Quieres activarlo ahora?</p>
        <div>
          <button className={s.btn} onClick={() => { 
              SoundFunction(true)
              dispatch(setSoundMusic(true, mainTheme))
              dispatch(setMenuStates(true, 'home'))
              dispatch(setSoundALertStates(false))
            }}
            >
            Sí
          </button>
          <button className={s.btn} onClick={() => { 
              SoundFunction(false)
              dispatch(setSoundMusic(false, ''))
              dispatch(setMenuStates(true, 'home'))
              dispatch(setSoundALertStates(false))
            }}
            >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
