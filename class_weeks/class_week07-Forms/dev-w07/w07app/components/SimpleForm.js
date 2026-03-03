import { useState } from "react";

export default function SimpleForm(){
    // Controlled Componets
    const [userName, setUserName] = useState("Nikola Stojanovic");

    function processSubmit (e) {
        e.preventDefault();
        console.log("Process Form")
        let formData = {
            userName: userName
        }

        console.log(JSON.stringify(formData))
    }
    return (
        <>

            {userName} <br />
           <form onSubmit={processSubmit}>
                User Name: <br />
                <input type="text" name="userName" value={userName}  onChange={e=>{setUserName(e.target.value)}}/> <br/><br/>
                {/* form field back to state */}
                <button type="submit">Submit</button>

           </form>
        </>
    )
}