import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Hello from "@/components/Hello";
import Clock from "@/components/Clock";
import Counter from "@/components/Counter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  let message = "Hello World!";
  return (
    
    // <div>
    //     <p>Hello World</p>
    //     <p>BTI425</p>
    //     {/* only one parent element */}
    // </div>
    <>
      <Counter /> <br />
      <Counter start={5} /> {/* as number put {number} */}
      <Clock />
      <Hello message="Hello BTI 425" exam="!!!!!"/>
      <p>{message}</p>
      <br />
      <hr />
      
      <p className= "red">BTI425</p>
      

      {/* only one parent element */}
    </>
    

  )

  
}
