import { useContext } from "react";
import formatCurrency from "../../utils/formatCurrency";
import { CardContainer } from "./style";
import { FaCartPlus } from "react-icons/fa";
import AppContext from "../../context/AppContext";


function ItemCard({data}) {

    // Valores recebido da api
    const {title, thumbnail, price} = data;

    // Context
    const {cartItems,setCartItems} = useContext(AppContext)

    const heandleAddCart = () => {
        
        // Ele faz uma cópia de todos os items que já estão no carrinho e adiciona o novo item.
        setCartItems([...cartItems, data])

    }

    return (

        // thumbnail.replace(/\w\.jpg/gi, "W.jpg") procura a letra que está seguida de um .jpg e a modifica.
        

       <CardContainer>
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="item_image" className="item_image" />

           <h2 className="title">{title}</h2>

           <h1 className="item_price">{formatCurrency(price)}</h1>

           <button type="button" className="add_item" onClick={heandleAddCart}><FaCartPlus/></button>

       </CardContainer>
    );
}

export default ItemCard;