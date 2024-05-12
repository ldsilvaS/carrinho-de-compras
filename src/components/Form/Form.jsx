import { FaSearch} from "react-icons/fa";
import { FormContainer } from "./style";
import { useState, useContext } from "react";
import api from "../../api/api";
import AppContext from "../../context/AppContext";

function Form() {
    
    const [input, setInput] = useState("");
    const {setItems, setLoading} = useContext(AppContext)


    const heandleSearch = async (e) => {
        e.preventDefault();

        setLoading(true);
        const items = await api(input);
        setItems(items)
        setLoading(false);

        
        
        setTimeout(() => {
            setInput("");
        }, 1000)
        


    }

    return(
        <>
            <FormContainer onSubmit={heandleSearch}>
                <input 
                    type="text" 
                    className="search"
                    value={input} 
                    placeholder="Informe o produto"
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
                <button type="submit"><FaSearch/></button>
            </FormContainer>
                
            
        </>
    )
}

export default Form