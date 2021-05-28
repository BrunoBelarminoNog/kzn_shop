import React from "react";
import { CartWrapper, ContentWrapper, HeaderContainer } from "./styles";
import { RiShoppingCartFill } from "react-icons/ri";
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <ContentWrapper>
        <div onClick={() => history.push("/")}> 
          <h1>KNZ SHOP</h1>
        </div>
        <CartWrapper onClick={() => history.push("/cart")} >
          <RiShoppingCartFill size={22}/>
        </CartWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
