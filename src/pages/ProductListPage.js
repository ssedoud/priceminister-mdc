import React from 'react';

import ProductListComponent from '../components/ProductListComponent';
import ProductListPaginationComponent from '../components/productList/ProductListPaginationComponent';

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber : 1
    }
  }

  changePageNumber() {
    console.log("add number");
    this.setState({
      pageNumber : this.state.pageNumber + 1
    });
  }

  render(){
    console.log("ProductListPage  " + this.props.params.searchKeyword + ", " + this.state.pageNumber);
    return  <div className="col-md-7">
               <ProductListComponent pageNumber={this.state.pageNumber} keyword={this.props.params.searchKeyword}/>
               <ProductListPaginationComponent changePageNumber={this.changePageNumber.bind(this)} currentPageNumber={this.state.pageNumber}/>
            </div>;
  }
}

export default ProductListPage;
