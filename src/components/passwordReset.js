
import { useState } from "react";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Container, Row,Col } from 'react-bootstrap';

const ResetPassword = () => {
    const [newpassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const { Token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post(`/resetpassword/${Token}`, { newpassword });
            console.log("reset successfull",res.data);
            setMessage("Password reset successful!,directing to loginpage")
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        } catch (error) {
            console.log("Error resetting password", error);
            setMessage("Password reset failed. Please try again.");
        }
    };
     
    return (
        <Container className="mt-5 bg-primary-subtle rounded-3 border-primary-subtle p-3">
            <h1 className="mb-4">Reset Your Password</h1>
            {message && <div className="alert alert-danger">{message}</div>}
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label column sm={2}>New Password:</Form.Label>
                    <Col sm={10}>
                    <Form.Control
                        type="password"
                        value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">Reset Password</Button>
            </Form>
        </Container>
    );
};

export default ResetPassword;
