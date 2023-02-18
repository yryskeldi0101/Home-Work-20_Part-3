import styled from "styled-components";
import Button from "../../UI/Button";
import { useState } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-icon.svg";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../store/meals/BasketSlice";

const MealItemForm = ({ id, price, title }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const basketItem = {
      id,
      price,
      title,
      amount,
    };
    dispatch(addToBasket(basketItem));
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <label htmlFor={id}>Amount</label>
        <input
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          id={id}
          min={1}
          max={5}
          defaultChecked={1}
        />
      </Container>
      <Button>
        <StyledIcon />
        Add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

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

const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
