import { useState } from "react";
import AppContext from "./AppContext";


function Provider({children}) {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState('')
    const [divVisible, setDivVisible] = useState(false);
    // é orbigatório a criação do value.

    

    const value = {      
        items,
        setItems,
        loading, 
        setLoading,
        cartItems, 
        setCartItems,
        totalPrice, 
        setTotalPrice,
        divVisible, 
        setDivVisible
    }


    return (  
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;