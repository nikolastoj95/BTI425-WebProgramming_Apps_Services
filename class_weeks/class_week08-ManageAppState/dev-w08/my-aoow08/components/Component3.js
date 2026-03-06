import { CountContext } from "@/pages/_app";
import { useAtom } from "jotai";
import { useContext } from "react";

export default function Component3() {
    console.log("rendering component 3")

    const count = useContext(CountContext);

    // const [count, setCount] = useAtom();
    // still rendering propblem 
    return (
        <>
            <p>Component 3</p><br/>
            <p>Count: {count}</p>
        </>
    )

}