import { useAtom } from 'jotai';
import { usersAtom } from '@/store';
import { Button, Table } from 'react-bootstrap';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const [users, setUsers] = useAtom(usersAtom);

  return (
    <>
      <h2 className='m-3'>Users</h2>
      <Table striped className="table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user.id} onClick={event =>  router.push(`/users/${user.id}`) }>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant='primary' onClick={event => router.push(`/users/add`)}>Add User</Button>

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
