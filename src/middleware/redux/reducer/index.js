import { ENTER } from '../../../app/components/Utils/Constants/const';
import { GET_TALES, GET_INFO, GET_ADVENTURES, PRELOADER_STATE, PRELOADER, SET_PAGE, LOGIN, SOUND_PLAYER, SHOW_MENU } from '../../misc/consts';

const initialState = {
    tales: [],
    detail: {},
    adventures: [],
    preloader: true,
    preloaderState: 10,
    currentPage: ENTER,
    user: {
        logged: false,
        token: ''
    },
    soundPlayer: {
        playState: false,
        src: ''
    },
    menu: {
        show: false,
        type: ''
    }
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case SOUND_PLAYER:
            return {
                ...state,
                soundPlayer: action.payload
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
        case GET_INFO:
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
                logged: action.payload
            }
        default:
            return {...state}
    }
}