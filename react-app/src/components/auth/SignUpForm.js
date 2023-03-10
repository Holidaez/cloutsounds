import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {

    e.preventDefault();
    const error = []
    if (password != repeatPassword) {
      error.push('Password Does Not match')
    }
    if (username.length < 5) {
      error.push('Username must be at least 5 characters')
    }
    if (password.length < 6) {
      error.push('Password must be at least 6 characters')
    }
    if(error.length === 0 && password === repeatPassword){
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }else {
      setErrors(error)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='signup-form-container'>
      <form onSubmit={onSignUp} id='signup-form'>
        <div className='errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>Username</div>
        <input
          id='signup-username'
          type='text'
          name='username'
          placeholder='Username'
          onChange={updateUsername}
          value={username}
          required={true}
          maxLength={20}
        ></input>

        <div>Email</div>
        <input
          id='signup-email'
          type='email'
          name='email'
          placeholder='Email'
          onChange={updateEmail}
          value={email}
          required={true}
          maxLength={50}
        ></input>
        <div>Password</div>
        <input
          id='signup-password'
          type='password'
          name='password'
          placeholder='Password'
          onChange={updatePassword}
          value={password}
          required={true}
        ></input>
        <div>Repeat Password</div>
        <input
          id='signup-password'
          type='password'
          name='repeat_password'
          placeholder='Repeat Password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
        <button type='submit' id='signup-submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
