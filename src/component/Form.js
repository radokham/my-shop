import React, { useState } from 'react';
import './Form.css';
import { MDBBtn } from "mdbreact";

 var Form = props => {
    const initialFormState ={ id: null,Produit:'',Prix:'',Description:'',file:''}
    const [shop, setshop]= useState(initialFormState)

    const handleInputChange = event => {
            const {name ,value} = event.target
            setshop({...shop,[name]: value})
    }
    return  <div className="wrapper">
             
        <div className="form-wrapper">
        <form onSubmit={event => {
                event.preventDefault()

                if (!shop.Produit || !shop.prix || !shop.Description || !shop.file) return
                        if (isNaN(shop.prix)){
                            document.getElementById("erreur").innerHTML="Entrer un nombre"
                        }else{
                            document.getElementById("erreur").innerHTML=""
                            props.addshop(shop)
                            props.setCount(props.count +1)
                            setshop(initialFormState)
} 

        }}>
                  <table>
                    <tbody>
                    <tr>
                <div className="Produit">
                    <td htmlFor="Produit">Produit</td>
                    <td ><input type="text" className="" type="text" name="Produit"  value={shop.Produit} onChange={handleInputChange}></input></td>
                </div>
                </tr>
                <tr>
                <div className="Prix">
                    <td htmlFor="Prix">Prix</td>
                    <td><input type="text" className="" type="text" name="Prix" value={shop.Prix} onChange={handleInputChange}></input></td>
                    <p className="error"></p>
                </div>
                </tr>
                <tr>
                <div>
                <td className="Description" for="msg">Description</td>
                <td> <textarea name="Description" value={shop.Description} onChange={handleInputChange}></textarea></td>
            </div>
            </tr>
            <tr>
                <div className="File">
                <td><label> File<input type="file" name="file" value={shop.file} onChange={handleInputChange}/></label></td>
                </div>
                </tr>
                
                  </tbody> 
                </table>
               <div >
                <MDBBtn className="Ajouter" color="primary">Ajouter</MDBBtn>
                    
               </div>
            </form>
        </div>
      
    </div>
  
}

export default Form;
