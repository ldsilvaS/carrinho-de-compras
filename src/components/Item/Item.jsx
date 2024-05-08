import { useState, useEffect } from "react";
import { ItemContainer } from "./style";
import api from "../../api/api";
import ItemCard from "../ItemCard/ItemCard";


function Item() {

    const [items, setItems] = useState([])

    useEffect(() => {
        api('iphone').then((res) => {
            setItems(res);
        })
    }, [])

    console.log(items)

    return ( 
        <>
            <ItemContainer>
                <div className="items">
                    {items.map((item) => <ItemCard key={item.id} data={item}/>)}
                </div>
            </ItemContainer>
        </> 
    );
}

export default Item;