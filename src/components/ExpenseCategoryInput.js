import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputBase from '@material-ui/core/InputBase'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ExpenseContext from '../context/ExpenseEntry/ExpenseContext';
import { withStyles } from '@material-ui/core';
import {isUndefinedOrNullOrEmpty} from '../helpers'

const CustomSelect = withStyles((theme) => ({
    root: {
        'label + &': {
          marginTop: theme.spacing(3),
        },
        width: '100%'
    }
}))(InputBase);

const ExpenseCategoryInput = (props) => {
    const expenseContext = useContext(ExpenseContext);
    const {categoryId, changeExpenseCategoryId, errorExists, errors} = expenseContext;
    const classes = props.classes;
    return (
        <Grid item xs={12} md={8} lg={5}>
            <Paper className={classes.root} elevation={4}>
                <FormControl margin='none' className={classes.formControl} error={!isUndefinedOrNullOrEmpty(errors.categoryId)}>
                    <InputLabel htmlFor='category-select' id='category-select-label'>Category</InputLabel>
                    <Select
                        id='category-select'
                        className={classes.inputBaseRoot}
                        fullWidth
                        input={<CustomSelect />}
                        value={categoryId}
                        onChange={e => changeExpenseCategoryId(e.target.value)}
                    >
                        {
                            props.categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Paper>
            {
                errorExists ?
                <FormHelperText error={true}>{errors.categoryId}</FormHelperText>
                :
                null
            }
        </Grid>
    )
}
export default ExpenseCategoryInput;