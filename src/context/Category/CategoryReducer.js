import {
    ADD_CATEGORY,
    CANCEL_EDIT_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    GET_CATEGORIES,
    GET_CATEGORY,
    ERROR_CATEGORY,
    TOGGLE_LOAD_CATEGORY,
    UPDATE_CATEGORY,
    CHANGE_CATEGORY_COLOR,
    CHANGE_CATEGORY_DESCRIPTION,
    CHANGE_CATEGORY_NAME,
    SHOW_DELETE_CATEGORY_DIALOG
} from '../../types';
export default (state, action) => {
    switch(action.type) {
        case CHANGE_CATEGORY_COLOR: 
            return{
                ...state,
                color: action.payload
            }
        case CHANGE_CATEGORY_DESCRIPTION: 
            return {
                ...state,
                description: action.payload
            }
        case CHANGE_CATEGORY_NAME:
            return {
                ...state,
                name: action.payload
            }
        case ADD_CATEGORY:
            return{
                ...state,
                categories: [...state.categories, action.payload],
                loading: false,
                errorExists: false,
                errors: {}
            }
        case DELETE_CATEGORY:
            return{
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload.id),
                loading: false,
                errorExists: false,
                errors: {},
                showDeleteDialog: false
            }
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload,
                loading: false,
                errorExists: false,
                errors: {}
            }
        case GET_CATEGORY:
            return{
                ...state,
                category: action.payload,
                loading: false,
                errorExists: false,
                errors: {}
            }
        case TOGGLE_LOAD_CATEGORY:
            return{
                ...state, 
                loading: action.payload
            }
        case EDIT_CATEGORY:
            return{
                ...state,
                editing: true,
                category: {
                    id: action.payload.id
                },
                name: action.payload.name,
                description: action.payload.description,
                color: action.payload.color
            }
        case CANCEL_EDIT_CATEGORY:
            return {
                ...state,
                editing: false,
                category: {},
                name: '',
                description: '',
                color: '#FFF'
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((existingCategory) => existingCategory.id === action.payload.id ? action.payload : existingCategory),
                editing: false,
                loading: false,
                errorExists: false,
                errors: {},
                name: '',
                description: '',
                color: '#FFF'
            }
        case ERROR_CATEGORY:
            return {
                ...state,
                errors: action.payload,
                errorExists: true
            }
        case SHOW_DELETE_CATEGORY_DIALOG:
            return {
                ...state,
                showDeleteDialog: action.payload
            }
        default: return state
    }
}