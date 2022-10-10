import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <>
      <Container>
        <Wrap>
          <img src="/images/viewers-disney.png" alt="disney"  />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" alt="pixar" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="marvel" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-starwars.png" alt="starwars" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-national.png" alt="national" />
        </Wrap>
      </Container>
    </>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 0px 26px 0px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div` 
border-radius: 10px;
border:  3px solid  rgba(250, 250, 250, 0.1);
cursor:pointer;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.97) 0s;



img {
    width:100%;
    height:100&
    object-fit: cover;
}


&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 58px -16px;
    transform: scale(1.05);
    border-color: rgba(251, 251, 251, 0.8);
}
`;
