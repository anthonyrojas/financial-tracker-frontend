import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const MobileNavigation = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <React.Fragment>
            <AppBar position='fixed' color='primary'>
                <Toolbar>
                    <IconButton onClick={e => setOpenDrawer(!openDrawer)} edge='start'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6'>
                        Financial Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={openDrawer} onClose={e => setOpenDrawer(false)}>
                <List>
                    <ListItem>
                        <ListItemText 
                            primary='Categories'
                        />
                    </ListItem>
                    <Divider variant='fullWidth'/>
                    <ListItem>
                        <ListItemText 
                            primary='Expense Entries'
                        />
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )
}
export default MobileNavigation