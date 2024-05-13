import { useContext } from "react";
import formatCurrency from "../../utils/formatCurrency";
import { CardContainer } from "./style";
import { FaCartPlus } from "react-icons/fa";
import AppContext from "../../context/AppContext";


function ItemCard({data}) {

    const {title, thumbnail, price} = data;

    const {cartItems,setCartItems} = useContext(AppContext)

    const heandleAddCart = () => {
        
        setCartItems([...cartItems, data])

    }

    return (

        

       <CardContainer>
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="item_image" className="item_image" />

           <h2 className="title">{title}</h2>

           <h1 className="item_price">{formatCurrency(price)}</h1>

           <button type="button" className="add_item" onClick={heandleAddCart}><FaCartPlus/></button>

       </CardContainer>
    );
}

export default ItemCard;