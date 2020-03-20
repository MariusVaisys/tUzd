import React, { Component, Fragment } from 'react'
import ProductListItem from './ProductListItem'
import { Table } from 'semantic-ui-react'
import ProductListHeader from './ProductListHeader'

class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <Table celled >
                    <Table.Header>
                        <ProductListHeader />
                    </Table.Header>
                    <Table.Body>
                    
                        {this.props.products.map(product => (
                        <ProductListItem 
                        key={product.id} 
                        product={product} 
                    />
                ))}
                </Table.Body>
                </Table>       
        
            </Fragment>
        )
    }
}

export default ProductList;
