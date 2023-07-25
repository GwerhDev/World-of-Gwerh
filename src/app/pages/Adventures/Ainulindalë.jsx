import React, { useState, /*useEffect*/ } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, /* useSelector*/ } from 'react-redux';
import logoAinu from '../../../design/logo-ainulindalë.png'
import logoLaruinaTV from '../../../design/laruinatv.png'
import { ainulindalëEpisodios } from '../../../misc/consts';
import '../..//player.css';

const Ainulindalë = () => {   
    document.querySelector('body').style.backgroundImage= ``
    document.querySelector('body').style.backgroundColor= `#000000`
    document.querySelector('body').style.backgroundPosition="center"
    document.querySelector('body').style.overflowX= 'hidden'
    document.querySelector('body').style.width= '100vw'

    // const numCaps = ainulindalëEpisodios.length
    const k = (-100/98)-(100/7)
    const [i, setPosi] = useState(k)
    const [n, setPosn] = useState(-k)
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    // const [url, setUrl] = useState('')
    const [descripcion, setDescripcion] = useState('')
    // const [img, setCapImg] = useState('')
    const [posNav, setPosNav] = useState()

    window.onscroll = function() {navBack()};

    function navBack() {
        if (window.pageYOffset>= 100) {
            setPosNav((window.scrollY-100)/300)
            console.log(posNav)
            document.querySelector('.navCont').style.backgroundColor=`rgba(0, 0, 0, ${posNav})`
            document.querySelector('.navCont').style.transitionDuration='0.2'
        }
        else{
            document.querySelector('.navCont').style.background="linear-gradient(to bottom, #010101cf, rgba(255, 255, 255, 0))"
            document.querySelector('.navCont').style.transitionDuration='0.2'
        }
    }
    
    return (
        <div className='ainuBody'>
            <div className='navCont'>
                
                <div className='ruinaLogoCont'>
                    <img className='ruinaLogo' src={logoLaruinaTV} alt="La Ruina TV" width='120' />
                </div>
                <ul className='ruinaNavMenu'>
                    <li>Novedades</li>
                    <li>La Ruina TV</li>
                    <li>Debate</li>
                    <li>Colaborar</li>  
                    <Link to='/'> <button className='ruinaSalirBtn'>Salir</button></Link>
                </ul>
            </div>
            <div className='visor'>
                <div className='visorCanvas' >
                    <div className='ainuInfoEpisodio'>
                        <img src={logoAinu} alt='' className='ainuLogo' />
                    </div>
                    <div className='ainuIMGEpisodio'>
                        
                    </div>
                </div>
            </div>
            <div className='ainuDescripcion'>
                La Ruina TV presenta "Ainulindalë", una serie original basada en los libros de J.R.R. Tolkien que forman parte del "Legendarium".
            </div>
            <div className='ainuDescripcionCap'>
                <div className='ainuContBtn'>
                    <button className='ainuBtnCurrentEpisodio'>{code}</button>
                </div>
                <div className='ainuCodeName'>
                    {code}: {name}<br></br>
                    
                </div>
                <div className='ainuDescripcionCurrentCap'>
                    {descripcion}
                </div>
            </div>
            <div className='ainuContTemporadas'>
                <div className='ainuTemporadas'>
                    <div className='ainuContNavTemporadas'>
                    </div>
                    <nav className='ainuMenuTemporadas'>
                        <ul className='ainuListaTemporadas'>
                            <button className='ainuBtnTemporadas'><li><p>Temporada 1</p></li>
                            {/* <li><p>Temporada 2</p></li> */}
                            {/* <li><p>Temporada 3</p></li> */}
                            </button>
                        </ul>
                    </nav>
                    <div className='ainuContEpisodios'>
                        <button 
                        className='ainuSliderPrevBtn' 
                        onClick={(e)=>{
                            setPosi(i-k)
                            setPosn(n-k)
                            if (n>=0 && i>-100-k){
                            return (
                                console.log(i),n,                            
                                document.querySelector('.ainuListaEpisodios').style.transform=`translate(${(n)}%`,
                                document.querySelector('.ainuListaEpisodios').style.transitionDuration='1s',
                                document.querySelector('.ainuSliderPrevBtn').style.display="none")}
                            else{
                                return (
                                    console.log(i,n),                            
                                    document.querySelector('.ainuListaEpisodios').style.transform=`translate(${(n)}%`,
                                    document.querySelector('.ainuListaEpisodios').style.transitionDuration='1s',
                                    document.querySelector('.ainuSliderPostBtn').style.display='block'
                        )}
                    
                    }
                                
                        }                       
                        >
                            a
                        </button>
                        <button 
                        className='ainuSliderPostBtn'
                        onClick={(e)=>{
                            setPosi(i+k)
                            setPosn(n+k)
                            if (i<0 && i>-100-k){
                            return (
                                console.log(i,n),                            
                                document.querySelector('.ainuListaEpisodios').style.transform=`translate(${i}%)`,
                                document.querySelector('.ainuListaEpisodios').style.transitionDuration='1s',
                                document.querySelector('.ainuSliderPrevBtn').style.display="block")}
                            if (i<=-100-k){
                            return (
                                console.log(i,n),                            
                                document.querySelector('.ainuListaEpisodios').style.transform=`translate(${i}%)`,
                                document.querySelector('.ainuListaEpisodios').style.transitionDuration='1s',
                                document.querySelector('.ainuSliderPostBtn').style.display="none")}
                            }
                        } 
                        >
                            b
                        </button>
                        <div className='ainuSliderEpisodios'>
                            <ul className='ainuListaEpisodios'>
                                {ainulindalëEpisodios.map(e=>{
                                    return(
                                        <li value={e.id}>
                                            <button
                                            className='ainuEpisodios'
                                            value={e.code}
                                            name={e.name}
                                            code={e.code}
                                            img={e.img}
                                            onClick={(e)=>{return(
                                                setCode(e.target.value),
                                                console.log({code}),
                                                setName(e.target.name),
                                                console.log({name}),
                                                // setCapImg(e.target.img),
                                                // console.log(e.target.img),
                                                // setUrl(e.target.url),
                                                // console.log(e.target.url),
                                                setDescripcion(e.target.descripcion),
                                                console.log(e.target.descripcion),
                                                document.querySelector('.ainuDescripcionCap').style.display='block',
                                                window.scrollTo(0, 0)
                                            )}}
                                            >
                                                {e.code}: {e.name}
                                            </button>
                                        </li>

                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ainuContFooter'>
                <div className='ainuFooter'>

                </div>
            </div>
        </div>
    )
}
export default Ainulindalë