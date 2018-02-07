
/**
 *
 *
 *
 *      Const
 *
 *
 *
 */

const coreApiGetFetchOptions = {
    headers: {
        "content-type": 'application/json',
        // accept: '*/*',
    },
    method: 'GET',
};

const coreApiPostFetchOptions = {
    headers: {
        "content-type": 'application/json',
        accept: '*/*',
    },
    method: 'POST',
};

const coreApiPutFetchOptions = {
    headers: {
        "content-type": 'application/json',
        // accept: '*/*',
    },
    method: 'PUT',
};


/**
 *
 *
 *
 *    Basic Util calls
 *
 *
 *
 */

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const parseJSON = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response.json();
};

const buildQueryParamString = (queryParams) => {
    let paramChar = '?';
    let paramString = '';

    for (const [k, v] of Object.entries(queryParams)) {
        paramString = `${paramString}${paramChar}${k}=${v}`;
        paramChar = '&';
    }

    return paramString;
};

const baseFetchCall = (fullUrl, passedOptions, successFunc, errorFunc) => {

    passedOptions.requiredStatus = 'ok';

    Object.assign(passedOptions, { credentials: 'include' });

    return fetch(fullUrl, passedOptions)
        .then(parseJSON)
        .then((newData) => {
            // console.log('Call success: ', newData);

            if (successFunc) {
                successFunc(newData);
            }
            return newData;
        })
        .catch((err) => {
            // console.log('Call err: ', err);

            if (errorFunc) {
                errorFunc({err});
            }
        });
};

const getRequest = (url, queryParams = {}, passedOptions, successFunc, errorFunc) => {
    const paramString = buildQueryParamString(queryParams);

    let options = coreApiGetFetchOptions;
    Object.assign(options, passedOptions);

    return baseFetchCall(`${url}${paramString}`, options, successFunc, errorFunc);
};

const postRequest = (url, queryParams = {}, passedOptions, successFunc, errorFunc) => {
    const paramString = buildQueryParamString(queryParams);

    let options = coreApiPostFetchOptions;
    Object.assign(options, passedOptions);

    // console.log('POST call: ', `${url}${paramString}`, options);

    return baseFetchCall(`${url}${paramString}`, options, successFunc, errorFunc);
};

const putRequest = (url, queryParams = {}, passedOptions, successFunc, errorFunc) => {
    const paramString = buildQueryParamString(queryParams);

    let options = coreApiPutFetchOptions;
    Object.assign(options, passedOptions);

    // console.log('PUT call: ', `${url}${paramString}`, options);

    return baseFetchCall(`${url}${paramString}`, options, successFunc, errorFunc);
};

export default {
    putRequest,
    postRequest,
    getRequest,
    delay,
};
