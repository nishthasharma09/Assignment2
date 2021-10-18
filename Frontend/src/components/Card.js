import React from "react";
import faker from "faker";

function Card(props){

	return (
    
	 <div className="card">
    <div className="image">
    <img className="round" src={faker.image.avatar()}/>
      </div>
    <div className="content">
      <div className="header">{props.name}</div>
      <div className="meta">
        <a>{props.tel}</a>
      </div>
      <div className="description">
        {props.email}

      </div></div> </div>
	);
}

export default Card;