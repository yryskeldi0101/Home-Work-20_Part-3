import React from "react";
import styled from "styled-components";
import BasketButton from "./BusketButton";

const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton> 7</BasketButton>

    </Container>
  );
};

export default Header;

const Container = styled.header`
position: fixed;
top: 0;
  height: 101px;
  background-color: #8a2b06;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 120px;
  padding-right: 120px;
  align-items: center;
  z-index: 100;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: white;
  margin: 0;
`;
