import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { textAlign } from '@mui/system';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiMaterialui, SiReactrouter, SiCss3 } from 'react-icons/si';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: '#e5e5e5', marginTop: '20px', borderRadius: '4px', paddingRight: '15px', paddingLeft: '15px'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<RemoveRedEyeIcon/>} iconPosition="start" label="OVERVIEW" {...a11yProps(0)} />
          <Tab icon={<ErrorIcon/>} iconPosition="start" label={"Erros"} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography  component="h4"
        sx={{fontSize: "18px", fontWeight: "bold", marginTop: "25px", marginBottom: "15px"}}
        >O que é projeto?</Typography>
        <Typography sx={{
          marginTop: "10px",
          marginLeft: "20px",
          marginBottom: "40px",
          color: 'text.secondary',
          fontWeight: "500",
          fontSize: "16px"
        }}>
          O Alura Status é uma aplicação desenvolvida com objetivo de colocar em prática os conhecimentos adquiridos na plataforma Alura. Através da API Alura, conseguimos obter as informações de progresso nos cursos de cada colaborador, criando assim um Dashboard com esse dados. 
        </Typography>

        <hr/>

        <Typography  component="h4"
        sx={{fontSize: "18px", fontWeight: "bold", marginTop: "40px"}}
        >O que aprendemos com este projeto?</Typography>
        <Typography sx={{
          marginTop: "20px",
          marginLeft: "20px"
        }} component="ul">

          <Typography component="li" sx={{marginTop:"20px", marginBottom: "25px", color: 'text.secondary', fontWeight: "500", fontSize: "15px", display: "flex", alignItems: "center"}}>
              <LightbulbIcon sx={{ color: "warning.light", marginRight: "10px"}}/> Compreender melhor como as libs React Router Dom e Material UI funcionam.
          </Typography>
          
          <Typography component="li" sx={{marginBottom: "25px", color: 'text.secondary', fontWeight: "500", fontSize: "15px",display: "flex", alignItems: "center"}}>
              <LightbulbIcon sx={{ color: "warning.light", marginRight: "10px"}}/> Ampliamos nossos conhecimentos sobre o Hook useEffect.
          </Typography>

          <Typography component="li" sx={{marginBottom: "25px", color: 'text.secondary', fontWeight: "500", fontSize: "15px", display: "flex", alignItems: "center"}}>
              <LightbulbIcon sx={{ color: "warning.light", marginRight: "10px"}}/> Conhecemos e aplicamos o Hook useRef.
          </Typography>

          <Typography component="li" sx={{marginBottom: "25px", color: 'text.secondary', fontWeight: "500", fontSize: "15px",display: "flex", alignItems: "center"}}>
              <LightbulbIcon sx={{ color: "warning.light", marginRight: "10px"}}/> Leitura de mensagens de erros e warning.
          </Typography>

          <Typography component="li" sx={{marginBottom: "40px", color: 'text.secondary', fontWeight: "500", fontSize: "15px", display: "flex", alignItems: "center"}}>
              <LightbulbIcon sx={{ color: "warning.light", marginRight: "10px"}}/> Começamos aos poucos a utilizar o Gitflow. 
          </Typography>
                
        </Typography>

        <hr/>


          <Typography  component="h4"
          sx={{fontSize: "18px", fontWeight: "bold", marginTop: "40px"}}
          >Tecnologias e ferramentas uilizadas</Typography>

        

          <Typography  sx={{marginTop:"20px",marginBottom: "25px", marginLeft: "20px", color: 'text.secondary', fontWeight: "500", display: "flex", alignItems: "center", gap: "10px"}}>
            <FaReact style={{ fontSize: "25px", color: "#61C0B8"}}/> React.JS
          </Typography>   

          <Typography  sx={{marginTop:"20px",marginBottom: "25px", marginLeft: "20px", color: 'text.secondary', fontWeight: "500", display: "flex", alignItems: "center", gap: "10px"}}>
            <SiMaterialui style={{ fontSize: "25px", color: "#007FFF"}} />MaterialUI
          </Typography>

          <Typography  sx={{marginTop:"20px",marginBottom: "25px", marginLeft: "20px", color: 'text.secondary', fontWeight: "500", display: "flex", alignItems: "center", gap: "10px"}}>
            <SiReactrouter style={{ fontSize: "25px", color: "#C9021A"}} />React Router
          </Typography>

          <Typography  sx={{marginTop:"20px",marginBottom: "25px", marginLeft: "20px", color: 'text.secondary', fontWeight: "500", display: "flex", alignItems: "center", gap: "10px"}}>
            <FaGitAlt style={{ fontSize: "25px", color: "#E84D31" }} />Git
          </Typography>

          <Typography  sx={{marginTop:"20px",marginBottom: "25px", marginLeft: "20px", color: 'text.secondary', fontWeight: "500", display: "flex", alignItems: "center", gap: "10px"}}>
            <SiCss3 style={{ fontSize: "25px", color: "#007FFF" }} />BEM CSS
          </Typography>
    

        

      </TabPanel>
      <TabPanel value={value} index={1}>

      <Typography component="p" sx={{ fontSize: '12px', fontWeight: '700', marginTop: "15px", color: 'text.secondary' }} >Essa sessão é destinada ao registro de erros e dificuldades encontradas durante o desenvolvimento do projeto.</Typography>

      <Typography sx={{fontSize: "18px", fontWeight: "bold", marginTop: "25px", marginBottom: "10px" }} >#Componente de status</Typography>

        <Typography sx={{fontSize: "16px", fontWeight: "500", marginTop: "20px", marginBottom: "10px", marginLeft: "10px"}} >Descrição</Typography>

          <Typography sx={{fontSize: "14px", fontWeight: "500", marginLeft: "20px", color:"text.secondary"}} >Ao clicar no botão de expandir de um dos componentes , o conteúdo de ambos era expandido.</Typography>

        <Typography sx={{fontSize: "16px", fontWeight: "500", marginTop: "10px", marginBottom: "10px", marginLeft: "10px"}} >Por que isso ocorreu?</Typography>

          <Typography sx={{fontSize: "14px", fontWeight: "500", marginLeft: "20px", color:"text.secondary"}}>Comportamento padrão componente BOX do MaterialUI.</Typography>

        <Typography sx={{fontSize: "16px", fontWeight: "500", marginTop: "10px", marginBottom: "10px", marginLeft: "10px"}}>Solução</Typography>

          <Typography sx={{fontSize: "14px", fontWeight: "500", marginLeft: "20px", color:"text.secondary"}}>Utilizar o componente Container para encapsular os dois cards;</Typography>
          <Typography sx={{fontSize: "14px", fontWeight: "500", marginLeft: "20px", marginBottom: "40px", color:"text.secondary"}}>Utilizar o componente BOX ou uma div para encapsular cada um dos cartões, evitando assim que ao expandir um, a altura do outro permaneça inalterada.</Typography>
          <hr/>

      <Typography sx={{fontSize: "18px", fontWeight: "bold", marginTop: "40px", marginBottom: "10px"}} >#Estilo condicional página ativa</Typography>

        <Typography sx={{fontSize: "16px", fontWeight: "500", marginTop: "20px", marginBottom: "10px", marginLeft: "10px"}} >Descrição</Typography>

          <Typography sx={{fontSize: "14px", fontWeight: "500", marginLeft: "20px", color:"text.secondary"}} >No evento de mudança de página, o botão deveria mudar de estilo sinalizando qual página estava ativa no momento. Ao utilizar o componente Button do MaterialUI, não coseguimos implementar essa funcionalidade.</Typography>

        <Typography sx={{fontSize: "16px", fontWeight: "500", marginTop: "10px", marginBottom: "10px", marginLeft: "10px"}} >Por que isso ocorreu?</Typography>

          <Typography sx={{fontSize: "14px", fontWeight: "500", marginLeft: "20px", color:"text.secondary"}}>Ao executar uma função toggle em evento do componente da biblioteca, a aplicação não funcionava corretamente.</Typography>

        <Typography sx={{fontSize: "16px", fontWeight: "500", marginTop: "10px", marginBottom: "10px", marginLeft: "10px"}}>Solução</Typography>

          <Typography sx={{fontSize: "14px", fontWeight: "500", marginLeft: "20px", marginBottom: '25px', color:"text.secondary"}}> Seguimos a decisão de não utilizar o componente Button MaterialUI, e sim um clone do mesmo, implementando o estilo do componente da biblioteca no componente Link, que realiza a mudança de página, sendo possível executar uma função que remove/adiciona a classe CSS com estilos.</Typography>
          
      </TabPanel>
    </Box>
  );
}