import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, ProgressBar, ListGroup, Dropdown } from "react-bootstrap";
import { BsPlusCircle, BsCheckCircle } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";


const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                {/* Sidebar */}
                <Col md={2} className="bg-dark text-white min-vh-100 p-3">
                    <h4 className="mb-4">BoundaryAi 🚀</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="bg-dark text-white">📊 Dashboard</ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-white">📄 Survey series</ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-white">📋 Surveys</ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-white">⚙️ Settings</ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-white">🌍 Language</ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-white">❓ Help</ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-white">🚪 Sign out</ListGroup.Item>
                    </ListGroup>
                </Col>

                {/* Main Content */}
                <Col md={10} className="p-4">
                    {/* Header */}
                    <Row className="mb-3 align-items-center">
                        <Col><h2>Dashboard</h2></Col>
                        <Col className="text-end">
                            <FaUserCircle size={30} className="me-2" />
                            John Doe
                        </Col>
                    </Row>

                    {/* Stats */}
                    <Row>
                        <Col md={4}><Card className="p-3 text-center"><h5>📊 389</h5><p>Total surveys</p></Card></Col>
                        <Col md={4}><Card className="p-3 text-center"><h5>📩 2,721</h5><p>Total responses</p></Card></Col>
                        <Col md={4}><Card className="p-3 text-center"><h5>✅ 88%</h5><p>Avg. completion rate</p></Card></Col>
                    </Row>

                    {/* Quick Start */}
                    <Card className="p-3 mt-4">
                        <h5>Quick Start</h5>
                        <Row>
                            <Col md={6}><Card className="p-3"><h6>Create new individual survey ➡️</h6></Card></Col>
                            <Col md={6}><Card className="p-3"><h6>Create new survey series ➡️</h6></Card></Col>
                        </Row>
                    </Card>

                    {/* Active Surveys */}
                    <Card className="p-3 mt-4">
                        <h5>Active Surveys</h5>
                        <Row className="mt-2">
                            <Col md={3}><p>Lorem ipsum dolor...</p></Col>
                            <Col md={3}><ProgressBar now={44} label={`44%`} /></Col>
                            <Col md={3}><p>235</p></Col>
                            <Col md={3}><p>01/04/2024</p></Col>
                        </Row>
                    </Card>

                    {/* Survey List */}
                    <Card className="p-3 mt-4">
                        <h5>All Survey Series</h5>
                        <Dropdown>
                            <Dropdown.Toggle variant="light">New +</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Marketing 101</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <ListGroup className="mt-3">
                            <ListGroup.Item>Marketing 101 <BsCheckCircle className="text-success float-end" /></ListGroup.Item>
                            <ListGroup.Item>Marketing 101 <BsCheckCircle className="text-success float-end" /></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;