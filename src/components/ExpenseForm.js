import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExpenseContext from '../context/ExpenseEntry/ExpenseContext';
import ExpenseCategoryInput from './ExpenseCategoryInput';
import ExpenseDateInput from './ExpenseDateInput'
import ExpenseAmountInput from './ExpenseAmountInput';
import ExpenseNoteInput from './ExpenseNoteInput';
import ExpenseBusinessInput from './ExpenseBusinessInput';
import ExpenseLocationInput from './ExpenseLocationInput';

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

const ExpenseForm = (props) => { 
    const expenseContext = useContext(ExpenseContext);
    const {categoryId, expenseDate, amount, note, business, location, addExpense, cudLoading} = expenseContext;
    const classes = useStyles();
    return (
        <Grid container style={{padding: '1em 0'}} component='form' spacing={2} justify='center' alignContent='center' alignItems='center'>
            <ExpenseCategoryInput classes={classes} categories={props.categories} />
            <ExpenseDateInput classes={classes} />
            <ExpenseAmountInput classes={classes} />
            <ExpenseNoteInput classes={classes} />
            <ExpenseBusinessInput classes={classes} />
            <ExpenseLocationInput classes={classes} />
            <Grid item xs={12} className={classes.center}>
                <Button 
                    className={classes.margin} 
                    color='primary' 
                    variant='contained'
                    onClick={e => addExpense({categoryId, expenseDate, amount, note, business, location})}
                    disabled={cudLoading}
                >
                    Add Expense
                </Button>
            </Grid>
        </Grid>
    )
}
export default ExpenseForm;