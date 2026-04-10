import Layout from "@/components/Layout";
import { SWRConfig } from 'swr';
import "@/styles/globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/bootstrap.min.css';
import RouteGuard from "@/components/RouteGuard";

export default function App({ Component, pageProps }) {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  };
  return <RouteGuard><SWRConfig value={{fetcher}}><Layout><Component {...pageProps} /> </Layout></SWRConfig></RouteGuard> ;
}
