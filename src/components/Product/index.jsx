import React from "react";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunk";
import { useRef } from "react";
import { gsap } from "gsap";

import { ImageAnimation, ProductCard } from "./styles";
import formatValue from "../../utils/formatValue";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const imgRef = useRef(null);

  const handleAddToCart = () => {
    dispatch(addToCartThunk(product));

    gsap
      .timeline()
      .to(imgRef.current, {
        duration: .15,
        scale: 1.5,
        autoAlpha: 1,
      })
      .to(imgRef.current, {
        duration: .15,
        scale: 1,
        autoAlpha: 0,
      })
    
  };

  return (
    <ProductCard>
      <div>
        <img src={product.img} alt={product.name} />
        <ImageAnimation src={product.img} alt={product.name} ref={imgRef} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{formatValue(product.price)}</p>
      </div>
      <button type="button" onClick={handleAddToCart}>
        Adicionar
      </button>
    </ProductCard>
  );
};

export default Product;
