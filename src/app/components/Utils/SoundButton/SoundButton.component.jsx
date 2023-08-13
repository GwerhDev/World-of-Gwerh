import React from 'react'
import { ButtonFunction } from './SoundButton.functions';
import { $d } from '../../../../functions/DocumentCSS';
import { OPACITY_ACTIVE, OPACITY_DEFAULT } from '../Constants/const';
import { useDispatch, useSelector } from 'react-redux';
import { setSoundPlayer } from '../../../../middleware/redux/actions';
import mainTheme from '../../../../assets/sounds/main-theme.mp3';
import soundBtnOn from '../../../../assets/images/png/soundbtn-on.png';
import soundBtnOff from '../../../../assets/images/png/soundbtn-off.png';


export const SoundButton = () => {
  const dispatch = useDispatch();
  const { playState } = useSelector(state => state.soundPlayer)
  return (
    <button
      className="soundBtn"
      style={{ backgroundImage: `url(${soundBtnOff})` }}
      onClick={() => {
        if (!playState) return ( ButtonFunction(soundBtnOn), dispatch(setSoundPlayer(true, mainTheme)));
        return ( ButtonFunction(soundBtnOff), dispatch(setSoundPlayer(false, '')));
      }}
      onMouseEnter={() => { $d('.soundBtn').style.opacity = OPACITY_ACTIVE }}
      onMouseLeave={() => { $d('.soundBtn').style.opacity = OPACITY_DEFAULT }}
    />
  )
}
