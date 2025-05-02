import React, {useState} from 'react'

function ColorPicker(){
const [color, setColor] = useState("#000000");

const updateColor= (event) => {
    setColor(event.target.value);
}


return(
    <div className="CPcontainer" style={{backgroundColor: color}}>
        <h2>Colour Picker</h2>
        <div>
        <h4>Selected Colour: {color}</h4>
        <label>pick</label>
        <input type="color" value={color} onChange={updateColor}></input>
        </div>

    </div>
);
}

export default ColorPicker