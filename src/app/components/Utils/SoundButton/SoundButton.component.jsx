import React from 'react'

export const SoundButton = (props) => {
  const { soundBtnOff, soundBtnOn, mediaTheme, setMediaTheme, mainTheme, playState } = props;
  return (
      <button
        className="soundBtn" 
        style={{ backgroundImage: `url(${soundBtnOff})` }}
        onClick={() => {
          if (mediaTheme === '' && !playState) {
            document.querySelector('.soundBtn').style.backgroundImage = `url(${soundBtnOn})`
            setMediaTheme(mainTheme)
          } else {
            document.querySelector('.soundBtn').style.backgroundImage = `url(${soundBtnOff})`
            setMediaTheme('')
          }
        }}
        onMouseEnter={() => {
          document.querySelector('.soundBtn').style.opacity = '1'
        }}
        onMouseLeave={() => {
          document.querySelector('.soundBtn').style.opacity = '.7'
        }}
      />
  )
}
