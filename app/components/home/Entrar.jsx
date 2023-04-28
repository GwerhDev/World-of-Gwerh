import React from 'react';
import logo from '../../assets/images/title.png';
import lotr from '../../assets/images/lotr-ring.png'
import estilos from './css/Entrar.module.css';
import Image from 'next/image';

const Entrar = () => {
    return (
        <div>
            <div className={estilos.div_title}>
                <Image className={estilos.title} src={logo} alt="logo" height='auto' width='500' />
            </div>
            <div className={estilos.div_lotr}>
                <Image className={estilos.lotr} src={lotr} alt="logo" height='auto' width='250' />
            </div>
                <ul>
                    <li>
                        <button 
                        className={estilos.in} 
                        // onMouseEnter={()=>setUrl(btnHover)} 
                        // onClick={()=> handlerBtnOnClick(setUrl, btnClick, 'Aventuras')}
                        >
                        Aventuras
                        </button>
                    </li>
                    <li>
                        <button 
                        className={estilos.opt} 
                        // onMouseEnter={()=>setUrl(btnHover)} 
                        // onClick={()=> handlerBtnOnClick(setUrl, btnClick, 'Opciones')}
                        >
                        Opciones
                        </button>
                    </li>
                </ul>
        </div>
    )
}

export default Entrar