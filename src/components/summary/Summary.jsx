import React from 'react';
import styled from 'styled-components';
import BackgroundImg from  '../../assets/images/summary-background.jpg'
import SummaryInfoCard from './SummaryInfoCard';



const Summary = () => {
    return (
        <Container>
            <StyledImg src={BackgroundImg} alt="" />
            <SummaryInfoCard/>
        </Container>
    );
};

export default Summary;


const Container = styled.div`
height: 527px;
position: relative;
`

const StyledImg = styled.img`
    height: 432px;
    width: 100%;
`