import React from 'react';
import '../styles/global.css'
import { useTheme } from "../services/ThemeContext"
import { Container,Row,Col,Image } from 'react-bootstrap';

// @ts-ignore
import {Btn,TextBtn,Text,Title,BoxLine} from "@ciure/oksnk-ui"
import Profile from '../assets/profile.jpg'


const Home:React.FC = () => { 
   const {theme} = useTheme()
   
    return (
        <Container>
            <Row className="align-items-center">
            {/* Coluna para o texto */}
            <Col lg={6} className="order-lg-1 mt-5 mb-2 text-justify ">
              <Title weight='bold' size='48px' color={theme == 'light' ? 'black' : 'white'}>   <span style={{color:'#0059FF', fontSize:'50px', fontWeight:'bold'}}> Front End Developer </span> & </Title>
              <Title weight='bold' size='48px' color={theme == 'light' ? 'black' : 'white'}> UI / UX Designer </Title>
            
              <Text className='my-4 ' size='16px' color={theme == 'light' ? 'black' : 'white'}> 
                Olá, sou <span style={{color:'#0059FF', fontSize:'18px', fontWeight:'bold'}}> Carlos Iure Gordiano dos Santos</span>, analista e desenvolvedor de Sistemas 
                pela Uniaselvi, CEO Ok Snack.
              </Text>
            </Col>

            {/* Coluna para a imagem */}
            <Col lg={6} className="order-lg-2 ">
                <BoxLine bg_color='red' radius='32px'  overflow='hidden' style={{boxShadow:'2px 2px 10px blue'}} >
                  <Image src={Profile} fluid alt="Descrição da imagem"   />
                </BoxLine>
            </Col>
            </Row>
        </Container>
    )
}

export default Home