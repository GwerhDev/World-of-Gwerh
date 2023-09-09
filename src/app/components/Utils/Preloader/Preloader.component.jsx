import React from 'react';
import s from './Preloader.module.css';
import { useSelector } from 'react-redux';

const Preloader = (props) => {
    const { img } = props;
    const preloaderState = useSelector(state=>state.preloaderState);
    const { message } = useSelector(state => state.server);

    return (
        <div className={s.preloaderContainer}>
            <div className={s.div_title}>
                <img className={s.title} src={img} alt="" />
            </div>
            <progress className={s.progress} id="onload" max="100" value={preloaderState}></progress>
            <span className={s.message}>{message}</span>
        </div>
    )
}
export default Preloader