import React, { memo, useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-icon.svg";
import { BasketContext } from "../../../store/BasketContext";
import Button from "../../UI/Button";

const MealItemForm = ({ id, title, price }) => {
  console.log("MealItemForm RENDER");

  const { addToBasket } = useContext(BasketContext);

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const basketItem = {
      id,
      title,
      price,
      amount,
    };
    addToBasket(basketItem);
    setAmount(1);
  };

  return (
    <StyledForm onSubmit={submitHandler} action="">
      <Container>
        <label htmlFor="amount">Amount</label>
        <input
          onChange={amountChangeHandler}
          value={amount}
          id="amount"
          min={1}
          type="number"
        />
      </Container>
      <Button>
        <PlusIcon /> Add
      </Button>
    </StyledForm>
  );
};

export default memo(MealItemForm);

const Container = styled.div`
  margin-bottom: 10px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222;
    margin-right: 20px;
  }
  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: none;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
