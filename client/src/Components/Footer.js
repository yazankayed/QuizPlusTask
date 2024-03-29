import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import '../Footer.css'; 



export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',position:"fixed",bottom:"0", left:"0", bgcolor: '#b0bec5' }}>
        <Tabs value={value} onChange={handleChange} centered>
        <Tab label={<Link className='footerLink' to="/analyize">Analyze</Link>} />
        <Tab label={<Link className='footerLink' to="/">List</Link>} />
        </Tabs>
    </Box>
    );
}
