import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Title from './components/Title';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import { Container, Stack, Button } from '@mui/material';
import { Link, Routes, Route } from"react-router-dom"
import './app.css'


import Status from "./components/pages/Status"
import Documentation from"./components/pages/Documentation"
import {useRef} from"react"
function App() { 
  const statusRef = useRef()
  const documentationRef = useRef()
 
  const handleClick = e => {
    const status = statusRef.current
    const documentation = documentationRef.current
    
    if(e.target === status) {
      status.classList.add("btn-active-navigation")
      status.classList.remove("btn-inative-navigation")

      documentation.classList.remove("btn-active-navigation")
      documentation.classList.add("btn-inative-navigation")

    } else {
      status.classList.remove("btn-active-navigation")
      status.classList.add("btn-inative-navigation")

      documentation.classList.add("btn-active-navigation")
      documentation.classList.remove("btn-inative-navigation")
    }

  }
 
  return(
      <Container sx={{ 
        maxnWidth: "lg",
        minHeight: "100vh",
       }}>
      <Title/>

      <nav>
        <Stack mt={3} spacing={1} direction="row">
          <Link style={{ 
            textDecoration: "none",
          }} to="/" className="btn-active-navigation btn-default-navigation" ref={statusRef} onClick={handleClick}>
             Status
          </Link>
          <Link style={{ 
            textDecoration: "none",
          }} to="documentacao" className="btn-inative-navigation btn-default-navigation" ref={documentationRef} onClick={handleClick}>
            Documentação
          </Link>
        </Stack>
      </nav>

       <Routes>
          <Route path="/" element={<Status />}/>    
          <Route path="/documentacao" element={<Documentation />}/>   
        </Routes> 
   
    </Container>
    
  )
}

export default App;

