import styled from "styled-components";

export const ButtonContainer = styled.button`
    position: relative;
    padding: 12px 12px;
    background: transparent;
    font-size: 2em;
    font-weight: 800;
    line-height: 10px;
    border: none;
    cursor: pointer;
    color: #e63c3c;

    .count {
        display: flex;
        position: absolute;
        width: 20px;
        height: 20px;
        top: 7px;
        right: 5px;
        align-items: center;
        justify-content: center;
        font-size: 0.4em;
        font-weight: 800;
        background: #FBFBFB;
        border-radius: 50%;
    }
`