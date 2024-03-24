import React from 'react';

function useLocalStorage(itemName, initValue){

    const [item, setItem] = React.useState(initValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
 
    // LLamado a LocalStorage async
    try {
      
    } catch (error) {
      
    } 
   React.useEffect(()=> {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initValue))
          parsedItem = initValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }  

    }, 0);
  }, []);

    const guardarItems = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItem(newItems)
    }
  
    return {item, guardarItems, loading, error};
  
  }

export {useLocalStorage};