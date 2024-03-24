import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const Context = React.createContext();

function Provider({children}){
    const {
        item: todos, 
        guardarItems: guardarTodos, 
        loading, error} = useLocalStorage('TASKS_V1', []);
    const [searchValue, setsearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText)
    })

    const agregarTarea = (text) => {
        const newTodos  = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        guardarTodos(newTodos);
    }
    
    const completarTarea = (text) => {
        const nuevosTodos = [...todos];
        const todoIndex = nuevosTodos.findIndex(
                (todo) => todo.text === text
            )
            nuevosTodos[todoIndex].completed = !nuevosTodos[todoIndex].completed;
            console.log(nuevosTodos[todoIndex])
            guardarTodos(nuevosTodos);
    }
    
    const deleteTodo = (text) => {
    const nuevosTodos = [...todos];
    const todoIndex = nuevosTodos.findIndex(
            (todo) => todo.text === text
        )
        nuevosTodos.splice(todoIndex,1);
        console.log(nuevosTodos[todoIndex])
        guardarTodos(nuevosTodos);
    }
    return (
        <Context.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setsearchValue,
            searchedTodos,
            completarTarea,
            deleteTodo,
            openModal,
            setOpenModal,
            agregarTarea
        }}> 
            {children}
        </Context.Provider>
    );
}



export {Context, Provider};