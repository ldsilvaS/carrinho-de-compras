import { FaSearch} from "react-icons/fa";
import { FormContainer } from "./style";
import { useState, useContext } from "react";
import api from "../../api/api";
import AppContext from "../../context/AppContext";

function Form() {
    
    // Estado do input
    const [input, setInput] = useState("");

    // Context
    const {setItems, setLoading} = useContext(AppContext)


    const heandleSearch = async (e) => {
        e.preventDefault();

        setLoading(true);  // Aciono o loading da página

        const items = await api(input); // Faço a utilização da api para buscar os items.     OBS: Api é um hook feito.
        setItems(items) // Setando o item, com os valores recebido da api

        setLoading(false); // Aciono o loading, retirando ele pois os items já carregaram

        
        
        setTimeout(() => {
            setInput(""); // Limpando o input
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