import React, {useEffect, useState} from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserToken, signUserStart, signUserSuccess} from "../../slice/auth";
import AuthService from "../../service/auth";
import NavbarX from "../navbarX/navbarX";
import {GetItem} from "../../helpers/persistance-storage";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);
    const users = useSelector(state => state.auth.user);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signUserStart());
        // console.log("password")
        const user = {email, password};
        try {
            const respons = await AuthService.userLogin(user)
            dispatch(signUserSuccess(respons.data.user))
            console.log(respons)
            navigate('/dashboard')
        } catch (error) {

        }
    };

    // const getUser = async () => {
    //     const respons = await AuthService.getUser();
    //     console.log(respons);
    // }
    //
    // useEffect(() => {
    //     getUser();
    // } , [])


    return (
        <Container className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <Row className=" w-100 justify-content-center align-items-center">

                <Col xs={12} md={6} lg={4} className={'border p-5 pt-4 rounded-3'}>
                    <img
                        src="/logo.png"
                        width="200"
                        height="60"
                        className="d-block mx-auto mb-2"
                        alt="E-Maktab Logo"
                        onClick={() => navigate('/')}
                    />
                    <h2 className="text-center">Kirish</h2>
                    <Form >
                        <Form.Group className={'mt-4'} controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email kiriting"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className={'my-3'} controlId="formPassword">
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
                                onClick={handleSubmit} type="submit" variant={'outline-primary'}
                                className="w-100 my-2 btn-register-color">
                            {
                                isLoading ? "Loading..." : "Kirish"
                            }
                        </Button>
                        <Button onClick={() => navigate('/register')} variant={'outline-primary'} type="submit"
                                className="w-100 btn-register-color ">
                            Ro'yhatdan o'tish
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
