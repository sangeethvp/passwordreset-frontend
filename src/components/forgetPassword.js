import { useState } from "react";
import api from "../api";
import { Button, Form, Container, Row,Col } from 'react-bootstrap';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const[message,setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/passwordreset', { email });
            console.log("Password reset request sent", res.data);
            setMessage('request mail sent')
        } catch (error) {
            console.log("Error resetting password", error);
        }
    };

    return (
        <Container className="mt-5 bg-primary-subtle rounded-3 border-primary-subtle p-3">
            <h1 className="mb-4">Enter Your Email</h1>
            {message && <div className="alert alert-danger">{message}</div>}
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label column sm={2}>Email:</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter the registered email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit"className="bg-dark bg-gradient border-bg-dark">Reset Password</Button>
            </Form>
        </Container>
    );
};

export default ForgetPassword;
