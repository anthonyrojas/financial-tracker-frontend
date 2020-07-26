import {
    isUndefinedOrNullOrEmpty
} from '../helpers'

const IsValidCategory = (category) => {
    let errors = {}
    let errorExists = false;
    if(isUndefinedOrNullOrEmpty(category.name)){
        errorExists = true;
        errors.name = 'Category name is required.'
    }
    if(isUndefinedOrNullOrEmpty(category.description)){
        errorExists = true;
        errors.description = 'Category description is required.';
    }
    if(isUndefinedOrNullOrEmpty(category.color)){
        errorExists = true;
        errors.color = 'Category color is required.';
    }
    return {errorExists, errors};
}
export default IsValidCategory;