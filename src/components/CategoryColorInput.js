import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import CustomColorPicker from './CustomColorPicker';
import CategoryContext from '../context/Category/CategoryContext';
import FormHelperText from '@material-ui/core/FormHelperText';
import { isUndefinedOrNullOrEmpty } from '../helpers';

const CategoryColorInput = (props) => {
    const categoryContext = useContext(CategoryContext);
    const {color, errorExists, errors}  = categoryContext
    const classes = props.classes;
    return (
    <React.Fragment>
        <Grid item xs={9} md={6} lg={5}>
            <Paper className={classes.root} elevation={4}>
                <FormControl error={!isUndefinedOrNullOrEmpty(errors.color)} margin='none' className={classes.formControl}>
                    <InputLabel htmlFor='category-color-input'>
                        Category Color
                    </InputLabel>
                    <InputBase
                        id='category-color-input'
                        fullWidth
                        className={classes.inputBaseRoot}
                        value={color}
                        inputProps={{'aria-label': 'input color'}}
                        required
                    />
                </FormControl>
            </Paper>
            {
                errorExists ?
                <FormHelperText error={true}>{errors.color}</FormHelperText>
                :
                null
            }
        </Grid>
        <Grid item xs={3} sm={2} lg={1}>
            <CustomColorPicker />
        </Grid>
    </React.Fragment>
    )
}
export default CategoryColorInput