import React, { useEffect } from 'react';
import logo from '../../../assets/images/png/WoG-Icon.png';
import Preloader from '../../components/Utils/Preloader/Preloader.component';
import { useDispatch } from 'react-redux';
import { authentication } from '../../../middleware/redux/actions';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');
  localStorage.setItem('usertoken', token);

  useEffect(() => {
    dispatch(authentication(token, history))
  }, [dispatch, token, history])

  return (
    <div>
      <Preloader img={logo}/>
    </div>
  )
}
