import React from 'react';
import { Context } from '../Context';
import './styles.css';

function ItemForm(){
    const {setOpenModal,
        agregarTarea
    } = React.useContext(Context);

    const onSubmit = (event) => {
        event.preventDefault();
        agregarTarea(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

return (
    <form onSubmit={newTodoValue !== '' ? onSubmit : null}>
        <label>Agrega un nuevo ToDo</label>
        <textarea id='textarea' 
        placeholder="Escribe un ToDo ..." 
        value={newTodoValue}
        onChange={onChange}
        />
        <div className='itemform-buttons-container'>
            <button type='button' className='itemform-cancel--button'
            onClick={onCancel}
            >Cancelar</button>
            <button type='submit' className='itemform-add--button'>Agregar</button>
        </div>
    </form>
)
}

export {ItemForm};