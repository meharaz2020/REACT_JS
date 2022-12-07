import logo from './logo.svg';
import './App.css';
const number = 2222;
const css = { color: 'blue', fontSize: '20px', }

function App() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (

        <
        div className = "App" > {
            arr.map(arr => < li > { arr } < /li>)
            } {
                arr.map(arr => < Person name = { arr } > < /Person>)
                    } {
                        /* <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>
                                  Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <h3>JSX</h3>
                                <p style={css}>my number: {number}</p>
                            
                              </header> */
                    } { /* <Person name="meharaz"></Person> */ } <
                    /div>
            );
        }

        function Person(props) {
            return ( <
                    div >
                    <
                    h1 > { props.name }) Hello my dear friend < /h1> <
                /div>
        )
    }
    export default App;