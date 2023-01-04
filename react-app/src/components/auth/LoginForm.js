import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }
  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io','password'))
    if(data) {
      setErrors(data)
    }
  }
  return (
    <div id='login-form-container'>
      <form onSubmit={onLogin} id='login-form'>
        <div className='errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>Email</div>
          <input
            id='form-email'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        <div>Password</div>
          <input
            id='form-password'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <div id='login-buttons'>
          <button type='submit' id='login-form-submit'>Login</button>
          <button id='demo-login' onClick={demoLogin}>Demo User</button>
          </div>
      </form>
    </div>
  );
};

export default LoginForm;
