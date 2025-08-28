import './style/style.css'
// @ts-ignore
import {BoxLine,Btn,Title} from '@ciure/oksnk-ui'
import { useTheme } from './services/ThemeContext';
import { useState } from 'react';

import AboutSection from './components/About';
import { NavBar } from './components/NavBar';
import { Card, Container, Row,Col,Button,Image } from 'react-bootstrap';
import Profile from './assets/profile.png'

function App() {

    //const {theme,toggleTheme} = useTheme();
    //const [count, setCount] = useState(0)
    //const Adds = ()=>{
      //  return setCount((prev)=> prev + 1)
    // };

  return (
    <>
        
          <div>
      {/* Header fixo ou navbar */}
      <header>
        <NavBar/>
      </header>

      {/* Sessões da página */}
      <main>
        <section id="home" className="vh-100 ">
          <div className="container">
            <Container>
              <Row className="align-items-center">
                {/* Coluna para o texto */}
                <Col lg={6} className="order-lg-2 ">
                  <h2>Carlos Iure Gordiano dos Santos</h2>
                  <p>
                   Olá sou desenvolvedor Front-End ;)
                  </p>
                </Col>

                {/* Coluna para a imagem */}
                <Col lg={6} className="order-lg-1 ">
                  <Image src={Profile} fluid alt="Descrição da imagem" className='mt-4' />
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section id="sobre" className="py-5 bg-light">
          <div className="container">
           <AboutSection/>
          </div>
        </section>

        <section id="projetos" className="py-5">
          <div className="container">
            <div className='container background-section'>
               <Container>
                  <Row className="align-items-center">
                    <Col >
                    
                    </Col>
                  </Row>
            </Container>
          </div>
          </div>
        </section>

        <section id="contato" className="py-5 bg-dark text-light">
          <div className="container">
         
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-dark text-center text-light py-3">
        <p>&copy; 2025 Meu Nome. Todos os direitos reservados.</p>
      </footer>
    </div>
    </>
  )
}

export default App


/*
   <Toaster/>
    
      <BoxLine height='10vh' bg_color='gray' position='absolute' left='0px' top='0px' margin='0px 0px 15vh 0px '>
        <h3> Nav Bar</h3>
        <Btn margin='0px 10px' color={dark === true ? ('#000') : ('#fff')} onClick={()=> setDark(!dark)}  bg_color={dark === true ? ('#C7C7C7FF') : ('#0c0c0c')}> Invert Color </Btn>
      </BoxLine>

      <BoxLine direction='column' height='200vh'>
        <h1> Init and services </h1>
     
      </BoxLine>
  
      <BoxLine height='250vh'>
      <h1> About e diploms </h1>
      </BoxLine>

      <BoxLine height='100vh' margin='15vh 0px'> 
      <h1> Projects </h1>
      </BoxLine>
      
      <BoxLine height='150vh'>
      <h1> Questions and contacts</h1>
      </BoxLine>
      
      <BoxLine bg_color='gray' height='15vh' >
        <h3> footer</h3>
      </BoxLine>

*/