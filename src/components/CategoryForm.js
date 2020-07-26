import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CategoryContext from '../context/Category/CategoryContext';
import CategoryNameInput from './CategoryNameInput';
import CategoryColorInput from './CategoryColorInput';
import CategoryDescriptionInput from './CategoryDescriptionInput';
import Button from '@material-ui/core/Button'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       padding: '6px 4px',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     input: {
//       marginLeft: theme.spacing(1),
//       flex: 1,
//     }
// }));

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      borderRadius: '5em',
      padding: '0.1em 1.5em'
    },
    paper: {
        padding: '6px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
      margin: theme.spacing(1),
    },
    formControl: {
        // margin: theme.spacing(1),
        width: '100%'
    },
    inputBaseRoot: {
        'label + &': {
          marginTop: theme.spacing(3),
        },
        width: '100%'
    },
    center: {
        textAlign: 'center'
    }
  }));

const CategoryForm = (props) => {
    const categoryContext = useContext(CategoryContext);
    const {name, color, description, addCategory, updateCategory, editing, category, cancelEditCategory, loading} = categoryContext;
    const classes = useStyles();
    return (
        <Grid style={{padding: '1em 0'}} component='form' spacing={2} container direction='row' alignItems='center' justify='center'>
            <CategoryNameInput classes={classes} />
            <CategoryColorInput classes={classes} />
            <CategoryDescriptionInput classes={classes} />
            <Grid item xs={12} className={classes.center}>
                <Grid container direction='row' alignItems='center' justify='center' alignContent='center' spacing={2}>
                {
                    editing ? 
                    <>
                        {/* <Grid item xs={6}> */}
                            <Button disabled={loading} className={classes.margin} color='primary' variant='contained' onClick={e => updateCategory({id: category.id, name, color, description})}>
                                Update Category
                            </Button>
                        {/* </Grid>
                        <Grid item xs={6}> */}
                            <Button disabled={loading} className={classes.margin} color='secondary' variant='contained' onClick={e => cancelEditCategory()}>
                                Cancel Update
                            </Button>
                        {/* </Grid> */}
                    </>
                    :
                    <Grid item xs={6}>
                        <Button disabled={loading} color='primary' variant='contained' onClick={e => addCategory({name, color, description})}>
                            Add Category
                        </Button>
                    </Grid>
                }
                </Grid>                
            </Grid>
        </Grid>
    )
}
export default CategoryForm;