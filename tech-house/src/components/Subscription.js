import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Subscription() {
  const [subscribe, setSubscribe] = useState(false);

  const handleClick = () => {
    setSubscribe(subscribe => !subscribe);
  }
  return (
    <>
       { subscribe ? (<Button variant='danger' onClick={handleClick}>Subscribe</Button>)
        : 
        (<Button variant='secondary' onClick={handleClick}>Subscribed</Button>)}
    </>
  )
}

export default Subscription