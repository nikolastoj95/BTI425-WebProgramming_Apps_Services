import Component2 from "./Component2"

export default function Component1({count}) {
    console.log("rendering component 1")
    return (
        <>
            {/* Component 1 */}
            <Component2  count={count}/>

        </>
    )

}