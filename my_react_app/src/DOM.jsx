import React, {useState, useEffect} from 'react'

function DOM(){

    const [width, setwidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", Resize);
        console.log("ADDED");
    }, []);
    function Resize(){
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }
    return(
        <>
        <h2>Window Width: {width}px</h2>
        <h2>Window Height: {height}px</h2>
        </>
    );
}

export default DOM