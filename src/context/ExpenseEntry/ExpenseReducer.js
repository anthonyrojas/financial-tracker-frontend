import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
    CANCEL_EDIT_EXPENSE,
    CHANGE_EXPENSE_AMOUNT,
    CHANGE_EXPENSE_BUSINESS,
    CHANGE_EXPENSE_CATEGORY,
    CHANGE_EXPENSE_DATE,
    CHANGE_EXPENSE_LOCATION,
    CHANGE_EXPENSE_NOTE,
    DELETE_EXPENSE,
    GET_EXPENSE,
    GET_EXPENSES,
    TOGGLE_LOAD_EXPENSE,
    UPDATE_EXPENSE,
    TOGGLE_CUD_LOAD_EXPENSE,
    ERROR_EXPENSE
} from '../../types';

export default(state, action) => {
    switch(action.type){
        case TOGGLE_LOAD_EXPENSE:
            return{
                ...state,
                loading: action.payload
            }
        case CHANGE_EXPENSE_AMOUNT:
            return{
                ...state,
                amount: action.payload
            }
        case CHANGE_EXPENSE_BUSINESS:
            return{
                ...state,
                business: action.payload
            }
        case CHANGE_EXPENSE_CATEGORY: 
            return{
                ...state,
                categoryId: action.payload
            }
        case CHANGE_EXPENSE_DATE:
            return{
                ...state,
                expenseDate: action.payload
            }
        case CHANGE_EXPENSE_LOCATION:
            return{
                ...state,
                location: action.payload
            }
        case CHANGE_EXPENSE_NOTE:
            return{
                ...state,
                note: action.payload
            }
        case GET_EXPENSES:
            return{
                ...state,
                expenses: action.payload,
                loading: false
            }
        case GET_EXPENSE:
            return{
                ...state,
                expense: action.payload,
                loading: false
            }
        case ADD_EXPENSE:
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
                cudLoading: false,
                errors: {},
                errorExists: false,
                categoryId: '',
                expenseDate: new Date(),
                note: '',
                amount: 0,
                business: '',
                location: ''
            }
        case DELETE_EXPENSE:
            return{
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload),
                cudLoading: false,
                // errorExists: false,
                // errors: {}
            }
        case UPDATE_EXPENSE:
            return{
                ...state,
                expenses: state.expenses.map((existingExpense) => existingExpense.id === action.payload.id ? action.payload : existingExpense),
                cudLoading: false,
                editing: false,
                // errorExists: false,
                // errors: {},
                categoryId: '',
                expenseDate: new Date(),
                note: '',
                amount: 0,
                business: '',
                location: ''
            }
        case EDIT_EXPENSE:
            return{
                ...state,
                expense: {
                    id: action.payload.id
                },
                categoryId: action.payload.categoryId,
                expenseDate: action.payload.expenseDate,
                note: action.payload.note,
                amount: action.payload.amount,
                business: action.payload.business,
                location: action.payload.location,
                editing: true
            }
        case CANCEL_EDIT_EXPENSE:
            return{
                ...state,
                editing: false,
                category: {},
                categoryId: '',
                expenseDate: new Date(),
                note: '',
                amount: 0,
                business: '',
                location: ''
            }
        case TOGGLE_CUD_LOAD_EXPENSE:
            return{
                ...state,
                cudLoading: action.payload
            }
        case ERROR_EXPENSE:
            return{
                ...state,
                errorExists: true,
                errors: action.payload,
                cudLoading: false
            }
        default: return state
    }
}