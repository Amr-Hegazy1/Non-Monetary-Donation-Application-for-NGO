import { React, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Scrollbar from './scrollbar';
import Logo from './logo';
import { NAV } from './Navigations/config-layout';
import { Account } from './account';
import NavConfig from './Navigations/config-navigation';
import { UseResponsive } from './use-responsive';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from './Navigations/header';
import Toolbar from '@mui/material/Toolbar';







export default function AdminSideNav() {


    const [navItems, setNavItems] = useState(NavConfig);

    const [currentItem, setCurrentItem] = useState(NavConfig[0]);


    const changeItem = (event, item) => {
        event.preventDefault();
        navItems[currentItem.index].active = false;
        navItems[item.index].active = true;
        item.active = true;
        setCurrentItem(item);
        setNavItems([...navItems]);
    }





    const upLg = UseResponsive('up', 'lg');

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
                <Typography variant="subtitle2" sx={{ color: 'white' }}>{Account.displayName} </Typography>

                <Typography variant="body2" sx={{ color: 'white' }}>
                    {Account.role}
                </Typography>
            </Box>
        </Box>
    );

    const renderMenu = (
        <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
            {navItems.map((item) => (
                (item.subMenu) ? <NavItem key={item.title} item={item} color={item.color} icon={item.icon} changeItem={changeItem} /> : <a href={item.path} onClick={(e) => changeItem(e, item)}><NavItem key={item.title} item={item} color={item.color} icon={item.icon} changeItem={changeItem} /></a>
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

                display: 'flex'
            }}
        >
            <Header />
            <Drawer
                open={true}
                variant='persistent'
                anchor='left'
                sx={{
                    width: NAV.WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: NAV.WIDTH,
                        boxSizing: 'border-box',
                    },
                }}
            >
                {renderContent}
            </Drawer>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />

                {currentItem.element}
            </Box>

        </Box>
    )

}

function NavItem({ item , changeItem }) {
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        
        if (item.subMenu) {
            e.preventDefault();
            setOpen(!open);
        } 

    };

    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
                    {item.icon}
                </Box>
                <Box component="span">{item.title}</Box>
                {item.subMenu && <ExpandMoreIcon />}
            </ListItemButton>
            {item.subMenu && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {item.subMenu.map((subItem, index) => (
                        <a href={subItem.path} onClick={(e) => changeItem(e, subItem)}>
                            <ListItemButton
                                key={index}
                                onClick={handleClick}
                                sx={{
                                    minHeight: 44,
                                    borderRadius: 0.75,
                                    color: '#602b37',
                                    textTransform: 'capitalize',
                                    fontWeight: 'fontWeightMedium',
                                    marginX: 2,
                                    ...({
                                        color: '#602b37',
                                        fontWeight: 'fontWeightMedium',
                                    }),
                                }}
                            >
                                <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
                                    {subItem.icon}
                                </Box>
                                <Box component="span">{subItem.title}</Box>
                            </ListItemButton>
                        </a>
                    ))}
                </Collapse>
            )}
        </div>
    );
}