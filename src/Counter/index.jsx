import React, { useEffect, useState } from 'react';
import {Context} from '../Context';
import './styles.css'

function TodoCounter(){

  const {completedTodos, 
    totalTodos
  } = React.useContext(Context);
    
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    if (completedTodos === 0 && totalTodos === 0) {
      setSubtitle('¡Agrega tu primer ToDo!');
    } else if (completedTodos === totalTodos) {
      setSubtitle('Tareas completadas, Felicidades!');
    } else {
      setSubtitle(`Se han completado <span class="Todo-counters">${completedTodos}</span> de <span class="Todo-counters">${totalTodos}</span> TODOs`);
    }
  }, [completedTodos, totalTodos]);

  return (
    <span>
      <h1 id="title">To-Do's Tool</h1>
      <h2 id="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }}></h2>
    </span>
  )
}

export {TodoCounter};