//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';


//Get a reference to the div with ID root in index.html file
const el = document.getElementById('root');


//Tell react to take control of the element
const root = ReactDOM.createRoot(el);


//Create a component
/*
function App() {
    return <h1>Hi There!</h1>;
    //* return React.createElement("h1", null, "Hi there");
}


function App() {
    let message = "Hello";

    if(Math.random() > 0.5) {
        message = "Hey";
    }

    return <h1>{message}</h1>
    //* return <h1>{new Date().toLocaleTimeString()}</h1>
}
*/

function App() {
    const name = "Indrajit Paul";
    const age = 26;

    return <h1>My name is {name} and my age is {age}</h1>
}


//Show the component on the screen
root.render(<App/>);