import { useState, useEffect } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Title from '../../Title';
import { Container, Box } from '@mui/material';
import '../../../styles/global.css'
import '../../../styles/responsive.css'
import CollabCard from '../../CollabCards';
import CourseCard from"../../CourseCards"

export default function Status() {
  const env = import.meta.env;
  return (
    <Container className='container' sx={{
        display: "flex", 
        justifyContent: "space-between" , 
        marginTop: "50px", 
        paddingBottom: "50px"
     }} >
        <Box className='card-container'>
          <CollabCard name="thalya-codes" role="Estagiária" className="card-status">
            <CourseCard token={env.VITE_TOKEN_TH} key={1} className='card-status__basic'/>
          </CollabCard>
        </Box>
        <Box  >
          <CollabCard name="oabarreto" role="Estagiário">
            <CourseCard token={env.VITE_TOKEN_OT} key={2} />
          </CollabCard>
        </Box>         
     </Container>
  )
}
