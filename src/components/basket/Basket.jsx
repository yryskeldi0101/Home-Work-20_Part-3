import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = () => {
  
  console.log('Basket RENDER');
  const { items, updateBasketItem ,deleteBasketItem,} = useContext(BasketContext);

  const decrementAmount = useCallback((id,amount) => {
    console.log('decrementAmount RENDER', amount)
  
      if (amount > 1) {
        updateBasketItem({ amount: amount - 1, id: id });
      } else{
          deleteBasketItem(id)
      }
    },[deleteBasketItem,updateBasketItem]) 

  const incrementAmount = useCallback((id,amount) => {
    console.log('decrementAmount RENDER', amount);
      updateBasketItem({amount: amount + 1, id: id});
    },[updateBasketItem]) 

  const getTotalPrice = useCallback( () => {
    console.log('getTotalPrice RENDER');
      return items.reduce((sum, { price, amount }) => sum + price * amount, 0);
    },[items])

  return (
    <Modal>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item, index) => {
              return (
                <BasketItem
                  key={index}
                  id={item._id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                  incrementAmount={() => incrementAmount(item._id,item.amount)}
                  decrementAmount={() => decrementAmount(item._id,item.amount)}
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}

        <TotalAmount
          price={getTotalPrice()}
          onOrder={() => {}}
        />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
