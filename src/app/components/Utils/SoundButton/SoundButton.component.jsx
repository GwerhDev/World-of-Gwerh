import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import soundBtnHover from '../../../../assets/sounds/btn-hover.mp3';
import soundBtnClick from '../../../../assets/sounds/btn.mp3';
import { SOUND_BUTTON_CLICK, SOUND_BUTTON_HOVER } from '../Constants/const';
import { useDispatch, useSelector } from 'react-redux';
import { setSoundButtons } from '../../../../middleware/redux/actions';

export const SoundButton = () => {
  const dispatch = useDispatch();
  const { playState, src, volume } = useSelector(state => state.sound.buttons)
  return (
    <div className='sounds'>
      <AudioPlayer
        src={src === SOUND_BUTTON_HOVER? soundBtnHover : src === SOUND_BUTTON_CLICK? soundBtnClick : null}
        autoPlay={playState}
        volume={volume/100}
        onEnded={() => dispatch(setSoundButtons(false, ''))} 
      />
    </div>
  )
}
