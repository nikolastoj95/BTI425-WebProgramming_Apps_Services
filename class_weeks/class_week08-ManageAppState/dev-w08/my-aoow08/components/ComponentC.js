import { SetCountContext } from "@/pages/_app";
import { countAtom } from "@/store";
import { useAtom } from "jotai"
import { useContext } from "react";

export default function ComponentC() {
    console.log("rendering component C")

    const setCount = useContext(SetCountContext);
    //value of this setCount , is whatever is in _app.js set there 

    //const [count, setCount] = useAtom(countAtom);
    return (
        <>
            <p>Component C</p><br/>
            {/* Lefting the state up */}
            <button onClick={() => {setCount(currCount => currCount +1 )}} >Click Me</button>
            <hr/>

        </>
    )

}
