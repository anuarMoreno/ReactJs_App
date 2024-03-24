import './styles.css';

function TodoList({children}){
    return (
      <div className='Todo-list-container'>
        <div className='Todo-list-container-inner'>
          <ul className='Todo-list'> 
            {children}
          </ul>
        </div>
      </div>
 
    )
  }

export {TodoList};