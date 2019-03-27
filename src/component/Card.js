import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import './Card.css'


const Card = props => (
    <MDBRow>
    <div className="card-deck">    
        {props.Article.length > 0 ? (                
            props.Article.map(Shop => (
                <MDBCol md="4">
                <div className="card" key={Shop.id}>
                    <img src={Shop.file} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{Shop.produit}</h5>
                        <p className="card-text">{
                            (Shop.decription.length > 200)?Shop.decription.substring(0, 117).append('...'):Shop.decription}</p>
                        <span id="price">{Shop.prix}Ar</span>
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
