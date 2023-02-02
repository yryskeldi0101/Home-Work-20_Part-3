import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { BasketContext } from '../../store/BasketContext';



const StyledBackdrop= styled.div`
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);

`

const Backdrop = () =>{
  const { showBasketHandler} = useContext(BasketContext);
    return <StyledBackdrop onClick={showBasketHandler}/>
}




const StyledModalContent= styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);


@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

`

const ModalContent = ({children}) =>{
  console.log('Modal RENDER');

    return <StyledModalContent>{children}</StyledModalContent>
}

    const backdropRoot = document.getElementById("backdrop")
    const modalOverlayRoot = document.getElementById("modal-overlay")

const Modal = ({children}) => {
    return (
        <div>
            <>
          {createPortal(<Backdrop />, backdropRoot )}
            {createPortal(<ModalContent>{children}</ModalContent>, modalOverlayRoot)}
            </>
        </div>
    );
};

export default memo(Modal);