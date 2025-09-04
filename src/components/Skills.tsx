import React, { useRef,  } from "react";
import '../styles/global.css'
import { useTheme } from '../services/ThemeContext';
import { Container, Row, Col, Card } from 'react-bootstrap';

// @ts-ignore
import {Title} from '@ciure/oksnk-ui'

const Skills: React.FC = () => {

 const {theme} = useTheme()
 // Estilos de sombra iniciais (pode ser o estado padrão)

 const liquidRef = useRef<HTMLDivElement>(null);

 
   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!liquidRef.current) return;

    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    // Faz o gradiente seguir o mouse
    liquidRef.current.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(0, 153, 255, 0.6),
        rgba(0, 153, 255, 0.2) 60%,
        transparent 100%
      )
    `;
  };

  const handleMouseLeave = () => {
    if (!liquidRef.current) return;

    // Volta ao estado "stand-by" com animação suave
    liquidRef.current.style.background = `
      radial-gradient(
        circle at 50% 50%,
        rgba(0, 153, 255, 0.5),
        rgba(0, 153, 255, 0.15) 60%,
        transparent 100%
      )
    `;
  };

  return (
    // Usa a classe personalizada para o contêiner principal com borda
    <div >
      <Container>
        {/* Título da seção */}
        <h1 className='text-white mb-4'>Minhas Habilidades</h1>

        <Row>
            {/* Coluna 2: Web Developer Card */}
          <Col lg={12} className="mb-4">
            <Card 
                className="glass-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
             >
                <div className="liquid" ref={liquidRef}/>
              <Card.Body className='content'>
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

export default Skills;