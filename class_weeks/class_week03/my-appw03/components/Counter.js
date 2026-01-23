import { useEffect, useState } from "react"

export default function Counter({start = 0}){ // {prop}
    const [count, setCount] = useState(start);

    useEffect(()=> {
        setInterval(()=> {
          //  setCount(count +1);
          setCount(currentCount =>{
            return currentCount +1;
          })
            
        },1000);
    },[]);

    return(
        <>
            Counter: {count};


        </>

    );
}