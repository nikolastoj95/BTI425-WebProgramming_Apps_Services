import { useAtom } from "jotai";

export default function Component3(props) {
    console.log("rendering component 3")
    // const [count, setCount] = useAtom();
    return (
        <>
        Component 3 <br/>
        Value: {props.count}

        </>
    )

}