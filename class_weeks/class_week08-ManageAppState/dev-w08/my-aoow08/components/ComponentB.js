import ComponentC from "./ComponentC"

export default function ComponentB() {
    console.log("rendering component B")
    return (
        <>
            {/* Component B */}
            <ComponentC />
        </>
    )

}