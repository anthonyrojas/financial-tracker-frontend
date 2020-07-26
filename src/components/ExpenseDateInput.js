import React, {useContext} from 'react';
import ExpenseContext from '../context/ExpenseEntry/ExpenseContext';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import FormHelperText from '@material-ui/core/FormHelperText';
import { isUndefinedOrNullOrEmpty } from '../helpers';

const ExpenseDateInput = (props) => {
    const expenseContext = useContext(ExpenseContext);
    const {expenseDate, changeExpenseDate, errorExists, errors} = expenseContext
    return (
        <Grid item xs={12} md={8} lg={5}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Paper className={props.classes.root} elevation={4}>
                    <DatePicker 
                        error={!isUndefinedOrNullOrEmpty(errors.expenseDate)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        label='Expense Date'
                        InputProps={{
                            classes: {
                                root: props.classes.inputBaseRoot
                            },
                            disableUnderline: true
                        }}
                        format='M/dd/yyyy'
                        fullWidth={true}
                        value={expenseDate}
                        onChange={date => changeExpenseDate(date)}
                    />
                </Paper>
                {
                    errorExists ?
                    <FormHelperText error={true}>{errors.expenseDate}</FormHelperText>
                    :
                    null
                }
            </MuiPickersUtilsProvider>
        </Grid>
    )
}
export default ExpenseDateInput;