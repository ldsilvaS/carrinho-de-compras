import formatCurrency from "../../utils/formatCurrency";
import { CartItemContainer } from "./style";
import { BsCartDashFill } from "react-icons/bs";

function CartItem({data}) {

    const {thumbnail, title, price} = data;

    return ( 
        <CartItemContainer>
            <img src={thumbnail} alt="" className="cart_item_image"/>
            <div className="div-content">
                <h3 className="cart_item_title">{title}</h3>
                <h3 className="cart_item_price">{formatCurrency(price)}</h3>
                <button type="button"className="button_remove">
                    <BsCartDashFill/>
                </button>

                
            </div>
        </CartItemContainer>
     );
}

export default CartItem;