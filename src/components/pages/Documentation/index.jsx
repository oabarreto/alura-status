import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BasicTabs from '../../BasicTabs';


export default function Documentation () {
    return(
        <Container className='container' sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", 
            marginTop: "50px", 
            paddingBottom: "50px",
         }} >
            <Typography variant="h3" component="h2" fontSize={30} fontWeight={700} color="#F3F6F9">Documentação</Typography>
            <Typography variant="h6" component="h3"  fontSize={15} fontWeight={400} color="#ADB5BD">by <Link href="https://github.com/thalya-codes" target='_blank' underline="none">@thalya-codes</Link> | <Link href="https://github.com/oabarreto" target='_blank' underline="none">@oabarreto</Link></Typography>
            <BasicTabs/>  
        </Container>
    )
}