import { GET_TALES, GET_INFO, GET_ADVENTURES, PRELOADER_STATE, PRELOADER, SET_PAGE } from '../../misc/consts';
import { URL_API } from '../../../config/config';

export function getTales() {
    return function(dispatch) {
        fetch(`${URL_API}/wog/tales`)
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type: GET_TALES,
                payload: data,
            })
        })
        .catch(e => console.error(e))
    }
}

export function getAdventures() {
    return function(dispatch) {
        fetch(`${URL_API}/wog/adventures`)
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type: GET_ADVENTURES,
                payload: data,
            })
        })
        .catch(e => console.error(e))
    }
}

export function getInfo(id) { 
    return function(dispatch){
        fetch(`${URL_API}/wog/${id}`)
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type: GET_INFO,
                payload: data
            })
        })
        .catch(e => console.error(e))
    }

}

export function preloader(e){
    return {
        type: PRELOADER,
        payload: e
    }
}
export function preloaderState(e){
    return {
        type: PRELOADER_STATE,
        payload: e
    }
}

export function setCurrentPage(e) {
    return {
        type: SET_PAGE,
        payload: e
    }
}