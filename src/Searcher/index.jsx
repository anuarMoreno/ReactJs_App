import React from 'react';
import {Context} from '../Context'
import './styles.css';

function TodoSearcher(){

  const {searchValue, 
    setsearchValue
  } = React.useContext(Context);
  
  return (
      <input className='todo-searcher' placeholder="Buscando TODOs"
        value={searchValue}  
        onChange={(event) => {
          setsearchValue(event.target.value)
        }}
      />
  ) 
  }

export {TodoSearcher};