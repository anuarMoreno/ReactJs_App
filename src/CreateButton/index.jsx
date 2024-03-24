import React from 'react';
import {Context} from '../Context';
import './styles.css';

function CreateButtonTodo(){
    const {openModal, 
      setOpenModal} = React.useContext(Context);
      
    return (
        <button className='Create-todo-button' 
        onClick={() => setOpenModal(!openModal)}
        >
          <img src='crear.png' alt='Create' className='icon-create'/>
        </button>

    )
  
  }

export {CreateButtonTodo};