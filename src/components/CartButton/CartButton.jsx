import { useContext } from "react";
import { ButtonContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import AppContext from "../../context/AppContext";


function CartButton() {
    const {divVisible, setDivVisible, cartItems} = useContext(AppContext)

    const heandleShow = () => {
        setDivVisible(!divVisible)
    }

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