import { useEffect, useState } from "react";

export default function Counter({start = 0}){ // {prop}
    const [count, setCount] = useState(start);


    useEffect(()=> {
        setInterval(()=> {
          //  setCount(count +1);
          setCount(currentCount =>{ // we need an  up to date version of "count" in the state to calculate  the next "count"
            return currentCount +1;
          });
            
        },1000);
    },[]);

    return(
        // render counter
        <>
            Counter: {count};


        </>

    );
}