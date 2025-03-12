import './App.css'
import toast, {Toaster} from 'react-hot-toast'
import {BoxLine,Btn} from '@ciure/oksnk-ui'

function App() {
  return (
    <>
      <Toaster/>
      <BoxLine direction='column' >
        <h1> Ci Developer</h1>
        <Btn color='black' onClick={()=> toast.success("click ! ")}> Click</Btn>
      </BoxLine>
    </>
  )
}

export default App
