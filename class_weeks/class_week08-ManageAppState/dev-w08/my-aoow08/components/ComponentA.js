import ComponentB from "./ComponentB"

export default function ComponentA() {
    console.log("rendering component A")
    return (
        <>
            {/* ComponentA */}
            <ComponentB />

        </>
    )

}