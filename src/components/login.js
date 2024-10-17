import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import api from "../api";
import { Button, Form, Container,Row,Col } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/login", { email, password });
            console.log("Logged in successfully", res.data);
            setMessage("Logged in successfully");
            setTimeout(() => {
                navigate('/')
            }, 3000);
        } catch (error) {
            console.log("Error logging in", error);
            setMessage("Login failed. Please check your credentials.");
        }
        
    };

    return (
        <Container className="mt-5 bg-primary-subtle rounded-3 border-primary-subtle p-3">
            <h2 className="mb-4">Login</h2>
            {message && <div className="alert alert-danger">{message}</div>}
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formBasicEmail"className="p-2">
                    <Form.Label column sm={2}>Email:</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter a valid email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicPassword"className="p-2">
                    <Form.Label column sm={2}>Password:</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Enter a strong password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                <Link to="/passwordreset" className="btn btn-link">Forget Password?</Link>
            </Form>
            <Outlet />
        </Container>
    );
};

export default Login;
