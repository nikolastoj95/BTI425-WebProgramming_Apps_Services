import { useEffect, useState } from "react";

export default function Clock ({locale="en-CA"}) {
    // const dateGetterAndSetter =   useState(new Date()); // pass in useState is the starter value

    // const dateGetter = dateGetterAndSetter[0];
    // const dateSetter = dateGetterAndSetter[1];

    // same as above

    const [date, setDate] = useState(null);

    // add value of date once componnt is mounted

    useEffect(()=> { // only runs when the component is "mounted"
         setDate(new Date()); // if changed this will re run

         let myInterval = setInterval(()=> {
            setDate(new Date());
         }, 1000) // 1000 ms after set new Date

         return () => { // clean up step
            clearInterval(myInterval)

         }




     },[]);


    // let date = new Date();

    return (
        <>
        {/* TO DO: Render Clock with Locale: {locale}
           {/*{date?.toLocaleTimeString(locale)} */}  
        {date?.toLocaleTimeString(locale)}
        {/*update time once every second */}


        </>
    )
}