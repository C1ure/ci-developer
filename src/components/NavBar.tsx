import colors from '../styles/colors'
import '../styles/global.css'
import { useTheme } from "../services/ThemeContext"
import { Navbar, Container, Nav,Button } from 'react-bootstrap';
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
// @ts-ignore
import {Btn,TextBtn,Text,Title} from "@ciure/oksnk-ui"


export function NavBar (){ 
    const {theme,toggleTheme} = useTheme()
   
    return (
     <Navbar bg={theme == 'light' ? '#fdfdfd': '#111111'} variant={theme == 'light' ? 'light': 'dark'} expand="lg"> {/* expand controla quando a navbar se torna "desktop" */}
      <Container>
        <Navbar.Brand href="#" className="text-bold text-primary" > 
          <Title weight='bold' color={colors.primary} shadow='0.5px 0.5px 2px #002ca7' > Ci Developer </Title>
        </Navbar.Brand> 
           <div className="d-flex order-lg-2 ms-auto">
           <Btn width='100px' bg_color={colors.primary} className="me-2  d-flex align-items-center justify-content-center shadow">
            <TextBtn  href="#contact"> Contato </TextBtn>
           </Btn>
           <Button onClick={toggleTheme} variant={theme === 'light' ? 'dark' : 'light'} className="me-2  d-flex align-items-center justify-content-center">
            {theme === 'light' ?(<MdOutlineDarkMode size='20px' />): (<MdLightMode size='20px' />)}
           </Button>
          
           <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* botão hambúrguer */}
          </div>
    
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Nav.Link href="#home" > Home </Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav> 
        </Navbar.Collapse>

      </Container>
    </Navbar>
    )
}