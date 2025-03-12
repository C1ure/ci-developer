import './App.css'
import { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import {BoxLine,Btn} from '@ciure/oksnk-ui'

function App() {
  const [dark,setDark] = useState(true)
  return (
    <>
    <BoxLine direction='column' bg_color={dark === true ? ('#000') : ('#fff')} width='100vw'>
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

      </BoxLine>
    </>
  )
}

export default App
