import React, {useContext} from 'react';
import CategoryContext from '../context/Category/CategoryContext';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const CategoryConfirmDeleteDialog = (props) => {
    const categoryContext = useContext(CategoryContext);
    const {category, deleteCategory, showDeleteDialog, toggleShowDeleteDialog} = categoryContext;
    return (
        <React.Fragment>
            <Dialog 
                open={showDeleteDialog} 
                onClose={e => toggleShowDeleteDialog(false)}
                aria-labelledby='confirm-delete-title' 
                aria-describedby="confirm-delete-description"
            >
                <DialogTitle id='confirm-delete-title'>
                    Confirm Delete
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='confirm-delete-description'>
                        Are you sure you want to delete this category: {category.name}?
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={e => deleteCategory(category.id)} color='secondary'>Delete</Button>
                        <Button onClick={e=>toggleShowDeleteDialog(false)} color='default'>Cancel</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default CategoryConfirmDeleteDialog;