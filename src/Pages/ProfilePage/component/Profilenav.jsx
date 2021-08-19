import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Posts from "./Posts";
import About from "./About";
import Freinds from "./Freinds";
import Photos from "./Photos";
import Archives from "./Archives";
import Videos from "./Videos";

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function SimpleTabs() {
 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white">
      <AppBar position="static bg-white">
        <Tabs value={value} onChange={handleChange} className="bg-white" aria-label="simple tabs example">
          <Tab className="bg-white text-black" label="Posts" {...a11yProps(0)} />
          <Tab className="bg-white text-black" label="About" {...a11yProps(1)} />
          <Tab className="bg-white text-black" label="Freinds" {...a11yProps(2)} />
          <Tab className="bg-white text-black" label="Photos" {...a11yProps(3)} />
          <Tab className="bg-white text-black" label="Story Archives" {...a11yProps(4)} />
          <Tab className="bg-white text-black" label="Video" {...a11yProps(5)} />
          {/* <Tab className="!bg-white" label="Item Three" {...a11yProps(6)} /> */}
          {/* <Tab className="!bg-white" label="Item Three" {...a11yProps(7)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <Posts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Freinds />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Photos />
      </TabPanel>
      <TabPanel value={value} index={4}>
       <Archives />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Videos />
      </TabPanel>
      {/* <TabPanel value={value} index={6}>
        Item Three
      </TabPanel> */}
      {/* <TabPanel value={value} index={7}>
        Item Three
      </TabPanel> */}
    </div>
  );
}
