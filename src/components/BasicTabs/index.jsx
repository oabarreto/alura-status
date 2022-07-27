import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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
    <Box sx={{ width: '100%', backgroundColor: '#ADB5BD', marginTop: '20px', borderRadius: '4px', paddingRight: '15px', paddingLeft: '15px'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<span style={{ display: 'flex', gap: '5px' }}><RemoveRedEyeIcon/><Typography>OVERVIEW</Typography></span>} {...a11yProps(0)} />
          <Tab label={<span style={{ display: 'flex', gap: '5px' }}><ErrorIcon/><Typography>Erros</Typography></span>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero reprehenderit eaque animi a laborum ex quidem architecto accusantium aspernatur omnis, nesciunt, nihil dolor voluptatibus, ipsum minus eligendi eos voluptates odit!

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem molestias, ducimus illo sed porro, doloremque provident fugit similique est officia aliquid pariatur labore nulla debitis asperiores aut, autem explicabo maiores.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus, dolores facilis cum officia quis? Molestias quis inventore, beatae qui non quasi eligendi dolorum laboriosam vero nam dolor sint? Quasi.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero modi, ipsa saepe totam a libero voluptatem maiores voluptatum velit quaerat qui deserunt iure est inventore aliquid doloremque molestiae consectetur placeat.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi impedit deleniti exercitationem id, odio, porro quasi cum non nesciunt doloremque nisi enim laboriosam, aspernatur ullam ab molestiae a aperiam minima.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente blanditiis quaerat libero commodi sit magnam soluta excepturi vitae fugit delectus! Cum, ea recusandae commodi ipsam molestias nihil placeat quis aliquam.
      </TabPanel>
    </Box>
  );
}