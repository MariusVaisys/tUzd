import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class ProductListHeader extends Component {
    render() {
        return (
            
             
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
             
        )
    }
}

export default ProductListHeader;
