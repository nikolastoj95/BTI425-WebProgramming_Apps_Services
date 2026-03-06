import { SetCountContext } from "@/pages/_app";
import { countAtom } from "@/store";
import { useAtom } from "jotai"
import { useContext } from "react";

export default function ComponentC() {
    console.log("rendering component C")
    // C is to update it  SetCOunt

    // const setCount = useContext(SetCountContext);
    //value of this setCount , is whatever is in _app.js set there 
    //modifying atom
    const [count, setCount] = useAtom(countAtom); // countatom atom exported
    return (
        <>
            <p>Component C</p><br/>
            {/* Lefting the state up */}
            <button onClick={() => {setCount(count +1)} }>Click Me</button>
            <hr/>

        </>
    )

}
