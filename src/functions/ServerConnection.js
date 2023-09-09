import { useDispatch } from 'react-redux';
import { preloader, preloaderState, serverConnection } from '../middleware/redux/actions';
import { useEffect } from 'react';
import { PreloaderStates } from './PreloaderStates';
import { useSelector } from 'react-redux';

export function ServerConnection(e) {
    const dispatch = useDispatch();
    const server = useSelector(state => state.server);

    useEffect(()=>{
        dispatch(serverConnection());
    },[dispatch]);

    useEffect(()=>{
        PreloaderStates(e)
        window.onload = setTimeout(() => {
            return (
                dispatch(preloaderState(50))
            )
        }, 1500);

        setTimeout(() => {
            return (
                dispatch(preloaderState(100))
            )
        }, 2000);
        
        setTimeout(() =>  {
            return (
                dispatch(preloader(!server?.status))
            )
        }, 4000);
       
    }, [dispatch, e, server])
}
