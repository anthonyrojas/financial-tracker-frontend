import React, {useContext, useEffect, forwardRef} from 'react';
import '../styles.css';
import MaterialTable, {MTableCell} from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress'
import ExpenseContext from '../context/ExpenseEntry/ExpenseContext';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DateFnsUtils from '@date-io/date-fns';

const ExpensesTable = (props) => {
    const expenseContext = useContext(ExpenseContext);
    const {loading, getExpenses, expenses, cudLoading, updateExpense, deleteExpense} = expenseContext;
    const categoryLookups = {}
    const categoryColorLookups = {}
    props.categories.forEach((category) => {
        categoryLookups[`${category.id}`] = category.name;
        categoryColorLookups[`${category.id}`] = category.color;
    })
    const columns = [
        {
            title: 'Category', 
            field: 'categoryId',
            lookup: {
                ...categoryLookups
            },
            render: rowData => (<span className='expense-category-text'>{categoryLookups[rowData.categoryId]}</span>)
        },
        {
            title: 'Expense Date',
            field: 'expenseDate',
            type: 'date',
            editComponent: props => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        InputProps={{
                            style: {
                                fontSize: 13
                            }
                        }}
                        format='M/dd/yyyy'
                        value={props.value}
                        onChange={date => props.onChange(date)}
                    />
                </MuiPickersUtilsProvider>
            )
        },
        {
            title: 'Note',
            field: 'note'
        },
        {
            title: 'Amount',
            field: 'amount',
            type: 'numeric'
        },
        {
            title: 'Business',
            field: 'business'
        },
        {
            title: 'Location',
            field: 'location'
        }
    ];
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
    useEffect(() => {
        getExpenses();
        // es-lint-disable-next-line
    }, []);
    if(loading) {
        return <CircularProgress />
    }else{
        return(
            <>
            {
                cudLoading ?
                <LinearProgress color='primary' />
                :
                null
            }
            <MaterialTable
                title='Expenses'
                style={{fontFamily: 'Roboto'}}
                columns={columns}
                data={expenses}
                icons={tableIcons}
                options={{
                    headerStyle: {
                        backgroundColor: '#111',
                        color: '#FFF'
                    }
                }}
                components={{
                    Cell: props => (
                        <MTableCell
                            style={{
                                backgroundColor: `${
                                    props.columnDef.title === 'Category'
                                    ?
                                    categoryColorLookups[props.rowData.categoryId]
                                    :
                                    null
                                }`
                            }}
                            {...props}
                        />
                    )
                }}
                editable={{
                    onRowUpdate: (updated, old) => 
                        new Promise((resolve, reject) => {
                            updateExpense(updated);
                            resolve();
                        }),
                    onRowDelete: (expense) => 
                        new Promise((resolve, reject) => {
                            deleteExpense(expense.id);
                            resolve();
                        })
                }}
            />
            </>
        )
    }
}
export default ExpensesTable;