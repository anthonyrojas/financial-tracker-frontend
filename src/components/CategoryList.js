import React, {useContext} from 'react'
import CategoryContext from '../context/Category/CategoryContext';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress'
import CategoryListItem from './CategoryListItem';
import {makeStyles} from '@material-ui/styles'
import CategoryConfirmDeleteDialog from './CategoryConfirmDeleteDialog';

const useStyles = makeStyles((theme) => ({
    listItem: {
        marginTop: theme.spacing(1)
    }
}))

const CategoryList = (props) => {
    const classes = useStyles();
    const categoryContext = useContext(CategoryContext);
    const {categories, loading} = categoryContext;

    if(loading){
        return (
            <CircularProgress />
        );
    }else{
        return (
            <React.Fragment>
                <List>
                    {categories.map(category => (
                        <CategoryListItem listItemStyle={classes.listItem} key={category.id} category={category} />
                    ))}
                </List>
                <CategoryConfirmDeleteDialog />
            </React.Fragment>
        )
    }
}
export default CategoryList