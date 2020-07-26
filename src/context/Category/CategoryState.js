import React, {useReducer} from 'react';
import axios from 'axios';
import CategoryConext from './CategoryContext';
import CategoryReducer from './CategoryReducer';
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES,
    GET_CATEGORY,
    CANCEL_EDIT_CATEGORY,
    EDIT_CATEGORY,
    UPDATE_CATEGORY,
    TOGGLE_LOAD_CATEGORY,
    CHANGE_CATEGORY_COLOR,
    CHANGE_CATEGORY_DESCRIPTION,
    CHANGE_CATEGORY_NAME,
    ERROR_CATEGORY,
    SHOW_DELETE_CATEGORY_DIALOG,
    ERROR_EXPENSE
} from '../../types';
import IsValidCategory from '../../validators/IsValidCategory';

const CategoryState = props => {
    const initialState = {
        categories: [],
        category: {},
        editing: false,
        loading: false,
        name: '',
        color: '#FFF',
        description: '',
        errors:{},
        errorExists: false,
        showDeleteDialog: false
    }
    let apiUri = process.env.REACT_APP_API_URI;
    let apiKey = process.env.REACT_APP_API_KEY;
    const client = axios.create({baseURL: apiUri, headers: {
        'x-api-key': apiKey
    }});

    const [state, dispatch] = useReducer(CategoryReducer, initialState);

    const changeCategoryColor = async(data) => {
        dispatch({
            type: CHANGE_CATEGORY_COLOR,
            payload: data
        })
    }

    const changeCategoryDescription = async(data) => {
        dispatch({
            type: CHANGE_CATEGORY_DESCRIPTION,
            payload: data
        })
    }

    const changeCategoryName = async(data) => {
        dispatch({
            type: CHANGE_CATEGORY_NAME,
            payload: data
        })
    }

    const getCategories = async() => {
        toggleLoadingCategory();
        const res = await client.get('/category');
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data
        });
    }

    const getCategory = async(id) => {
        const res = await client.get(`/category/${id}`);
        dispatch({
            type: GET_CATEGORY,
            payload: res.data
        })
    }

    const deleteCategory = async(id) => {
        const res = await client.delete(`/category/${id}`);
        let payloadData = res.data;
        payloadData.id = id;
        dispatch({
            type: DELETE_CATEGORY,
            payload: payloadData
        });
    }

    const addCategory = async(category) => {
        const isValid = IsValidCategory(category);
        if(isValid.errorExists){
            dispatch({
                type: ERROR_CATEGORY,
                payload: isValid.errors
            })
        }else{
            const res = await client.post('/category', category);
            dispatch({
                type: ADD_CATEGORY,
                payload: res.data
            });
        }
    }

    const editCategory = async(data) => {
        dispatch({
            type: EDIT_CATEGORY,
            payload: data
        })
    }

    const cancelEditCategory = async() => {
        dispatch({
            type: CANCEL_EDIT_CATEGORY,
            payload: false
        })
    }

    const updateCategory = async(category) => {
        const isValid = IsValidCategory(category);
        if(isValid.errorExists){
            dispatch({
                type: ERROR_EXPENSE,
                payload: isValid.errors
            })
        }else{
            const res = await client.put(`/category/${category.id}`, category);
            const resCategory = res.data;
            resCategory.id = category.id;
            dispatch({
                type: UPDATE_CATEGORY,
                payload: resCategory
            });
        }
    }

    const toggleLoadingCategory = async(loading) => {
        dispatch({
            type: TOGGLE_LOAD_CATEGORY,
            payload: !loading
        })
    }

    const toggleShowDeleteDialog = async(display) => {
        dispatch({
            type: SHOW_DELETE_CATEGORY_DIALOG,
            payload: display
        })
    }

    return(
        <CategoryConext.Provider
            value={{
                categories: state.categories,
                category: state.category,
                editing: state.editing,
                loading: state.loading,
                color: state.color,
                description: state.description,
                name: state.name,
                errorExists: state.errorExists,
                errors: state.errors,
                showDeleteDialog: state.showDeleteDialog,
                getCategories,
                getCategory,
                deleteCategory,
                updateCategory,
                editCategory,
                cancelEditCategory,
                addCategory,
                toggleLoadingCategory,
                changeCategoryColor,
                changeCategoryDescription,
                changeCategoryName,
                toggleShowDeleteDialog
            }}
        >
            {props.children}
        </CategoryConext.Provider>
    )
}
export default CategoryState