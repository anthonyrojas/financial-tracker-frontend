import React from 'react'
import Typography from '@material-ui/core/Typography';
import ExpenseTable from '../components/ExpensesTable';
import ExpenseForm from '../components/ExpenseForm';
const Expense = (props) => {
    return (
        <>
            <Typography align='center' variant='h2' color='textPrimary'>
                Expenses                
            </Typography>
            <ExpenseForm categories={props.categories} />
            <ExpenseTable categories={props.categories} />
        </>
    )
}
export default Expense;