import React, {useReducer} from 'react';
import axios from 'axios';
import ExpenseContext from './ExpenseContext';
import ExpenseReducer from './ExpenseReducer';
import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
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
    ERROR_EXPENSE,
    CANCEL_EDIT_EXPENSE,
    TOGGLE_CUD_LOAD_EXPENSE
} from '../../types';
import IsValidExpense from '../../validators/IsValidExpense';

const ExpenseState = props => {
    const initialState = {
        expenses: [],
        expense: {},
        editing: false,
        cudLoading: false, //create, update, delete loading
        loading: false,
        categoryId: '',
        expenseDate: new Date(),
        note: '',
        amount: 0,
        business: '',
        location: '',
        errors: {},
        errorExists: false,
    }
    const apiUri = `${process.env.REACT_APP_API_URI}/expense-entry`;
    const apiKey = process.env.REACT_APP_API_KEY;
    const client = axios.create({
        baseURL: apiUri,
        headers: {
            'x-api-key': apiKey
        }
    });
    const [state, dispatch] = useReducer(ExpenseReducer, initialState);

    const changeExpenseCategoryId = async(data) => {
        dispatch({
            type: CHANGE_EXPENSE_CATEGORY,
            payload: data
        });
    }
    const changeExpenseDate = async(data) => {
        dispatch({
            type: CHANGE_EXPENSE_DATE,
            payload: data
        })
    }
    const changeExpenseNote = async(data) => {
        dispatch({
            type: CHANGE_EXPENSE_NOTE,
            payload: data
        })
    }
    const changeExpenseAmount = async(data) => {
        dispatch({
            type: CHANGE_EXPENSE_AMOUNT,
            payload: data
        })
    }
    const changeExpenseBusiness = async(data) => {
        dispatch({
            type: CHANGE_EXPENSE_BUSINESS,
            payload: data
        })
    }
    const changeExpenseLocation = async(data) =>{
        dispatch({
            type: CHANGE_EXPENSE_LOCATION,
            payload: data
        })
    }
    const getExpenses = async() => {
        toggleLoadingExpense(true);
        const res = await client.get('');
        dispatch({
            type: GET_EXPENSES,
            payload: res.data
        });
    }
    const getExpense = async(id) => {
        toggleLoadingExpense(true);
        const res = await client.get(`/${id}`);
        dispatch({
            type: GET_EXPENSE,
            payload: res.data
        });
    }
    const deleteExpense = async(id) => {
        toggleCudLoadingExpense(true)
        const res = await client.delete(`/${id}`);
        dispatch({
            type: DELETE_EXPENSE,
            payload: id
        })
    }
    const addExpense = async(expense) => {
        toggleCudLoadingExpense(true)
        const validator = IsValidExpense(expense);
        if(validator.errorExists){
            dispatch({
                type: ERROR_EXPENSE,
                payload: validator.errors
            });
        }
        else{
            const res = await client.post('', expense);
            dispatch({
                type: ADD_EXPENSE,
                payload: res.data
            })
        }
    }
    const updateExpense = async(expense) => {
        toggleCudLoadingExpense(true);
        const res = await client.put(`/${expense.id}`, expense);
        dispatch({
            type: UPDATE_EXPENSE,
            payload: res.data
        })
    }
    const toggleLoadingExpense = async(loading) => {
        dispatch({
            type: TOGGLE_LOAD_EXPENSE,
            payload: loading
        });
    }
    const toggleCudLoadingExpense = async(loading) => {
        dispatch({
            type: TOGGLE_CUD_LOAD_EXPENSE,
            payload: loading
        })
    }
    const editExpense = async(data) => {
        dispatch({
            type: EDIT_EXPENSE,
            payload: data
        })
    }
    const cancelEditExpense = async(data) => {
        dispatch({
            type: CANCEL_EDIT_EXPENSE,
            payload: data
        })
    }

    return(
        <ExpenseContext.Provider
            value={{
                expenses: state.expenses,
                expense: state.expense,
                editing: state.editing,
                loading: state.loading,
                categoryId: state.categoryId,
                expenseDate: state.expenseDate,
                note: state.note,
                amount: state.amount,
                business: state.business,
                location: state.location,
                errors: state.errors,
                errorExists: state.errorExists,
                cudLoading: state.cudLoading,
                getExpenses,
                getExpense,
                deleteExpense,
                updateExpense,
                addExpense,
                changeExpenseAmount,
                changeExpenseBusiness,
                changeExpenseCategoryId,
                changeExpenseDate,
                changeExpenseLocation,
                changeExpenseNote,
                toggleLoadingExpense,
                editExpense,
                cancelEditExpense,
                toggleCudLoadingExpense
            }}
        >
            {props.children}
        </ExpenseContext.Provider>
    )
}
export default ExpenseState;