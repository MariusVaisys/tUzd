import React, { Component, Fragment } from 'react'
import ProductListItem from './ProductListItem'
import { Table } from 'semantic-ui-react'
import ProductListHeader from './ProductListHeader'

class ProductList extends Component {
    render() {
        const {products, selectProduct, deleteProduct, updatedProduct} = this.props;
        return (
            <Fragment>
                <Table celled >
                    <Table.Header>
                        <ProductListHeader />
                    </Table.Header>
                    <Table.Body>
                    
                        {products.map(product => (
                        <ProductListItem 
                        key={product.id} 
                        product={product} 
                        selectProduct={selectProduct}
                        updatedProduct={updatedProduct}
                        deleteProduct={deleteProduct}
                        
                    />
                ))}
                </Table.Body>
                </Table>       
        
            </Fragment>
        )
    }
}

export default ProductList;
