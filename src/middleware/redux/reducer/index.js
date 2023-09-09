import { ENTER } from '../../../app/components/Utils/Constants/const';
import { GET_TALES, GET_ACCOUNT, GET_ADVENTURES, PRELOADER_STATE, PRELOADER, SET_PAGE, LOGIN, SOUND_MUSIC, SHOW_MENU, SOUND_ALERT, SOUND_MUSIC_VOLUME, SOUND_BUTTONS, SOUND_BUTTONS_VOLUME, SET_CHARACTER, SERVER_CONNECTION, SHOW_AGAIN_SOUND_ALERT } from '../../misc/consts';
import { messages } from '../../misc/messages';

const showAgainSoundAlert = localStorage.getItem('showAgainSoundAlert');

const initialState = {
    tales: [],
    detail: {},
    adventures: [],
    preloader: true,
    preloaderState: 10,
    currentPage: ENTER,
    currentCharacter: {},
    server: {
        status: false,
        message: messages.server.callingServer
    },
    user: {
        logged: false,
    },
    sound: {
        activated: false,
        music: {
            playState: false,
            src: '',
            volume: 100,
        },
        buttons: {
            playState: false,
            src: '',
            volume: 100,
        },
        environment: {
            playState: false,
            src: '',
            volume: 100,
        },
    },
    menu: {
        showMenu: !JSON.parse(showAgainSoundAlert),
        typeMenu: ''
    },
    soundAlert: {
        showSoundAlert: JSON.parse(showAgainSoundAlert)?? true
    }
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case SHOW_AGAIN_SOUND_ALERT:
            return {
                ...state
            }
        case SERVER_CONNECTION:
            return {
                ...state,
                server: action.payload
            }
        case SET_CHARACTER:
            return {
                ...state,
                currentCharacter: action.payload
            }
        case SOUND_ALERT: 
            return {
                ...state,
                soundAlert: action.payload
            }
        case SOUND_MUSIC:
            return {
                ...state,
                sound: {
                    ...state.sound,
                    music: {
                        ...state.sound.music,
                        playState: action.payload.playState,
                        src: action.payload.src,
                    }
                }
            }
        case SOUND_MUSIC_VOLUME:
            return {
                ...state,
                sound: {
                    ...state.sound,
                    music: {
                        ...state.sound.music,
                        volume: action.payload
                    }
                }
            }
        case SOUND_BUTTONS:
            return {
                ...state,
                sound: {
                    ...state.sound,
                    buttons: {
                        ...state.sound.buttons,
                        playState: action.payload.playState,
                        src: action.payload.src,
                    }
                }
            }
        case SOUND_BUTTONS_VOLUME:
            return {
                ...state,
                sound: {
                    ...state.sound,
                    buttons: {
                        ...state.sound.buttons,
                        volume: action.payload
                    }
                }
            }
        case SHOW_MENU:
            return {
                ...state,
                menu: action.payload
            }
        case PRELOADER:
            return {
                ...state,
                preloader: action.payload,
            }
        case PRELOADER_STATE:
            return {
                ...state,
                preloaderState: action.payload
            }
        case GET_ADVENTURES:
            return {
                ...state,
                adventures: action.payload
            }
        case GET_TALES:
            return {
                ...state,
                tales: action.payload.reverse()
            }
        case GET_ACCOUNT:
            return {
                ...state,
                detail: action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case LOGIN: 
            return {
                ...state,
                user: action.payload
            }
        default:
            return {...state}
    }
}