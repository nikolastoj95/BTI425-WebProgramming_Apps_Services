import { usersAtom } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form"

export default function AddUser() {

    const [users, setUsers] = useAtom(usersAtom);

    const router = useRouter();
    const {register, handleSubmit, setValue, formState: {errors}, } = useForm({
        defaultValues: {
            name: "",
            email: ""
        }
    })
    function processSubmit(data) {
        console.log(data.email)
        const maxId = Math.max(...users.map(user => user.id));  
        const newUser = {id: maxId +1, name: data.name, email: data.email};
        setUsers([...users,newUser]);
        router.push("/")



    }




    return (
      <>
        <h2 className='m-3'>Add an User</h2>
        <Form className="mt-5"  onSubmit={handleSubmit(processSubmit)}>
          <Row>
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
             <Col lg={6}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="headerTitles">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  {...register("email", { required: true })}
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
                Add User
              </Button>
            </Col>
            <br /> <br />
            <Col xs={12}>
              <Button
                variant="primary"
                type="submit"
                className="w-100 py-3 fs-5 mb-3"
                onClick={(event) => router.push("/")}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
}