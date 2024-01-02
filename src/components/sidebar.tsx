import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebarProvider } from '../sidebar.context';

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { selectedNavItem, setSelectedNavItem } = useSidebarProvider();

  const location = useLocation();
  const currentPathname = location.pathname;

  useEffect(() => {
    setSelectedNavItem(currentPathname.substring(1) === '' ? 'home' : currentPathname.substring(1));
  }, [currentPathname, setSelectedNavItem])

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }; 

  const handleItemClick = (itemName: string) => {
    setSelectedNavItem(itemName);
  };

  const getListItemStyle = (itemName: string): React.CSSProperties => {
    return {
      color: selectedNavItem === itemName ? '#000' : '',
      backgroundColor: selectedNavItem === itemName ? '#00ff89' : '',
    };
  };

  const listItemHoverStyle = {
    color: "#FFF",
    backgroundColor: "#373f3e", 
    '&:hover': {
      color: "#02231c",
      backgroundColor: "#00ff89",
    },
  };

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          <ListItem component={Link} to="/" sx={listItemHoverStyle}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/graphics" sx={listItemHoverStyle}>
            <ListItemText primary="Gráficos" />
          </ListItem>
          <ListItem component={Link} to="/bills" sx={listItemHoverStyle}>
            <ListItemText primary="Faturas" />
          </ListItem>
        </List>
      </Drawer>
    );
  }

  return (
    <div style={{ backgroundColor: "#373f3e", width: 'auto', flexShrink: 0, position: 'fixed', height: '100%' }}>
      <List style={{paddingTop: '0px'}}>
        <ListItem component={Link} to="/" 
            style={getListItemStyle("home")}
            sx={listItemHoverStyle} 
            onClick={() => handleItemClick("home")}
          >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/graphics"
            style={getListItemStyle("graphics")} 
            sx={listItemHoverStyle} 
            onClick={() => handleItemClick("graphics")}
          >
          <ListItemText primary="Gráficos" />
        </ListItem>
        <ListItem component={Link} to="/bills"
            style={getListItemStyle("bills")} 
            sx={listItemHoverStyle} 
            onClick={() => handleItemClick("bills")}
          >
          <ListItemText primary="Faturas" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
