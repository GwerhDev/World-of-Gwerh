import { $d } from "../../../functions/DocumentCSS"

export function enterButton(f, e, dispatch, action, d){
  dispatch(action(d))
  f(e)
  $d('.enter-body').style.transitionDuration="1s"
  $d('.enter-body').style.transform="translate(100vw)"
  $d('.login-container').style.transitionDuration="1s"
  $d('.login-container').style.transform="translateY(0)"
  $d('.login-container').style.opacity="1"
  $d('#iconBack').style.opacity="1"
}