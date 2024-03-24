import React from 'react';
import './styles.css';


function TodoItem(props){

  return (
    <div className={`Todo-item-container ${ props.completed && 'approved'} `}>
      <li className='Todo-item'> 
        <span className='icon' 
        onClick={props.onComplete}
        >
          <img src="completar.png"  alt='check'/>
        </span>
        <p>{props.text}</p>
        <span className='icon'
          onClick={props.onDelete}
        >
          <img src="eliminar.png"  alt='delete'/>
        </span>
      </li>
    </div>

    )
  
  }

export {TodoItem};