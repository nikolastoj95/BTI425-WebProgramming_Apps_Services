import PageHeader from "@/components/PageHeader";
import registerUser from "@/lib/authenticate";

import { useRouter } from "next/router";
import { useState } from "react";
import { Alert, Button, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Register(){

    const router = useRouter();
    const [message,setMessage] = useState('');
    const {register, handleSubmit , formState: {errors}} = useForm({
                
      });

    async function registerSubmit(data) {
        try {
            await registerUser(data.user,data.password,data.password2);
            console.log("logged in");
            router.push(`/login`);
            //redirect to login page
            
        } catch (err) {
            // error on backend 
            console.log(err.message)
            setMessage(err.message)
        }
    };

    
    
    return (
      <>
        <PageHeader text={<h1 class="display-3">Register</h1>} subtext={<p className="lead">Register for an account: </p>} />
        <Form onSubmit={handleSubmit(registerSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>User:</Form.Label>
            <Form.Control
              className={errors.user && 'is-invalid'}
              type="text"
              {...register('user',{required:true})}
             
            />
            {errors.user?.type === 'required' && <><span className="formError"> This Field is Required!</span></>}
          </Form.Group>
         
          <Form.Group className="mb-3">
            <Form.Label >Password:</Form.Label>
            <Form.Control
              className={errors.password && 'is-invalid'}
              type="password"
              {...register('password',{required:true})}
            />
            {errors.password?.type === 'required' && <><span className="formError"> This Field is Required!</span></>}
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label >Re-Enter Password:</Form.Label>
            <Form.Control
              className={errors.password2 && 'is-invalid'}
              type="password"
              {...register('password2',{required:true})}
            />
            {errors.password2?.type === 'required' && <><span className="formError"> This Field is Required!</span></>}
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