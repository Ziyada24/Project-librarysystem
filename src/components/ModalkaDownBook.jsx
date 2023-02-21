import React from 'react';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import '../styles/ModalkaDownBook.css'
import PersonPage from '../components/pages/PersonPage'
import book from '../img/book.png'

const ModalkaDownBook = () => {
    const navigate = useNavigate();

  return (
    <>
    <PersonPage/>
    <div className='fon-m'>
    <div className="download-form">
      <CloseIcon className='close2' style={{position: 'relative', left: '890px', top: '10px'}} onClick={() => navigate("/person")}/>
      <div className='card-top-fon'>
      <img src={book} alt='book' className='book-down'/>
      <button className='save-btn'>Сохранить</button>
      <button className='delete-btn'>Удалить</button>
      </div>
      <div className='inputs'>
      <div className='div-1'>
        <h2 className='title-name'>Название</h2>
        <input type="text" className='inp-1' />
      </div>
      <div className='div-2'>
        <h2 className='title-name'>Описание</h2>
        <input type="text" className='inp-1' />
      </div>
      <div className='div-3'>
        <h2 className='title-name'>Автор</h2>
        <input type="text" className='inp-1' />
      </div>
      <div className='div-4'>
        <h2 className='title-name'>Жанр</h2>
        <input type="text" className='inp-1' />
      </div>
      <div className='div-5'>
        <h2 className='title-name'>Возрастное ограничение</h2>
        <input type="text" className='inp-1' />
      </div>
      <div className='div-6'>
        <h2 className='title-name'>Дата издание</h2>
        <input type="text" className='inp-1' />
      </div>
      <div className='div-7'>
        <h2 className='title-name'>Ссылка книги</h2>
        <input type="text" className='inp-1' />
      </div>
      </div>
        <button className='btn-download'>Загрузить</button>
     </div>
     </div>
    </>
  )
}

export default ModalkaDownBook