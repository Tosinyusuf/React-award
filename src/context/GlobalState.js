import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    bag : localStorage.getItem('bag') ? JSON.parse(localStorage.getItem('bag')) : [],
   
};

export  const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState);


    useEffect(() => {
        localStorage.setItem('bag', JSON.stringify(state.bag)) 
    }, [state]);

    const addProductsToBag = (product) => {
        dispatch({ type: "ADD_PRODUCT_TO_BAG", payload: product})
    };
    const removeProductsfromBag = (id) => {
        dispatch({ type: "REMOVE_PRODUCT_FROM_BAG", payload: id})
    };

    return (
        <GlobalContext.Provider value={{bag: state.bag, addProductsToBag, removeProductsfromBag }}>
            {props.children}
        </GlobalContext.Provider>
    )
};
