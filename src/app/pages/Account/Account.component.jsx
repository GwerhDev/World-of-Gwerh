import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setMenuStates } from '../../../middleware/redux/actions';
import { ACCOUNT } from '../../components/Utils/Constants/const';

export const Account = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuStates(true, ACCOUNT))
    dispatch(setCurrentPage(ACCOUNT))
  },[dispatch])
  return (
    <div>
    </div>
  )
}
