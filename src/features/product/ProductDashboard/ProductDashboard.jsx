import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';

const productsFromDashboard = [
    {
        id:'1',
        name: 'kazkas',
        ean: '1212121212',
        type: 'fruit',
        weight: '45.2',
        color: 'red',
        quantity: '55',
        price: '45.5',
        active: true,

    },
    {
        id:'2',
        name: 'Test',
        ean: '1234567891234',
        type: 'Furniture',
        weight: '45.2',
        color: 'green',
        quantity: '5',
        price: '245.5',
        active: true,

    },
    {
        id:'3',
        name: 'Test2',
        ean: '1212121212',
        type: 'fruit',
        weight: '45.2',
        color: 'red',
        quantity: '55',
        price: '45.5',
        active: true,

    }
]

 class ProductDashboard extends Component {
     state = {
         products: productsFromDashboard,
         isOpen: false
     };

     handleCreateFormOpen = () => {
        this.setState({
          isOpen:true,
          selectedEvent: null
        })
      }

    render() {
        const {products, isOpen} = this.state;
        return (
            <Grid>
                <Grid.Column width={12}>
                    <ProductList products={products}/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button positive content='Add Product' />
                    {isOpen && <ProductForm />}
                    
                </Grid.Column>
            </Grid>
        )
    }
}

export default ProductDashboard;
