import React, {useState} from 'react'
import CAR from './assets/car.jpeg'

function Component(){

    const [cars, setCars] = useState([]);
    const [Year, setYear] = useState(1992);
    const [Make, setMake] = useState("Ford");
    const [Model, setModel] = useState("Mustang");
    function AddCAR(){
        const newcar={year: Year, make:Make, model: Model}
        setCars(cars=>[...cars, newcar])

    }
    function RemoveCAR(index){
        setCars(cars.filter((_,i)=>i!==index));

    }
    const updateYear= (event) =>{
        setYear(event.target.value);
    }
    const updateMake= (event) =>{
        setMake(event.target.value);
    }
    const updateModel= (event) =>{
        setModel(event.target.value);
    }
    return(
        <div className="Ccontainer" >
            <h2>Your Fav. Cars are :{Year} {Make} {Model}</h2>
            <ul>
            {cars.map((car, index)=> <li key={index} onClick={()=>RemoveCAR(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={Year} onChange={updateYear}></input>
            <input type="text" value={Make} onChange={updateMake}></input>
            <input type="text" value={Model} onChange={updateModel}></input>
            <button onClick={AddCAR}>Add Car</button>
        </div>
    );
}
export default Component