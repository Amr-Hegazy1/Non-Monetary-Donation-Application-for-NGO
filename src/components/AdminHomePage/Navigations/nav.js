import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { UseResponsive, UseWidth } from '../use-responsive';
import List from '@mui/material/List';

import { Account } from '../account';
import Logo from '../logo';
import Scrollbar from '../scrollbar';

import { NAV } from './config-layout';
import NavConfig from './config-navigation';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {


  const upLg = UseResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: '#602b37',
      }}
    >
      <Avatar src={Account.photoURL} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2" sx={{color:'white'}}>{Account.displayName} </Typography>

        <Typography variant="body2" sx={{ color: 'white' }}>
          {Account.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {NavConfig.map((item) => (
        <NavItem key={item.title} item={item} color={item.color} icon={item.icon}/>
      ))}
    </Stack>
  );

  
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          color: '#602b37'
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4 }} />

      {renderAccount}

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />

      
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------
function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (item.subMenu) {
      setOpen(!open);
    } else {
      navigate(item.path);
    }
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>
        <Box component="span">{item.title}</Box>
        {item.subMenu && (open ? <ExpandMoreIcon /> : <NavigateNextIcon />)}
      </ListItemButton>
      {item.subMenu && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subMenu.map((subItem, index) => (
              <NavItem key={index} item={subItem} />
            ))}
          </List>
        </Collapse>
      )}
    </List>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
