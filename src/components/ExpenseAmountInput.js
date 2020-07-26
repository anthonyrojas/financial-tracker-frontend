import React, {useContext} from 'react';
import ExpenseContext from '../context/ExpenseEntry/ExpenseContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { isUndefinedOrNullOrEmpty } from '../helpers';

const ExpenseAmountInput = (props) => {
    const expenseContext = useContext(ExpenseContext);
    const {amount, changeExpenseAmount, errors, errorExists} = expenseContext;
    const classes = props.classes;
    return (
        <Grid item xs={12} md={10}>
            <Paper className={classes.root} elevation={4}>
                <FormControl margin='none' fullWidth className={classes.formControl} error={!isUndefinedOrNullOrEmpty(errors.amount)}>
                    <InputLabel htmlFor='expense-amount-input'>
                        Expense Amount
                    </InputLabel>
                    <InputBase 
                        id='expense-amount-input'
                        className={classes.inputBaseRoot}
                        fullWidth
                        inputProps={{'aria-label': 'input amount'}}
                        onChange={e => changeExpenseAmount(e.target.value)}
                        value={amount}
                        required
                        type='number'
                    />
                </FormControl>
            </Paper>
            {
                errorExists ?
                <FormHelperText error={true}>{errors.amount}</FormHelperText>
                :
                null
            }
        </Grid>
    )
}
export default ExpenseAmountInput