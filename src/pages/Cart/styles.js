import styled from "styled-components";

export const CartContainer = styled.main`
  width: 90vw;
  max-width: 1280px;
  margin: 60px auto 0;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
`;

export const CartListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 2rem 0;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 2rem;
    align-items: center;

    h1 {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      color: var(--black);
      font-size: 1.5rem;
    }

    span {
      color: var(--darkgray);
    }
  }
`;

export const ListWrapper = styled.section`
  > h2 {
    width: 100%;
    text-align: center;
    padding: 3rem 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    border-top: 2px solid var(--gray-2);
    color: var(--gray-3);

    a {
      color: var(--darkgray-2);
      transition: all 200ms;
      border-bottom: 1px solid var(--white-3);


      &:hover {
        border-bottom: 1px solid var(--darkgray);
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    border-top: 2px solid var(--gray-2);
    padding: 0.2rem 0;
    display: grid;
    grid-template-columns: 10% 42% 14% 26% 8%;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease-in-out;

    &:last-child {
      border-bottom: 2px solid var(--gray-2);
    }

    img {
      max-width: 100%;
      max-height: 70px;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;

      p:first-of-type {
        width: 100%;
        text-align: left;
        font-weight: 500;
      }

      span {
        text-align: center;
        font-size: 0.8rem;
        font-weight: 600;
      }

       &:last-child {
         height: 100%;
        cursor: pointer;
      }
    }

    &:hover {
      background-color: var(--white);
    }
  }
`;

export const SummaryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--gray);
  padding: 2rem 0 2rem 2rem;
  min-height: calc(100vh - 60px);
  position: relative;

  h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--gray-2);
  }

  h3 + div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75rem 0;

    span {
      font-size: .9rem;

      &:last-child {
        font-weight: 600;
      }
    }
  }
  h3 + div + div + div + div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding: 1.75rem 0;

    span {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  h3 + div + div, 
  h3 + div + div +div {
    margin-top: .5rem;

    label {
      font-weight: 600;
      font-size: .95rem;
    }

    div {
      position: relative;
    }
  }

  input {
    margin: .4rem 0;
    width: 100%;
    padding: 12px 12px 12px 36px;
    font-size: .8rem;
    border-radius: 4px;
    background-color: var(--white);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translate(0, -50%);
    fill: var(--gray-3);
  }

  button {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    background-color: var(--darkgray);
    color: var(--white);
    font-weight: 500;
    transition: all 250ms;

    &:hover {
      background-color: var(--black);
    }
  }

  &::before {
    content: "";
    width: 9999px;
    height: 100%;
    position: absolute;
    background-color: var(--gray);

    top: 0;
    right: -9999px;
  }

`;

export const AddSubQuantityWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:nth-child(2) {
      border: 1px solid var(--gray-2);
      font-size: 0.7rem;
      width: 1.5rem;
      height: 1.5rem;
      color: var(--darkgray);
    }

    > svg {
      cursor: pointer;
    }
  }
`;
