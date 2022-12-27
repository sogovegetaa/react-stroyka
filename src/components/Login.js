import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth){
          history.push('/')
        }
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          className='login__logo'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Вход</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Пароль</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button 
            className='login__signInButton'
            type='submit'
            onClick={signIn}
          >Войти</button>
        </form>
        <p>
        Регистрируясь, вы соглашаетесь с условиями использования и продажи Stroyka. Пожалуйста, ознакомьтесь с нашим уведомлением о конфиденциальности, нашим уведомлением о файлах cookie и нашей рекламой, основанной на .
        </p>
        <button onClick={register} className='login__registerButton'>Создать Аккаунт Stroyka</button>
      </div>
    </div>
  )
}

export default Login;
