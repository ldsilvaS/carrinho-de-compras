import { useContext } from "react";
import { ButtonContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import AppContext from "../../context/AppContext";


function CartButton() {
    const {divVisible, setDivVisible} = useContext(AppContext)

    const heandleShow = () => {
        setDivVisible(!divVisible)
    }

    return (
        <>
            <ButtonContainer type="button" onClick={heandleShow}>
                <FaShoppingCart/>
                <span className="count">1</span>
            </ButtonContainer>
        </> 
    );
}

export default CartButton;