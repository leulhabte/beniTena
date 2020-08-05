import React from 'react';
import {Link} from 'react-router-dom'
import useStyles from '../Styling/styling';
import {Hidden, Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Divider, Badge} from '@material-ui/core';
import {Visibility, ExitToApp, Settings, Menu, NotificationsActive} from '@material-ui/icons';

const Drawers = ()=>{

    const classes = useStyles();
    const [mobileScreen, setMobileScreen] = React.useState(false);

    const hanleMobileScreen = ()=>{
        setMobileScreen(!mobileScreen);
    }

    const menuList = (
        <div>
            <Divider/>
            <List>
                <Box m={2}/>
                <Link className={classes.listText}  to='/view'>
                    <ListItem  className={classes.itemColour} button>
                        <ListItemIcon  className={classes.itemColour}><Visibility/></ListItemIcon>
                        <ListItemText>View Table</ListItemText>
                    </ListItem>
                </Link>
                <Box m={2}/>
                <Link className={classes.listText}  to='/edit'>
                    <ListItem className={classes.itemColour} button>
                        <ListItemIcon className={classes.itemColour}><Settings/></ListItemIcon>
                        <ListItemText>Manage Profile</ListItemText>
                    </ListItem> 
                </Link>
                
                <Box m={2}/>
                <ListItem className={classes.itemColour} button>
                    <ListItemIcon className={classes.itemColour}><ExitToApp/></ListItemIcon>
                    <ListItemText>Log out</ListItemText>
                </ListItem>
            </List>
        </div>
    );

    const menuHeader = (
        <div>
            <Box display='flex' justifyContent='center' p={2}>
                <Typography variant='h6' className={classes.itemHeder}>Beni-Tena</Typography>
            </Box>
        </div>
    );


    return(
        <div>
            <AppBar className={classes.appBar} display='flex'>
                <Toolbar>
                    <Menu className={classes.menuToggle} onClick={hanleMobileScreen}/>
                    <Box display='flex' justifyContent='center' justifySelf='center' flexGrow={1}>
                        <Typography variant='subtitle2' className={classes.menuItemColour}>Home</Typography>
                        <Box mx={4}/>
                        <Typography variant='subtitle2' className={classes.menuItemColour}>About Us</Typography>
                        <Box mx={4}/>
                        <Typography variant='subtitle2' className={classes.menuItemColour}>Contact Us</Typography>
                    </Box>
                    <Badge color='primary' badgeContent={3} max={999}>
                        <NotificationsActive color='action'/>
                    </Badge>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden mdUp>
                    <Drawer
                        open={mobileScreen}
                        onClose={hanleMobileScreen}
                        variant='temporary'
                        classes={{paper: classes.drawerPaper}}
                    >
                        {menuHeader}
                        {menuList}
                    </Drawer>
                </Hidden>

                <Hidden smDown>
                    <Drawer
                        open
                        variant='permanent'
                        classes={{paper: classes.drawerPaper}}
                        display='flex'
                    >
                        {menuHeader}
                        {menuList}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default Drawers;