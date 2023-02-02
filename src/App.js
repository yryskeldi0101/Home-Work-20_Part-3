// import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
// import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Summary from './components/summary/Summary';
import { BasketProvider } from './store/BasketContext';

function App() {
  // console.log('App a');
  // const [showBasket,setShowBasket] = useState(false)

  // const showBasketHandler = () =>{
  // console.log('showBasketPHandler RENDER');

  //   setShowBasket((prevState) => !prevState)
  // }

  return (
      <BasketProvider>
      <Header/>
      <Content>
      <Summary/>
      <Meals/>
     {/* {showBasket && <Basket onClose={showBasketHandler}/>} */}
      </Content>
      </BasketProvider>
  );
}

export default App;


const Content = styled.div`
margin-top: 101px ;
`


/*
GET /foods

GET /basket
Headers: {UserID: 'nurbolot'}

POST /foods/:foodId/addToBasket
BODY: { amount: number }

DELETE /basketItem/:id/delete

PUT /basketItem/:id/update
BODY: { amount: number }
*/