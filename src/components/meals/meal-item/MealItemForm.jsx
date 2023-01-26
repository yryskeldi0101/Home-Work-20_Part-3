import React from 'react';
import styled from 'styled-components';
import {ReactComponent as PlusIcon} from  '../../../assets/icons/plus-icon.svg'
import Button from '../../UI/Button';

const MealItemForm = () => {
    return (
        <StyledForm action="">
             <Container>
                <label htmlFor="amount">Amount</label>
                <input id='amount' min={1} type="number"/>
             </Container>
                <Button><PlusIcon/> Add</Button>
        </StyledForm>
    );
};

export default MealItemForm;

const Container =styled.div`
    margin-bottom: 10px;
    label{
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #222;
        margin-right: 20px;
    }
    input{
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
`

const StyledForm = styled.form`
     display: flex;
     flex-direction: column;
     align-items: flex-end;
`