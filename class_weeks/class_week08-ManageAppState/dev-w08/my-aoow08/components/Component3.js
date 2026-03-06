import { useAtom } from "jotai";

export default function Component3({count}) {
    console.log("rendering component 3")
    // const [count, setCount] = useAtom();
    return (
        <>
        <p>Component 3</p><br/>
        <p>Count: {count}</p>

        </>
    )

}