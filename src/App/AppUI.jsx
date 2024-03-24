import React from 'react';
import {TodoCounter} from '../Counter';
import { TodoSearcher } from '../Searcher';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { ItemLoading } from '../ItemLoading';
import { ItemError} from '../ItemError';
import { CreateButtonTodo } from '../CreateButton';
import { ItemForm } from '../ItemForm';
import { Modal } from '../Modal';

import {Context} from '../Context';


function AppUI(){
  const {
    loading, 
    error, 
    searchedTodos, 
    completarTarea, 
    deleteTodo,
    openModal,
  } = React.useContext(Context)
  
  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearcher/>  
      <TodoList>
        {loading && <ItemLoading/>}
        {error && <ItemError/>}
        {searchedTodos.map((searched) => (
        <TodoItem 
          key={searched.text} 
          text={searched.text} 
          completed={searched.completed}
          onComplete = {
            () => completarTarea(searched.text)
          }
          onDelete = {
            () => deleteTodo(searched.text)
          }
        />
        ))}
      </TodoList>
    <CreateButtonTodo/>
    {openModal && (
      <Modal>
        <ItemForm/>
      </Modal>
    )}
  </React.Fragment>
  )
}

export {AppUI};


/* 
const defaultTodos = [
  {text:'Configurar Ubuntu Terminal con ZSH', completed:false},
  {text: 'Jugar Con Liz Saray', completed:false},
  {text:'Estilar la aplicacion TODO con CSS.', completed:true},
  {text:'Estilar la aplicacion TODO con CSS, Ya vamos a mitad de camino gracias a Dios.', completed:true},
  {text: 'Echar la ', completed:true}
];*/
