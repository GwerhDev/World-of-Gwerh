import { $d } from "../../../functions/DocumentCSS"
import { CONFIGURATION, ENTER } from "../Utils/Constants/const"

export function menuButton(f, e, dispatch, action,d){
  dispatch(action(d))
  f(e)
  if(d===CONFIGURATION){
      $d('.enter-body').style.transitionDuration="1.5s"
      $d('.enter-body').style.transform="translate(100vw)"
      $d('.login-body').style.transitionDuration="2s"
      $d('.login-body').style.transform="translate(100vw)"
      $d('.options-container').style.transitionDuration="2s"
      $d('.options-container').style.transform="translateY(0)"
      $d('.options-container').style.opacity="1"
      $d('.login-container').style.transitionDuration="0.5s"
      $d('.login-container').style.transform="translateY(-100vh)"
      $d('.login-container').style.opacity="0"
      $d('#iconBack').style.opacity="1"
  } else if(d===ENTER){
    $d('.enter-body').style.transitionDuration="2.5s"
    $d('.enter-body').style.transform="translate(0vw)"
    $d('.login-body').style.transitionDuration="2s"
    $d('.login-body').style.transform="translate(0vw)"
    $d('.options-container').style.transitionDuration="2s"
    $d('.options-container').style.transform="translateY(-100vh)"
    $d('.options-container').style.opacity="0"
    $d('.login-container').style.transitionDuration="0.5s"
    $d('.login-container').style.transform="translateY(-100vh)"
    $d('.login-container').style.opacity="0"
    $d('#iconBack').style.opacity="0"
  }
}
