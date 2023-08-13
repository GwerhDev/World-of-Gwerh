import React from 'react';
import { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';


export const SoundPLayer = () => {
  const player = useRef();
  const { playState, src } = useSelector(state => state.soundPlayer);
  return (
    <div>
      <AudioPlayer
        ref={player} id='main-theme'
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledProgress={false}
        hasDefaultKeyBindings={false}
        src={src}
        autoPlay={playState}
        type='audio/mp3'
        preload='auto'
        style={{ display: 'none' }}
        onListen={() => {
            if (player.current.audio.current.currentTime >= 164.55) {
                return player.current.audio.current.currentTime = 89.55
            }
        }} />
    </div>
  )
}
