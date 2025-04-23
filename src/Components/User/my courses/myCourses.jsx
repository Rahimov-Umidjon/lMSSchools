import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, Col, Dropdown, Row, Carousel} from "react-bootstrap";
import NavbarX from "../../navbarX/navbarX";
import {useDispatch, useSelector} from "react-redux";
import {CarouselSchool, CarouselTeacher} from "../../CarouselImg/carousel";
import alert from "bootstrap/js/src/alert";
import AuthService from "../../../service/auth";
import {
    getLeadershipSuccess,
    getTeachersFailure,
    getTeachersStart,
    getTeachersSuccess
} from "../../../slice/allTeachers";
import Modal from "react-bootstrap/Modal";
import {useNavigate} from "react-router-dom";


function MyCourses(props) {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getTeacherLeadership = async () => {
        dispatch(getTeachersStart());
        try {
            const teachers = await AuthService.getAllTeachers();
            const leadership = await AuthService.getAllLeadership()
            dispatch(getTeachersSuccess(teachers.data));
            dispatch(getLeadershipSuccess(leadership.data));

        }catch (error) {
            console.log(error);
            dispatch(getTeachersFailure(error));
        }
    }

    useEffect(() => {
        getTeacherLeadership()
    }, []);



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className={'wrapper-right'}>
            <Row className="my-school m-0 py-3 d-flex align-items-center ">
                <Col><h3>Menig maktabim</h3></Col>
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
                                <p className={'m-0 p-0'}>{user ? user.email : ""}</p>
                            </div>
                            <img
                                className={'ms-3'}
                                src="bottom.png"
                                alt="bottom"
                                width="25"
                                height="25"
                            />
                        </Dropdown.Toggle>

                    </Dropdown>
                </Col>
            </Row>

            {/* carousel */}

            <Row className="wrapper-carusel my-school py-2 mx-0 my-3 d-flex align-items-center justify-content-between">
                <Col md={6} className={'p-3  '}>
                    <h5>Buxoro viloyati Shofirkon tumani <br/>38-Umumta'lim maktabi</h5>
                    <p>
                        Buxoro Viloyati, Shafirkan
                    </p>
                    <Button variant="outline-primary btn-color" className={'btn-color'}>Batafsil</Button>
                </Col>
                <Col md={6}>
                    <CarouselSchool/>
                </Col>
            </Row>


            {/*  Tadbirlar  */}

            <Row className={'events my-school m-0 p-3 w-100 d-flex align-items-center justify-content-between'}>
                <div className={'event '}>
                    <h5>10-mart</h5>
                    <h6>sport musobaqasi</h6>
                    <div className={'d-flex align-items-center justify-content-between'}>
                        <small>Sport zal</small>
                        <small style={{cursor: 'pointer'}} onClick={handleShow}>batafsil</small>
                    </div>
                </div>
                <div className={'event'}>
                <h5>10-mart</h5>
                    <h6>sport musobaqasi</h6>
                    <div className={'d-flex align-items-center justify-content-between'}>
                        <small>Sport zal</small>
                        <small style={{cursor: 'pointer'}} onClick={handleShow}>batafsil</small>
                    </div>
                </div>
                <div className={'event '}>
                <h5>10-mart</h5>
                    <h6>sport musobaqasi</h6>
                    <div   className={'d-flex align-items-center justify-content-between'}>
                        <small>Sport zal</small>
                        <small style={{cursor:'pointer'}} onClick={handleShow}  >batafsil</small>
                    </div>
                </div>
            </Row>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Maktab galleryasi */}

            <Row className={'gallery my-school mx-0 my-3  w-100 p-3 '}>
                <div className={'d-flex pb-2 align-items-center justify-content-between  '}>
                    <h3> Gallery </h3>
                    <p className={'m-0'} onClick={()=> navigate('/school-gallery')}>Batafsil</p>
                </div>
                <Col lg={3} md={4} ms={6} className={'gallery   '}>
                    <img style={{width: "100%"}} src="school3.webp" alt="84521"/>
                </Col>
                <Col lg={3} md={4} ms={6} className={'gallery   '}>
                    <img style={{width: "100%"}} src="school3.webp" alt="84521"/>
                </Col>
                <Col lg={3} md={4} ms={6} className={'gallery   '}>
                    <img style={{width: "100%"}} src="school3.webp" alt="84521"/>
                </Col>
                <Col lg={3} md={4} ms={6} className={'gallery  '}>
                    <img style={{width: "100%"}} src="school3.webp" alt="84521"/>
                </Col>

                <div className={'d-flex py-3 align-items-center justify-content-start gap-3'}>
                    <div className={'d-flex   align-items-center justify-content-center gap-1'}>
                        <img style={{width: "15px"}} src="locition.png" alt="locition"/>
                        <p className={'m-0'}>Buxoro: Shofirkon tumani </p>
                    </div>
                    <div className={'d-flex align-items-center justify-content-center gap-1'}>
                        <img style={{width: "15px"}} src="telephone.png" alt="tel"/>
                        <p className={'m-0'}>+998 93 140 25 03 </p>
                    </div>
                </div>


            </Row>

            {/* Leadership */}
            {/*<CarouselTeacher/>*/}


            <CarouselTeacher value={'wrapperSpecialization'}/>

            <CarouselTeacher   value={'wrapperTeacher'}/>


        </div>
    );
}

export default MyCourses;