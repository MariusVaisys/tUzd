import React, { Component } from 'react'
import { Segment, Form, Button, Checkbox } from 'semantic-ui-react';

class ProductForm extends Component {
    state = {
        name: '',
        ean: '',
        type: '',
        weight:'',
        color: '',
        quantity: '',
        price: '',
        active: ''
    };

    componentDidMount() {
        if (this.props.selectedProduct !== null) {
            this.setState({
                ...this.props.selectedProduct
            })
        }
    }

    handleFormSubmit = evt => {
        evt.preventDefault();
        if (this.state.id) {
            this.props.updatedProduct(this.state)
        } else {
            this.props.createProduct(this.state);
        }
    }

    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        });
    };

    render() {
        const {cancelFormOpen} = this.props;
        const {name, ean, type, weight, color, quantity, price, active} = this.state;
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <label>Name</label>
                        <input 
                        name='name'
                        onChange={this.handleInputChange}
                        value={name} 
                        placeholder="Name" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>EAN</label>
                        <input 
                        name='ean'
                        onChange={this.handleInputChange}
                        value={ean}
                        placeholder="EAN" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Type</label>
                        <input 
                        name='type'
                        onChange={this.handleInputChange}
                        value={type} 
                        placeholder="Type" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Weight</label>
                        <input 
                        name='weight'
                        onChange={this.handleInputChange}
                        value={weight} 
                        placeholder="Weight" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Color</label>
                        <input 
                        name='color'
                        onChange={this.handleInputChange}
                        value={color} 
                        placeholder="Color" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Quantity</label>
                        <input 
                        name='quantity'
                        onChange={this.handleInputChange}
                        value={quantity} 
                        placeholder="Quantity" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Price</label>
                        <input 
                        name='price'
                        onChange={this.handleInputChange}
                        value={price} 
                        placeholder="Price" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='Active' 
                        name='active'
                        onChange={this.handleInputChange}
                        value={active}
                        />
                    </Form.Field>
                    <Button positive type='submit'>
                        Save
                    </Button>
                    <Button onClick={cancelFormOpen} type='button'>
                        Cancel
                    </Button>
                </Form>
            </Segment>
        )
    }
}

export default ProductForm;
