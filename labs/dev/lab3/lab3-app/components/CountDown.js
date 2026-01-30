import { useEffect, useState } from "react"

export default function CountDown({start=10}) {

    const [countDecr, setCountDecr] = useState(start);

    useEffect(()=> {
        let interval = setInterval(()=>{
            setCountDecr(prevSeconds => prevSeconds < 1  ? clearInterval(interval) : prevSeconds -1 )

        },1000)
        return () => {
            clearInterval(interval)
        }
    },[]);


    return (
        <>
            Count Down From: {start} {countDecr}

        </>
    )
}