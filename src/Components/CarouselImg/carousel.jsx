import Carousel from 'react-bootstrap/Carousel';
import {Row, Col, Card, Button} from "react-bootstrap";
import React, {useState} from "react";
import AuthService from "../../service/auth";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const CarouselSchool = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <div className={'d-flex align-items-center justify-content-center'}>
                    <img
                        className="d-block w-100 carousel-image  "
                        src="./school3.webp"
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={'d-flex align-items-center justify-content-center'}>
                    <img
                        className="d-block w-100 carousel-image  "
                        src="./school%202.webp"
                        alt="First slide"
                    />

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={'d-flex align-items-center justify-content-center'}>
                    <img
                        className="d-block w-100 carousel-image  "
                        src="./school%201.jpg"
                        alt="First slide"
                    />

                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export const CarouselTeacher = (props) => {
    const teachers = useSelector(state => state.teachers.teachers);
    const leadership = useSelector(state => state.teachers.leaderships);

    const navigate = useNavigate();


    const back = () => {
        const box = document.getElementById(props.value)
        box.scrollLeft -= 450
    }
    const next = () => {
        const box = document.getElementById(props.value)
        box.scrollLeft += 450
    }
    return (
        <div className={'my-school p-3 mb-3'}>
            <h3 className={'mb-3'}>
                {
                    props.value === 'wrapperSpecialization' ? "Rahbariyat" : "O'qituvchilar"
                }
            </h3>
            <div className={'carousel-teacher  d-flex align-items-center justify-content-between '}>
                <div id={'after-specialization'} className="after-specialization" onClick={back}>
                    <img src='./back.png' alt="next"/>
                </div>
                <Row id={props.value} className={'wrapper-leadership w-100 m-0'}>
                    {
                        (props.value === 'wrapperSpecialization' ? leadership : teachers ).map((item, index) => (
                                <Col key={index} lg={2} md={4} ms={6} className={'leadership-item '}>
                                    <Card className={'h-100 my-school pt-3 border-blue '}>
                                        <Card.Img className={ 'card-img mx-auto'} style={{borderRadius:"20px",width:'100px',height:'100px'}} variant="top" src={item.image}/>
                                        <Card.Body>
                                            <h6 className={'text-center'}>{item.first_name} {item.last_name}</h6>
                                            <p className={'text-center'}>
                                                <small>{item.specialization}</small>
                                            </p>
                                            <Button variant={'outline-primary'} onClick={()=>navigate(`/my-teacher/${item._id}`)}  className={'btn-color d-block mx-auto'}>Batafsil</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                    }


                </Row>

                <div id={'before-specialization'} className="before-specialization" onClick={next}>
                    <img src=' ./next.png' alt="next"/>
                </div>
            </div>
        </div>
    )
}

