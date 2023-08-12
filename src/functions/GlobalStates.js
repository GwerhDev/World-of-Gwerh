import { useDispatch } from 'react-redux';
import { getAdventures, preloader, preloaderState } from '../middleware/redux/actions';
import { useEffect } from 'react';
import { PreloaderStates } from './PreloaderStates';

export function GlobalStates(e) {
    const dispatch = useDispatch()
    return useEffect(()=>{
        PreloaderStates(e)
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
            getAdventures()
    )}, [dispatch, e])
}
