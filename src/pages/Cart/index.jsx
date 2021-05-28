import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  RiAddFill,
  RiSubtractFill,
  RiCloseFill,
  RiPercentFill,
  RiMapPin3Fill,
} from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import {
  addToCartThunk,
  removeAllFromCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunk";
import {
  AddSubQuantityWrapper,
  CartContainer,
  CartListWrapper,
  ListWrapper,
  SummaryWrapper,
} from "./styles";
import formatValue from "../../utils/formatValue";

function Cart() {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let totalP = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalPrice(totalP);

    let totalI = cart.reduce((acc, product) => acc + product.quantity, 0);
    setTotalItems(totalI);

    // eslint-disable-next-line
  }, [cart]);

  return (
    <CartContainer>
      <CartListWrapper>
        <div>
          <h1>Carrinho de compras</h1>
          <span>
            {totalItems} {`ITEM${totalItems > 1 ? "S" : ""}`}
          </span>
        </div>
        <ListWrapper>
          {cart.length === 0 ? (
            <h2><Link to="/">Clique aqui</Link> para voltar na loja e adicione algo no carrinho!</h2>
          ) : (
            <ul>
              {cart.map((product) => {
                return (
                  <li key={product.idCart}>
                    <div>
                      <img src={product.img} alt="" />
                    </div>
                    <div>
                      <p>{product.name}</p>
                    </div>
                    <div>
                      <AddSubQuantityWrapper>
                        <div
                          onClick={() => dispatch(removeFromCartThunk(product))}
                        >
                          <RiSubtractFill />
                        </div>
                        <div>{product.quantity}</div>
                        <div onClick={() => dispatch(addToCartThunk(product))}>
                          <RiAddFill />
                        </div>
                      </AddSubQuantityWrapper>
                    </div>
                    <div>
                      <span>
                        {formatValue(product.price * product.quantity)}
                      </span>
                    </div>
                    <div
                      onClick={() =>
                        dispatch(removeAllFromCartThunk(product.id))
                      }
                    >
                      <RiCloseFill size={22} />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </ListWrapper>
      </CartListWrapper>
      <SummaryWrapper>
        <h3>Resumo do pedido</h3>
        <div>
          <span>
            {totalItems} {`ITEM${totalItems > 1 ? "S" : ""}`}
          </span>
          <span>{formatValue(totalPrice)}</span>
        </div>
        <div>
          <label htmlFor="discount">Cupom de desconto</label>
          <div>
            <input type="text" id="discount" placeholder="Digite seu cupom" />
            <RiPercentFill size={14} />
          </div>
        </div>
        <div>
          <label htmlFor="shipping">Frete</label>
          <div>
            <input type="text" id="shipping" placeholder="Digite seu CEP" />
            <RiMapPin3Fill size={14} />
          </div>
        </div>
        <div>
          <span>VALOR TOTAL</span>
          <span>{formatValue(totalPrice)}</span>
        </div>
        <div>
          <button>PAGAMENTO</button>
        </div>
      </SummaryWrapper>
    </CartContainer>
  );
}

export default Cart;
