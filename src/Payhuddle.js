import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const Payhuddle = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="primary">
        <Container>
          <Navbar.Brand href="#">Payhuddle</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="container">
        <div className="baner">
          <div className="content">
            <h1>PayHuddle Solutions Private Limited</h1>

            <h4>Careers</h4>
            <h4>Who We Are</h4>
            <h4>Blogs</h4>
          </div>
          <div className="img">
            <img src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payhuddle;
