import { $d } from "../../../functions/DocumentCSS"

export function exitButton(f,s){
  f(s)
  $d('.enter-body').style.transitionDuration="2.5s"
  $d('.enter-body').style.transform="translate(0vw)"
  $d('.login-body').style.transitionDuration="2s"
  $d('.login-body').style.transform="translate(0vw)"
  $d('.options-container').style.transitionDuration="2s"
  $d('.options-container').style.transform="translateY(-100vh)"
  $d('.options-container').style.opacity="0"
};