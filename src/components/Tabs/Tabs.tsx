import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
};

return (
  <Box sx={{ width: "100%" }}>
        <div className="child_2_of_transitions lg:flex  lg:flex-col sm:hidden mt-[20px] text-[16px] text-[#000] dark:text-[#fff]">
    <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="dark:bg-[#fff]">
                <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Primary" {...a11yProps(0)} />
        <Tab label="General" {...a11yProps(1)} />
        <Tab label="Requests" {...a11yProps(2)} />
      </Tabs>
    </Box>
      {/* <CustomTabPanel value={value} index={0}>
        Primary
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        General
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Requests
      </CustomTabPanel> */}
    </div>
  </Box>
);
}
