import { useDispatch } from 'react-redux';
import React from 'react';
import s from './Selection.module.css'
import { setCharacter } from '../../../middleware/redux/actions';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const Selection = () => {
  const dispatch = useDispatch();
  const [selectCharacter, setSelectCharacter] = useState(false);
  const characterList = [
    {
      id: 1,
      name: 'Gwerh',
    }
  ]

  const handleCharacter = (e) => {
    dispatch(setCharacter(e));
    setSelectCharacter(true);
  }

  return (
    <main className={s.selectionSection}>
      <section className={s.charactersSection}>
        <ul className={s.myCharacterList} >
          {
            characterList.map(e => (
              <li key={e.id} onClick={() => handleCharacter(e)}>{e.name}</li>
            ))
          }
        </ul>
      </section>
      <section className={s.enterSection}>
        <ul>
          <li>
            <button disabled={!selectCharacter}>
              <Link to='/open-world'>
                ENTRAR AL MUNDO
              </Link>
            </button>
          </li>
        </ul>
      </section>
    </main>
  )
}
