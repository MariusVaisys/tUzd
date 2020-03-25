import React, { Component } from 'react'
import { Table, Checkbox, Button } from 'semantic-ui-react';


class ProductListItem extends Component {
    render() {
      const {product, selectProduct, deleteProduct} = this.props;
        return (  
          
            <Table.Row>  
            
         <Table.Cell>{product.name}</Table.Cell>
         <Table.Cell>{product.ean}</Table.Cell>
         <Table.Cell>{product.type}</Table.Cell>
         <Table.Cell>{product.weight}</Table.Cell>
         <Table.Cell>{product.color}</Table.Cell>
         <Table.Cell>{product.quantity}</Table.Cell>
         <Table.Cell>{product.price}</Table.Cell>
         <Table.Cell>
              <Checkbox  />
          </Table.Cell>  
          <Table.Cell singleLine>
            <Button 
              onClick={() => selectProduct(product)}
              active              
              size='mini'
              content='VIEW'
              />
              <Button  
              onClick={() => selectProduct(product)}                         
              primary
              size='mini'
              content='EDIT'
              />
              <Button  
              onClick={() => deleteProduct(product.id)}            
              negative
              size='mini'
              content='DELETE'
              />
          </Table.Cell> 
          </Table.Row>
          
                

        )
    }
}

export default ProductListItem;
