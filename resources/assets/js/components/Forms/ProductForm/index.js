import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RequestService from '../../../utils/requestService';
import {withRouter} from "react-router-dom";


import {
    changeProduct,
    resetProduct,
} from "../../../actions/productFormActions";

const PRODUCT_FORM_MODES = {
    CREATE: "product_create_mode",
    EDIT: "product_edit_mode",
    VIEW: "product_view_mode",
};

class ProductForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.renderError = this.renderError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.props.actions.changeProduct({title: event.target.value});
    };

    handleDescriptionChange(event) {
        this.props.actions.changeProduct({description: event.target.value});
    };

    handleSubmit() {
        // print the form values to the console

        const postData = {
            "title": this.props.products.formTitle,
            "description": this.props.products.formDescription
        };

        const options = {
            body: JSON.stringify(postData),
        };

        const successFunc = (response) => {
            console.log('Saved product: ', response);
            this.props.actions.resetProduct();
            this.props.history.push("/productList");
        };

        const failFunc = (error) => {
            console.log('Error when saving product list: ', error.err.message);
            this.props.actions.changeProduct({error: error.err.message});
        };

        RequestService.postRequest('/api/products', {}, options, successFunc, failFunc);
    };

    renderError() {
        const error = this.props.products.error;

        if (error !== "") {
            return (
                <span className="error">
                    {error}
                </span>
            )
        }// Crappy inline style.  I know.  I was out of time.
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-xs-3">
                        <label htmlFor="title">Product Title: </label>
                    </div>
                    <div className="col-xs-3">
                        <input name="title" type="text" value={this.props.products.title}
                           onChange={this.handleTitleChange} />
                    </div>
                </div>
                <div className="row formRow">
                    <div className="col-xs-3">
                        <label htmlFor="description">Description: </label>
                    </div>
                    <div className="col-xs-3">
                        <textarea name="description"  value={this.props.products.description}
                           onChange={this.handleDescriptionChange} rows="4" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-3">
                        <input value="Add Product!" type="button" onClick={this.handleSubmit}/>
                    </div>
                </div>
                {this.renderError()}
            </form>
        );
    }
}

ProductForm.props = {
    mode: PropTypes.string,
    changeProduct: PropTypes.func,
    resetProduct: PropTypes.func,
};

ProductForm.defaultProps = {
    readOnly: PRODUCT_FORM_MODES.VIEW,
};


// /**   Make a selector   **/
// const mapStateToProps = createSelector(
//     [
//         state => {
//             console.log('mstp state: ', state);   // Couldn't get reselect working for some reason
//             state.getIn(['products']);
//         },
//     ],
//     (subState) => subState
// );


const mapStateToProps = state => {
    return {
        products: state.products,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            changeProduct: (data) => dispatch(changeProduct(data)),
            resetProduct: (data) => dispatch(resetProduct(data)),
        }
    }
}

ProductForm = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductForm));

export {ProductForm, PRODUCT_FORM_MODES}
