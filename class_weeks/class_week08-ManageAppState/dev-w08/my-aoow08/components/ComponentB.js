import ComponentC from "./ComponentC"

export default function ComponentB({setCount}) {
    console.log("rendering component B")
    return (
        <>
            {/* Component B */}
            <ComponentC setCount={setCount}/>
        </>
    )

}