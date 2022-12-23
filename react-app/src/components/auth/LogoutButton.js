import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  useEffect( async () => {
      await dispatch(logout());

  },[])

  return <h1>Logging Out</h1>;
};

export default LogoutButton;
