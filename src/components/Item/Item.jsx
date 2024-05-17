import { useState, useEffect, useContext } from "react";
import { ItemContainer } from "./style";
import api from "../../api/api";
import ItemCard from "../ItemCard/ItemCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";


function Item() {
    // Context
    const {items, setItems, loading, setLoading} = useContext(AppContext)



    useEffect(() => {
        // Utilizando a api e setando a variável items com a resposta recebida pela api.
        api('Iphone').then((res) => {
            setItems(res);
        }).finally(() => {
            setLoading(false) // Setando o carregamento com false, pois já recebemos os items.
        })
    }, [])

    // console.log(items)

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