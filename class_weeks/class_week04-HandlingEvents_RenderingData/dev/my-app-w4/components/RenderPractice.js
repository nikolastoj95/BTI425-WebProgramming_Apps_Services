import { useState } from "react";

export default function RenderPratice(){
    const [users, setUsers] = useState([
      { user: "fred", active: false, age: 40 },
      { user: "pebbles", active: false, age: 1 },
      { user: "barney", active: true, age: 36 },
    ]);

    return (
      <>
        {users[0].active && <>{users[0].user} is active</>} <br />
        {/* "if" example  */}
        {/* && - evulates before && if it is truthy then it evulates after &&  if it is falusly it does not brother evualte anything */}
        {/* "if/else" example */}
        {users[0].active ? (
          <>{users[0].user} is active</>
        ) : (
          <>{users[0].user} is InActive</>
        )}
        <br /> <br />
        {/* "looping example" */}
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Actve</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr key={index} >
                        <td>{user.user}</td>
                        <td>{user.active ? <>Yes</> : <>No</>}</td> 
                        {/* not rendering active cause it is boolean */}
                        <td>{user.age}</td>
                    </tr>

                ))}


            </tbody>
        </table>
      </>
    );


}