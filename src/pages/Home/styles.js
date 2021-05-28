import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 90vw;
    max-width: 1280px;
    margin: 60px auto;
`;

export const ProductsListWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .75rem;

    @media screen and (min-width: 420px) {
         grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }

    @media screen and (min-width: 710px) {
         grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 860px) {
         grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 1280px) {
         grid-template-columns: repeat(5, 1fr);
    }
`;