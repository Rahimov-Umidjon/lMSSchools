import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signUserStart, signUserSuccess} from "../../slice/auth";
import AuthService from "../../service/auth";



const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {username, email, password};
        dispatch(signUserStart());
        try {
            const response = await AuthService.userRegister(user);
            dispatch(signUserSuccess(response.data.user));
            // console.log(response.data);
            navigate("/dashboard");

        }catch (error) {

        }

        // Ro'yxatdan o'tish formasi yuborilishi
    };



    return (
        <Container className="w-100 vh-100 d-flex justify-content-center align-items-center"   >
            <Row className=" w-100 justify-content-center align-items-center"  >
                <Col xs={12} md={6} lg={4} className={'border  p-5 pt-4 rounded-3'}>
                    <img
                        src="/logo.png"
                        width="200"
                        height="60"
                        className="d-block mx-auto mb-2"
                        alt="E-Maktab Logo"
                        onClick={() => navigate('/')}
                    />
                    <h2 className="text-center">Ro'yxatdan o'tish</h2>
                    <Form >
                        <Form.Group className={'mt-4'} controlId="formUsername">
                            <Form.Label>Foydalanuvchi nomi</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Foydalanuvchi nomini kiriting"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}

                            />
                        </Form.Group>

                        <Form.Group className={'my-3'} controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email kiriting"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </Form.Group>

                        <Form.Group className={'mb-4'} controlId="formPassword">
                            <Form.Label>Parol</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Parol kiriting"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </Form.Group>

                        <Button
                            style={
                                isLoading ? {background: "#3E84A8", color:'white'} : {}
                            }
                            onClick={handleSubmit} variant={'outline-primary'} type="submit" className="w-100 mb-2 btn-register-color">
                            {
                                isLoading ? "Loading..." : "Ro'yxatdan o'tish"
                            }
                        </Button>
                        <Button onClick={() => navigate('/login')} variant={'outline-primary'} type="submit"
                                className="w-100 btn-register-color">
                            Kirish
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
