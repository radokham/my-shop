import React, { useState } from 'react'
import { MDBContainer} from "mdbreact";
import Form from './component/Form'
import Card from './component/Card'



var App = () => {
  //Form
  const shopData = []
  const [shop, setshop] = useState(shopData)
  const [count, setCount] = useState(0)
  
  const addshop = shop => {
	 	shop.id = count
		setshop([ ...shop, shop ])
  }
  
  

  return (
    <MDBContainer>
      <Form addshop={addshop} setCount={setCount} count={count}/>                
      <Card shop={shop} /*deleteshop={deleteshop} editshop={editshop}*/ />            
    </MDBContainer> 
          
          
        

  )
}

export default App