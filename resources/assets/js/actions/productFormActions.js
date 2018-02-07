export const STORE_PRODUCT_LIST = 'productList/STORE';
export const CHANGE_PRODUCT = 'product/CHANGE';
export const RESET_PRODUCT = 'product/RESET';


export function fetchProduct(id = 0) {
    return {
        type: FETCH_PRODUCT,
        id,
    };
}

export function storeProductList(productList) {
    return {
        type: STORE_PRODUCT_LIST,
        productList,
    };
}

export function changeProduct(data = {}) {
    return {
        type: CHANGE_PRODUCT,
        data,
    };
}

export function resetProduct(data = {}) {
    return {
        type: RESET_PRODUCT,
        data,
    };
}
