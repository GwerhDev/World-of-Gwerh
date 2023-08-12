import React from 'react';
import s from './Logo.module.css';
import logo from '../../../../assets/images/png/title.png';
import lotr from '../../../../assets/images/png/lotr-ring.png';


export const Logo = () => {
  return (
    <div className={s.logoContainer}>
      <div className={s.titleContainer}>
        <img className={s.title} src={logo} alt="" />
      </div>
      <div className={s.lotrContainer}>
        <img className={s.lotr} src={lotr} alt="" />
      </div>
    </div>
  )
}
