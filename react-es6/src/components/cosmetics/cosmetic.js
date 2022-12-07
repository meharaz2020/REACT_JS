import React from 'react';
import './cosmetic.css';
import Shoes from './shoes/Shoes';
const Cosmetic = () => {
    const cosmerics=[
        {id:1,name:'watch',price:1000},
        {id:2,name:'watch',price:1200},
        {id:3,name:'watch',price:1300},
        {id:4,name:'watch',price:1400},
    ]
    return (
        <div>
            <h1>Hi</h1>
            {
                cosmerics.map(cometi =><Shoes 
                    name={cometi.name}
                    price={cometi.price}
                    id={cometi.id}
                     key={cometi.id}
                    ></Shoes>)
            }
        </div>
    );
};

export default Cosmetic;