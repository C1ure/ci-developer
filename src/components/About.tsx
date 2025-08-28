import { Container, Row, Col } from "react-bootstrap";

const AboutSection = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Sobre mim</h2>
          <p>
            Sou desenvolvedor front-end apaixonado por criar interfaces bonitas
            e funcionais.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/me.png"
            alt="Foto minha"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
