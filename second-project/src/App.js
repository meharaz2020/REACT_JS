import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const products = [
        { name: 'laptop', price: 200 },
        { name: 'Phone', price: 1200 },
        { name: 'Watch', price: 2100 }
    ]
    return (

        <
        div className = "App" > { /* <Products name="watch" price="$100"></Products> */ } {
            /* {
                    products.map(product=><Products name={product.name} price={product.price}></Products>)
                   } */
        }

        <
        Counter > < /Counter> <
        ExternalUsers > < /ExternalUsers>

        <
        /div>

    );
}

function Counter() {
    const [count, setcount] = useState(0);
    // const newCount=count+1;
    const CountIncrese = () => {
        const newCount = count + 1;
        setcount(newCount);
    }
    const dec = () => { setcount(count - 1); }
    return ( <
        div >
        <
        h3 > Counter: { count } < /h3> <
        button onClick = { CountIncrese } > Increse < /button> <
        button onClick = { dec } > Dec < /button> < /
        div >
    )
}

function ExternalUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() = , [])
    return ( <
        div >
        <
        h2 > External: < /h2> < /
        div >
    )
}

// function Products(props){
//   return (
//     <div className="product">
//       <h3>Name:{props.name}</h3>
//       <p>Price:${props.price}</p>
//     </div>
//   )
// }
export default App;