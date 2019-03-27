import React, { useState } from 'react'
import { MDBRow, MDBCol } from "mdbreact";
import './Form.css'


var Form = props => {
	const initialFormState = { id: null, produit: '', prix: '', decription: '', file: '' }
	const [ Shop, setShop ] = useState(initialFormState)
	

	const handleInputChange = event => {
		const { name, value } = event.target
		setShop({ ...Shop, [name]: value })
	}

	return (
            <form 
                onSubmit={event => {
                    event.preventDefault()
                    
                    if (!Shop.produit || !Shop.prix || !Shop.decription || !Shop.file) return
                        if (isNaN(Shop.prix)){
                            document.getElementById("erreur").innerHTML="Entrer un nombre"
                        }else{
                            document.getElementById("erreur").innerHTML=""
                            props.addShop(Shop)
                            props.setCount(props.count +1)
                            setShop(initialFormState)
                        }				
                }}
            >
                <MDBRow>
                    <MDBCol md="3"> </MDBCol>
                    <MDBCol md="6" style={{ border: "1px solid black"}}>
                        
                        <table>
                            <tbody>
                            <tr>
                                <td>Produit</td>
                                <td> <input type="text" name="produit" value={Shop.produit} onChange={handleInputChange}/> </td>
                            </tr>
                            <tr>
                                <td>Prix</td>
                                <td> <input type="text" name="prix" value={Shop.prix} onChange={handleInputChange}/><span id="erreur"/> </td>
                            </tr>
                            <tr>
                                <td >Decription</td>
                                <td><textarea name="decription" rows="5" value={Shop.decription} onChange={handleInputChange}></textarea></td>
                            </tr>
                            <tr>
                                <td></td>
                                
                                <td><label id=""> File<input type="file" name="file" value={Shop.file} onChange={handleInputChange}/></label></td>
                            </tr>  
                            </tbody>                         
                        </table><button id="bout" className="btn btn-primary btn-block">A<span id="tex">jouter</span></button>
                        
                    </MDBCol>
                    <MDBCol md="3"> </MDBCol>
                </MDBRow>
               
                            

            </form>
	)
}



export default Form;