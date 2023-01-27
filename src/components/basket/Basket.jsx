import React from 'react';
import styled from 'styled-components';
import Modal from '../UI/Modal';
import BasketItem from './BasketItem';
import TotalAmount from './TotalAmount';

const Basket = ({onClose}) => {
    const items = [
        {
            id: 1,
            title: "Sushi",
            price:  22.99,
            amount: 1
        },
        {
            id: 2,
            title: "Sushi",
            price:  16.0,
            amount: 1
        },
        {
            id: 3,
            title: "Sushi",
            price:  16.0,
            amount: 1
        },  
    ]
    return (
        <Modal onClose={onClose}>
            <Content>
               {items.length ? 
                <FixedHeightContainer>
                {items.map((item,index) => {
                  return <BasketItem key={index} title= {item.title} price={item.price} amount={item.amount}/>
             })} 
                </FixedHeightContainer>
                : null}
        
            <TotalAmount price={200.5034} onClose={onClose} onOrder={()=>{}}/>
            </Content>
        </Modal>

    );
};

export default Basket;


const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.5rem 1rem ;
`


const FixedHeightContainer = styled.div`
    max-height: 228px;
    overflow-y: scroll;
`