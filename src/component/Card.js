import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import './Card.css'


const Card = props => (
    <MDBRow>
    <div className="card-deck">    
        {props.shop.length > 0 ? (                
            props.shop.map(shop => (
                <MDBCol md="4">
                <div className="card" key={shop.id}>
                    <img src={shop.fich} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{shop.Produit}</h5>
                        <p className="card-text">{
                            (shop.Description.length > 200)?shop.Description.substring(0, 117).append('...'):shop.Description}</p>
                        <span id="price">{shop.prix}Ar</span>
                    </div>
                    <div className="card-footer">
                        <span id="heart" value="0"></span> <label id="coeur">❤<input type="button"
                            onClick = { () =>{
                                var n=parseInt(document.getElementById("heart").value);
                                n = n + 1;
                                document.getElementById("heart").innerHTML = n;
                            }

                            }
                        /></label>
                    </div>
                </div>  
                </MDBCol>    
                ))
      ) : ''}  
      
	</div>
    </MDBRow>
)

export default Card