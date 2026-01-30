import { useEffect, useState } from "react"

export default function Timer ({start=0}) {

    const [seconds, setSeconds] = useState(start);
    useEffect(()=>{

        setInterval(()=>{
            setSeconds(prevSeconds => prevSeconds +1);
        },1000);
    },[]);

    return (
        <>
            Seconds Since Componment Mounted: {seconds}  
        </>
    )
}