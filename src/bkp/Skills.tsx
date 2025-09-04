import React, { useRef,  } from "react";
import '../styles/global.css'
import { useTheme } from '../services/ThemeContext';
import { Container, Row, Col, Card } from 'react-bootstrap';

// @ts-ignore
import {Title} from '@ciure/oksnk-ui'

const Skills: React.FC = () => {

 const {theme} = useTheme()
 // Estilos de sombra iniciais (pode ser o estado padrão)


  return (
    // Usa a classe personalizada para o contêiner principal com borda
    <div >
      <Container>
        {/* Título da seção */}
       <h1 style={{color:'#0059FF'}} className="services-heading">Minhas Habilidades</h1>

        <Row>
            {/* Coluna 2: Web Developer Card */}
          <Col lg={12} className="mb-4">
         
          </Col>
        
        </Row>
      </Container>
    </div>
  );
}

export default Skills;