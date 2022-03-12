import { FormEvent, useState } from "react"
import { sign_in } from "../queries/sign_in"
import { Form, Button } from "react-bootstrap"



export const Signin = () => 
{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const HandleClicked = async (event: FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        console.log(email, password);
        const { data } = await sign_in(email, password);

        console.log(data);

    }

    return (
        <div className="ms-auto">
            <Form onSubmit={HandleClicked}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
    
}
