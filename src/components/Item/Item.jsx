import { useState, useEffect, useContext } from "react";
import { ItemContainer } from "./style";
import api from "../../api/api";
import ItemCard from "../ItemCard/ItemCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";


function Item() {

    const {items, setItems, loading, setLoading} = useContext(AppContext)

    useEffect(() => {
        api('Iphone').then((res) => {
            setItems(res);
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    console.log(items)

    return ( 
        <>
            <ItemContainer>
            {loading ? <Loading/> : 
                <div className="items">
                    {items.map((item) => <ItemCard key={item.id} data={item}/>)}
                </div>
            }
                
            </ItemContainer>
        </> 
    );
}

export default Item;