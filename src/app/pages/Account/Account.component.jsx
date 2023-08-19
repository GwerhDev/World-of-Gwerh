import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setMenuStates } from '../../../middleware/redux/actions';
import { SELECTION } from '../../components/Utils/Constants/const';
import { Selection } from '../../components/Selection/Selection.component';

export const Account = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuStates(true, SELECTION))
    dispatch(setCurrentPage(SELECTION))
  },[dispatch])
  
  return (
    <div>
      <Selection />
    </div>
  )
}
