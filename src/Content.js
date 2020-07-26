import React, {useContext, useEffect} from 'react';
import {
    Switch,
    Route
} from 'react-router-dom'
import Category from './pages/Category';
import Expense from './pages/Expense';
import CategoryContext from './context/Category/CategoryContext';
import CircularProgress from '@material-ui/core/CircularProgress';

const Content = () => {
    const categoryContext = useContext(CategoryContext);
    const {getCategories, categories, loading} = categoryContext;
    useEffect(()=>{
      getCategories();
      // es-lint-disable-next-line
    }, []);
    return (
        <>
        <Switch>
            <Route path='/' exact>
                {
                    loading ?
                    <CircularProgress color='primary' />
                    :
                    <Expense categories={categories} />
                }
            </Route>
            <Route path='/category'>
                <Category />
            </Route>
        </Switch>
        </>
    )
}
export default Content