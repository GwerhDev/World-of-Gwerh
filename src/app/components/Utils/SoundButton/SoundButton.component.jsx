import React from 'react'
import { ButtonFunction } from './SoundButton.functions';
import { $d } from '../../../../functions/DocumentCSS';
import { OPACITY_ACTIVE, OPACITY_DEFAULT } from '../Constants/const';

export const SoundButton = (props) => {
  const { soundBtnOff, soundBtnOn, mediaTheme, setMediaTheme, setPlayState, mainTheme, playState } = props;
  return (
    <button
      className="soundBtn"
      style={{ backgroundImage: `url(${soundBtnOff})` }}
      onClick={() => {
        if (mediaTheme === '' && !playState) return ( ButtonFunction(soundBtnOn), setMediaTheme(mainTheme), setPlayState(true));
        return ( ButtonFunction(soundBtnOff), setMediaTheme(''), setPlayState(false));
      }}
      onMouseEnter={() => { $d('.soundBtn').style.opacity = OPACITY_ACTIVE }}
      onMouseLeave={() => { $d('.soundBtn').style.opacity = OPACITY_DEFAULT }}
    />
  )
}
