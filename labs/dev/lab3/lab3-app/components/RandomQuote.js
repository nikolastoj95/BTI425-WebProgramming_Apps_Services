import { useEffect, useState } from "react"

export default function RandomQuote () {
    
    const quotes = [
        "'The only way to do great work is to love what you do.' — Steve Jobs",
        "'In the middle of difficulty lies opportunity.' — Albert Einstein",
        "'Do what you can, with what you have, where you are.' — Theodore Roosevelt",
        "'Happiness depends upon ourselves.' — Aristotle",
        "'Not all those who wander are lost.' — J.R.R. Tolkien"
    ];
    

    const [randomQuote, setRandomQuote] = useState(quotes[0]);

    useEffect(()=>{
        setInterval(()=> {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            
            setRandomQuote(quotes[randomIndex])


        },2000);

    },[]);
    return (
        <>
            <div>
                {randomQuote}  
            </div>

        </>
    )
}