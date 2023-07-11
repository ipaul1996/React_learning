import './App.css';
import { useState } from "react";
import AnimalShow from './AnimalShow';
/*
function App1() {
    const handleClick = () => {
        console.log("Button Clicked!");
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            //Or
            <button onClick={() => console.log("Button Clicked!")}></button>
        </div>
    )
}
*/

function getRandomAnimals() {
    const animals = ["cow", "dog", "bird", "gator", "cat", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
}
// console.log(getRandomAnimals());

function App() {

    // const [count, setCount] = useState(0);
    //useState(defaultValue) is provided by React and it returns an array [defaultValue, setterFunction]
    //In above syntax we are using array destructuring. We could also think that why useState(defaultValue) does not return 
    //an object. It could but then our code would be more verbous.

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // setCount(count + 1);
        setAnimals([...animals, getRandomAnimals()]);
    }

    const renderedAnimals = animals.map((element, index) => {
        return <AnimalShow type={element} key={index} />
    });

    return (

        <div className="app">
            <button onClick={handleClick}> Add Animal </button>
            {/* <div>Number of animals: {count} </div> */}
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}



export default App;