import { useState } from "react";

export default function ClickCounter(){
    const [count, setCount] = useState(0);

    function handleClick(event,message) {
        //console.log("clicked handle")
        setCount(currentCount => currentCount +1);
        //or this one 
        //setCount(count +1); // same as above
        console.log("clicked")
        console.log(event)
        console.log(message)
    }
    return (
        <>
            {/* in html: <button onclick="handleClick()">Clicked {count} Times</button>*/}

            <button onClick={(event)=>handleClick(event,"hello")}>Clicked {count} Times</button>

            {/*keep track how many times button is clicked */}

        </>
    )
}