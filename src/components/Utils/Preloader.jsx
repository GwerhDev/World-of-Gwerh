import React from 'react';
import estilos from './css/Preloader.module.css';
import { useSelector } from 'react-redux';

const Preloader = (params) => {
    const {img} = params
    const preloaderState = useSelector(state=>state.preloaderState)
    return (
        <div className='Preloader'>
            <div className={estilos.div_title}>
                <img className={estilos.title} src={img} alt="" />
            </div>
            <progress className={estilos.progress} id="onload" max="100" value={preloaderState}></progress>
        </div>
    )
}
export default Preloader