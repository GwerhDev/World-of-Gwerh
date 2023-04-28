import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import estilos from './css/Aventuras.module.css'
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { preloader, preloaderState } from '../../middleware/actions';
import ErrorAventuras from '../Errors/ErrorAventuras';

const Aventuras = () => {
    const aventuras = useSelector(state => state.aventuras)
    const [url, setUrl] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='div_av'>    
            <div>
                <p>Aventuras</p>
                <><ul >
                    {
                    aventuras.length>0? 
                    (
                        aventuras.map(e =>{
                        return(
                            <li key={e.id}>
                                <Link to={e.url}>
                                    <button className={estilos.btn}
                                        onMouseEnter={()=>setUrl("sound/btn-hover.mp3")}
                                        onClick={()=>{return (
                                            dispatch(preloader(true)),
                                            dispatch(preloaderState(10)),
                                            setUrl("sound/btn.mp3")
                                        )}}
                                            >
                                        {e.name} 
                                    </button>
                                </Link>
                            </li>
                        )
                    }))
                    : (<ErrorAventuras />)
                        }
                        <li>
                        <button className={estilos.out} onClick={()=>
                            {
                                setUrl("sound/btn.mp3")
                                document.querySelector('.enter_body').style.transitionDuration="1s"
                                document.querySelector('.enter_body').style.transform="translate(0)"
                                document.querySelector('.div_av').style.transitionDuration="0.5s"
                                document.querySelector('.div_av').style.transform="translateY(-100vh)"
                                document.querySelector('.div_av').style.opacity="0"
                            }
                        } 
                            onMouseEnter={()=>setUrl("sound/btn-hover.mp3")} >Salir</button>
                        </li>
                    
                </ul></>
                
                <div className='sounds'>
                    <AudioPlayer 
                        src={url}
                        onEnded={() => setUrl('')}
                    />
                </div>
            </div>
            
            
        </div>
        
    )
}
export default Aventuras
