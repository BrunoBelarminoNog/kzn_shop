import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    border-bottom: 1px solid var(--gray);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
`;

export const ContentWrapper = styled.div`
    width: 95vw;
    max-width: 980px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
        cursor: pointer;
        color: var(--white);
        font-size: 1.2rem;
    }

    

    @media screen and (min-width: 540px) {
        height: 62px;

        h1 {
            font-size: 1.75rem;
        }
    }
`;

export const CartWrapper = styled.div`
    position: absolute;
    top: 14px;
    right: 8px;
    cursor: pointer;

    svg {
        fill: var(--white)
    }

    @media screen and (min-width: 540px) {
        top: 18px;
    }
`;