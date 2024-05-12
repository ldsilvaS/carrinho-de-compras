import styled from "styled-components";

export const CartItemContainer = styled.div`
    position: relative;
    display: flex;
    width: 260px;
    align-items: center;
    margin-bottom: 35px;
    
    .div-content {
        margin-left: 10px;
    }

    .cart_item_image {
        width: 70px;
        border: 2px solid black;
    }

    .cart_item_title {
        font-size: 0.8em;
        color: #5F5F5F;
    }

    .cart_item_price {
        font-size: 1.1em;
    }

    .button_remove {
        position: absolute;
        right: 0px;
        bottom: 0px;
        font-size: 1.0em;
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
    }
`