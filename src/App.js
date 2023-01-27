import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Summary from './components/summary/Summary';

function App() {
  const [showBasket,setShowBasket] = useState(false)

  const showBasketHandler = () =>{
    setShowBasket((prevState) => !prevState)
  }

  return (
    <div className="App">
      <Header showModal={showBasketHandler}/>
      <Content>
      <Summary/>
      <Meals/>
     {showBasket && <Basket onClose={showBasketHandler}/>}
      </Content>
    </div>
  );
}

export default App;


const Content = styled.div`
margin-top: 101px ;
`