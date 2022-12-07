import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/country';

function App() {
    return ( <
        div className = "App" >
        <
        LoadCountries > < /LoadCountries> <
        Country > < /Country> < /
        div >
    );
}

function LoadCountries() {
    const [countries, setCountries] = useState([]);
    useEffect(
        () => {
            fetch('https://restcountries.com/v2/all')
                .then(res => res.json())
                .then(data => setCountries(data))
        }

        , [])
    return ( <
        div >
        <
        h1 > visiting Every Country of the world < /h1> <
        h3 > Available Country: { countries.length } < /h3> <
        h3 > hello < /h3> <
        nav >
        <
        a href = "/home" > Home < /a> <
        a href = "/about" > About < /a> <
        a href = "/shop" > Shop < /a> < /
        nav > {
            countries.map(country => < Country key = { country.numericCode }
                name = { country.name }
                flag = { country.flags.png }
                population = { country.population } > < /Country>)   

            } <
            /div>
        )
    }

    export default App;