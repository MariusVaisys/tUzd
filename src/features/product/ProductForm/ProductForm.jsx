import React, { Component } from 'react'
import { Segment, Form, Button, Checkbox } from 'semantic-ui-react';

class ProductForm extends Component {
    render() {
        return (
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder="Name" />
                    </Form.Field>
                    <Form.Field>
                        <label>EAN</label>
                        <input placeholder="EAN" />
                    </Form.Field>
                    <Form.Field>
                        <label>Type</label>
                        <input placeholder="Type" />
                    </Form.Field>
                    <Form.Field>
                        <label>Weight</label>
                        <input placeholder="Weight" />
                    </Form.Field>
                    <Form.Field>
                        <label>Color</label>
                        <input placeholder="Color" />
                    </Form.Field>
                    <Form.Field>
                        <label>Quantity</label>
                        <input placeholder="Color" />
                    </Form.Field>
                    <Form.Field>
                        <label>Price</label>
                        <input placeholder="Color" />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='Active' />
                    </Form.Field>
                    <Button positive type='submit'>
                        Save
                    </Button>
                    <Button type='button'>
                        Cancel
                    </Button>
                </Form>
            </Segment>
        )
    }
}

export default ProductForm;
