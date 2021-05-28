import styled from "styled-components";

export const CarroselContainer = styled.div`
  width: 100vw;
  background-color: var(--black);

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    opacity: 0.6;
  }

  .slick-dots {
    transform: translateY(-30px);

    li button:before {
      color: var(--white-3);
    }
  }

  @media screen and (min-width: 540px) {
    width: 100%;
    background-color: var(--black);
    margin-top: 62px;

    img {
      width: 100%;
      height: 50vh;
      max-height: 600px;
      object-fit: cover;
      opacity: 0.6;
    }
  }
`;
