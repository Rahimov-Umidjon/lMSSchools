import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Card, Button, Form, Dropdown, Nav} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {getUserToken} from "../../slice/auth";
import {useNavigate} from "react-router-dom";
import NavbarX from "../navbarX/navbarX";

const Dashboard = (props) => {
    const user  =  useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(user);
    // const [username , setuserName] = useState(user.username);
    // const [email , setEmail] =  useState(user.email);
    // useEffect(() => {
    //     try {
    //
    //         dispatch(getUserToken(user));
    //     }
    //     catch (error) {
    //
    //     }
    // }, []);
    //
    // useEffect(() => {
    //    navigate('/dashboard');
    //
    // }, []);

    return (

        <div className={'wrapper-right'} >
            <div className={'dashboard'}>
                <Row className="mb-4 d-flex align-items-center  ">
                    <Col><h3>Dashboard</h3></Col>
                    <Col className=" d-flex align-items-center justify-content-end">
                        <Dropdown className={'dropdown-content'}>
                            <Dropdown.Toggle
                                as={'button'}
                                className={'dropdown-content px-3 py-1 d-flex align-items-center justify-content-end '}
                                id="dropdown-basic">
                                <img
                                    src="profile.png"
                                    alt="User Avatar"
                                    width="40"
                                    height="40"
                                    className="rounded-circle "
                                />
                                <div className="dropdown-text">
                                    <p className={'m-0 p-0'}>{user ? user.username : ""}</p>
                                    <span className={'m-0 p-0'}>{user ? user.email : ""}</span>
                                </div>
                                <img
                                    className={'ms-3'}
                                    src="bottom.png"
                                    alt="bottom"
                                    width="25"
                                    height="25"
                                />
                            </Dropdown.Toggle>
                            {/*<Dropdown.Menu>*/}
                            {/*    <Dropdown.Item></Dropdown.Item>*/}
                            {/*    <Dropdown.Item>Dashboard 2 </Dropdown.Item>*/}
                            {/*    <Dropdown.Item>Dashboard 3</Dropdown.Item>*/}
                            {/*</Dropdown.Menu>*/}
                        </Dropdown>
                    </Col>
                </Row>

                {/* Stats */}
                <Row className="mb-4 ">
                    <Col md={3}><Card body className="text-center">389<br/><small>Darsni
                        o'zlashtirish</small></Card></Col>
                    <Col md={3}><Card body className="text-center">2,721<br/><small>Uy vazifasi
                        o'zlashtirish </small></Card></Col>
                    <Col md={3}><Card body className="text-center">88%<br/><small>Hafatlik o'zlashtirish</small></Card></Col>
                    <Col md={3}><Card body className="text-center">88%<br/><small>Davomat</small></Card></Col>

                </Row>

                {/* Yangiliklar*/}
                <Row className="mb-4">
                    <Col><h5>Yangiliklar</h5></Col>
                </Row>
                <Row className="mb-4">
                    <Col md={6}>
                        <Card body>
                            <h6>Create new individual survey</h6>
                            <p className="text-muted">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card>

                    </Col>
                    <Col md={6}>
                        <Card body>
                            <h6>Create new survey series</h6>
                            <p className="text-muted">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={6}>
                        <Card body>
                            <h6>Create new individual survey</h6>
                            <p className="text-muted">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card>

                    </Col>
                    <Col md={6}>
                        <Card body>
                            <h6>Create new survey series</h6>
                            <p className="text-muted">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={6}>
                        <Card body>
                            <h6>Create new individual survey</h6>
                            <p className="text-muted">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card>

                    </Col>
                    <Col md={6}>
                        <Card body>
                            <h6>Create new survey series</h6>
                            <p className="text-muted">Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card>
                    </Col>
                </Row>

                {/* Active Survey */}
                <h5>Active survey</h5>
                <Card className="mb-4">
                    <Card.Body>
                        <Row className="fw-bold text-muted mb-2">
                            <Col>Name</Col>
                            <Col>Response Rate</Col>
                            <Col>Respondents</Col>
                            <Col>Deadline</Col>
                        </Row>
                        <Row>
                            <Col>Lorem ipsum dolor sit...</Col>
                            <Col>
                                <div className="progress">
                                    <div className="progress-bar bg-info" style={{width: '44%'}}>44%</div>
                                </div>
                            </Col>
                            <Col>235</Col>
                            <Col>01/04/2024</Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Recent Surveys */}
                <Row>
                    <Col><h5>Recent surveys</h5></Col>
                    <Col className="text-end"><Button variant="light">View all</Button></Col>
                </Row>
                <Card className="mb-4">
                    <Card.Body>
                        {[...Array(3)].map((_, i) => (
                            <Row key={i} className="mb-2">
                                <Col>Lorem ipsum dolor sit...</Col>
                                <Col>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" style={{width: '44%'}}>44%</div>
                                    </div>
                                </Col>
                                <Col>235</Col>
                                <Col>01/04/2024</Col>
                            </Row>
                        ))}
                    </Card.Body>
                </Card>

                 Right side column
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <h6>All Survey Series</h6>
                                {[...Array(4)].map((_, i) => (
                                    <Row key={i} className="mb-2 align-items-center">
                                        <Col>Marketing 101</Col>
                                        <Col xs="auto"><span className="text-primary">✔</span></Col>
                                    </Row>
                                ))}
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="d-flex align-items-center">
                                <div className="me-3">
                                    <h6>Questions?</h6>
                                    <p className="text-muted small">Explore features, watch tutorials or contact
                                        support.</p>
                                    <Button variant="outline-primary" size="sm">Reach out</Button>
                                </div>
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png" alt="Help"
                                         width="60"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>


    )
}

export default Dashboard;