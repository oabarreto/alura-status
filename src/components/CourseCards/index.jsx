import { React, useState, useEffect } from 'react'
import { Card, CardContent, CardActions, Typography, Box, CircularProgress } from '@mui/material';
import LinearWithValueLabel from '../LinearProgressWithLabel';

function CourseCard(props) {
  
  const [ courses, setCourses ] = useState([]);
  
  const getCourses = () => {    
    const API = `https://www.alura.com.br/api/dashboard/${props.token}`
    useEffect(() => {
      fetch(API)
      .then(response => response.json())
      .then(data => setCourses(data.courseProgresses))
    }, []);
  }
  getCourses()
  


  const dateConverter = (data) => {
    let dateFix = new Date(data)
    let formatDate = new Intl.DateTimeFormat("pt-BR", {dateStyle: "short", timeStyle: "short"}).format(dateFix)
    return formatDate;
  }

  return (
    <div>
      {
          courses.map( course => (
          <Card sx={{ 
                maxWidth: "sm", 
                marginTop: 3,
                backgroundColor: "#0A1929"                
              }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, fontWeight: 500 }} color="#ADB5BD" gutterBottom>
                Curso
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px"}}>
                <img style={{ height: "45px", backgroundColor: "rgba(229, 229, 229, 0.7)", padding: "4px", borderRadius: "5px"}} src={`https://caelum.github.io/gnarus-api-assets/alura/assets/api/cursos/${course.slug}.svg`}/>
                <Typography variant="h5" component="div" fontWeight={500} color="#F3F6F9">
                  {course.name}
                </Typography>
              </Box>
              <Typography sx={{ mb: 1.5, mt:1 }} color="#ADB5BD">
                <LinearWithValueLabel value={course.progress}/>
              </Typography> 
              <Typography variant="body2" fontWeight={500} color="#F3F6F9">
              último acesso  |  {dateConverter(course.lastAccessTime)}
              </Typography>
            </CardContent>
          </Card>
          ))
      }  
    </div>  
  )
}

export default CourseCard;