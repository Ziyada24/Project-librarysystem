import React, { useState, useContext, useEffect } from 'react';
import "../../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { authContext, useAuth } from '../contexts/authContext';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../Navbar/Navbar';
import SlickSlider from '../SimpleSlider/SlickSlider'


const LoginPage = () => {
    const navigate = useNavigate();

    const {handleLogin } = useContext(authContext);
    const [logInpValue, setLogInpValue] = useState("");
    const [passwordInpValue, setPasswordInpValue] = useState("");

    function snackbar_error() {
      var x = document.getElementById("snackbar_error");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    function loginUser() {
      if(!logInpValue.trim() || !passwordInpValue.trim()){
        snackbar_error()
        return;
      };
      let formData = new FormData();
      formData.append('email', logInpValue);
      formData.append('password', passwordInpValue);
      handleLogin(formData, logInpValue, navigate);
    };

   
  return (
    <>
    <Navbar />
    <SlickSlider/>
    <div className='fon'>
    <div className="login-form">
      <CloseIcon className='close' style={{left: '368px', top: '8px'}} onClick={() => navigate("/")}/>
        <h2 className='title-vhod'>Вход</h2>
        <p className='title-email'>Почта или телефон:</p>
        <input type="text" className='inp-email-voiti' placeholder='Введите почту' value={logInpValue} onChange={e => setLogInpValue(e.target.value)}/>
        <p className='title-password-voiti'>Пароль:</p>
        <input type="text" className='inp-password-voiti' placeholder='Введите пароль' value={passwordInpValue} onChange={e => setPasswordInpValue(e.target.value)}/>
        <a className='forgot-pass' href="/rest">Забыли пароль?</a>
        <button className='voiti-btn'>Войти</button>
        <p className='title-qu'>Еще не зарегистрированы?</p>
        <button className='register-btn' onClick={() => navigate("/register")}>Регистрация</button>
        <div id="snackbar">Вы успешно вошли в систему!</div>
        <div id="snackbar_error">Неправильные данные!</div>
     </div>
     </div>
     </>
  )
}

export default LoginPage