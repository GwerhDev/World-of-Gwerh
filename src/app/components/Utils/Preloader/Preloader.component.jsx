import React from 'react';
import s from './Preloader.module.css';
import { useSelector } from 'react-redux';

const Preloader = (params) => {
    const {img} = params
    const preloaderState = useSelector(state=>state.preloaderState)
    return (
        <div className='Preloader'>
            <div className={s.div_title}>
                <img className={s.title} src={img} alt="" />
            </div>
            <progress className={s.progress} id="onload" max="100" value={preloaderState}></progress>
        </div>
    )
}
export default Preloader