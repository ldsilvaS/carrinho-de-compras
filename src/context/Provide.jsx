import { useState } from "react";
import AppContext from "./AppContext";


function Provider({children}) {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    // é orbigatório a criação do value.

    const value = {      
        items,
        setItems,
        loading, 
        setLoading
    }


    return (  
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;