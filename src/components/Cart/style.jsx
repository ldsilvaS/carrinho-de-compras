import styled, { keyframes} from "styled-components";

export const slideIn = keyframes`
    from{
        transform: translate(120%, 0);
    }
    to{
        transform: translate(0, 0);
    }
`

export const slideOut = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(120%, 0);
  }
`

export const CartContainer = styled.div`
    position: fixed;
    display: ${props => (props.visible ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 330px;
    height: 100vh;
    top: 0;
    right: 0;
    padding: 100px 20px 20px;
    background: #FBFBFB;
    animation: ${props => props.animationType === "slideOut" ? slideOut : slideIn} 0.5s ease;


`

export const CartItems = styled.div`
    flex-grow:1 ;
    overflow: auto;
    
`

export const CartTotal = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    .total {
        font-size: 1.0em;
        color: #5F5F5F;
    }

    .total_price {
        font-size: 1.2em;
    }
`




