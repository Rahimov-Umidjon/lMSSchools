import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";


function Home() {

    let navigate = useNavigate();

    return (
        <Navbar style={{width:'100%'}} bg="light" expand="lg">
        <Container >
            <Navbar.Brand>
                <img
                    src="/logo.png"
                    width="200"
                    height="60"
                    className="d-inline-block align-top"
                    alt="E-Maktab Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className='w-100 justify-content-center'>
                    <Nav.Link href="#tashkilot">Tashkilot</Nav.Link>
                    <Nav.Link href="#imkoniyatlar">Imkoniyatlar</Nav.Link>
                    <Nav.Link href="#hamkorlarga">Hamkorlarga</Nav.Link>
                    <Nav.Link href="#yordam">Yordam</Nav.Link>
                    <NavDropdown title="O'zbek" id="language-dropdown">
                        <NavDropdown.Item href="#uz">O'zbek</NavDropdown.Item>
                        <NavDropdown.Item href="#ru">Русский</NavDropdown.Item>
                        <NavDropdown.Item href="#en">English</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
            <div>
                <Button onClick={()=> navigate('/login')} variant="outline-primary " className="me-2 btn-register-color">
                    Kirish
                </Button>
                <Button onClick={()=> navigate('/register')} variant="outline-primary btn-register-color">Ro'yxatdan o'tish</Button>
            </div>
        </Container>
    </Navbar>);
}

export default Home;