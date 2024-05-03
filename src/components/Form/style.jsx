import styled from "styled-components";


export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 5px;

    .search {
        width: 350px;
        font-size: 1.2em;
        padding: 8px 8px;
        outline: none;
        border: 1px solid black;
        border-radius: 5px;
    }

    button {
        padding: 12px 12px;
        background: #e63c3c;
        font-size: 1.2em;
        font-weight: 800;
        line-height: 10px;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        color: #fbfbfb;
    }

`