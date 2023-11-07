import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';

function Footer() {
  return (
    <Navbar bg="danger" data-bs-theme="danger">
      <Container>
        <Navbar.Brand href="#home">Book Haven</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className='footer-links'>
          <Navbar.Text>
            Contato: bookhaven@gmail.com.br
          </Navbar.Text>
          <div>
            Endereço: Rua Lins de Vasconcelos, 1222
          </div>
          <div>
          <img src={Instagram} height={30} width={30}></img> @bookhaven 
          </div>
          <div>
          <img src={Facebook} height={30} width={30}></img> @bookhaven 
          </div>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;