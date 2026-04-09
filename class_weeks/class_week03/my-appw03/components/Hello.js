export default function Hello(/*props*/{message, exclamation ="!", something}) { // object destructing 
   
   //up in { can add default value excalmation ="!"}
    return (
        <>
            <p>{message}{exclamation}{something}</p>

        </>

    )
}