import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Foods() {
   const [foods, setFoods] = useState([
    {
        id: 1,
        name: 'Burger',
        price: 'Ksh 2000'
    },
    {
        id: 2,
        name: 'Brown Chapati',
        price: 'Ksh 20'
    }
   ])

//    handle add food to menu
   function addFood() {
    // new array
    const newFood = [{
        id: 4,
        name: 'Fish',
        price: 'Ksh 700'
    }]

    const newFoodsArray = [...foods, ...newFood];
    // update the initial array
    setFoods(newFoodsArray);

   }
  return (
    <div>
        <h3>Food Menu</h3>
        { foods.map(food => {
            return (
                <ul key={food.id}>
                    <li>{ food.name }</li>
                </ul>
            )
        })}
        <Button variant='success' onClick={addFood}>Add Food</Button>
    </div>
  )
}

export default Foods