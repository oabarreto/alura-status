import React from 'react'
import { Card, CardContent, CardActions, Typography, Box } from '@mui/material';
import LinearWithValueLabel from '../LinearProgressWithLabel';

function BasicCard(props) {
  let dateFix = new Date(props.lastAccess);
  const formatDate = new Intl.DateTimeFormat("pt-BR", {dateStyle: "short", timeStyle: "short"}).format(dateFix)

  return (
    <Card sx={{ 
        maxWidth: "sm", 
        marginTop: 3,
        backgroundColor: "text.disabled"      
      }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="#ADB5BD" gutterBottom>
        Curso
      </Typography>
      <Typography variant="h5" component="div" fontWeight={500} color="#F3F6F9">
        {props.courseName}
      </Typography>
      <Typography sx={{ mb: 1.5, mt:1 }} color="#ADB5BD">
        <LinearWithValueLabel value={props.progress}/>
      </Typography> 
      <Typography variant="body2" color="#F3F6F9">
      último acesso  |  {formatDate}
      </Typography>
    </CardContent>
  </Card>
  )
}
export default BasicCard;