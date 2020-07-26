import React from 'react';
import CategoryList from '../components/CategoryList';
import CategoryForm from '../components/CategoryForm';
import Typography from '@material-ui/core/Typography';
const Category = () => {
    return (
        <>
            <Typography align='center' color='textPrimary' variant='h2'>Categories</Typography>
            <CategoryList />
            <CategoryForm />
        </>
    )
}
export default Category;