import { useContext } from "react";
import AppContext from "../../context/AppContext";
import CartItem from "../CartItem/CartItem";
import { CartContainer, CartItems, CartTotal, slideIn, slideOut } from "./style";
import formatCurrency from "../../utils/formatCurrency";

function Cart() {

    const {cartItems, totalPrice, setTotalPrice, divVisible} = useContext(AppContext)

    setTotalPrice(cartItems.reduce((acc, item) => {
        return item.price + acc
    }, 0))
    
    

    return ( 
        <CartContainer visible={divVisible} animationType={divVisible ? "slideIn" : "slideOut"}>
            {cartItems.length > 0 ? <CartItems>
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)}
            </CartItems> : <h1 className="not_items">Nenhum item encontrado!</h1>}
            
            <CartTotal>
                <h3 className="total">Valor total: </h3>
                <h3 className="total_price">{formatCurrency(totalPrice)}</h3>
            </CartTotal>
        </CartContainer>
     );
}

export default Cart;