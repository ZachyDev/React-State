import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Subscription() {
  const [available, setAvailable] = useState(false);
  
  const handleClick = () => {
    setAvailable(subscribe => !available);
  }
  return (
    <>
       { available ? (<Button variant='danger' onClick={handleClick}>Available</Button>)
        : 
        (<Button variant='secondary' onClick={handleClick}>Sold Out</Button>)}
    </>
  )
}

export default Subscription