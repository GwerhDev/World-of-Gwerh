
export async function PreloaderStates(params){
  const a = params
  const p = await document.querySelector(a)
  p?.addEventListener("load", function() {
    console.log("Todos los recursos terminaron de cargar!");
  })
};