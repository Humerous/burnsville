import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import { register } from '../actions/userActions';
import './account-auth.css';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const requestedRedirect = new URLSearchParams(location.search).get('redirect') || '/';
  const redirect = requestedRedirect.startsWith('/') && !requestedRedirect.startsWith('//') ? requestedRedirect : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setMessage(null);
      dispatch(register(name.trim(), email.trim(), password));
    }
  };

  return (
    <section
      className='burnsville-account-auth burnsville-account-auth--register'
      aria-labelledby='burnsville-register-title'
    >
      <Meta
        title='Register | Burnsville'
        description='Create a Burnsville account.'
      />

      <div className='burnsville-account-auth__inner'>
        <aside className='burnsville-account-auth__introduction'>
          <p className='burnsville-account-auth__eyebrow'>Create an account</p>
          <h2>Join Burnsville</h2>
          <p>Create an account to keep your details and orders together.</p>
          <div className='burnsville-account-auth__accent' aria-hidden='true' />
        </aside>

        <div className='burnsville-account-auth__panel'>
          <header>
            <p className='burnsville-account-auth__eyebrow'>New account</p>
            <h1 id='burnsville-register-title'>Register</h1>
          </header>

          {message && <div id='register-error'><Message variant='danger'>{message}</Message></div>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}

          <form onSubmit={submitHandler} aria-busy={Boolean(loading)}>
            <div className='burnsville-account-auth__field'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                type='text'
                autoComplete='name' required maxLength={100}
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='burnsville-account-auth__field'>
              <label htmlFor='email'>Email address</label>
              <input
                id='email'
                type='email'
                autoComplete='email' required maxLength={254}
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='burnsville-account-auth__field'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                autoComplete='new-password' required minLength={8} maxLength={128}
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='burnsville-account-auth__field'>
              <label htmlFor='confirmPassword'>Confirm password</label>
              <input
                id='confirmPassword'
                aria-invalid={Boolean(message)}
                aria-describedby={message ? 'register-error' : undefined}
                type='password'
                autoComplete='new-password' required minLength={8} maxLength={128}
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type='submit' disabled={loading}>{loading ? 'Creating account…' : 'Create account'}</button>
          </form>

          <p className='burnsville-account-auth__switch'>
            Have an account?{' '}
            <Link to={`/login?redirect=${encodeURIComponent(redirect)}`}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

RegisterScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default RegisterScreen;
