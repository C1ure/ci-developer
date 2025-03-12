import './App.css'
import toast, {Toaster} from 'react-hot-toast'
import {BoxLine,Btn} from '@ciure/oksnk-ui'

function App() {
  return (
    <>
      <Toaster/>
      <BoxLine height='10vh' bg_color='black' position='absolute' left ='0px' top='0px' margin='0px 0px 15vh 0px '>
        <h3> Nav Bar</h3>
      </BoxLine>
      <BoxLine direction='column' height='100vh'>
        <h1> Ci Developer</h1>
        <Btn color='black' onClick={()=> toast.success("click ! ")}> Click</Btn>
      </BoxLine>
      <BoxLine height='100vh' margin='30vh 0px'>
        <h1> Session 2 </h1>
      </BoxLine>
      <BoxLine height='100vh'>
      <h1> Session 3</h1>
      </BoxLine>
      <BoxLine height='15vh' bg_color='black' position='absolute' left ='0px' margin='15vh 0px 0px 0px '>
        <h3> footer</h3>
      </BoxLine>
    </>
  )
}

export default App
