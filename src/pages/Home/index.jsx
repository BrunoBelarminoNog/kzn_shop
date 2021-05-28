import React from "react";
import { useSelector } from "react-redux";
import Carrosel from "../../components/Carrosel";
import Product from "../../components/Product";
import { HomeContainer, ProductsListWrapper } from "./styles";

function Home() {
  const products = useSelector((state) => state.products);

  return (
    <>
      <Carrosel />
      <HomeContainer>
        <ProductsListWrapper>
          {products.map((product, index) => {
            return <Product product={product} key={index} />
          })}
        </ProductsListWrapper>
      </HomeContainer>
    </>
  );
}

export default Home;
