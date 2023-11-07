import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4405239/pexels-photo-4405239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Book Haven</h5>
          <p>Sua livraria online preferida</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/18797401/pexels-photo-18797401/free-photo-of-abundancia-fartura-riqueza-vista-traseira.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Book Haven</h5>
          <p>Sua livraria online preferida</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/18797448/pexels-photo-18797448/free-photo-of-abundancia-fartura-riqueza-preto-e-branco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Book Haven</h5>
          <p>
          Sua livraria online preferida
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Carrossel;