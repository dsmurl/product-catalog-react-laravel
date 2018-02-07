import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createSelector} from 'reselect';
import RequestService from '../../utils/requestService';

import {
    storeProductList,
} from "../../actions/productFormActions";


class ProductList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const successFunc = (data) => {
            this.props.actions.storeProductList(data);  // Store list in redux
        };

        const failFunc = (error) => {
            console.log('Error when getting product list: ', error);
            // store error message in store.products.error
            // For screen display
        };

        RequestService.getRequest('/api/products', {}, {}, successFunc, failFunc);
    }

    render() {
        return (
            <div>
                <h2>Product list!</h2>
                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">

                        <div>
                            <div className="row">
                                <div className="col-xs-3">
                                    <div className="columnHeader">Title:</div>
                                </div>
                                <div className="col-xs-9">
                                    <div className="columnHeader">Description:</div>
                                </div>
                            </div>
                        </div>

                        {
                            this.props.products.productList.map(product => (
                                <div key={`product_${product.id}`}>
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <div>{product.title}</div>
                                        </div>
                                        <div className="col-xs-9">
                                            <div>{product.description}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        products: state.products,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            storeProductList: (list) => dispatch(storeProductList(list)),
        }
    }
}

ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductList;
