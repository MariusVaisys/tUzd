import React, {Component, Fragment} from 'react';
import ProductDashboard from '../../features/product/ProductDashboard/ProductDashboard';
import { Container } from 'semantic-ui-react';


class App extends Component {
  render() {
  return (     
    <Fragment>    
      <Container className="main">
      <ProductDashboard />
      </Container>       
    </Fragment>   
  );
  }
}

export default App;
