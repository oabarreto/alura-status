import React from 'react'
import { Link } from"react-router-dom"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import { Stack } from '@mui/material';
import './style.css';
import { useState } from 'react';
export default function NavMenu() {
  const [isActive, setIsActive] = useState({status: true, documentation: false})

  return (
    <Stack component="nav" mt={3} spacing={1} direction="row">
          <Link style={{ 
            textDecoration: "none",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
          }} to="/" 
          
          className={isActive.status ? "nav__link--active nav__link" : "nav__link"}
          onClick={() => setIsActive({status: true, documentation: false})}
          >
             <ShowChartOutlinedIcon/>Status
          </Link>
          <Link style={{ 
            textDecoration: "none",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
          }} to="documentacao" className={isActive.documentation ? "nav__link--active nav__link" : "nav__link"}
           onClick={() => setIsActive({status: false , documentation: true})}>
            <ArticleOutlinedIcon/>Documentação
          </Link>
    </Stack>
  )
}
