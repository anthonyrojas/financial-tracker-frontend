import React, {useContext} from 'react';
import ExpenseContext from '../context/ExpenseEntry/ExpenseContext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const ExpenseNoteInput = (props) => {
    const classes = props.classes;
    const expenseContext = useContext(ExpenseContext);
    const {note, changeExpenseNote} = expenseContext
    return (
        <Grid item xs={12} md={10}>
            <Paper className={classes.root} elevation={4}>
                <FormControl fullWidth margin='none' className={classes.formControl}>
                    <InputLabel htmlFor='expense-note-input'>
                        Note
                    </InputLabel>
                    <InputBase 
                        id='expense-note-input'
                        value={note}
                        onChange={e => changeExpenseNote(e.target.value)}
                        fullWidth
                        rowsMax={2}
                        multiline={true}
                        className={classes.inputBaseRoot}
                        inputProps={{'aria-label': 'note input'}}
                    />
                </FormControl>
            </Paper>
        </Grid>
    )
}
export default ExpenseNoteInput;