import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import "../../styles/Rest.css"
import CloseIcon from '@mui/icons-material/Close';
import SlickSlider from '../SimpleSlider/SlickSlider';


const RestPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <SlickSlider/>
    <div className='fon'>
    <div className="rest-form">
    <CloseIcon className='close' style={{left: '368px', top: '8px'}} onClick={() => navigate("/")}/>
    <h2 className='title-rest'>Сброс пароля</h2>
    <p className='title-emailu'>Укажите почту:</p>
    <input type="text" className='inp-emaile' placeholder='Введите'/>
    <button className='rest-btn' onClick={() => navigate("/restore")}>Отправить сообщение</button>
 </div>
 </div>
 </>
  )
}

export default RestPage