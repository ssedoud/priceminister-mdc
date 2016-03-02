import React from 'react';

import ProductPageDetailComponent from '../components/ProductPageDetailComponent';

class ProductPage extends React.Component {
  render(){
    return  <ProductPageDetailComponent productId={this.props.params.productId} />;
  }
}

export default ProductPage;
