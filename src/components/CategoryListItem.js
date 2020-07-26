import React, {useContext} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CategoryContext from '../context/Category/CategoryContext';

const CategoryListItem = (props) => {
    const categoryContext = useContext(CategoryContext);
    const {getCategory, toggleShowDeleteDialog, editCategory} = categoryContext;
    const handleDeleteCategory = async(id) => {
        await getCategory(id);
        await toggleShowDeleteDialog(true);
    }
    return (
        <Paper>
            <ListItem style={{borderLeft: `1em solid ${props.category.color}`}} className={props.listItemStyle}>
                <ListItemText primary={props.category.name} secondary={props.category.description} />
                <ListItemSecondaryAction>
                    <IconButton color='primary' onClick={e => editCategory({id: props.category.id, name: props.category.name, description: props.category.description, color: props.category.color})}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color='secondary' onClick={e => handleDeleteCategory(props.category.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
    )
}
export default CategoryListItem