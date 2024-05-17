import { useContext } from "react";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";
import { CartItemContainer } from "./style";
import { BsCartDashFill } from "react-icons/bs";

function CartItem({data}) {
    // Variáveis puxadas da Api
    const {id, thumbnail, title, price} = data;

    // Context
    const {setCartItems, cartItems} = useContext(AppContext)
    
    // A variável cartItems é utilizada para guardar os itens do carrinho

    const heandleRemove = () => {
        const updatedItems = cartItems.filter((item) => item.id != id); // Atualizando os valores de cartItems quando removemos algo do carrinho 

        setCartItems(updatedItems) // Setando a variável
    }

    return ( 
        <CartItemContainer>
            <img src={thumbnail} alt="" className="cart_item_image"/>
            <div className="div-content">
                <h3 className="cart_item_title">{title}</h3>
                <h3 className="cart_item_price">{formatCurrency(price)}</h3>
                <button type="button"className="button_remove" onClick={heandleRemove}>
                    <BsCartDashFill/>
                </button>

                
            </div>
        </CartItemContainer>
     );
}

export default CartItem;