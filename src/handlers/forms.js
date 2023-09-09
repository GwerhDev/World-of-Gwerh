import { innerLogin, setShowAgainSoundALert } from "../middleware/redux/actions";

export function handleInnerLogin(username, password, history, dispatch){
  dispatch(innerLogin(username, password, history));
};

export function handleShowAgainSoundAlert(showAgain, dispatch) {
  dispatch(setShowAgainSoundALert(showAgain))
}