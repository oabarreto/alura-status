import React from 'react'
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Title() {
  return (
    <>
    <Typography variant="h2" component="h1" mt={3} fontWeight={700} color="#F3F6F9">Alura Status</Typography>
    <Typography variant="h6" component="h2"  fontWeight={400} color="#ADB5BD">Progressos nos cursos e trilhas</Typography>   
    </>
  )
}

export default Title;