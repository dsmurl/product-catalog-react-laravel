import Immutable from 'immutable';

import
{
    STORE_PRODUCT_LIST,
    CHANGE_PRODUCT,
    RESET_PRODUCT,
} from '../actions/productFormActions';

const productsInit = {
    productList: [],
    formTitle: "",
    formDescription: "",
    error: "",
};

export default function (state = productsInit, action) {

    const newData = Object.assign({}, state);  // Could be immutable but didn't have time

    switch (action.type) {
        case CHANGE_PRODUCT:
            const data = action.data;

            if (typeof data.title !== "undefined") newData.formTitle = data.title;
            if (typeof data.description !== "undefined") newData.formDescription = data.description;
            newData.error = (typeof data.error !== "undefined") ? data.error : '';

            return {
                ...newData,
            };

        case STORE_PRODUCT_LIST:
            newData.productList = action.productList;
            newData.error = '';

            return {
                ...newData
            };

        case RESET_PRODUCT:
            newData.formTitle = '';
            newData.formDescription = '';
            newData.error = '';

            return {
                ...newData,
            };

        default:
            return state;
    }
}
