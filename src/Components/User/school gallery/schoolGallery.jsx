import React, {useEffect, useState} from 'react';
import AuthService from "../../../service/auth";
import {LoadingSpinner} from "../../index";
import {Button, Card, Col, Dropdown, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function SchoolGallery(props) {

    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState();
    const navigate = useNavigate();
    const [modalImg, setModalImg] = useState();
    const [modalImgTitle, setModalImgTitle] = useState();

    const modalImgValue = (value, title) => {
        setModalImg(value);
        setModalImgTitle(title);
    }

    const closeModal = () => {
        document.getElementById('modalImg').style.display = 'none';
    }

    useEffect(() => {
        const getSchoolGallery = async () => {

            try {
                const response = await AuthService.getSchoolGallery();
                console.log(response);
                setImages(response.data);
                setLoading(true);
            } catch (error) {
                console.error(error);
            }
        }
        getSchoolGallery();
    }, [])

    return (
        <Row className={'wrapper-right row m-0 d-flex border border-red'} style={{flexWrap: 'wrap'}}>

            <Row className="my-school m-0 mb-3 py-3 d-flex align-items-center ">
                <Col><h3>Menig maktabim</h3></Col>
                <Col className=" d-flex align-items-center justify-content-end">
                    <Button onClick={()=> navigate('/my-courses')} variant={'outline-primary'} className={'btn-color'}>Orqaga</Button>
                </Col>
            </Row>

            <div onClick={(e) => {
                if (e.target === e.currentTarget) closeModal()
            }
            } id={"modalImg"} className={'modal-image '} style={{display: 'none'}}>
                <span onClick={closeModal} className={"close"}>&times;</span>
                <img  className={'modal-image-content'} src={modalImg} alt=""/>
                <div id={"caption"}>
                    <p>{modalImgTitle}</p>
                </div>
            </div>

            {loading ?

                <>{
                    images.map((image, i) => (
                        <Col xs={12} sm={6} lg={3} key={i} className={'mb-3'}>
                            <Card>
                                <Card.Img onClick={() => {
                                    document.getElementById('modalImg').style.display = 'block';
                                    modalImgValue(image.image, image.title)

                                }} variant="top" style={{cursor: 'pointer'}}
                                          src={image.image ? image.image : "https://picsum.photos/id/1011/600/400"}/>
                                <Card.Body>
                                    <Card.Title>{image.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
                </>

                : <LoadingSpinner/>}
        </Row>
    );
}

export default SchoolGallery;