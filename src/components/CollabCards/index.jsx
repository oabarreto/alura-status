import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../app.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CollabCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  
  const [userInfos, setUserInfos] = useState({})

  
  const getUser = () => {
        const URL = `https://api.github.com/users/${props.name}`
        useEffect(() => {
            fetch(URL)
             .then(response => response.json())
             .then(data => setUserInfos(data)) 
        },[]) 
    }
    getUser() 

  return (
    <Card className='collab-card'>
      <CardHeader
        avatar={
          <Avatar sx={{ width: 70, height: 70 }} style={{objectFit: "fill"}} aria-label="userPhoto">
            <img src={userInfos.avatar_url} 
            style={{ width: 70, height: 70 }}
            />
          </Avatar>
        }
        title ={userInfos.name}
        subheader= {`@${userInfos.login}`}
      />
      <CardContent  >
        <Typography variant="body2" fontWeight={500} color="text.secondary">
          {props.role} de Desenvolvimento Front-End
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }} >
        <IconButton aria-label="GitHub" title="Visitar perfil" href={userInfos.html_url} target="_blank" style={{color:"#ccc"}} >
          <GitHubIcon/>         
        </IconButton>
        <CardContent style={{padding:"0"}} sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <Typography paragraph fontWeight={500} m={0}>Mostrar status</Typography>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show status"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardContent>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{overflowY: "scroll", height:"450px"}} className="collab-card-content">
          <Typography fontWeight={500} paragraph>Status</Typography>
          <Typography paragraph>
            {props.children}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}