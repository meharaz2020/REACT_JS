import React from 'react';

const Shoes = (props) => {
    const { id } = props;
    const addtocart = (id) => {
        let shoppingcart = {};
        const localstor = localStorage.getItem('Shopping-Cart');
        if (localstor) {
            shoppingcart = JSON.parse(localstor);
        } else {
            shoppingcart = {};
        }
        if (shoppingcart[id]) {
            const newqu = parseInt(shoppingcart[id]) + 1;
            // localStorage.setItem(id,newqu);
            shoppingcart[id] = newqu;
            console.log('alredy add', id);
        } else {
            // localStorage.setItem(id, 1);
            shoppingcart[id] = 1;
            console.log('item add', id);

        }
        localStorage.setItem('Shopping-Cart', JSON.stringify(shoppingcart));

    }

    const removeFromCart = id => {
        const localstorRemove = localStorage.getItem('Shopping-Cart');
        if (localstorRemove) {
            const shoppingcart = JSON.parse(localstorRemove);
            if (id in shoppingcart) {
                delete shoppingcart[id];
                localStorage.setItem('Shopping-Cart', JSON.stringify(shoppingcart));

            }
        }

    }

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Price: {props.price}</h1>
            <button onClick={() => { addtocart(id) }}>Add to cart</button>
            <button onClick={() => { removeFromCart(id) }} >Remove</button>
        </div>
    );
};

export default Shoes;