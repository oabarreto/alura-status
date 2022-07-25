import { useState, useEffect } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Title from '../../Title';
import { Container, Box } from '@mui/material';
import '../../../app.css'
import CollabCard from '../../CollabCards';
import BasicCard from"../../BasicCard"

export default function Status() {
  const env = import.meta.env;
  return (
    <Container className='container' style={{
        display: "flex", 
        justifyContent: "space-between" , 
        marginTop: "50px", 
        paddingBottom: "50px"
     }} >
        <Box className='card-container'>
          <CollabCard name="thalya-codes" role="Estagiária" >
            <BasicCard token={env.VITE_TOKEN_TH} key={1} className='collab_card'/>
          </CollabCard>
        </Box>
        <Box  >
          <CollabCard name="oabarreto" role="Estagiário">
            <BasicCard token={env.VITE_TOKEN_OT} key={2} />
          </CollabCard>
        </Box>         
     </Container>
  )
}
