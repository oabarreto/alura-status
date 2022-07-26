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

    if(status === e.target) {
     status.classList.toggle("color")
     documentation.classList.toggle("color")

    } else {
      status.classList.toggle("color")
      documentation.classList.toggle("color")
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
          }} to="/" className='color' ref={statusRef} onClick={handleClick}>
            <Button id="status" sx={{
              color: "#e5e5e5"
            }} startIcon={<ShowChartOutlinedIcon/>} variant="outlined" >Status</Button>
          </Link>
          <Link style={{ 
            textDecoration: "none",
          }} to="documentacao" ref={documentationRef} onClick={handleClick}>
            <Button id="doc" sx={{
              color: "#e5e5e5",
            }} startIcon={<ArticleOutlinedIcon />} variant="outlined" >Documentação</Button>
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

