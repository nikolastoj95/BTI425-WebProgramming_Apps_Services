import { useEffect, useState } from "react";

export default function Clock ({locale="en-CA"}) {
    // const dateGetterAndSetter =  useState(new Date()); // pass in useState is the starter value

    // const dateGetter = dateGetterAndSetter[0];
    // const dateSetter = dateGetterAndSetter[1];

    // same as above

    const [date, setDate] = useState(null);

    useEffect(()=> { // only runs when the component is "mounted"
        setDate(new Date());
    })


   // let date = new Date();

    return (
        <>
            {date?.toLocaleTimeString(locale)}
            

        </>
    )
}