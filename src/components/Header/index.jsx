import React, {useEffect, useRef, useState} from "react";
import { CartWrapper, ContentWrapper, HeaderContainer, IndicatorQuantity } from "./styles";
import { RiShoppingCartFill } from "react-icons/ri";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((store) => store);

  const history = useHistory();
  const cartRef = useRef(null)
  const [totalItems, setTotalItems] = useState(0);

  useEffect(()=> {
    console.log(cartRef)

    let totalI = cart.reduce((acc, product) => acc + product.quantity, 0)
    setTotalItems(totalI)

  }, [cart])

  return (
    <HeaderContainer>
      <ContentWrapper>
        <div onClick={() => history.push("/")}> 
          <h1>KNZ SHOP</h1>
        </div>
        <CartWrapper onClick={() => history.push("/cart")} ref={cartRef} >
          <RiShoppingCartFill size={22}/>
          {
            totalItems > 0 && <IndicatorQuantity>{totalItems}</IndicatorQuantity>
          }
        </CartWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
