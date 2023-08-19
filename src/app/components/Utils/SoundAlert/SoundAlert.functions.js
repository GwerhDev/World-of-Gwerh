import { $d } from "../../../../functions/DocumentCSS"

export function SoundFunction(e) {
  localStorage.setItem('sound', e)
  $d('#soundAlert').style.display = 'none'
}