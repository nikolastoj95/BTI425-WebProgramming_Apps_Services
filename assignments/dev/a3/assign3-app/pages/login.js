import PageHeader from "@/components/PageHeader";
import { authenticateUser } from "@/lib/authenticate";
import { getFavourites } from "@/lib/userData";
import { favouritesAtom } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useState } from "react";
import { Alert, Button, Form, } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Login(){

    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
    const router = useRouter();

    const [message,setMessage] = useState('');

     const {register, handleSubmit , formState: {errors}} = useForm({});

    async function loginSubmit(data) {
        console.log(data)
        try {
            await authenticateUser(data.user,data.password);
            console.log("logged in");
            await updateAtom();
            router.push(`/`)
            
        } catch (err) {
            console.log(err.message)
            setMessage(err.message)
        }
    };

    async function updateAtom () {
        setFavouritesList(await getFavourites());   
    }
    
    return (
      <>
        <PageHeader text={<h1 class="display-3">Login</h1>} subtext={<p className="lead">Enter Login Information Below </p>} />
        <Form onSubmit={handleSubmit(loginSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label >User:</Form.Label>
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