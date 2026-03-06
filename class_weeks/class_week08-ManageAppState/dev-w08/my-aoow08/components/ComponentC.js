import { countAtom } from "@/store";
import { useAtom } from "jotai"

export default function ComponentC({setCount}) {
    console.log("rendering component C")
    //const [count, setCount] = useAtom(countAtom);
    return (
        <>
            <p>Component C</p><br/>
            {/* Lefting the state up */}
            <button onClick={()=> setCount(currCount => currCount +1)}>Click Me</button>
            <hr/>

        </>
    )

}
