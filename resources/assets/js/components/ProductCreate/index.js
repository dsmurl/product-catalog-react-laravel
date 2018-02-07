import React from 'react';

import { ProductForm, PRODUCT_FORM_MODES } from '../Forms/ProductForm';


class ProductCreate extends React.Component {
    render() {
        return (
            <div>
                <h2>You creating a product!</h2>
                <ProductForm
                    mode={PRODUCT_FORM_MODES.CREATE}/>
            </div>
        );
    }
}

export default ProductCreate;
