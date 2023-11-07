import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../img/LOGO.png'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../css/NavBar.css'

function NavBar() {
  return (
    <>

    <div className='img-div'>
        <Col>
          <Image src={LOGO} rounded width={100} height={100}/>
        </Col>
      </div>

     <Navbar bg="danger" data-bs-theme="danger">
        <Container>
          <Navbar.Brand>Book Haven</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link> 
          </Nav>
        </Container>
      
      <div className='login-cadastro'>
            <Nav.Link href="/Cadastro">Cadastro</Nav.Link>
      </div>

      <div className='login-cadastro'>
        <Nav.Link href="/Login">Entrar</Nav.Link>
      </div>
      </Navbar>
    </>
  );
}

export default NavBar;