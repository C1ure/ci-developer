import './styles/global.css'
// @ts-ignore
import {BoxLine,Btn,Title} from '@ciure/oksnk-ui'
import { useTheme } from './services/ThemeContext';
import { NavBar } from './components/NavBar';
import {Container, Row,Col,} from 'react-bootstrap';

import Home from './components/Home';
import ServicesSection from './components/Service';
import About from './components/About';
import Skills from './components/Skills';

function App() {
   const {theme} = useTheme()
    //const {theme,toggleTheme} = useTheme();
    //const [count, setCount] = useState(0)
    //const Adds = ()=>{
      //  return setCount((prev)=> prev + 1)
    // };

  return ( 
     <div className={theme == 'light' ? 'bg_light' : 'bg_dark' } >
      <header>
        <NavBar/>
      </header>
      <main>
        <section id="home" className="vh-100 ">
          <div className="container">
           <Home/>
          </div>
        </section>

        <section id="services" className='vh-100'>
          <div className="container">
           <ServicesSection/>
          </div>
        </section>

        <section id="skills" className="py-5 vh-110">
          <div className="container">
          <Skills/>
          </div>
        </section>

        <section id="contact" className="vh-120" >
          <div className="container">
           <About/>
          </div>
        </section>

        <section id="contato" className="vh-100" >
          <div className="container">
           
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className={theme == 'light' ? ('bg-white text-center text-dark py-1') : ('bg-black text-center text-white h-100 py-1')}> 
        <p>&copy; 2025 Ci Developer. Todos os direitos reservados.</p>
      </footer>
    </div>

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