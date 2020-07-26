import {
    isUndefinedOrNullOrEmpty
} from '../helpers'

const IsValidExpense = (expense) => {
    let errors = {}
    let errorExists = false;
    if(isUndefinedOrNullOrEmpty(expense.categoryId)){
        errorExists = true;
        errors.categoryId = 'Expense category required.'
    }
    if(isUndefinedOrNullOrEmpty(expense.expenseDate)){
        errorExists = true;
        errors.expenseDate = 'Expense date is required.'
    }
    if(isUndefinedOrNullOrEmpty(expense.amount)){
        errorExists = true;
        errors.amount = 'Expense amount is required.';
    }
    return {errorExists, errors};
}
export default IsValidExpense