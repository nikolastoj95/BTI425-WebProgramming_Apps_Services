import { countAtom } from "@/store";
import { useAtom } from "jotai"

export default function ComponentC(props) {
    console.log("rendering component C")
    //const [count, setCount] = useAtom(countAtom);
    return (
        <>
            Component C
           
            <button onClick={(e)=> props.setCount(n=>n+1)}>Click Me Increase Value </button>

        </>
    )

}
