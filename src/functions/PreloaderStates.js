import { $d } from "./DocumentCSS";

export function PreloaderStates(e){
  !e?? $d(e).addEventListener("load", function() {
    console.log("Todos los recursos terminaron de cargar!");
  })
};