import { useState } from "react";
import Form from "../Form/Form";
import { HeaderContainer } from "./style"
import { FaShoppingCart } from "react-icons/fa";
import CartButton from "../CartButton/CartButton";

function Header() {

    return (
      <HeaderContainer>
        <Form/>
        <CartButton/>
      </HeaderContainer>
    )
  }
  
  export default Header
  