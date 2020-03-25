import React, { Component } from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item as={NavLink} to='/' header>
                    Talech Uzduotis
                </Menu.Item>
                <Menu.Item as={NavLink} to='/products' name='Products' />
                <Menu.Item as={NavLink} to='/test' name='Test' />
                <Menu.Item>
                    <Button as={Link} to='/createProduct' floated='right' positive inverted content="Create Product" />
                </Menu.Item>
                </Container>
                
            </Menu>
        )
    }
}

export default NavBar;
