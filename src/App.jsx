import { useState, useEffect } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Title from './components/Title';
import BasicCard from './components/BasicCard';
import { Container } from '@mui/material';
import './app.css'

function App() {
 
  const [ courses, setCourses ] = useState([]);
  
  useEffect(() => {
    fetch('https://www.alura.com.br/api/dashboard/3e0330e1a694dc08018ca0d6d61b3ac5326c8135649486dc975d1fe57506a57c')
    .then(response => response.json())
    .then(data => setCourses(data.courseProgresses))
    console.log(courses)
  }, []);

  
  return(
    <Container fixed style={{marginBottom: "90px"}}>
      <Title/>
      { 
        courses.map((course) => <BasicCard courseName={course.name} progress={course.progress} lastAccess={course.lastAccessTime} key={course.id} /> )
      }
    </Container>
    
  )
}

export default App;



{/*
  cursos.map((curso) => <BasicCard key={pUser.id} id={pUser.id} name={curso.name} />)
*/}