import '../styles/global.css'
import React, { useRef, useState  } from "react";
import { useTheme } from '../services/ThemeContext';
import { Container, Row, Col, Card } from 'react-bootstrap';
// @ts-ignore
import {Title} from '@ciure/oksnk-ui'

function About() {
 const {theme} = useTheme()
  // Estado para armazenar a posição de elevação do card
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Pega as coordenadas do mouse dentro do card
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;

    // Calcula a nova posição de elevação
    const moveX = x / 10; // Ajuste o divisor para a sensibilidade
    const moveY = y / 10;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    // Reseta a posição quando o mouse sai do card
    setPosition({ x: 0, y: 0 });
  };

  // Estilo dinâmico para o card
  const dynamicCardStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(1.01)`,
    transition: 'transform 1s ease-out', // Transição suave
  };

  return (
    // Usa a classe personalizada para o contêiner principal com borda
    <div >
      <Container>
        {/* Título da seção */}
        <h1 style={{color:'#0059FF'}} className="services-heading">Sobre Mim</h1>

        <Row>
            {/* Coluna 2: Web Developer Card */}
          <Col lg={12} className="mb-4">
            <Card
             style={dynamicCardStyle} // Aplica o estilo dinâmico
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave} 
            className={theme == 'light' ? ('bg-white  moved_box text-white h-100 border border-custom-blue') : ('bg-black  text-white h-100 border border-custom-blue')}>
              <Card.Body>
                <Card.Title className="text-primary">Carlos Iure Gordiano dos Santos</Card.Title>
                
                <Card.Text className={theme == 'light' ? ('text-black text-justify') : ('text-white text-justify')}>
                 Olá! Meu nome é Carlos Iure, sou desenvolvedor front-end com paixão por transformar ideias 
                 em interfaces digitais modernas e funcionais. Desde cedo tive contato com tecnologia e encontrei 
                 na programação uma forma de unir criatividade e lógica para resolver problemas.
                </Card.Text>

                <Card.Text className={theme == 'light' ? ('text-black text-justify') : ('text-white text-justify')}>
                Tenho experiência em desenvolvimento com React, TypeScript e Bootstrap, ferramentas que 
                 utilizo para criar aplicações responsivas, acessíveis e com foco na experiência do usuário. 
                 Além disso, gosto de explorar conceitos de design system e boas práticas de arquitetura de software.
                </Card.Text>

                <Card.Text className={theme == 'light' ? ('text-black text-justify') : ('text-white text-justify')}>
                 Durante minha trajetória, participei de projetos pessoais e acadêmicos que me permitiram aprender a importância 
                 da organização do código, da colaboração em equipe e do uso de metodologias ágeis como Scrum e Kanban. 
                 Essas vivências reforçaram minha capacidade de adaptar-me a diferentes contextos e desafios.
                </Card.Text>
                
                <Card.Text className={theme == 'light' ? ('text-black text-justify') : ('text-white text-justify')}>
                  Também tenho interesse em áreas complementares, como desenvolvimento back-end com Node.js e PostgreSQL, 
                  o que me ajuda a compreender melhor o fluxo completo de uma aplicação e a colaborar de forma mais integrada 
                  com outros times.
                </Card.Text>

                <Card.Text className={theme == 'light' ? ('text-black text-justify') : ('text-white text-justify')}>
                  Sou movido pelo aprendizado contínuo. Gosto de acompanhar novas tendências de tecnologia, experimentar ferramentas 
                  emergentes e aplicar esse conhecimento em projetos reais. Acredito que a evolução constante é essencial para se manter 
                  relevante no mundo da tecnologia.
                </Card.Text>

                <Card.Text className={theme == 'light' ? ('text-black text-justify') : ('text-white text-justify')}>
                  Fora do trabalho, gosto de explorar novas ideias criativas, jogar videogame, assistir a séries e compartilhar 
                  experiências com amigos. Acredito que o equilíbrio entre vida profissional e pessoal é fundamental para manter a 
                  motivação e a produtividade.
                </Card.Text>
          
              </Card.Body>
            </Card>
          </Col>
        
        </Row>
      </Container>
    </div>
  );
}

export default About;