import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { BasketContext } from '../../store/BasketContext';
import Button from '../UI/Button';

const TotalAmount = ({price,onOrder}) => {
  const { showBasketHandler} = useContext(BasketContext);
    

    const orderButton = price > 0 ? <Button variant='contained' onClick={onOrder}>Order</Button> : null
    const fixedPrice = price.toFixed(2)
    return (
        <div >
            <InfoContainer>
            <Label>Total Amount</Label>
            <Price>${fixedPrice}</Price>
            </InfoContainer>
            <ActionButtonsContainer>
                <Button variant='outlined' onClick={showBasketHandler}>Close</Button>
              {orderButton}
            </ActionButtonsContainer>
        </div>
    );
};

export default memo(TotalAmount);


const Label = styled.p`
margin: 0;
    font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-align: center;
`

const Price = styled.p`
margin: 0;
    font-weight: 600;
font-size: 22px;
line-height: 33px;


color: #8A2B06;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`


const ActionButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 1rem;
    
`