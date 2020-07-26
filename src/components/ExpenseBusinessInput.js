import React, {useContext} from 'react';
import ExpenseContext from '../context/ExpenseEntry/ExpenseContext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const ExpenseBusinessInput = (props) => {
    const classes = props.classes;
    const expenseContext = useContext(ExpenseContext);
    const {business, changeExpenseBusiness} = expenseContext
    return (
        <Grid item xs={12} md={8} lg={5}>
            <Paper className={classes.root} elevation={4}>
                <FormControl fullWidth margin='none' className={classes.formControl}>
                    <InputLabel htmlFor='expense-business-input'>
                        Business
                    </InputLabel>
                    <InputBase 
                        id='expense-business-input'
                        value={business}
                        onChange={e => changeExpenseBusiness(e.target.value)}
                        fullWidth
                        className={classes.inputBaseRoot}
                        inputProps={{'aria-label': 'business input'}}
                    />
                </FormControl>
            </Paper>
        </Grid>
    )
}
export default ExpenseBusinessInput;