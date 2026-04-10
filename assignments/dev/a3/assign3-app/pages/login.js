import PageHeader from "@/components/PageHeader";
import { authenticateUser } from "@/lib/authenticate";
import { getFavourites } from "@/lib/userData";
import { favouritesAtom } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useState } from "react";
import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";

export default function Login(){

    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
    const router = useRouter();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await authenticateUser(user,password);
            console.log("logged in");
            //redirect to vechile to veciles route

            await updateAtom();
            router.push(`/`)
            
        } catch (err) {
            console.log(err.message)
            setMessage(err.message)
        }
       
        console.log(`TODO: Submit Form userName is ${user} and password is ${password} `)
        
    };

    async function updateAtom () {
        setFavouritesList(await getFavourites());   
    }
    
    return (
      <>
        {/* <Card bg="light">
          <Card.Body>
            <h2>Login</h2>Enter your login information below:
          </Card.Body>
        </Card>
        <br /> */}
        <PageHeader text={<h1 class="display-3">Login</h1>} subtext={<p className="lead">Enter Login Information Below </p>} />
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>User:</Form.Label>
            <Form.Control
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              id="userName"
              name="userName"
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
          </Form.Group>
          <br />
          <Button variant="primary" className="pull-right" type="submit">
            Login
          </Button>
        </Form>
        {message && (
          <>
            <br />
            <Alert variant="danger">{message}</Alert>
          </>
        )}
      </>
    );
}