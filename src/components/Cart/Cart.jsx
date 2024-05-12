import CartItem from "../CartItem/CartItem";
import { CartContainer, CartItems, CartTotal } from "./style";

function Cart() {



    return ( 
        <CartContainer>
            <CartItems>
                <CartItem/>
                <CartItem/>
            </CartItems>
            <CartTotal>

            </CartTotal>
        </CartContainer>
     );
}

export default Cart;