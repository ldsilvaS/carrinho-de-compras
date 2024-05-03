import { ButtonContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";


function CartButton() {
    return (
        <>
            <ButtonContainer>
                <FaShoppingCart/>
                <span className="count">1</span>
            </ButtonContainer>
        </> 
    );
}

export default CartButton;