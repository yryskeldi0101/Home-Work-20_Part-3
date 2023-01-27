import React from 'react';
import styled from 'styled-components';
import MealItem from './meal-item/MealItem';

const DUMMY_MEALS = [
    {
        id: Date.now().toString(),
        title: "Sushi",
        description: 'finest fish and veggirs',
        price:  22.99
    },
    {
        id: Date.now().toString(),
        title: "Sushi",
        description: 'finest fish and veggirs',
        price:  16.0
    },
    {
        id: Date.now().toString(),
        title: "Barbecue",
        description: 'finest fish and veggirs',
        price:  12.99
    },
    {
        id: Date.now().toString(),
        title: "Green Bowl",
        description: 'finest fish and veggirs',
        price:  19.99
    }
]

const Meals = () => {
    return (
            <Card>
            {DUMMY_MEALS.map((meal,index) => {
                return <MealItem key={index}  meal={meal}/>
            })}
            </Card>
       
    );
};

export default Meals;

const Card = styled.div`
background: #FFFFFF;
border-radius: 16px;
width: 75%;
margin: 40px auto;
padding: 40px;
`