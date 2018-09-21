import React from 'react';
// import Button from 'react-bootstrap/lib/Button';
//import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

class Homeone extends React.Component {
    render() {
      return <div>
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + '/five.jpg'} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + '/five.jpg'} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + '/one.jpeg'} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 </div>
}
}
  export default Homeone;