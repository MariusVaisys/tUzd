import React, {Component, Fragment} from 'react';
import ProductDashboard from '../../features/product/ProductDashboard/ProductDashboard';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/NavBar/NavBar';
import { Route } from 'react-router-dom';
import HomePage from '../../features/Home/HomePage';
import ProductDetail from '../../features/product/ProductDetail/ProductDetail';
import ProductForm from '../../features/product/ProductForm/ProductForm';
import TestComponent from '../../features/testarea/TestComponent';


class App extends Component {
  render() {
  return (    
     
    <Fragment>    
      <NavBar />
      <Container className="main">
        <Route exact path='/' component={HomePage} />
        <Route path='/products' component={ProductDashboard} />
        <Route path='/products/:id' component={ProductDetail} />
        <Route path='/createProduct' component={ProductForm} />
        <Route path='/test' component={TestComponent} />
      </Container>       
    </Fragment>   
  );
  }
}

export default App;
