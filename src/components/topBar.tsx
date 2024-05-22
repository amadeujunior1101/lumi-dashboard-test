import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../colors';
import { getListItemStyle, listItemHoverStyle } from '../helpers/menuHover.helper';
import { sidebarListItems } from '../pages/configs/listsItems';
import { useSidebarProvider } from '../sidebar.context';

const TopBar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { selectedNavItem, setSelectedNavItem } = useSidebarProvider();


  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleItemClick = (itemName: string) => {
    setSelectedNavItem(itemName);
  };

  const gradientStyle = {
    background: `linear-gradient(319deg, #00ff89, #00d775 6%, #00b061 16%, #008b4d 27%, #00673a 37%, 
      #005632 47%, #00452a 57%, #003521 67%, #003020 77%, #002c1f 87%, #01271e 95%, #02231c)`,
  };

  return (
    <>
      <AppBar position="fixed" style={gradientStyle}>
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1, color: `${colors.white}`, fontFamily: 'inherit' }}>
            Dashboard Lumi - teste prático
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      {isMobile && ( 
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          variant={isMobile ? 'temporary' : 'permanent'}
        >
          <List style={{marginTop: '-8px'}}>
              {
                sidebarListItems.map(item=>{  
                  return(
                    <ListItem key={item.resourceName} component={Link} to={item.pathUrl} 
                        style={getListItemStyle(item.resourceName, selectedNavItem)}
                        sx={listItemHoverStyle} 
                        onClick={() => handleItemClick(item.resourceName)}
                      >
                      <ListItemText primary={item.titleName} />
                    </ListItem>
                )
                })
              }
          </List>
        </Drawer>
      )}
    </>
  );
};

export default TopBar;
