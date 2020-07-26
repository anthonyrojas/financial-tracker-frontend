import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import CategoryContext from '../context/Category/CategoryContext';
import FormHelperText from '@material-ui/core/FormHelperText';
import { isUndefinedOrNullOrEmpty } from '../helpers';

const CategoryDescriptonInput = (props) => {
    const categoryContext = useContext(CategoryContext);
    const {changeCategoryDescription, description, errorExists, errors} = categoryContext
    const classes = props.classes;
    return (
        <Grid item xs={12} lg={11}>
            <Paper className={classes.root} elevation={4}>
                <FormControl error={!isUndefinedOrNullOrEmpty(errors.description)} margin='none' className={classes.formControl}>
                    <InputLabel htmlFor='category-description-input'>
                        Category Description
                    </InputLabel>
                    <InputBase 
                        id='category-description-input'
                        value={description}
                        rowsMax={3}
                        fullWidth
                        multiline={true}
                        className={classes.inputBaseRoot}
                        inputProps={{'aria-label': 'description input'}}
                        onChange={e => changeCategoryDescription(e.target.value)}
                        required
                    />
                </FormControl>
            </Paper>
            {
                errorExists ?
                <FormHelperText error={true}>{errors.description}</FormHelperText>
                :
                null
            }
        </Grid>
    )
}
export default CategoryDescriptonInput