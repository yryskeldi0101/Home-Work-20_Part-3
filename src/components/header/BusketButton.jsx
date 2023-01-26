import React from "react";
import styled from "styled-components";
import {ReactComponent as BusketIcon} from  '../../assets/icons/cart.svg'


const BasketButton = ({count }) => {
  return <StyledButton> <BusketIcon/><StyledTitle>Your cart</StyledTitle><StyledCounter id="counter">{count || 0}</StyledCounter></StyledButton>;
};

export default BasketButton;

const StyledButton = styled.button`
  background: #5A1F08;
  border-radius: 20px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover{
    background-color: #2c0d00;
  }

  &:hover > #counter{
    background-color: #84452a;
  }
`;

const StyledTitle = styled.span`
    margin-left: 12px;
    margin-right: 24px;
`

const StyledCounter = styled.span`
    background: #ce3917;
    border-radius: 30px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    padding: 1px 20px;

`
