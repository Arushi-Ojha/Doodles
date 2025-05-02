import React, {useState} from 'react'

function MyComponent(){

    const [foods, setFood] = useState(["Apple","Orange","Pineapple"]);
    function AddFood(){
        const newFood= document.getElementById("Nfood").value;
        document.getElementById("Nfood").value="";  
        setFood([...foods, newFood]);
    }
    function RemoveFood(index){
        setFood(foods.filter((_, i)=>i!==index));
    }
    return(
        <div className="Fname">
            <h2>List Of Foods</h2>
            <ul>
                {foods.map((food,index)=> <li key={index} onClick={()=>RemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" placeholder="Enter Food" id="Nfood"></input>
            <button onClick={AddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent