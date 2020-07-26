import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import CategoryContext from '../context/Category/CategoryContext'
import { isUndefinedOrNullOrEmpty } from '../helpers';

const CategoryNameInput = (props) => {
    const categoryContext = useContext(CategoryContext);
    const {name, changeCategoryName, errorExists, errors} = categoryContext
    const classes = props.classes;
    return (
        <Grid item xs={12} md={8} lg={5}>
            <Paper className={classes.root} elevation={4}>
                <FormControl error={!isUndefinedOrNullOrEmpty(errors.name)} margin='none' className={classes.formControl}>
                    <InputLabel htmlFor='category-name-input'>
                        Category Name
                    </InputLabel>
                    <InputBase
                        id='category-name-input'
                        className={classes.inputBaseRoot}
                        fullWidth
                        value={name}
                        inputProps={{'aria-label': 'input name'}}
                        onChange={e => changeCategoryName(e.target.value)}
                        required
                        />
                </FormControl>
            </Paper>
            {
                errorExists ?
                <FormHelperText error={true}>{errors.name}</FormHelperText>
                :
                null
            }
        </Grid>
    )
}
export default CategoryNameInput