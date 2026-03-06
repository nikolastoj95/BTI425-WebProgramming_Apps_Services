import "@/styles/globals.css";
import { createContext, useState } from "react";

// export const CountContext = createContext() // to 3
// export const SetCountContext = createContext(); // to C
// // this goes in Compoent 3, and C 

export default function App({ Component, pageProps }) {
  // const [count, setCount] = useState(0);
  // put count  state in top of app App // passing state value through props
  return  <Component {...pageProps}  />;
  // return (
  //   <SetCountContext.Provider value={setCount}>
  //     <CountContext.Provider value={count}>
  //       <Component {...pageProps}  />
  //     </CountContext.Provider>

  //   </SetCountContext.Provider>


   
    


  // ) ;
}
