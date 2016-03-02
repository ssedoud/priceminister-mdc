import React from 'react';

import ProductListComponent from '../components/ProductListComponent';

class ProductListPage extends React.Component {
  render(){
    return  <div className="col-md-7">
               <ProductListComponent/>
            </div> ;
  }
}

export default ProductListPage;
