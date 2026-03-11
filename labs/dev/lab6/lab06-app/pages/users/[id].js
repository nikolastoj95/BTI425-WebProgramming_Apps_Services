import { usersAtom } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function UserID() {
    const router = useRouter();
    const{id}= router.query;
    //const userId = Number(id)
    
    // console.log(id +  " here")
    // console.log(userId +  " here")
    // console.log(typeof id)
    // console.log(typeof userId)
    const [users, setUsers] = useAtom(usersAtom);
    console.log(users)

    const {register, handleSubmit, setValue, formState: {errors}, } = useForm({
        defaultValues: {
            id: 0,
            name: "",
            email: ""
        }
    });

    useEffect(()=> {
       //if (!id || !users?.length) return;

        let data = {
            id : users[id-1]?.id,
            name: users[id -1]?.name,

            email: users[id -1]?.email
        }
        for (const prop in data ) {
            setValue(prop, data[prop])
        }


    },[id, users, setValue]);

    function processSubmit (data) {
        console.log(data)
        const updatedUser = users.map ((user) =>
            user.id === Number(id) ? { ...user, ...data} : user
        )
        setUsers(updatedUser);
        router.push("/");
    }
   
   
    return (
      <>
        <Form onSubmit={handleSubmit(processSubmit)}>
          <Row>
          <Col xs={12}>
            <FormGroup controlId="formID" className="mb-3">
                 <Form.Label className="headerTitles">ID</Form.Label>
                <Form.Control
                    className={errors.author && "is-invalid"}
                    type="number"
                    readOnly
                    {...register("id", { required: true })}
                />


            </FormGroup>

          </Col>
            <Col xs={12}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="headerTitles">Name</Form.Label>
                <Form.Control
                  className={errors.name && "is-invalid"}
                  type="text"
                  placeholder="Enter Name"
                  {...register("name", { required: true })}
                />
                {errors.name?.type == "required" && (
                  <>
                    <span className="formError">Name Required!</span>
                  </>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="headerTitles">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  {...register("email", {required: true })}
                />
                {errors.email?.type == "required" && (
                  <>
                    <span className="formError">Email Required!</span>
                  </>
                )}
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="mb-3">
            <Col xs={12}>
              <Button
                variant="primary"
                type="submit"
                className="w-100 py-3 fs-5 mb-3"
                
              >
                Save
              </Button>
            </Col>
            <br /> <br/>
             <Col xs={12}>
              <Button
                variant="primary"
                type="submit"
                className="w-100 py-3 fs-5 mb-3"
                onClick={event => router.push("/")}
              >
                Cancel
              </Button>
            </Col>
          </Row>
          
         
        </Form>
      </>
    );
}