import React from 'react';
import './country.css';
 const Country = (props) => {
    return (
        <div className='con' >
             
            <h3>Name:{props.name}</h3>
        <p>Population: {props.population}</p>
        <img height="100px" width="200px" src={props.flag} alt="" />
        </div>
    );
};

// function Country(props){
//     return(
//       <div>
        
  
//       </div>
//     )
//   }

export default Country;