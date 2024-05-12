import styled from "styled-components";



export const LoadingContainer = styled.div`
    display: flex;
    padding: 120px 20px 50px;


    svg {
        font-size: 2em;
        animation: rotation 1s linear infinite;
        
    }



    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`