import Layout from "@/components/Layout";
import { SWRConfig } from 'swr';
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  };
  return <SWRConfig value={{fetcher}}><Layout><Component {...pageProps} /> </Layout></SWRConfig>;
}
