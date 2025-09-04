import '../styles/global.css'
import { useTheme } from '../services/ThemeContext';
import { Container, Row, Col, Card,Image } from 'react-bootstrap';
// @ts-ignore
import {Title} from '@ciure/oksnk-ui'

import Web from '../assets/WebDeveloper.png'
import Ui from '../assets/uiDesigner.png'
import Ux from '../assets/Ux.png'



function ServicesSection() {
 const {theme} = useTheme()

  return (
    // Usa a classe personalizada para o contêiner principal com borda
    <div >
      <Container>
        {/* Título da seção */}
        <h1 style={{color:'#0059FF'}} className="services-heading">Meus Serviços</h1>

        <Row>
            {/* Coluna 2: Web Developer Card */}
          <Col lg={4} className="mb-4">
            <Card style={{minHeight:'350px'}} className={theme == 'light' ? ('bg-white card_text text-white h-100 border border-custom-blue') : ('bg-black card_text text-white h-100 border border-custom-blue')}>
              <Card.Body>
                <Card.Title className="text-primary">Web Developer</Card.Title>
                <Card.Text className={theme == 'light' ? ('text-black') : ('text-white')}>
                  Front-end — cuida de toda a parte que você pode efetivamente ver em um site, a
                  chamada camada gráfica. Sua maior preocupação é a experiência que o
                  usuário tem ao fazer um acesso, cuidando desde o layout até pequenos
                  detalhes de menus e rodapés.
                </Card.Text>
                <Card.Text className={theme == 'light' ? ('text-black') : ('text-white')}>
                  Em resumo, o desenvolvedor web planeja, constrói e dá manutenção para
                  tudo que roda em uma plataforma web para que tudo funcione de acordo com o
                  esperado.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Coluna 1: UI Designer Card */}
          <Col lg={4} className="mb-4">
            <Card className={theme == 'light' ? ('bg-white card_text text-white h-100 border border-custom-blue') : ('bg-black card_text text-white h-100 border border-custom-blue')}> {/* h-100 faz com que os cards tenham a mesma altura */}
              <Card.Body>
                <Card.Title className="text-primary">UI Designer</Card.Title>
                <Card.Text className={theme == 'light' ? ('text-black') : ('text-white')}>
                  Um UI designer, ou designer de interface do usuário, é um profissional que projeta
                  a aparência de sites e aplicativos. Ele é responsável por criar interfaces digitais
                  intuitivas e atraentes.
                </Card.Text>
                <Card.Text className={theme == 'light' ? ('text-black') : ('text-white')}>
                  A padronização visual é outra responsabilidade do UI designer. Ele cria e
                  mantém sistemas de design, que incluem guias de estilo, paletas de cores,
                  tipografias e componentes reutilizáveis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Coluna 3: UX Experience Card */}
          <Col lg={4} className="mb-4">
            <Card className={theme == 'light' ? ('bg-white card_text text-white h-100 border border-custom-blue') : ('bg-black card_text text-white h-100 border border-custom-blue')}>
              <Card.Body>
                <Card.Title className="text-primary">Ux Experience</Card.Title>
                <Card.Text className={theme == 'light' ? ('text-black') : ('text-white')}>
                  A experiência do usuário (UX) é a relação que uma pessoa tem com um produto ou
                  serviço. Ela engloba a sensação que o usuário tem ao interagir com a empresa,
                  seja online ou no mundo físico.
                </Card.Text>
                <Card.Text className={theme == 'light' ? ('text-black') : ('text-white')}>
                  O objetivo do UX é criar uma experiência positiva e significativa para o
                  usuário. Para isso, a empresa deve considerar todos os pontos que facilitam
                  a interação com o produto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-none d-lg-flex" >
           <Col lg={4} className="mb-4">
             <Card  style={{minHeight:'400px', overflow:'hidden'} }className={theme == 'light' ? ('bg-white card_text text-white h-100 border border-custom-blue') : ('bg-black card_text text-white h-100 border border-custom-blue')}>
               <Image fluid src={Web} /> 
             </Card>
           </Col>
           <Col lg={4} className="mb-4">
             <Card  style={{minHeight:'400px', overflow:'hidden'} }className={theme == 'light' ? ('bg-white card_text text-white h-100 border border-custom-blue') : ('bg-black card_text text-white h-100 border border-custom-blue')}>
                <Image fluid src={Ui} /> 
              </Card>
            </Col>
           <Col lg={4} className="mb-4">
             <Card  style={{minHeight:'400px', overflow:'hidden'} }className={theme == 'light' ? ('bg-white card_text text-white h-100 border border-custom-blue') : ('bg-black card_text text-white h-100 border border-custom-blue')}>
               <Image fluid src={Ux} /> 
             </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServicesSection;