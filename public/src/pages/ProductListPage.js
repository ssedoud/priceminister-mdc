import React from 'react';

import ProductListComponent from '../components/ProductListComponent';

class ProductListPage extends React.Component {
  render(){
    return  <div className="col-md-7">
               <ProductListComponent pageNumber="1" keyword={this.props.params.searchKeyword}/>
            </div> ;
  }
}

export default ProductListPage;
