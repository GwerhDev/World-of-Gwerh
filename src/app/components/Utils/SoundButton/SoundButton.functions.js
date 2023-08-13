import { $d } from "../../../../functions/DocumentCSS";

export function ButtonFunction(soundBtn) {
  $d('.soundBtn').style.backgroundImage = `url(${soundBtn})`
}