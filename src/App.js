import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer} from "mdbreact";
import './App.css'
import Form from './component/Form'
import Card from './component/Card'



var App = () => {
  
  const ArticleData = []
  const [Article, setArticle] = useState(ArticleData)
  const [count, setCount] = useState(0)
  
  const addShop = Shop => {
	 	Shop.id = count
		setArticle([ ...Article, Shop ])
  }
  
  

  return (
    <MDBContainer>
      <Form addShop={addShop} setCount={setCount} count={count}/>                
      <Card Article={Article}  />            
    </MDBContainer> 
          
          
        

  )
}

export default App
