import s from './Errors.module.css'

const ErrorAdventures = () => {
    return(
    <div className={s.err}><button className={s.btn} disabled={true}>Not connected</button></div>
)}

export default ErrorAdventures