import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import cuid from 'cuid';

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
        active: '',

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
        active: '',

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
        active: '',

    }
]

 class ProductDashboard extends Component {
     state = {
         products: productsFromDashboard,
         isOpen: false,
         selectedProduct: null
     };

     handleCreateFormOpen = () => {
        this.setState({
          isOpen:true,
          selectedEvent: null
        })
      }

      handleFormCancel =() => {
        this.setState({
          isOpen: false
        })
      }      

      handleCreateProduct = (newProduct) => {
         newProduct.id = cuid();           
         this.setState(({products}) => ({
             products: [...products, newProduct],
             isOpen: false
         }))
      }

      handleSelectProduct = (product) => {
          this.setState({
              selectedProduct: product,
              isOpen: true
          })
      }

      handleUpdateProduct = (updatedProduct) => {
        this.setState(({products}) => ({
            products: products.map(product => {
                if (product.id === updatedProduct.id) {
                    return {...updatedProduct}
                } else {
                    return product
                }
            }),
            isOpen: false,
            selectedProduct: null
        }))  
      }

      handleDeleteProduct = (id) => {
        this.setState(({products}) => ({
            products: products.filter(p => p.id !==id)
        }))
      }



    render() {
        const {products, isOpen, selectedProduct} = this.state;
        return (
            <Grid>
                <Grid.Column width={12}>
                    <ProductList 
                        products={products} 
                        selectProduct={this.handleSelectProduct}
                        deleteProduct={this.handleDeleteProduct}
                        updatedProduct={this.handleUpdateProduct}
                        />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button 
                    onClick={this.handleCreateFormOpen} 
                    positive content='Add Product' />
                    {isOpen && <ProductForm 
                    key={selectedProduct ? selectedProduct.id : 0}
                    updatedProduct={this.handleUpdateProduct}
                    selectedProduct={selectedProduct}
                    createProduct={this.handleCreateProduct}
                    cancelFormOpen={this.handleFormCancel}
                    />}
                    
                </Grid.Column>
            </Grid>
        )
    }
}

export default ProductDashboard;
