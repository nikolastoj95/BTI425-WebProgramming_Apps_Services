import PageHeader from "@/components/PageHeader";
import registerUser from "@/lib/authenticate";

import { useRouter } from "next/router";
import { useState } from "react";
import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";

export default function Register(){

    const router = useRouter();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [password2,  setPassword2] =useState('');
    const [message,setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await registerUser(user,password,password2);
            console.log("logged in");
            router.push(`/login`);
            //redirect to login page
            
        } catch (err) {
            // error on backend 
            console.log(err.message)
            setMessage(err.message)
        }
       
        console.log(`TODO: Submit Form userName is ${user} and password is ${password} `)
    };

    
    
    return (
      <>
        <PageHeader text={<h1 class="display-3">Register</h1>} subtext={<p className="lead">Register for an account: </p>} />
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
          <Form.Group>
            <Form.Label>Password 2:</Form.Label>
            <Form.Control
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              id="password2"
              name="password2"
            />
          </Form.Group>
          <br/>
          <Button variant="primary" className="pull-right" type="submit">
            Register
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