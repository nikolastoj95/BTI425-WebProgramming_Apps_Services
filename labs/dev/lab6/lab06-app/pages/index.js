import { useAtom } from 'jotai';
import usersData from '.././data/users.json';
import { usersAtom } from '@/store';
import { Table } from 'react-bootstrap';


export default function Home() {
  const [users, setUsers] = useAtom(usersAtom);
  console.log(users)
     
  return (
    <>
      <Table striped className="table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
          ))}
          <tr>
            <td>1</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </Table>

      {/* <table>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>

          </tbody>
         
         
          
        </table>
       */}
    </>
  );
}
