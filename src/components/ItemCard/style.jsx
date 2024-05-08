import styled from "styled-components";




export const CardContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 8px;
    background: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 1px 1px 30px #0000001a;
    

    &:hover {
        transition: 0.5s;
        box-shadow: 1px 1px 30px #0000004e;
    }
    

    .item_image {
        width: 100%;
    }

    .title {
        padding: 10px;
        text-align: center;
        font-size: 100%;
        color: #5f5f5f;
    }

    .item_price {
        font-size: 1.8em;
        padding-bottom: 10px;
        font-weight: 200;
    }

    .add_item {
        position: absolute;
        display: none;
        width: 100%;
        bottom: 0px;
        justify-content: flex-end;
        font-size: 1.7em;
        padding: 0px 8px 8px 0px;
        outline: none;
        border: none;
        background: transparent;
        color: #E63C3C;
        cursor: pointer;
    }

    &:hover .add_item {
        display: flex;
    }

`