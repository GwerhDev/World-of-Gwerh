import React from 'react';
import s from './Selection.module.css'

export const Selection = () => {
  return (
    <main className={s.selectionSection}>
      <section className={s.charactersSection}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section className={s.enterSection}>
        <ul>
          <li>
            <button>
              ENTRAR AL MUNDO
            </button>
          </li>
        </ul>
      </section>
    </main>
  )
}
