import { useContext } from "react";
import { ButtonContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import AppContext from "../../context/AppContext";


function CartButton() {
    // Context
    const {divVisible, setDivVisible, cartItems} = useContext(AppContext)

    const heandleShow = () => {
        setDivVisible(!divVisible) // Está variável esta relacionada á aparição da div de carrinho ou não. Ela está sendo utilizada em outro component, por isso é um context.
    }

    // o cartItems.lenght informa a quatidade de items no carrinho.

    return (
        <>
            <ButtonContainer type="button" onClick={heandleShow}>
                <FaShoppingCart/>
                {cartItems.length > 0 && <span className="count">{cartItems.length}</span>}
            </ButtonContainer>
        </> 
    );
}

export default CartButton;