import React, { useState } from 'react';
import ChatBox from './ChatBox';
import { List, AppBar, Tabs, Tab, Box, IconButton, Menu, MenuItem, Drawer, List as MUIList, ListItem as MUIListItem, ListItemIcon, ListItemText as MUIListItemText, Switch } from '@mui/material';
import { purple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SavedIcon from '@mui/icons-material/Bookmark';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsIcon from '@mui/icons-material/Settings';
import BugReportIcon from '@mui/icons-material/BugReport';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import UseApi from '../hooks/UseApi';



const ChatList = () => {
  const [tabValue, setTabValue] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { ChatData } = UseApi()

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuOpen(open);
  };

  var [height, setHeight] = React.useState(400)
  React.useEffect(() => {
    var head = document.getElementById('ChatHead').clientHeight
    setHeight(window.innerHeight - head)
  }, [])


  return (
      <div className="max-w-md mx-auto bg-gray-900 text-white">
        <AppBar id="ChatHead" position="static" style={{ backgroundColor: 'rgb(17 24 39 / var(--tw-bg-opacity))', paddingTop: '4px' }}>
          <Box className="flex justify-between items-center relative px-4 py-2">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <h1 className="text-xl absolute left-20 font-bold">Telegram</h1>
            <IconButton edge="end" color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
          <Tabs value={tabValue} onChange={handleTabChange} centered
            textColor="inherit"
            indicatorColor="primary"
            aria-label="primary tabs example"
            sx={{ '& .MuiTab-root.Mui-selected': { color: 'skyblue', }, '& .MuiTabs-indicator': { backgroundColor: 'skyblue' } }}>
            <Tab label="All" />
            <Tab label="Regulars" />
            <Tab label="Unread" />
            <Tab label="Personal" />
          </Tabs>
        </AppBar>
        <List style={{ overflowY: 'scroll', height: height + 'px' }}>
          {ChatData.map(chat => (<ChatBox key={chat.id} chat={chat} />))}
        </List>
        <Drawer
          anchor="left"
          open={menuOpen}
          onClose={toggleDrawer(false)}
        >
          <MenuList toggleDrawer={toggleDrawer} />
        </Drawer>
      </div>
  );
};

const MenuList = ({ toggleDrawer }) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <MUIList>
      <MUIListItem >
        <ListItemIcon><SavedIcon /></ListItemIcon>
        <MUIListItemText primary="Saved Messages" />
      </MUIListItem>
      <MUIListItem >
        <ListItemIcon><ContactsIcon /></ListItemIcon>
        <MUIListItemText primary="Contacts" />
      </MUIListItem>
      <MUIListItem >
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <MUIListItemText primary="Settings" />
      </MUIListItem>
      <MUIListItem>
        <ListItemIcon><DarkModeIcon /></ListItemIcon>
        <MUIListItemText primary="Night Mode" />
        <Switch />
      </MUIListItem>
      <MUIListItem >
        <ListItemIcon><BugReportIcon /></ListItemIcon>
        <MUIListItemText primary="Report a Bug" />
      </MUIListItem>
      <MUIListItem >
        <ListItemIcon><InstallMobileIcon /></ListItemIcon>
        <MUIListItemText primary="Install App" />
      </MUIListItem>
    </MUIList>
  </Box>
);

export default ChatList;