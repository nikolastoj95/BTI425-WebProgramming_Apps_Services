import { useEffect, useState } from "react"

export default function ColorBox({color}) {

    const [currentColor , setCurrentColor ] = useState(color);

    useEffect (() => {
       let myInterval =  setInterval(()=>{
            setCurrentColor(pevColor => {
                if (pevColor === color) {
                    return "black"
                } else {
                    return color
                }
                
            })
        },2000)
        return () => {
            clearInterval(myInterval)
        }

    },[color]);



    return (
        <>
            <div 
                style={{ backgroundColor: currentColor, width: '100px', height: '100px' }}
                >


            </div>

        </>
    )
}