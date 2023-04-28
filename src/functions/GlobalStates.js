import { useDispatch } from 'react-redux';
import { getAventuras, preloader, preloaderState } from '../middleware/actions';
import { useEffect } from 'react';
import { PreloaderStates } from './PreloaderStates';

export function GlobalStates(params) {
    const dispatch = useDispatch()
    return useEffect(()=>{
        PreloaderStates(params)
        window.onload = setTimeout(() =>
        dispatch(
            preloaderState(50),
            ), 1500)
        setTimeout(() =>
        dispatch(
            preloaderState(100), 
            ), 2000)
        setTimeout(() =>
        dispatch(
            preloader(false), 
            ), 4000)
        dispatch(
            getAventuras()
    )}, [dispatch, params])
}
