import React from 'react'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const Navigation = (props) => {
    return (
        <Drawer className={props.drawer} classes={{paper: props.drawerPaper}} anchor='left' variant='permanent'>
            <List className={props.list}>
                <ListItem className={props.logoListItem}>
                    <ListItemText
                        primary={<Typography variant='h6'>Financial Tracker</Typography>}
                    />
                </ListItem>
                <Divider variant='fullWidth' />
                <ListItem button component={Link} to='/'>
                    <ListItemText 
                        primary='Expenses'
                    />
                </ListItem>
                <Divider variant='fullWidth' />
                <ListItem button component={Link} to='/category'>
                    <ListItemText 
                        primary='Categories'
                    />
                </ListItem>
                <Divider variant='fullWidth'/>
            </List>
        </Drawer>
    )
}
export default Navigation;