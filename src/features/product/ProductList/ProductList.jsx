import React, { Component, Fragment } from 'react'
import ProductListItem from './ProductListItem'

class ProductList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.products.map(product => (
                    <ProductListItem 
                    key={product.id} 
                    product={product} 
                    />
                ))}                
            </Fragment>
        )
    }
}

export default ProductList;
