import React, { Component } from 'react'
import { Table, Checkbox, Button, Grid } from 'semantic-ui-react';

class ProductListItem extends Component {
    render() {
      const {product} = this.props;
        return (
          <Grid>
            <Grid.Column width={11}>
            <Table basic='very'>
             <Table.Header>
               <Table.Row>
                 <Table.HeaderCell>Name</Table.HeaderCell>
                 <Table.HeaderCell>EAN</Table.HeaderCell>
                 <Table.HeaderCell>Type</Table.HeaderCell>
                 <Table.HeaderCell>Weight</Table.HeaderCell>
                 <Table.HeaderCell>Color</Table.HeaderCell>
                 <Table.HeaderCell>Quantity</Table.HeaderCell>
                 <Table.HeaderCell>Price</Table.HeaderCell>
                 <Table.HeaderCell>Active</Table.HeaderCell>
               </Table.Row>
             </Table.Header>

             <Table.Body>
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
                
                
               </Table.Row>              
             </Table.Body>
             </Table>
            </Grid.Column>
            <Grid.Column width={5}>
            <Button.Group>
                  <Button >
                      VIEW
                 </Button>
                 <Button primary>
                     EDIT
                 </Button>
                 <Button negative>
                     DELETE
                 </Button>
                 </Button.Group>
            </Grid.Column>
          </Grid>       

        )
    }
}

export default ProductListItem;
