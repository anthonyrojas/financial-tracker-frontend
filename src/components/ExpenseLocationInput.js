import React, {useContext} from 'react';
import ExpenseContext from '../context/ExpenseEntry/ExpenseContext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const ExpenseLocationInput = (props) => {
    const classes = props.classes;
    const expenseContext = useContext(ExpenseContext);
    const {location, changeExpenseLocation} = expenseContext
    return (
        <Grid item xs={12} md={8} lg={5}>
            <Paper className={classes.root} elevation={4}>
                <FormControl fullWidth margin='none' className={classes.FormControl}>
                    <InputLabel htmlFor='expense-location-input'>
                        Location
                    </InputLabel>
                    <InputBase 
                        id='expense-location-input'
                        value={location}
                        onChange={e => changeExpenseLocation(e.target.value)}
                        fullWidth
                        className={classes.inputBaseRoot}
                        inputProps={{'aria-label': 'location input'}}
                    />
                </FormControl>
            </Paper>
        </Grid>
    )
}
export default ExpenseLocationInput;