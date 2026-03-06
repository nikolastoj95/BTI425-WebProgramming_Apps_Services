import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0);
  // put count  state in top of app App // passing state value through props
  return <Component {...pageProps} count={count} setCount={setCount} />;
}
