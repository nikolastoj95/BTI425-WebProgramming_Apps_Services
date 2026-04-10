import { isAuthenticated } from "@/lib/authenticate";
import { getFavourites } from "@/lib/userData";
import { favouritesAtom } from "@/store";
import { useAtom } from "jotai";
import {  useRouter } from "next/router";
import { useEffect, useState } from "react";

const PUBLIC_PATHS = ['/login', '/_error', '/register', '/about'];

//process.env.

export default function RouteGuard({children}) {

    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();

    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);

    async function updateAtom () {
        setFavouritesList(await getFavourites());   
    }

    useEffect(()=>{
        // console.log('calling useEffect')
        // when app first mounts
        updateAtom();
        authCheck(router.pathname); // check that we're not requesting a secure path  on page load
        router.events.on("routeChangeComplete", authCheck/*url=>{}*/) // wring up the routeChangeComplete event

        return () => {
            router.events.off ("routeChangeComplete", authCheck);
        }
    },[]);

    


    function authCheck(url) {
        
      const path = url.split("?")[0];
      if (!isAuthenticated() && !PUBLIC_PATHS.includes(path)) {
        // if url not in public paths
        // when page first loads this happens
        // console.log(`trying to request a secure path: ${path}`);
        setAuthorized(false); 
        router.push("/login");
      } else {
        setAuthorized(true);
      }
    }


    return(
        <>
            {/* logic will here apply to all routes */}
            {authorized && children}
        </>
    )
}