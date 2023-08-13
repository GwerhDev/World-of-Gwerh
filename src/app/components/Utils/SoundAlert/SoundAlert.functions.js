import { $d } from "../../../../functions/DocumentCSS"

export function SoundFunction(soundBtn) {
  localStorage.setItem('sound', false)
  $d('.soundBtn').style.backgroundImage = `url(${soundBtn})`
  $d('#soundAlert').style.display = 'none'
}