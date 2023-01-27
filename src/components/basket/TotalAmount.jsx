import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const TotalAmount = ({price, onClose ,onOrder}) => {

    const orderButton = price > 0 ? <Button variant='contained' onClick={onOrder}>Order</Button> : null
    const fixedPrice = price.toFixed(2)
    return (
        <div >
            <InfoContainer>
            <Label>Total Amount</Label>
            <Price>${fixedPrice}</Price>
            </InfoContainer>
            <ActionButtonsContainer>
                <Button variant='outlined' onClick={onClose}>Close</Button>
              {orderButton}
            </ActionButtonsContainer>
        </div>
    );
};

export default TotalAmount;


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