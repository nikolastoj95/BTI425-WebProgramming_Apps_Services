// import { useEffect, useState } from "react"



// export default function Post(){
//     // no props
//     //pull data from API and render here on page

//     const [data, setData] = useState(null); // no default value

//     useEffect( ()=>{
//         // can not be async
//         // async is returning a promise, useEffect can not do that
//          fetch ("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()).then(data => {
//             setData(data);
//             console.log(data);
//          });
         
        
       
//     },[]);


//     return (
//         <>
//             <strong>User ID:</strong>{data?.userId}<br /> {/*if data is false, it will not read, render anything */}
//             <strong>Title:</strong>{data?.title}<br />
//             <p><strong>Body:</strong>{data?.body}</p>
//         </>
//     )
// }

//use SWR Instead: (with error and isLoading)

import useSWR from 'swr';

// define the "fetcher" function.  This Can also be defined globally using SWRConfig (https://swr.vercel.app/docs/global-configuration)
const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function Post(){
    // no props
    //pull data from API and render here on page

   //const swrObject= useSWR("https://jsonplaceholder.typicode.com/posts/1", fetcher)

   //let data = swrObject.data;
   // with destructering
   const {data,error,isLoading}= useSWR("https://jsonplaceholder.typicode.com/posts/1", fetcher)

   if (isLoading) {
        return (
            <>
                Loading....
            </>
        );
   } else {
        if (error) {
        return (
            <>
                <strong>There is a error fetching your data</strong>
            </>
        ) 
    } else {
         return (
        <>
            <strong>User ID:</strong>{data?.userId}<br /> {/*if data is false, it will not read, render anything */}
            <strong>Title:</strong>{data?.title}<br />
            <p><strong>Body:</strong>{data?.body}</p>
        </>
    );

    }

   }

    

    


   
}

