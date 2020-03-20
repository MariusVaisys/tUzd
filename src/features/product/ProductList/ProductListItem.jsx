import React, { Component } from 'react'
import { Table, Checkbox, Button } from 'semantic-ui-react';


class ProductListItem extends Component {
    render() {
      const {product} = this.props;
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
              active              
              size='mini'
              content='VIEW'
              />
              <Button               
              primary
              size='mini'
              content='EDIT'
              />
              <Button              
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
