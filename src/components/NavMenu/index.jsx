import React from 'react'
import { useRef } from"react"
import { Link } from"react-router-dom"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import { Stack } from '@mui/material';
import './style.css';
export default function NavMenu() {

  const statusRef = useRef()
  const documentationRef = useRef()
 
  const handleClick = e => {
    const status = statusRef.current
    const documentation = documentationRef.current
    
    if(e.target === status) {
      status.classList.add("nav__link--active")
      documentation.classList.remove("nav__link--active")

    } else {
      status.classList.remove("nav__link--active")
      documentation.classList.add("nav__link--active")
    }

  }

  return (
    <Stack component="nav" mt={3} spacing={1} direction="row">
          <Link style={{ 
            textDecoration: "none",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
          }} to="/" className="nav__link--active
          nav__link" ref={statusRef} onClick={handleClick}>
             <ShowChartOutlinedIcon/>Status
          </Link>
          <Link style={{ 
            textDecoration: "none",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
          }} to="documentacao" className="nav__link" ref={documentationRef} onClick={handleClick}>
            <ArticleOutlinedIcon/>Documentação
          </Link>
    </Stack>
  )
}
