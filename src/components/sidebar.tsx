import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../colors';
import { getListItemStyle, listItemHoverStyle } from '../helpers/menuHover.helper';
import { sidebarListItems } from '../pages/configs/listsItems';
import { useSidebarProvider } from '../sidebar.context';

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { selectedNavItem, setSelectedNavItem } = useSidebarProvider();

  const location = useLocation();
  const currentPathname = location.pathname;

  useEffect(() => {
    setSelectedNavItem(currentPathname.substring(1) === '' ? 'home' : currentPathname.substring(1));
  }, [currentPathname, setSelectedNavItem])

  const handleItemClick = (itemName: string) => {
    setSelectedNavItem(itemName);
  };

    if (!isMobile) {
      return (
        <div style={{ backgroundColor: `${colors.light_grey}` , width: 'auto', flexShrink: 0, position: 'fixed', height: '100%' }}>
          <List style={{paddingTop: '0px'}}>
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
        </div>
    );
  }
}

export { Sidebar };

