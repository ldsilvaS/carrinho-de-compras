import { FaSearch} from "react-icons/fa";
import { FormContainer } from "./style";
import { useState } from "react";

function Form() {
    const [input, setInput] = useState("");

    console.log(input);


    return(
        <>
            <FormContainer>
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