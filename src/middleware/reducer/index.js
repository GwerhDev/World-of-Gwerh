import { GET_TALES, GET_INFO, GET_AVENTURAS, PRELOADER_STATE, PRELOADER} from '../../misc/consts';

const initialState = {
    tales: [],
    detail: {},
    aventuras: [],
    preloader: true,
    preloaderState: 10,

}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
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
        case GET_AVENTURAS:
            return {
                ...state,
                aventuras: action.payload
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
        default:
            return {...state}
    }
}