import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './services/ThemeContext.tsx';
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
