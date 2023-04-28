import Entrar from "./components/home/Entrar";
import s from './Home.module.css';
import '../styles/globals.css';
import Loading from "./components/home/loading";

export default function AppPage () {
  return (
    <div className={s.home}>
      <div className="div_home">
          <div className="opciones_body">
            <div className="aventuras_body">
                <div className="enter_body"> 
                    <Entrar />
                </div>
                {/* <Aventuras /> */}
            </div>
            {/* <Opciones /> */}
        </div> 
      </div>
    </div>
  )
}
