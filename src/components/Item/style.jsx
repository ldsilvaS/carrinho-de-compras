import styled from "styled-components";


export const ItemContainer = styled.section`
    display: flex;
    width: 100vw;
    padding: 15px 10%;
    justify-content: center;
    

    .items {
        display: grid;
        padding: 120px 20px 50px;
        grid-template-columns: repeat(4, 250px);
        gap: 20px;
    }

    @media (max-width: 1080px) {
        .items {
            grid-template-columns: repeat(3, 250px);
        }
    }

    @media (max-width: 835px) {
        .items {
            grid-template-columns: repeat(2, 250px);
        }
    }

    @media (max-width: 587px) {
        .items {
            grid-template-columns: repeat(1, 250px);
        }
    }
`