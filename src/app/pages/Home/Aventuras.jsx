import React, { useState } from 'react';
import s from './css/Aventuras.module.css'
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ErrorAventuras from '../../components/utils/Errors/ErrorAventuras';

const Aventuras = () => {
    const adventures = useSelector(state => state.adventures)
    const [url, setUrl] = useState('')

    return (
        <div className='div_av'>    
            <div>
                <p>Aventuras</p>
                <><ul >
                    {
                    adventures? 
                    (
                        adventures.map(e =>{
                            return(
                            e.name==='Ainulindalë'?
                            <li key={e.id}>
                                <a href={e.url} target='_blank' rel='noreferrer'>
                                    <button className={s.btn}
                                        onMouseEnter={()=>setUrl("sound/btn-hover.mp3")}
                                        onClick={()=>{return (
                                            setUrl("sound/btn.mp3")
                                        )}}
                                            >
                                        {e.name} 
                                    </button>
                                </a>
                            </li>
                            :
                            <li key={e.id}>
                            <Link to={e.url}>
                                <button className={s.btn}
                                    onMouseEnter={()=>setUrl("sound/btn-hover.mp3")}
                                    onClick={()=>{return (
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
                        <button className={s.out} onClick={()=>
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
