import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Title from './components/Title';
import NavMenu from './components/NavMenu';
import { Container, Stack, Button } from '@mui/material';
import { Routes, Route } from "react-router-dom"
import './styles/global.css'
import './styles/responsive.css'
import Status from "./components/pages/Status"
import Documentation from"./components/pages/Documentation"
import Teste from './components/teste/teste';
function App() { 
 
 
  return(
      
      <Container sx={{ 
        maxnWidth: "lg",
        maxHeight: "100vh",
       }}>
      <Title title='Alura Status' subtitle='Progressos nos cursos e trilhas' />
       <NavMenu/>
       <Routes>
          <Route path="/" element={<Status />}/>    
          <Route path="/documentacao" element={<Documentation />}/>   
        </Routes> 
      </Container>
    
  )
}

export default App;