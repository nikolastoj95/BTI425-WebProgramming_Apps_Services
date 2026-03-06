import ComponentB from "./ComponentB"

export default function ComponentA({setCount}) {
    console.log("rendering component A")
    return (
        <>
            {/* ComponentA */}
            <ComponentB setCount={setCount}/>

        </>
    )

}