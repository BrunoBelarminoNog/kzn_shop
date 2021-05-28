import styled from "styled-components";

export const ProductCard = styled.div`
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 250ms ease-in-out;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    position: relative;

    img {
      height: 140px;
      max-width: 95%;
      object-fit: contain;
    }
  }

  div:nth-child(2) {
    width: 100%;
    padding: 0 4px;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 0.3rem;
    text-align: right;
  }

  p {
    text-align: right;
    font-size: 0.7rem;
    margin-bottom: 0.8rem;
  }

  button {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    background-color: var(--darkgray);
    color: var(--white);
    font-size: 0.8rem;
    transition: all 250ms;

    &:hover {
      background-color: var(--darkgray-2);
    }
  }

  @media screen and (min-width: 420px) {
    padding: 1rem 0.5rem;

    div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;

      img {
        height: 180px;
        max-width: 95%;
        object-fit: contain;
      }
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 2px 2px 10px 2px var(--gray);
    }
  
  }
`;

export const ImageAnimation = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 200;
`;